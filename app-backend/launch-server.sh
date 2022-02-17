#!/bin/bash

source ../dev-tools/scripts/_core-tools/_source.sh

FOLDER_BackupBackup=../.trash/data-backup-backup
FOLDER_Backup=../.trash/data-backup

firebaseEmulatorsPid=
watchPid=
proxyPid=
backupPid=

backupImpl() {
  logInfo "Backing up firebase..."
  [[ -e ${FOLDER_Backup} ]] && mv ${FOLDER_Backup} "${FOLDER_BackupBackup}"
  firebase emulators:export ${FOLDER_Backup}
  local result=$?
  [[ "${result}" == "0" ]] && [[ -e "${FOLDER_BackupBackup}" ]] && rm -rf "${FOLDER_BackupBackup}"

  logDebug "Backup DONE!"
}

backup() {
  while (true); do
    trap 'logWarning "Terminating Backup" && exit 0' SIGINT
    logDebug "waiting 120s for backup..."
    sleep 120s
    backupImpl
    trap - SIGINT
  done
}

runEmulators() {
  trap 'logWarning "Terminating Emulators"' SIGINT
  firebase emulators:start --export-on-exit --import=../.trash/data
  trap - SIGINT
}

runProxy() {
  trap 'logWarning "Terminating Proxy"' SIGINT
  tsc ./src/main/proxy.ts && node ./src/main/proxy.js
  trap - SIGINT
}

runWatch() {
  trap 'logWarning "Terminating Watch"' SIGINT
  tsc --watch
  trap - SIGINT
}

run() {
  runEmulators &
  firebaseEmulatorsPid=$!

  runProxy &
  proxyPid=$!

  runWatch &
  watchPid=$!

  backup &
  backupPid=$!

  sleep 10s
  logInfo "   backupPid: ${backupPid}"
  logInfo "emulatorsPid: ${firebaseEmulatorsPid}"
  logInfo "    watchPid: ${watchPid}"
  logInfo "    proxyPid: ${proxyPid}"
  logDebug
  logDebug "    running...."

  trap 'logWarning "Terminating server"' SIGINT
  wait
  trap - SIGINT

  trap 'logWarning "Backing up emulator"' SIGINT
  backupImpl
  trap - SIGINT

  logInfo "Server down!"
}

run

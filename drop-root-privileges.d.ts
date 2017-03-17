import {Logger} from 'pino'
export function dropRootPrivileges(permissions: {uid: string | number, gid: string | number}, log?: Logger): void
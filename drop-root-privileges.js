"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dropRootPrivileges(permissions, log) {
    let fname = 'dropRootPrivileges';
    if ((process.getuid() === 0) || (process.getgid() === 0)) {
        try {
            if (log)
                log.info({ fname, uid: process.getuid(), gid: process.getgid() });
            // TODO: remove cast, see http://stackoverflow.com/questions/42862895/typescript-overload-type-of-node-process-setuid-incompatible-with-union-issui
            process.setgid(permissions.gid);
            process.setuid(permissions.uid);
            if (log)
                log.info({ fname, uid: process.getuid(), gid: process.getgid() }, 'after dropping privileges');
        }
        catch (error) {
            if (log)
                log.fatal({ fname, error }, 'couldnt drop privileges, refusing to keep the process alive as root');
            process.exit(2);
        }
    }
    else {
        if (log)
            log.warn({ fname, uid: process.getuid(), gid: process.getgid() }, 'user is not root, so not dropping privileges');
    }
}
exports.dropRootPrivileges = dropRootPrivileges;

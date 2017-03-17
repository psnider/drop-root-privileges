# drop-root-privileges

Changes the user and group permissions for the caller (running as root).
Calls process.exit() if the permissions cannot be changed.

Use this to drop permissions for a server that was started with root privileges (in order to open up a privileged port).

# usage
```
let uid = 'myserveruser'
let gid = 'myservergroup'
dropRootPrivileges({uid, gid})
```

Optionally, you can add a [pino]()-compatible logger with:
```
import {Logger} from 'pino'
var log: Logger
dropRootPrivileges({uid, gid}, log)
```


# build
```
npm run build
```

# test
This has no tests yet.


Problem:
some npm modules are not deduplicated

Structure:
/packages/utils – just javascript library, depends on moment, installed from npm, exactly the same version as /app 
/packages/app – Meteor app, depends on **moment** installed from npm and **utils** installed from `file:../utils`


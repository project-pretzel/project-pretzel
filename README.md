# project-prezel
Greenfield Project for HackReactor

# how to continuely complile when file changes
babel . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline -w

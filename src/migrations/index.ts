import * as migration_20250914_203147 from './20250914_203147';

export const migrations = [
  {
    up: migration_20250914_203147.up,
    down: migration_20250914_203147.down,
    name: '20250914_203147'
  },
];

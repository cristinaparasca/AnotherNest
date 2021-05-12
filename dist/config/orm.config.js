"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    username: 'postgres',
    password: '123456',
    port: 5432,
    host: 'localhost',
    database: 'storemanagement',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}']
};
//# sourceMappingURL=orm.config.js.map
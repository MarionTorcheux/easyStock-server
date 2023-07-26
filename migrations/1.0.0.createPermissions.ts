const BlueBird = require('bluebird');
const Permission = require('../models/Permission.ts');
export default async () => {
    console.log("Migration 1.0.0.createPermissions.ts started");
    const permissions = [
        'product.create',
        'product.read',
        'product.update',
        'product.delete',
        'user.create',
        'user.read',
        'user.update',
        'user.delete'];
    BlueBird.forEach(permissions, async (permission) => {
        await Permission.create({ label: permission });
    });
}


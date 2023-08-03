// Import your models here
import './dbConnect';
import Role from "../models/Role";
import Permission from "../models/Permission";

export async function up(): Promise<void> {
    // Write migration here

    const roles = [{
        label: 'basic user',
        permissions: ['user.read.me', 'user.update.me']
    },
        {
            label: 'inventorist',
            permissions: ['product.read', 'product.update']
        },
        {
            label: 'admin',
            permissions: ['user.create', 'user.read', 'user.update', 'user.delete', 'product.create', 'product.read', 'product.update', 'product.delete']
        }

    ];

    for (const role of roles) {
        const permissionsId: any = [];
        for (const permission of role.permissions) {
            const dbPermission = await Permission.findOne({label: permission});
            if (dbPermission) {
                permissionsId.push(dbPermission._id)
            }
        }
        await Role.findOneAndUpdate({label: role.label}, {label: role.label, permissions: permissionsId}, {upsert: true});
    }
}

export async function down(): Promise<void> {
    // Write migration here
}

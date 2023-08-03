// Import your models here
import './dbConnect';
import Permission from "../models/Permission";

export async function up (): Promise<void> {
  // Write migration here
    const permissions= [
        'product.create',
        'product.read',
        'product.update',
        'product.delete',
        'user.read.me',
        'user.update.me',
        'user.create',
        'user.read',
        'user.update',
        'user.delete'
        ];

    for (const permission of permissions) {
        await Permission.findOneAndUpdate({label: permission}, {label: permission}, {upsert: true});
    }

}

export async function down (): Promise<void> {
  // Write migration here
}

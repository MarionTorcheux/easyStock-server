import './dbConnect';
import User from "../models/User";
import Role from "../models/Role";


export async function up(): Promise<void> {
    // Write migration here

    const users = [
        {
            firstname: 'Mathias',
            lastname: 'Del Corazon',
            email: 'm@gmail.com',
            password: '123456',
            roles: ['basic user', 'admin']
        },
        {
            firstname: 'Cyrielle',
            lastname: 'TheFripouille',
            email: 'c@gmail.com',
            password: '123456',
            roles: ['basic user', 'inventorist']
        },
        {
            firstname: 'Marion',
            lastname: 'L\'imitatrice',
            email: 'mm@gmail.com',
            password: '123456',
            roles: ['basic user', 'inventorist']
        }
    ]

    for (const user of users) {
        const rolesId: any = [];
        for (const role of user.roles) {
            const dbRole = await Role.findOne({label: role})
            if (dbRole) {
                rolesId.push(dbRole._id)
            }
        }
        await User.findOneAndUpdate(
            {email:user.email},
            {
                ...user,
                roles: rolesId
            },
            // {
            //     firstname: user.firstname,
            //     lastname: user.lastname,
            //     email: user.email,
            //     password: user.password,
            //     roles: rolesId
            // },
            {upsert: true})
    }



}

export async function down(): Promise<void> {
    // Write migration here
}

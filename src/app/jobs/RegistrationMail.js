import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    option: {
        delay: 5000,
        priority: 3
    },

    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from : 'My Enterprise <contato@mail.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Registration of new User',
            html: `Hello, ${user.name}. Welcome to my enterprise.`
        });
    }
}
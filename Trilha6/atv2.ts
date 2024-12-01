/* FIZ PELO TYPESCRIPT PLAYGROUND */

class UserManager {
    private users: { name: string; email: string }[] = [];

    addUser(name: string, email: string): void {
        this.users.push({ name, email });
        this.sendNotification(email, "Bem-vindo ao sistema!");
    }

    private sendNotification(email: string, message: string): void {
        console.log(`Enviando email para ${email}: ${message}`);
    }

    getUsers(): { name: string; email: string }[] {
        return this.users;
    }
}

const userManager = new UserManager();
userManager.addUser("João", "joao@email.com");
console.log(userManager.getUsers());

class EmailNotification {
    send(email: string, message: string): void {
        console.log(`Enviando email para ${email}: ${message}`);
    }
}

class UserManager {
    private users: { name: string; email: string }[] = [];
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    addUser(name: string, email: string): void {
        this.users.push({ name, email });
        this.emailNotification.send(email, "Bem-vindo ao sistema!");
    }

    getUsers(): { name: string; email: string }[] {
        return this.users;
    }
}

const emailService = new EmailNotification();
const userManager = new UserManager(emailService);

userManager.addUser("João", "joao@email.com");
console.log(userManager.getUsers());


(() => {
    type Gender = 'M' | 'F';

    interface PersonProperties {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProperties) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserPropierties {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor(
            {
                email,
                role,
                name,
                gender,
                birthdate
            }: UserPropierties
        ) {
            super({ name, gender, birthdate });
            this.email = email;
            this.role = role
            this.lastAccess = new Date()
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date

    }
    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string
        constructor(
            {
                workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthdate
            }: UserSettingsProps
        ) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1996-10-04'),
        email: 'samuel@gmail.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Samuel',
        role: 'Admin',
        workingDirectory: '/usr/home',
    }
    )
    console.log({ userSettings });
})();
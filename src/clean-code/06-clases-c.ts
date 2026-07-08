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
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor(
            {
                email,
                role
            }: UserPropierties
        ) {
            this.email = email;
            this.role = role
            this.lastAccess = new Date()
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }
    class SettingsProperties {
        public workingDirectory: string;
        public lastOpenFolder: string
        constructor(
            {
                workingDirectory,
                lastOpenFolder,
            }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: SettingsProperties

        constructor(
            {
                name, gender, birthdate,
                email, role,
                lastOpenFolder, workingDirectory
            }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new SettingsProperties({workingDirectory, lastOpenFolder});
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
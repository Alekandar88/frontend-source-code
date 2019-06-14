import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../../../@core/data/role.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../@core/data/users.service";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../../@core/data/client.service";

@Component({
    selector: 'ngx-add-edit-user',
    templateUrl: './add-edit-user.component.html',
    styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

    user = {first_name: '', last_name: '', email: '', password: '', confirmPassword: '', role: ''};
    roles = [];
    userId;
    initialEmailAddress;
    successMessage;
    clients;
    clientId;
    userClients = [];

    // define a user model

    constructor(private roleService: RoleService,
                private userService: UserService,
                private route: ActivatedRoute,
                private clientService: ClientService) {
    }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        if (this.userId) {
            //get the user from the database and set to the user
            this.getUser();
            this.findUserClients();
        }
        this.getRoles();
        this.getClients();
        this.createForm();
    }

    userForm: FormGroup;

    // validator function
    getFirstName() {
        return this.userForm.get('name').get('firstName');
    }

    getLastName() {
        return this.userForm.get('name').get('lastName');
    }

    getEmail() {
        return this.userForm.get('email');
    }

    getPassword() {
        return this.userForm.get('password');
    }

    getConfirmPassword() {
        return this.userForm.get('confirmPassword');
    }

    getRole() {
        return this.userForm.get('role');
    }

    createForm() {
        this.userForm = new FormGroup({
            name: new FormGroup({
                firstName: new FormControl('', Validators.required),
                lastName: new FormControl('', Validators.required)
            }),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern("[^ @]*@[^ @]*")
            ]),
            password: new FormControl(),
            confirmPassword: new FormControl(),
            role: new FormControl('',
                [Validators.required]),
            client: new FormControl()
        });
        this.userForm.controls['role'].setValue('', {onlySelf: true});
        if (!this.userId) {
            console.log('whats wrong with you');
            this.userForm.setControl('password', new FormControl('', [
                Validators.required,
                Validators.minLength(8)
            ]));
            this.userForm.setControl('confirmPassword', new FormControl('',
                [
                    Validators.required
                ]));
        }
    }

    getRoles() {
        this.roleService.getRoles(0, 10).subscribe(
            data => {
                this.roles = data.roles;
            },
            err => {
                console.log(err);
            }
        );
    }

    getClients() {
        this.clientService.getClients(0, 1000).subscribe(
            data => {
                this.clients = data.clients;
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('completed');
            }
        );
    }

    addClient() {
        console.log(this.clientId);
    }

    findUserClients() {
        this.userService.getUserClients(this.userId).subscribe(
            data => {
                this.userClients = data.users.clients;
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('completed');
            }
        );
    }

    getUser() {
        this.userService.getUser(this.userId).subscribe(data => {
                this.setUser(data);
                //set the user
            },
            err => {
                console.log(err);
            }
        );
    }

    createUser() {
        if (this.userForm.valid) {
            console.log('valid');
            // check if the clientId is null or not. if null then insert else update
            if (this.userId) {
                this.update();
            }else {
                this.insert();
            }
        }

    }

    setUser(data) {
        this.initialEmailAddress = data.user.email;
        this.user.email = data.user.email;
        //split username
        const username = data.user.username.split(' ');
        this.user.first_name = typeof username[0] !== 'undefined' ? username[0] : '';
        this.user.last_name = typeof username[1] !== 'undefined' ? username[1] : '';
        this.user.role = typeof data.user.role !== 'undefined' || data.user.role !== null ? data.user.role : '';
        this.userId = data.user._id;
        this.userClients =
            typeof data.user.clients !== 'undefined' ||
            data.user.clients !== null ?
                data.user.clients : [];
        this.getEmail().disable();
    }

    insert() {
        const user = {
            fullName: this.getFirstName().value + ' ' + this.getLastName().value,
            email: this.getEmail().value,
            password: this.getPassword().value,
            confirmPassword: this.getConfirmPassword().value,
            role: this.getRole().value,
            clients: this.userClients
        };
        this.userService.createUser(user).subscribe(
            data => {
                this.successMessage = data.message;
                this.setUser(data);
            },
            err => {
                const {error} = err;
                this.userForm.setErrors({'message': error.message});
            }
        );
    }

    update() {
        const user = {
            fullName: this.getFirstName().value + ' ' + this.getLastName().value,
            email: this.getEmail().value,
            role: this.getRole().value,
            clients: this.userClients
        };
        this.userService.updateUser(user, this.userId).subscribe(
            data => {
                this.successMessage = data.message;
                this.setUser(data);
            },
            err => {
                const {error} = err;
                this.userForm.setErrors({'message': error.message});
            }
        );
    }

}

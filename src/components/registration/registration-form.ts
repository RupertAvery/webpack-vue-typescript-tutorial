import Vue from 'vue';
import { Component } from 'vue-property-decorator'

@Component({})
export default class RegistrationFrom extends Vue {
    user = {};

    validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                this.$router.push({ path: '/register/complete'})
                return;
            }
        });
    }
}
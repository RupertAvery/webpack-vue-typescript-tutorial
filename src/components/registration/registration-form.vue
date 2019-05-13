<template>
  <div class="container registration-form">
    <div class="card shadow rounded">
      <div class="card-body">
        <h2 class="card-title">Registration Form</h2>
        <form>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" class="form-control" placeholder="First name" v-model="user.firstName">
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="middleName">Middle Name</label>
                <input type="text" id="middleName" class="form-control" placeholder="Middle name" v-model="user.middleName">
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" class="form-control" placeholder="Last name" v-model="user.lastName">
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Gender</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender-m"
                  value="male"
                  v-model="user.gender"
                >
                <label class="form-check-label" for="gender-m">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender-f"
                  value="female"
                  v-model="user.gender"
                >
                <label class="form-check-label" for="gender-f">Female</label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="address1">Address</label>
            <input type="text" id="address" class="form-control" placeholder="Address" v-model="user.address">
          </div>

          <div class="form-group">
            <label for="address2">Address 2</label>
            <input type="text" id="address2" class="form-control" placeholder="Address Line 2" v-model="user.address2">
          </div>

          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" id="email" class="form-control" placeholder="Enter email" v-model="user.email">
          </div>

          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.registration-form {
  max-width: 1100px;
}
</style>

<script src="./registration-form.ts"></script>

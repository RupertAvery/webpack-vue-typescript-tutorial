<template>
  <div class="container registration-form">
    <div class="card shadow rounded">
      <div class="card-body">
        <h2 class="card-title">Registration Form</h2>
        <form>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="firstName" :class="{ 'error': errors.has('firstName') }">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="form-control"
                  :class="{ 'error': errors.has('firstName') }"
                  placeholder="First name"
                  v-model="user.firstName"
                  v-validate="'required'"
                >
                <small class="error">{{ errors.first('firstName') }}</small>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="middleName" :class="{ 'error': errors.has('middleName') }">Middle Name</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  class="form-control"
                  :class="{ 'error': errors.has('middleName') }"
                  placeholder="Middle name"
                  v-model="user.middleName"
                  v-validate="'required'"
                >
                <small class="error">{{ errors.first('middleName') }}</small>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="lastName" :class="{ 'error': errors.has('lastName') }">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  :class="{ 'error': errors.has('lastName') }"
                  placeholder="Last name"
                  v-model="user.lastName"
                  v-validate="'required'"
                >
                <small class="error">{{ errors.first('lastName') }}</small>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label :class="{ 'error': errors.has('gender') }">Gender</label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender-m"
                  value="male"
                  v-model="user.gender"
                  v-validate="'required'"
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
                  v-validate="'required'"
                >
                <label class="form-check-label" for="gender-f">Female</label>
              </div>
            </div>
            <small class="error">{{ errors.first('gender') }}</small>
          </div>

          <div class="form-group">
            <label for="address1" :class="{ 'error': errors.has('address') }">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              class="form-control"
              :class="{ 'error': errors.has('address') }"
              placeholder="Address"
              v-model="user.address"
              v-validate="'required'"
            >
            <small class="error">{{ errors.first('address') }}</small>
          </div>

          <div class="form-group">
            <label for="address2">Address 2</label>
            <input
              type="text"
              id="address2"
              name="address2"
              class="form-control"
              :class="{ 'error': errors.has('address2') }"
              placeholder="Address Line 2"
              v-model="user.address2"
            >
          </div>

          <div class="form-group">
            <label for="email" :class="{ 'error': errors.has('email') }">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              :class="{ 'error': errors.has('email') }"
              placeholder="Enter email"
              v-model="user.email"
              v-validate="'required|email'"
            >
            <ul class="multi-errors">
              <li v-for="error in errors.collect('email')">
                <small class="error">{{ error }}</small>
              </li>
            </ul>
          </div>

          <button @click.prevent="validateBeforeSubmit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style src="./registration-form.css"></style>

<script src="./registration-form.ts"></script>

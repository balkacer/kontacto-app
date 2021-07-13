const RegisterForm = [
    [
      {
        property: 'firstName',
        label: 'First name',
        value: 'Enmanuel',
        type: 'name',
        validations: {
          isRequired: true,
        }
      },
      {
        property: 'secondName',
        label: 'Second name',
        value: null,
        type: 'name',
        validations: null
      },
      {
        property: 'firstSurname',
        label: 'First surname',
        value: 'Balcacer',
        type: 'name',
        validations: {
          isRequired: true,
        }
      },
      {
        property: 'secondSurname',
        label: 'Second surname',
        value: 'Fajardo',
        type: 'name',
        validations: null
      }
    ],
    [
      {
        property: 'username',
        label: 'Username',
        value: 'makuttico',
        type: 'username',
        validations: {
          isRequired: true,
        }
      },
      {
        property: 'email',
        label: 'Email',
        value: 'makuttico@gmail.com',
        type: 'email',
        validations: {
          isRequired: true,
        }
      },
      {
        property: 'password',
        label: 'Pasword',
        value: '12345678',
        type: 'password',
        validations: {
          isRequired: true,
          hasMinLengthOf: 8
        }
      },
      {
        property: 'confirmPassword',
        label: 'Confirm Pasword',
        value: '12345678',
        type: 'password',
        notToSubmit: true,
        validations: {
          isMatchWith: 'password',
        }
      }
    ],
    [
        {
            property: 'isWorking',
            label: "You're working?",
            value: false,
            type: 'check',    
            validations: {
                isRequired: true,
            }
        },
        {
            property: 'workName',
            label: 'Work Name',
            value: null,
            type: 'name',
            validations: {
                isRequired: true
            }
        },
        {
            property: 'birthday',
            label: 'Birthday',
            value: null,
            type: 'date',
            validations: {
                isRequired: true
            }
        },
    ]
]

export default RegisterForm;
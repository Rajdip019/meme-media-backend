import * as yup from 'yup';

let userValidationSchema  = yup.object().shape({
    userid : yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    image: yup.string(),
    yourMeme: yup.array(),
    favourite: yup.array(),
    downloads: yup.array(),
})

export default userValidationSchema;
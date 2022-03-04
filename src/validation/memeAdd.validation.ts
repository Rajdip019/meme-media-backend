import * as yup from 'yup';

const memeAddValidationSchema = yup.object().shape({
    title: yup.string(),
    url_overridden_by_dest: yup.string().url().required(),
    authorId: yup.string().required(),
    authorImage: yup.string().url(),
    authorName: yup.string().required()
})

export default memeAddValidationSchema;
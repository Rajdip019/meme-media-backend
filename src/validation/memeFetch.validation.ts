import * as yup from 'yup';

const memeFetchValidationSchema = yup.object().shape({
    _id: yup.object(),
    title: yup.string(),
    url_overridden_by_dest: yup.string().url().required(),
    authorId: yup.string().required(),
    authorImage: yup.string().url(),
    authorName: yup.string().required(),
    timeStamp: yup.date().required()
})

export default memeFetchValidationSchema;
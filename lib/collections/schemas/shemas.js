import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


var postFields = {
    title: {
        type: String,
        label: 'Title'
    },
    body: {
        type: String,
        autoform: {
            type: 'summernote',
            class: 'editor',
            settings: {
                height: 300,
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
                    ['fontname', ['fontname']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    ['para', ['ol', 'ul', 'paragraph', 'height']],
                    ['table', ['table']],
                    ['insert', ['link']],
                    ['view', ['undo', 'redo', 'fullscreen', 'codeview', 'help']]
                ]


            }
        }
    },
    _id: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    userId: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    author: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    createdAt: {
        type: Date,
        optional: true,
        autoform: {
            omit: true
        }
    }
};

PostSchema = new SimpleSchema(postFields);
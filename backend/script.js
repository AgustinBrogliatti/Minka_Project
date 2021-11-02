

function sendFile() {
	let formData = new FormData();
    var imagefile = document.querySelector('#file');
    formData.append("file", imagefile.files[0]);
	axios.post('http://127.0.0.1:5000/upload-file', formData, {headers: {
      'Content-Type': 'multipart/form-data'
        }
    })
		.then(function (response) {
			console.log("Send File OK")
		})
		.catch(function (error) {
			console.log(error);
	});
}

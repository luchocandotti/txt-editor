function formatDoc(cmd, value = null) {
    if (value) {
        document.execCommand(cmd, false, value);
    } else {
        document.execCommand(cmd);
    }
    
}


const filename = document.getElementById('filename');

function fileHandle(value) {
    if (value === 'new') {
        // content.innerHTML = '';
        // filename.value = 'Título';
        window.location.reload();
    } else if (value === 'txt'){
        const blob = new Blob([content.innerHTML])
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a');
        link.href = url;
        link.download = `${filename.value}.txt`;
        link.click();
    } else if (value === 'pdf') {
        html2pdf(content).save(filename.value);
    }
}
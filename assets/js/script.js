function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("Nama Harus Di Isi");
  } else if (email == "") {
    return alert("Email Harus Di Isi");
  } else if (phoneNumber == "") {
    return alert("No Telpon Harus Di Isi");
  } else if (subject == "") {
    return alert("Subject Harus Dipilih");
  } else if (message == "") {
    return alert("Pesan Harus Di Isi");
  }

  const destination = "riskaagungnugroho@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${destination}?subject=${subject}&body= Hallo nama saya ${name}, ${message}, kamu bisa menghubungiku di ${phoneNumber} atau kirim email ke ${email}.`;
  a.click();
}

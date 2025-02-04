const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["*", "/", "-", "+", "="];
let output = "";

// Fungsi untuk menghitung dan memformat hasil
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        // Hitung hasil ekspresi dan format dengan pemisah ribuan
        try {
            const result = eval(output); // Hitung ekspresi
            output = result.toLocaleString("id-ID"); // Format hasil
        } catch (error) {
            output = "Error"; // Tampilkan pesan error jika terjadi kesalahan
        }
    } else if (btnValue === "AC") {
        output = ""; // Hapus semua input
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1); // Hapus karakter terakhir
    } else {
        if (output === "" && specialChars.includes(btnValue)) return; // Tidak izinkan operator pertama
        output += btnValue; // Tambahkan tombol ke ekspresi
    }
    display.value = output; // Perbarui tampilan layar
};

// Tambahkan event listener pada setiap tombol
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
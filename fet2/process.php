<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $watchModel = $_POST["watchModel"];
    $watchBrand = $_POST["watchBrand"];
    $quantity = $_POST["quantity"];
    $deliveryAddress = $_POST["deliveryAddress"];

    header("Location: success.php?watchModel=" . urlencode($watchModel) . "&watchBrand=" . urlencode($watchBrand) . "&quantity=" . urlencode($quantity) . "&deliveryAddress=" . urlencode($deliveryAddress));
    exit;
} else {
    header("Location: your_form_page.html");
    exit;
}
?>

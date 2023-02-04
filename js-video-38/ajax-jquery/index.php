<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax-Jquery Bootstrap PHP </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="js/jquery.js"></script>
    <script src="js/app.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="row mt-4">
            <h1>Belajar Ajax JQuery Bootstrap PHP</h1>
        </div>
        <div class="row mt-4">
            <div class="col-sm">
                <div class="row">
                    <h2>Input Data Pelanggan</h2>
                </div>
                <div class="row">
                    <div id="msg">

                    </div>
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="id" required aria-describedby="emailHelp">
                            <label for="exampleInputEmail1" class="form-label">Pelanggan</label>
                            <input type="text" class="form-control" id="pelanggan" required aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">Wajib di isi</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Alamat</label>
                            <input type="text" class="form-control" id="alamat" required>
                            <div id="emailHelp" class="form-text">Wajib di isi</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Telp</label>
                            <input type="text" class="form-control" id="telp" required>
                            <div id="emailHelp" class="form-text">Wajib di isi</div>
                        </div>
                        <button type="submit" id="submit" class="btn btn-primary">Simpan</button>
                    </form>
                </div>
            </div>
            <div class="col-sm">
                <div class="row">
                    <h2>Data Pelanggan</h2>
                </div>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Pelanggan</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Telp</th>
                            <th scope="col">Hapus</th>
                            <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody id="isidata">


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
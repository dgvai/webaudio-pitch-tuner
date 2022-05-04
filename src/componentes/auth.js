import react from "react";


function Login(){
    return (
        <div>
            <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                aria-controls="pills-login" aria-selected="true">Login</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                aria-controls="pills-register" aria-selected="false">Register</a>
            </li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>

                        <div class="form-outline mb-4">
                            <input type="email" id="loginName" class="form-control" />
                            <label class="form-label" for="loginName">Email</label>
                        </div>

                        <div class="form-outline mb-4">
                            <input type="password" id="loginPassword" class="form-control" />
                            <label class="form-label" for="loginPassword">Contraseña</label>
                        </div>

                        <div class="row mb-4 justify-content-center">
                            
                            <div class="col-md-3 d-flex justify-content-center">
                                <div class="form-check mb-3 mb-md-0">
                                    <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                    <label class="form-check-label" for="loginCheck">Recordarme</label>
                                </div>
                            </div>

                            <div class="col-md-9 d-flex flex-row-reverse">
                                <a href="#">olvidaste la contraseña?</a>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
                        </div>

                        <div class="text-center">
                            <p>No tienes una cuenta? <a href="#!">Crea una cuenta</a></p>
                        </div>
                    </form>
                </div>
                <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>

                    <p class="text-center">or:</p>

                    <div class="form-outline mb-4">
                        <input type="text" id="registerName" class="form-control" />
                        <label class="form-label" for="registerName">Nombre</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="email" id="registerEmail" class="form-control" />
                        <label class="form-label" for="registerEmail">Email</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" id="registerPassword" class="form-control" />
                        <label class="form-label" for="registerPassword">Contraseña</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" id="registerRepeatPassword" class="form-control" />
                        <label class="form-label" for="registerRepeatPassword">Repita la contraseña</label>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                        aria-describedby="registerCheckHelpText" />
                        <label class="form-check-label" for="registerCheck">
                        I have read and agree to the terms
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block mb-3">Crear cuenta</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
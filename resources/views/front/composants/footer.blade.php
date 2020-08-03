<footer class="footer spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer__about">
                    <div class="footer__about__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""></a>
                    </div>
                    <ul>
                        <li>Telephone: +65 11.188.888</li>
                        <li>Email: hello@agric.com</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div class="footer__widget">
                    <h6>Liens utiles</h6>
                    <ul>
                        <li><a href="{{url('/')}}">Accueil</a></li>
                        <li><a href="#">Produits</a></li>
                    </ul>
                    <ul>
                        @foreach(getCategories() as $categorie)
                            <li><a href="{{route('CategorieProd',[$categorie->id])}}">{{$categorie->nom}}</a></li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="footer__widget">
                    <h6>Qui sommes nous ?</h6>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="footer__copyright">
                    <div class="footer__copyright__text"><p>
                            Copyright &copy;{{'Copyright '.date('Y')}} Tout droit reserve </p></div>
                    <div class="footer__copyright__payment"><img src="img/payment-item.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</footer>

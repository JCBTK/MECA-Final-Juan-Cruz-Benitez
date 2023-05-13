import { CSSProperties } from "../styles/components/pages/NosotrosPage.css";

const NosotrosPage =(props)=>{
    return (
        <main class="holder">   
       <div class="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ratione beatae accusantium accusamus laudantium praesentium, quis est earum sit magnam. Eligendi placeat cupiditate quo dignissimos sit quia eaque fuga cumque.</p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur maxime doloremque maiores esse, sunt ullam. Beatae aspernatur velit corporis voluptates voluptas ullam in saepe quisquam recusandae, eveniet nisi impedit?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ratione beatae accusantium accusamus laudantium praesentium, quis est earum sit magnam. Eligendi placeat cupiditate quo dignissimos sit quia eaque fuga cumque.</p>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur maxime doloremque maiores esse, sunt ullam. Beatae aspernatur velit corporis voluptates voluptas ullam in saepe quisquam recusandae, eveniet nisi impedit?</p>
       </div>
       <div class="staff">
            <h2>Staff</h2>
            <div class="personas">
                <div class="persona">
                    <img src="img/nosotros/1.jpg" alt="Koenigsegg"/>
                    <h5>Christian Von Koenigsegg</h5>
                    <h6>Gerente de Ingenieria</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero, suscipit, ad doloremque, quasi cum nobis nihil obcaecati quisquam mollitia nam quod praesentium qui? Architecto eaque at quam eius nemo.</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/2.jpg" alt="Bezos"/>
                    <h5>Jeff Bezos</h5>
                    <h6>Gerente de ventas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero, suscipit, ad doloremque, quasi cum nobis nihil obcaecati quisquam mollitia nam quod praesentium qui? Architecto eaque at quam eius nemo.</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/3.jpg" alt="Musk"/>
                    <h5>Elon Musk</h5>
                    <h6>Gerente de RRHH</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero, suscipit, ad doloremque, quasi cum nobis nihil obcaecati quisquam mollitia nam quod praesentium qui? Architecto eaque at quam eius nemo.</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/4.jpg" alt="Pagani"/>
                    <h5>Horacio Pagani</h5>
                    <h6>Gerente de desarrollo</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero, suscipit, ad doloremque, quasi cum nobis nihil obcaecati quisquam mollitia nam quod praesentium qui? Architecto eaque at quam eius nemo.</p>
                </div>
                <div class="persona">
                    <img src="img/nosotros/5.jpg" alt="Berta"/>
                    <h5>Oreste Berta</h5>
                    <h6>Gerente de Ingenieria y desarrollo</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam libero, suscipit, ad doloremque, quasi cum nobis nihil obcaecati quisquam mollitia nam quod praesentium qui? Architecto eaque at quam eius nemo.</p>
                </div>
            </div>        
       </div>
    </main> 
            
    );
}

export default NosotrosPage;
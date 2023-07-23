
export default function PostForm(){
    return( 
            <div class="wrapper">
                <div class="titel-form">
                    <h1 class="titel">Create new article</h1>
                </div>
                <div class="main-form-context">
                    <form class="form">
                        <h2 class="form__title">new article</h2>
                        
                        <div class="form__image">
                        <h2>markdown supported</h2>
                        </div>
                    
                        <div class="form__field">
                        <label class="form__label" for="title">titel article</label>
                        <input id="title" type="text" class="form__input"/>
                        </div>
                    
                        <div class="form__field">
                        <label class="form__label" for="content"> article</label>
                        <textarea id="content" class="form__input"></textarea>
                        </div>
                    
                        <button class="form__button">Опубликовать</button>
                    
                    </form>
                </div>
        </div>
    );
}
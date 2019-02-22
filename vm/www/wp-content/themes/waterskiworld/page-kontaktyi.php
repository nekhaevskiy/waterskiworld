<?php
if(isset($_POST['submitted'])) {
  if(trim($_POST['contact_name']) === '') {
    $nameError = 'Введите имя';
    $hasError = true;
  } else {
    $name = trim($_POST['contact_name']);
  }

  if(!filter_var($_POST['contact_email'], FILTER_VALIDATE_EMAIL)) {
    $emailError = 'Введите корректный e-mail';
    $hasError = true;
  } else {
    $email = trim($_POST['contact_email']);
  }

  if(trim($_POST['contact_msg']) === '') {
    $msgError = 'Введите текст сообщения';
    $hasError = true;
  } else {
    if(function_exists('stripslashes')) {
      $msg = stripslashes(trim($_POST['contact_msg']));
    } else {
      $msg = trim($_POST['contact_msg']);
    }
  }

  if(!isset($hasError)) {
    $emailTo = 'yury.nekhaevskiy@gmail.com';
    $subject = 'Сообщение с сайта WaterSkiWorld.ru от '.$name;
    $body = "Имя: $name \n\nE-mail: $email \n\nСообщение: $msg";
    $headers = 'From: '.$name.' <'.$email.'>' . "\r\n" . 'Reply-To: ' . $email;
    wp_mail($emailTo, $subject, $body, $headers);
    $emailSent = true;
  }
} ?>

<?php get_header(); ?>

<div class="row">
    <main class="col-md-10 col-md-offset-1 main main_no-sidebar">

    <?php if ( have_posts() ) { ?>
        <?php while ( have_posts() ) { ?>
            <?php the_post(); ?>
            <div class="page-header">
                <h1><?php the_title(); ?></h1>
            </div>
            <div class="article article_single">
            
                <?php the_content(); ?>

                <?php if(isset($emailSent) && $emailSent == true) { ?>
                  <div class="alert alert-success" role="alert">Спасибо! Ваше сообщение отправлено.</div>
                <?php } else { ?>
                  <?php if(isset($hasError) || isset($captchaError)) { ?>
                    <div class="alert alert-danger" role="alert">Сообщение не было отправлено. Пожалуйста, проверьте коректность введенной информации и попробуйте еще раз.</div>
                  <?php } ?>
                  <form action="<?php the_permalink(); ?>" method="post">
                    <?php if(isset($nameError) and $nameError != '') { ?>
                      <div class="form-group has-error">
                        <label for="contacts-name">Ваше имя</label>
                        <input id="contacts-name" class="form-control" type="text" name="contact_name" placeholder="Имя" value="<?php if(isset($_POST['contact_name'])) echo $_POST['contact_name'];?>" required/>
                        <span class="help-block"><?=$nameError;?></span>
                      </div>
                    <?php } else { ?>
                      <div class="form-group">
                        <label for="contacts-name">Ваше имя</label>
                        <input id="contacts-name" class="form-control" type="text" name="contact_name" placeholder="Имя" value="<?php if(isset($_POST['contact_name'])) echo $_POST['contact_name'];?>" required/>
                      </div>
                    <?php } ?>

                    <?php if(isset($emailError) and $emailError != '') { ?>
                      <div class="form-group has-error">
                        <label for="contacts-email">Email для обратной связи</label>
                        <input id="contacts-email" class="form-control" type="email" name="contact_email" placeholder="Email" value="<?php if(isset($_POST['contact_email'])) echo $_POST['contact_email'];?>" required/>
                        <span class="help-block"><?=$emailError;?></span>
                      </div>
                    <?php } else { ?>
                      <div class="form-group">
                        <label for="contacts-email">Email для обратной связи</label>
                        <input id="contacts-email" class="form-control" type="email" name="contact_email" placeholder="Email" value="<?php if(isset($_POST['contact_email'])) echo $_POST['contact_email'];?>" required/>
                      </div>
                    <?php } ?>

                    <?php if(isset($msgError) and $msgError != '') { ?>
                      <div class="form-group has-error">
                        <label for="contacts-msg">Ваше сообщение</label>
                        <textarea id="contacts-msg" class="form-control" name="contact_msg" placeholder="Текст сообщения" required><?php if(isset($_POST['contact_msg'])) { if(function_exists('stripslashes')) { echo stripslashes($_POST['contact_msg']); } else { echo $_POST['contact_msg']; } } ?></textarea>
                        <span class="help-block"><?=$msgError;?></span>
                      </div>
                    <?php } else { ?>
                      <div class="form-group">
                        <label for="contacts-msg">Ваше сообщение</label>
                        <textarea id="contacts-msg" class="form-control" name="contact_msg" placeholder="Текст сообщения" required><?php if(isset($_POST['contact_msg'])) { if(function_exists('stripslashes')) { echo stripslashes($_POST['contact_msg']); } else { echo $_POST['contact_msg']; } } ?></textarea>
                      </div>
                    <?php } ?>
                    
                    <input type="hidden" name="submitted" value="true">
                    <button class="btn btn-primary btn-lg center-block" type="submit">Отправить</button>
                  </form>
                <?php } ?>
            </div>
        <?php } ?>
    <?php } ?> 
    
    </main>
</div> <!-- .row -->

<?php get_footer(); ?>
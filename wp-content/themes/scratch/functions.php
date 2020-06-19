<?php

function add_menu_link_class( $atts, $item, $args ) {
    if($args->link_class) {
        $atts['class'] = $args->link_class;
    }
    return $atts;
}

add_filter( 'nav_menu_link_attributes', 'add_menu_link_class', 1, 3 );

function add_menu_list_item_class($classes, $item, $args) {
    if($args->list_item_class) {
        $classes[] = $args->list_item_class;
    }
    return $classes;
}

add_filter('nav_menu_css_class', 'add_menu_list_item_class', 1, 3);

if(!function_exists('dynamic_header')){

    function dynamic_header(){

        global $post;

        ?>

        <?php if (is_front_page()){ ?>
            <header class="masthead" style="background:#ccc;">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <div class="site-heading">
                            <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                            <span class="subheading"><?php get_bloginfo( 'description', 'display' );?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        <?php } else if (is_home()){ ?>

            <header class="masthead" style="background:#ccc;">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <div class="site-heading">
                            <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                            <span class="subheading"><?php get_bloginfo( 'description', 'display' );?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        <?php } else if (is_page()){ ?>

            <header class="masthead" style="background:#ccc;">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <div class="site-heading">
                            <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                            <span class="subheading"><?php get_bloginfo( 'description', 'display' );?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        <?php } else if (is_single()){ ?>

            <header class="masthead" style="background:#ccc;">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <div class="site-heading">
                            <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                            <span class="subheading"><?php get_bloginfo( 'description', 'display' );?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        <?php } else { ?>

            <header class="masthead" style="background:#ccc;">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <div class="site-heading">
                            <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                            <span class="subheading"><?php get_bloginfo( 'description', 'display' );?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        <?php }
    }
}
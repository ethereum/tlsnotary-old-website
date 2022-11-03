



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>bitcoinaddress.js/bitcoinaddress-bundle.debug.js at master · miohtama/bitcoinaddress.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="miohtama/bitcoinaddress.js" name="twitter:title" /><meta content="bitcoinaddress.js - A JavaScript library for making easy bitcoin payments, sending bitcoins and presenting bitcoin addresses on any HTML page." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/49922?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/49922?v=3&amp;s=400" property="og:image" /><meta content="miohtama/bitcoinaddress.js" property="og:title" /><meta content="https://github.com/miohtama/bitcoinaddress.js" property="og:url" /><meta content="bitcoinaddress.js - A JavaScript library for making easy bitcoin payments, sending bitcoins and presenting bitcoin addresses on any HTML page." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="3ECDD67D:5F9A:DB919F0:5462652E" name="octolytics-dimension-request_id" /><meta content="4278257" name="octolytics-actor-id" /><meta content="AdamISZ" name="octolytics-actor-login" /><meta content="c5a0bf24a8ea48d9de412a76430c2d6de4a315fc80b537f4b69b1ee0f3f72677" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="tuR6RbBYq98qiOvjV74Mcd2axraOgVMdSAyjOBM1PO5OUtwB5hIRPwTkw/bCJ+NSQYPpq9/FGdgPTeHcBJo37A==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-94520383be830bbbe79cdce9fb3f76d4037ec1ca67d72952e14a36b8c2362b55.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-c0dc1a4ab58be15730e1c223a542655284fe25613b25a7f07822a13a1c1ee952.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="8f3fadbdbe637baa6f70a084dbe21392">

      
  <meta name="description" content="bitcoinaddress.js - A JavaScript library for making easy bitcoin payments, sending bitcoins and presenting bitcoin addresses on any HTML page.">
  <meta name="go-import" content="github.com/miohtama/bitcoinaddress.js git https://github.com/miohtama/bitcoinaddress.js.git">

  <meta content="49922" name="octolytics-dimension-user_id" /><meta content="miohtama" name="octolytics-dimension-user_login" /><meta content="15501402" name="octolytics-dimension-repository_id" /><meta content="miohtama/bitcoinaddress.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="15501402" name="octolytics-dimension-repository_network_root_id" /><meta content="miohtama/bitcoinaddress.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/miohtama/bitcoinaddress.js/commits/master.atom" rel="alternate" title="Recent Commits to bitcoinaddress.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/miohtama/bitcoinaddress.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/miohtama/bitcoinaddress.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/AdamISZ" data-ga-click="Header, go to profile, text:username">
      <img alt="AdamISZ" class="avatar" data-user="4278257" height="20" src="https://avatars0.githubusercontent.com/u/4278257?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">AdamISZ</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="miohtama/bitcoinaddress.js">This repository</span>
    </li>
      <li>
        <a href="/miohtama/bitcoinaddress.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="k0CWanS6HXderIlINfVJyWzG0CV+ordUGFrD+V8G3YoZvegzxODl908JwgiVYFwl+/hjep1juHi+ITpSSigF5A==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bLwOns9pRxXXjfBT9h1Fk+xnQgGxTcDisBkr5F5ciRdlaLxHXP72mFnWa5oFFXOVe/wFcJ2MAv9b/BMPuvfh4A==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="15501402" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/miohtama/bitcoinaddress.js/watchers">
        5
      </a>
      <a href="/miohtama/bitcoinaddress.js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/miohtama/bitcoinaddress.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SlU6P40Jdtmut6r8+wetnvy8hcNYtahyFemkT8HkVBAkGm9V+eWU/BSE95r3Gr3F4RKJSZgW8IV1MJ9UOhpEbw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar miohtama/bitcoinaddress.js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/miohtama/bitcoinaddress.js/stargazers">
          74
        </a>
</form>
    <form accept-charset="UTF-8" action="/miohtama/bitcoinaddress.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qlElbo83pzSo8OmMUzyk42HAPI9pOkCklT4ZOuGFOcAwTC3z3rkMG/NUY5iPKs7ViJLtgumlQQTfG/rihoCMJw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star miohtama/bitcoinaddress.js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/miohtama/bitcoinaddress.js/stargazers">
          74
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/miohtama/bitcoinaddress.js/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of miohtama/bitcoinaddress.js to your account" aria-label="Fork your own copy of miohtama/bitcoinaddress.js to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/miohtama/bitcoinaddress.js/network" class="social-count">3</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/miohtama" class="url fn" itemprop="url" rel="author"><span itemprop="title">miohtama</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/miohtama/bitcoinaddress.js" class="js-current-repository js-repo-home-link" data-pjax-container-selector="#js-repo-pjax-container">bitcoinaddress.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/miohtama/bitcoinaddress.js/issues/counts" data-pjax-container-selector="#js-repo-pjax-container">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/miohtama/bitcoinaddress.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /miohtama/bitcoinaddress.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/miohtama/bitcoinaddress.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /miohtama/bitcoinaddress.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/miohtama/bitcoinaddress.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /miohtama/bitcoinaddress.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/miohtama/bitcoinaddress.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /miohtama/bitcoinaddress.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/miohtama/bitcoinaddress.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /miohtama/bitcoinaddress.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/miohtama/bitcoinaddress.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /miohtama/bitcoinaddress.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/miohtama/bitcoinaddress.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/miohtama/bitcoinaddress.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:miohtama/bitcoinaddress.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:miohtama/bitcoinaddress.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/miohtama/bitcoinaddress.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/miohtama/bitcoinaddress.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/miohtama/bitcoinaddress.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of miohtama/bitcoinaddress.js as a zip file"
                   title="Download the contents of miohtama/bitcoinaddress.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/miohtama/bitcoinaddress.js/blob/58f0a5de5bfba28513987f37afbcaf77bda7c6dd/dist/bitcoinaddress-bundle.debug.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:8d6a900034c2a88c64231763cf35e06c -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miohtama/bitcoinaddress.js/blob/gh-pages/dist/bitcoinaddress-bundle.debug.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miohtama/bitcoinaddress.js/blob/master/dist/bitcoinaddress-bundle.debug.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miohtama/bitcoinaddress.js/tree/v0.1.1/dist/bitcoinaddress-bundle.debug.js"
                 data-name="v0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.1">v0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/miohtama/bitcoinaddress.js/tree/v0.1.0/dist/bitcoinaddress-bundle.debug.js"
                 data-name="v0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.0">v0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/miohtama/bitcoinaddress.js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="dist/bitcoinaddress-bundle.debug.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/miohtama/bitcoinaddress.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bitcoinaddress.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/miohtama/bitcoinaddress.js/tree/master/dist" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator"> / </span><strong class="final-path">bitcoinaddress-bundle.debug.js</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/miohtama/bitcoinaddress.js/contributors/master/dist/bitcoinaddress-bundle.debug.js">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>931 lines (791 sloc)</span>
          <span class="meta-divider"></span>
        <span>116.081 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/miohtama/bitcoinaddress.js/raw/master/dist/bitcoinaddress-bundle.debug.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/miohtama/bitcoinaddress.js/blame/master/dist/bitcoinaddress-bundle.debug.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/miohtama/bitcoinaddress.js/commits/master/dist/bitcoinaddress-bundle.debug.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/miohtama/bitcoinaddress.js/edit/master/dist/bitcoinaddress-bundle.debug.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/miohtama/bitcoinaddress.js/delete/master/dist/bitcoinaddress-bundle.debug.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="o">!</span><span class="kt">function</span>(<span class="nv">e</span>){<span class="k">if</span>(<span class="s2">&quot;object&quot;</span><span class="o">==typeof</span> <span class="nv">exports</span>)<span class="nv">module</span>.exports<span class="o">=</span>e();<span class="k">else</span> <span class="k">if</span>(<span class="s2">&quot;function&quot;</span><span class="o">==typeof</span> define<span class="o">&amp;&amp;</span>define.amd)define(e);<span class="k">else</span>{<span class="k">var</span> f;<span class="s2">&quot;undefined&quot;</span><span class="o">!=typeof</span> <span class="no">window</span><span class="o">?</span>f<span class="o">=</span><span class="no">window</span><span class="o">:</span><span class="s2">&quot;undefined&quot;</span><span class="o">!=typeof</span> <span class="nv">global</span><span class="o">?</span>f<span class="o">=</span>global<span class="o">:</span><span class="s2">&quot;undefined&quot;</span><span class="o">!=typeof</span> self<span class="o">&amp;&amp;</span>(f<span class="o">=</span>self),f.bitcoinaddress<span class="o">=</span>e()}}(<span class="kt">function</span>(){<span class="k">var</span> define,<span class="nv">module</span>,<span class="nv">exports</span>;<span class="k">return</span> (<span class="kt">function</span> <span class="nf">e</span>(<span class="nv">t</span>,<span class="nv">n</span>,<span class="nv">r</span>){<span class="kt">function</span> <span class="nf">s</span>(<span class="nv">o</span>,<span class="nv">u</span>){<span class="k">if</span>(<span class="o">!</span>n[o]){<span class="k">if</span>(<span class="o">!</span>t[o]){<span class="k">var</span> a<span class="o">=typeof</span> <span class="nf">require</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nf">require</span>;<span class="k">if</span>(<span class="o">!</span>u<span class="o">&amp;&amp;</span>a)<span class="k">return</span> a(o,<span class="o">!</span><span class="m">0</span>);<span class="k">if</span>(i)<span class="k">return</span> i(o,<span class="o">!</span><span class="m">0</span>);<span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;Cannot find module &#39;&quot;</span><span class="o">+</span>o<span class="o">+</span><span class="s2">&quot;&#39;&quot;</span>)}<span class="k">var</span> f<span class="o">=</span>n[o]<span class="o">=</span>{exports<span class="o">:</span>{}};t[o][<span class="m">0</span>].<span class="nf">call</span>(f.exports,<span class="kt">function</span>(<span class="nv">e</span>){<span class="k">var</span> n<span class="o">=</span>t[o][<span class="m">1</span>][e];<span class="k">return</span> s(n<span class="o">?</span>n<span class="o">:</span>e)},f,f.exports,e,t,n,r)}<span class="k">return</span> n[o].exports}<span class="k">var</span> i<span class="o">=typeof</span> <span class="nf">require</span><span class="o">==</span><span class="s2">&quot;function&quot;</span><span class="o">&amp;&amp;</span><span class="nf">require</span>;<span class="k">for</span>(<span class="k">var</span> o<span class="o">=</span><span class="m">0</span>;o<span class="o">&lt;</span>r.<span class="no">length</span>;o<span class="o">++</span>)s(r[o]);<span class="k">return</span> s})({<span class="m">1</span><span class="o">:</span>[<span class="kt">function</span>(<span class="nv">require</span>,<span class="nv">module</span>,<span class="nv">exports</span>){</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="cm"> * bitcoinaddress.js</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="cm"> * Bitcoin address and payment helper.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="cm"> * Copyright 2013 Mikko Ohtamaa http://opensourcehacker.com</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="cm"> * Licensed under MIT license.</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="c1">// Please note that script this depends on jQuery,</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="c1">// but I did not find a solution for having UMD loading for the script,</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="c1">// so that jQuery would be available through browserify bundling</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="c1">// OR CDN. Include jQuery externally before including this script.</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="cm">/* global module, require */</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"><span class="k">var</span> qrcode <span class="o">=</span> <span class="nf">require</span>(<span class="s2">&quot;./qrcode.js&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"><span class="c1">// jQuery reference</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="k">var</span> $;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line"><span class="nv">module</span>.exports <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">    config <span class="o">:</span> <span class="kc">null</span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line"><span class="cm">     * Create URL for bitcoin URI scheme payments.</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line"><span class="cm">     * https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki#Examples</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line"><span class="cm">     * http://bitcoin.stackexchange.com/questions/4987/bitcoin-url-scheme</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line"><span class="cm">     * @param  {String} address Receiving address</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line"><span class="cm">     * @param  {String} amount  Amount as big decimal</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line"><span class="cm">     * @param  {String} label   [description]</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line"><span class="cm">     * @param  {[type]} message [description]</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line"><span class="cm">     * @return {[type]}         [description]</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">    <span class="nf">buildBitcoinURI</span> : <span class="kt">function</span>(<span class="nv">address</span>, <span class="nv">amount</span>, <span class="nv">label</span>, <span class="nv">message</span>) {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">        <span class="k">var</span> tmpl <span class="o">=</span> [<span class="s2">&quot;bitcoin:&quot;</span>, address, <span class="s2">&quot;?&quot;</span>];</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">        <span class="k">if</span>(amount) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">            tmpl <span class="o">=</span> tmpl.<span class="nf">concat</span>([<span class="s2">&quot;amount=&quot;</span>, encodeURIComponent(amount), <span class="s2">&quot;&amp;&quot;</span>]);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">        <span class="k">if</span>(label) {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">            tmpl <span class="o">=</span> tmpl.<span class="nf">concat</span>([<span class="s2">&quot;label=&quot;</span>, encodeURIComponent(label), <span class="s2">&quot;&amp;&quot;</span>]);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">        <span class="k">if</span>(message) {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">            tmpl <span class="o">=</span> tmpl.<span class="nf">concat</span>([<span class="s2">&quot;message=&quot;</span>, encodeURIComponent(message), <span class="s2">&quot;&amp;&quot;</span>]);</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">        <span class="c1">// Remove prefixing extra</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">        <span class="k">var</span> lastc <span class="o">=</span> tmpl[tmpl.<span class="no">length</span><span class="o">-</span><span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">        <span class="k">if</span>(lastc <span class="o">==</span> <span class="s2">&quot;&amp;&quot;</span> <span class="o">||</span> lastc <span class="o">==</span> <span class="s2">&quot;?&quot;</span>) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">            tmpl <span class="o">=</span> tmpl.<span class="nf">splice</span>(<span class="m">0</span>, tmpl.<span class="no">length</span><span class="o">-</span><span class="m">1</span>);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        <span class="k">return</span> tmpl.<span class="nf">join</span>(<span class="s2">&quot;&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line"><span class="cm">     * Build special HTML for bitcoin address manipulation.</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line"><span class="cm">     * @param  {DOM} elem   Templatized target</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line"><span class="cm">     * @param  {DOM} source Original source tree element with data attributes</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">    <span class="nf">buildControls</span> : <span class="kt">function</span>(<span class="nv">elem</span>, <span class="nv">source</span>) {</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">        <span class="c1">// Replace .bitcoin-address in the template</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">        <span class="k">var</span> addr <span class="o">=</span> elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-address&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">        <span class="c1">// Add a maker class so that we don&#39;t reapply template</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">        <span class="c1">// on the subsequent scans</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">        addr.addClass(<span class="s2">&quot;bitcoin-address-controls&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">        addr.<span class="no">text</span>(source.attr(<span class="s2">&quot;data-bc-address&quot;</span>));</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">        <span class="c1">// Copy orignal attributes;</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">        $.each([<span class="s2">&quot;address&quot;</span>, <span class="s2">&quot;amount&quot;</span>, <span class="s2">&quot;label&quot;</span>, <span class="s2">&quot;message&quot;</span>], <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">            <span class="k">var</span> attrName <span class="o">=</span> <span class="s2">&quot;data-bc-&quot;</span> <span class="o">+</span> <span class="nb">this</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">            elem.attr(attrName, source.attr(attrName));</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">        <span class="c1">// Build BTC URL</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">        <span class="k">var</span> url <span class="o">=</span> <span class="nb">this</span>.buildBitcoinURI(source.attr(<span class="s2">&quot;data-bc-address&quot;</span>),</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">            source.attr(<span class="s2">&quot;data-bc-amount&quot;</span>),</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">            source.attr(<span class="s2">&quot;data-bc-label&quot;</span>),</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">            source.attr(<span class="s2">&quot;data-bc-message&quot;</span>));</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">        elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-address-action-send&quot;</span>).attr(<span class="s2">&quot;href&quot;</span>, url);</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line"><span class="cm">     * Get the template element defined in the options.</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line"><span class="cm">     * @return {[type]} [description]</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">    <span class="nf">getTemplate</span> : <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">        <span class="k">var</span> template <span class="o">=</span> <span class="no">document</span>.<span class="nf">getElementById</span>(<span class="nb">this</span>.config.template);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">        <span class="k">if</span>(<span class="o">!</span>template) {</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">            <span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;Bitcoin address template element missing:&quot;</span> <span class="o">+</span> <span class="nb">this</span>.config.template);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">        template <span class="o">=</span> $(template);</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">        <span class="k">if</span>(template.<span class="no">size</span>() <span class="o">!=</span> <span class="m">1</span>) {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">            <span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;Bitcoin address template DOM does not contain a single element&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">        <span class="k">return</span> template;</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line"><span class="cm">     * Applies bitcoinaddress DOM template to a certain element.</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line"><span class="cm">     * The `target` element must contain necessary data-attributes</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line"><span class="cm">     * from where we scoop the info.</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line"><span class="cm">     * Also builds bitcoin: URI.</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line"><span class="cm">     * @param {jQuery} elem jQuery selection of target bitcoin address</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line"><span class="cm">     * @param {jQuery} template (optional) Template element to be applied</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">    <span class="nf">applyTemplate</span> : <span class="kt">function</span>(<span class="nv">target</span>, <span class="nv">template</span>) {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">        <span class="k">if</span>(<span class="o">!</span>template) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">            template <span class="o">=</span> <span class="nb">this</span>.getTemplate();</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">        <span class="c1">// Make a deep copy, so we don&#39;t accidentally modify</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">        <span class="c1">// template elements in-place</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">        <span class="k">var</span> elem <span class="o">=</span> template.clone(<span class="kc">false</span>, <span class="kc">true</span>);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">        <span class="nb">this</span>.buildControls(elem, target);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">        <span class="c1">// Make sure we are visible (HTML5 way, CSS way)</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">        <span class="c1">// and clean up the template id if we managed to copy it around</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">        elem.removeAttr(<span class="s2">&quot;hidden id&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">        elem.show();</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">        target.replaceWith(elem);</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line"><span class="cm">     * Scan the page for bitcoin addresses.</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line"><span class="cm">     * Create user interface for all bitcoin address elements on the page-.</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line"><span class="cm">     * You can call this function multiple times if new bitcoin addresses become available.</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">    <span class="nf">scan</span>: <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">        <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">        <span class="k">var</span> template <span class="o">=</span> <span class="nb">this</span>.getTemplate();</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">        <span class="c1">// Optionally bail out if the default selection</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">        <span class="c1">// is not given (user calls applyTemplate() manually)</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">        <span class="k">if</span>(<span class="o">!</span><span class="nb">this</span>.config.selector) {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">            <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">        $(<span class="nb">this</span>.config.selector).each(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">            <span class="k">var</span> $<span class="nb">this</span> <span class="o">=</span> $(<span class="nb">this</span>);</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">            <span class="c1">// Template already applied</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">            <span class="k">if</span>($<span class="nb">this</span>.hasClass(<span class="s2">&quot;bitcoin-address-controls&quot;</span>)) {</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">                <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">            <span class="c1">// Make sure we don&#39;t apply the template on the template itself</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">            <span class="k">if</span>($<span class="nb">this</span>.parents(<span class="s2">&quot;#&quot;</span> <span class="o">+</span> self.config.template).<span class="no">size</span>() <span class="o">&gt;</span> <span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">                <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">            <span class="c1">// Don&#39;t reapply templates on subsequent scans</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">            self.applyTemplate($<span class="nb">this</span>, template);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line"><span class="cm">     * Prepare selection in .bitcoin-address-container for copy paste</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">    <span class="nf">prepareCopySelection</span> : <span class="kt">function</span>(<span class="nv">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">        <span class="k">var</span> addy <span class="o">=</span> elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-address&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">        <span class="no">window</span>.<span class="nf">getSelection</span>().selectAllChildren(addy.get(<span class="m">0</span>));</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">        elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-action-hint&quot;</span>).hide();</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">        elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-action-hint-copy&quot;</span>).slideDown();</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line"><span class="cm">     * Send payment action handler</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">    <span class="nf">onActionSend</span> : <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">        <span class="k">var</span> elem <span class="o">=</span> $(e.<span class="no">target</span>).parents(<span class="s2">&quot;.bitcoin-address-container&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">        <span class="c1">// We never know if the click action was succesfully complete</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">        elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-action-hint&quot;</span>).hide();</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">        elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-action-hint-send&quot;</span>).slideDown();</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line"><span class="cm">     * Copy action handler.</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">    <span class="nf">onActionCopy</span> : <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">        e.preventDefault();</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">        <span class="k">var</span> elem <span class="o">=</span> $(e.<span class="no">target</span>).parents(<span class="s2">&quot;.bitcoin-address-container&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">        <span class="nb">this</span>.prepareCopySelection(elem);</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">        <span class="k">return</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line"><span class="cm">     * Generates QR code inside the target element.</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">    <span class="nf">generateQR</span> : <span class="kt">function</span>(<span class="nv">qrContainer</span>) {</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">        <span class="k">var</span> elem <span class="o">=</span> qrContainer.parents(<span class="s2">&quot;.bitcoin-address-container&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">        <span class="c1">//var addr = elem.attr(&quot;data-bc-address&quot;);</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">        <span class="k">var</span> url <span class="o">=</span> <span class="nb">this</span>.buildBitcoinURI(elem.attr(<span class="s2">&quot;data-bc-address&quot;</span>),</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">            elem.attr(<span class="s2">&quot;data-bc-amount&quot;</span>),</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">            elem.attr(<span class="s2">&quot;data-bc-label&quot;</span>));</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">        <span class="nc">console</span><span class="nf">.log</span>(<span class="s2">&quot;QR address URL is &quot;</span>, url);</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">        <span class="k">var</span> options <span class="o">=</span> $.extend({}, <span class="nb">this</span>.config.qr, {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">            text<span class="o">:</span> url</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">        <span class="k">var</span> qrCode <span class="o">=</span> <span class="o">new</span> <span class="nc">qrcode.QRCode</span>(qrContainer.get(<span class="m">0</span>), options);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line"><span class="cm">     * QR code generation action.</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">    <span class="nf">onActionQR</span> : <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">        e.preventDefault();</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">        <span class="k">var</span> elem <span class="o">=</span> $(e.<span class="no">target</span>).parents(<span class="s2">&quot;.bitcoin-address-container&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">        <span class="k">var</span> addr <span class="o">=</span> elem.attr(<span class="s2">&quot;data-bc-address&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">        <span class="k">var</span> qrContainer <span class="o">=</span> elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-address-qr-container&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">        <span class="c1">// Lazily generate the QR code</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">        <span class="k">if</span>(qrContainer.children().<span class="no">size</span>() <span class="o">===</span> <span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">            <span class="nb">this</span>.generateQR(qrContainer);</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">        elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-action-hint&quot;</span>).hide();</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">        elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-action-hint-qr&quot;</span>).slideDown();</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">        <span class="k">return</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">    <span class="nf">onClick</span> : <span class="kt">function</span>(<span class="nv">e</span>) {</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">        <span class="k">var</span> elem <span class="o">=</span> $(e.<span class="no">target</span>).parents(<span class="s2">&quot;.bitcoin-address-container&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">        <span class="nb">this</span>.prepareCopySelection(elem);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">    <span class="nf">initUX</span> : <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">        <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>;</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">        $(<span class="no">document</span>.<span class="no">body</span>).on(<span class="s2">&quot;click&quot;</span>, <span class="s2">&quot;.bitcoin-address-action-copy&quot;</span>, $.proxy(<span class="nb">this</span>.onActionCopy, <span class="nb">this</span>));</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">        $(<span class="no">document</span>.<span class="no">body</span>).on(<span class="s2">&quot;click&quot;</span>, <span class="s2">&quot;.bitcoin-address-action-send&quot;</span>, $.proxy(<span class="nb">this</span>.onActionSend, <span class="nb">this</span>));</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">        $(<span class="no">document</span>.<span class="no">body</span>).on(<span class="s2">&quot;click&quot;</span>, <span class="s2">&quot;.bitcoin-address-action-qr&quot;</span>, $.proxy(<span class="nb">this</span>.onActionQR, <span class="nb">this</span>));</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">        $(<span class="no">document</span>.<span class="no">body</span>).on(<span class="s2">&quot;click&quot;</span>, <span class="s2">&quot;.bitcoin-address&quot;</span>, $.proxy(<span class="nb">this</span>.<span class="nf">onClick</span>, <span class="nb">this</span>));</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">        <span class="c1">// Hide any copy hints when user presses CTRL+C</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">        <span class="c1">// on any part of the page</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">        $(<span class="no">document</span>.<span class="no">body</span>).on(<span class="s2">&quot;copy&quot;</span>, <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">            $(<span class="s2">&quot;.bitcoin-action-hint-copy&quot;</span>).slideUp();</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">        <span class="k">if</span>(<span class="nb">this</span>.config.generateQREagerly) {</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">            $(<span class="s2">&quot;.bitcoin-address-container&quot;</span>).each(<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">                <span class="k">var</span> elem <span class="o">=</span> $(<span class="nb">this</span>);</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">                <span class="k">var</span> addr <span class="o">=</span> elem.attr(<span class="s2">&quot;data-bc-address&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">                <span class="k">var</span> qrContainer <span class="o">=</span> elem.<span class="nf">find</span>(<span class="s2">&quot;.bitcoin-address-qr-container&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">                self.generateQR(qrContainer);</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line"><span class="cm">     * Call to initialize the detault bitcoinprices UI.</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">    <span class="nf">init</span> : <span class="kt">function</span>(<span class="nv">_config</span>) {</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">        <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">        <span class="k">if</span>(<span class="o">!</span>_config) {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">            <span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;You must give bitcoinaddress config object&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">        <span class="nb">this</span>.config <span class="o">=</span> _config;</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">        $ <span class="o">=</span> <span class="nb">this</span>.config.jQuery <span class="o">||</span> jQuery;</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">        <span class="nb">this</span>.scan();</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">        <span class="nb">this</span>.initUX();</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">},{<span class="s2">&quot;./qrcode.js&quot;</span><span class="o">:</span><span class="m">2</span>}],<span class="m">2</span><span class="o">:</span>[<span class="kt">function</span>(<span class="nv">require</span>,<span class="nv">module</span>,<span class="nv">exports</span>){</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line"><span class="k">var</span> <span class="nv">global</span><span class="o">=typeof</span> self <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">?</span> self <span class="o">:</span> <span class="o">typeof</span> <span class="no">window</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">?</span> <span class="no">window</span> <span class="o">:</span> {};<span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line"><span class="cm"> * @fileoverview</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line"><span class="cm"> * - Using the &#39;QRCode for Javascript library&#39;</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line"><span class="cm"> * - Fixed dataset of &#39;QRCode for Javascript library&#39; for support full-spec.</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line"><span class="cm"> * - this library has no dependencies.</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line"><span class="cm"> * @author davidshimjs</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line"><span class="cm"> * @see &lt;a href=&quot;http://www.d-project.com/&quot; target=&quot;_blank&quot;&gt;http://www.d-project.com/&lt;/a&gt;</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line"><span class="cm"> * @see &lt;a href=&quot;http://jeromeetienne.github.com/jquery-qrcode/&quot; target=&quot;_blank&quot;&gt;http://jeromeetienne.github.com/jquery-qrcode/&lt;/a&gt;</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line"><span class="cm">/* global document */</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line"><span class="k">var</span> QRCode;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">(<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">    <span class="c1">//---------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">    <span class="c1">// QRCode for JavaScript</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">    <span class="c1">// Copyright (c) 2009 Kazuhiko Arase</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">    <span class="c1">// URL: http://www.d-project.com/</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">    <span class="c1">// Licensed under the MIT license:</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">    <span class="c1">//   http://www.opensource.org/licenses/mit-license.php</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">    <span class="c1">// The word &quot;QR Code&quot; is registered trademark of</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">    <span class="c1">// DENSO WAVE INCORPORATED</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">    <span class="c1">//   http://www.denso-wave.com/qrcode/faqpatent-e.html</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">    <span class="c1">//---------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">QR8bitByte</span>(<span class="nv">data</span>) {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">        <span class="nb">this</span>.mode <span class="o">=</span> QRMode.MODE_8BIT_BYTE;</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">        <span class="nb">this</span>.<span class="no">data</span> <span class="o">=</span> data;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">        <span class="nb">this</span>.parsedData <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">        <span class="c1">// Added to support UTF-8 Characters</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">        <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>, l <span class="o">=</span> <span class="nb">this</span>.<span class="no">data</span>.<span class="no">length</span>; i <span class="o">&lt;</span> l; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">            <span class="k">var</span> byteArray <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">            <span class="k">var</span> code <span class="o">=</span> <span class="nb">this</span>.<span class="no">data</span>.<span class="nf">charCodeAt</span>(i);</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">            <span class="k">if</span> (code <span class="o">&gt;</span> <span class="m">0x10000</span>) {</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">                byteArray[<span class="m">0</span>] <span class="o">=</span> <span class="m">0xF0</span> | ((code <span class="o">&amp;</span> <span class="m">0x1C0000</span>) <span class="o">&gt;&gt;&gt;</span> <span class="m">18</span>);</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">                byteArray[<span class="m">1</span>] <span class="o">=</span> <span class="m">0x80</span> | ((code <span class="o">&amp;</span> <span class="m">0x3F000</span>) <span class="o">&gt;&gt;&gt;</span> <span class="m">12</span>);</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">                byteArray[<span class="m">2</span>] <span class="o">=</span> <span class="m">0x80</span> | ((code <span class="o">&amp;</span> <span class="m">0xFC0</span>) <span class="o">&gt;&gt;&gt;</span> <span class="m">6</span>);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">                byteArray[<span class="m">3</span>] <span class="o">=</span> <span class="m">0x80</span> | (code <span class="o">&amp;</span> <span class="m">0x3F</span>);</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">            } <span class="k">else</span> <span class="k">if</span> (code <span class="o">&gt;</span> <span class="m">0x800</span>) {</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">                byteArray[<span class="m">0</span>] <span class="o">=</span> <span class="m">0xE0</span> | ((code <span class="o">&amp;</span> <span class="m">0xF000</span>) <span class="o">&gt;&gt;&gt;</span> <span class="m">12</span>);</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">                byteArray[<span class="m">1</span>] <span class="o">=</span> <span class="m">0x80</span> | ((code <span class="o">&amp;</span> <span class="m">0xFC0</span>) <span class="o">&gt;&gt;&gt;</span> <span class="m">6</span>);</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">                byteArray[<span class="m">2</span>] <span class="o">=</span> <span class="m">0x80</span> | (code <span class="o">&amp;</span> <span class="m">0x3F</span>);</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">            } <span class="k">else</span> <span class="k">if</span> (code <span class="o">&gt;</span> <span class="m">0x80</span>) {</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">                byteArray[<span class="m">0</span>] <span class="o">=</span> <span class="m">0xC0</span> | ((code <span class="o">&amp;</span> <span class="m">0x7C0</span>) <span class="o">&gt;&gt;&gt;</span> <span class="m">6</span>);</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">                byteArray[<span class="m">1</span>] <span class="o">=</span> <span class="m">0x80</span> | (code <span class="o">&amp;</span> <span class="m">0x3F</span>);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">            } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">                byteArray[<span class="m">0</span>] <span class="o">=</span> code;</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">            <span class="nb">this</span>.parsedData.<span class="nf">push</span>(byteArray);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">        <span class="nb">this</span>.parsedData <span class="o">=</span> <span class="no">Array</span>.<span class="no">prototype</span>.concat.<span class="nf">apply</span>([], <span class="nb">this</span>.parsedData);</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">        <span class="k">if</span> (<span class="nb">this</span>.parsedData.<span class="no">length</span> <span class="o">!=</span> <span class="nb">this</span>.<span class="no">data</span>.<span class="no">length</span>) {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">            <span class="nb">this</span>.parsedData.<span class="nf">unshift</span>(<span class="m">191</span>);</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">            <span class="nb">this</span>.parsedData.<span class="nf">unshift</span>(<span class="m">187</span>);</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">            <span class="nb">this</span>.parsedData.<span class="nf">unshift</span>(<span class="m">239</span>);</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">    <span class="no">QR8bitByte</span>.<span class="no">prototype</span> <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">        <span class="nf">getLength</span>: <span class="kt">function</span> (<span class="nv">buffer</span>) {</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">            <span class="k">return</span> <span class="nb">this</span>.parsedData.<span class="no">length</span>;</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">        <span class="nf">write</span>: <span class="kt">function</span> (<span class="nv">buffer</span>) {</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">            <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>, l <span class="o">=</span> <span class="nb">this</span>.parsedData.<span class="no">length</span>; i <span class="o">&lt;</span> l; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">                buffer.put(<span class="nb">this</span>.parsedData[i], <span class="m">8</span>);</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">QRCodeModel</span>(<span class="nv">typeNumber</span>, <span class="nv">errorCorrectLevel</span>) {</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">        <span class="nb">this</span>.typeNumber <span class="o">=</span> typeNumber;</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">        <span class="nb">this</span>.errorCorrectLevel <span class="o">=</span> errorCorrectLevel;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">        <span class="nb">this</span>.modules <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">        <span class="nb">this</span>.moduleCount <span class="o">=</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">        <span class="nb">this</span>.dataCache <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">        <span class="nb">this</span>.dataList <span class="o">=</span> [];</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">    <span class="no">QRCodeModel</span>.<span class="no">prototype</span><span class="o">=</span>{<span class="nf">addData</span>:<span class="kt">function</span>(<span class="nv">data</span>){<span class="k">var</span> newData<span class="o">=</span><span class="o">new</span> <span class="nc">QR8bitByte</span>(data);<span class="nb">this</span>.dataList.<span class="nf">push</span>(newData);<span class="nb">this</span>.dataCache<span class="o">=</span><span class="kc">null</span>;},<span class="nf">isDark</span>:<span class="kt">function</span>(<span class="nv">row</span>,<span class="nv">col</span>){<span class="k">if</span>(row<span class="o">&lt;</span><span class="m">0</span><span class="o">||</span><span class="nb">this</span>.moduleCount<span class="o">&lt;=</span>row<span class="o">||</span>col<span class="o">&lt;</span><span class="m">0</span><span class="o">||</span><span class="nb">this</span>.moduleCount<span class="o">&lt;=</span>col){<span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(row<span class="o">+</span><span class="s2">&quot;,&quot;</span><span class="o">+</span>col);}</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">    <span class="k">return</span> <span class="nb">this</span>.modules[row][col];},<span class="nf">getModuleCount</span>:<span class="kt">function</span>(){<span class="k">return</span> <span class="nb">this</span>.moduleCount;},<span class="nf">make</span>:<span class="kt">function</span>(){<span class="nb">this</span>.makeImpl(<span class="kc">false</span>,<span class="nb">this</span>.getBestMaskPattern());},<span class="nf">makeImpl</span>:<span class="kt">function</span>(<span class="nv">test</span>,<span class="nv">maskPattern</span>){<span class="nb">this</span>.moduleCount<span class="o">=</span><span class="nb">this</span>.typeNumber<span class="o">*</span><span class="m">4</span><span class="o">+</span><span class="m">17</span>;<span class="nb">this</span>.modules<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(<span class="nb">this</span>.moduleCount);<span class="k">for</span>(<span class="k">var</span> row<span class="o">=</span><span class="m">0</span>;row<span class="o">&lt;</span><span class="nb">this</span>.moduleCount;row<span class="o">++</span>){<span class="nb">this</span>.modules[row]<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(<span class="nb">this</span>.moduleCount);<span class="k">for</span>(<span class="k">var</span> col<span class="o">=</span><span class="m">0</span>;col<span class="o">&lt;</span><span class="nb">this</span>.moduleCount;col<span class="o">++</span>){<span class="nb">this</span>.modules[row][col]<span class="o">=</span><span class="kc">null</span>;}}</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">    <span class="nb">this</span>.setupPositionProbePattern(<span class="m">0</span>,<span class="m">0</span>);<span class="nb">this</span>.setupPositionProbePattern(<span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">7</span>,<span class="m">0</span>);<span class="nb">this</span>.setupPositionProbePattern(<span class="m">0</span>,<span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">7</span>);<span class="nb">this</span>.setupPositionAdjustPattern();<span class="nb">this</span>.setupTimingPattern();<span class="nb">this</span>.setupTypeInfo(test,maskPattern);<span class="k">if</span>(<span class="nb">this</span>.typeNumber<span class="o">&gt;=</span><span class="m">7</span>){<span class="nb">this</span>.setupTypeNumber(test);}</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">    <span class="k">if</span>(<span class="nb">this</span>.dataCache<span class="o">==</span><span class="kc">null</span>){<span class="nb">this</span>.dataCache<span class="o">=</span>QRCodeModel.createData(<span class="nb">this</span>.typeNumber,<span class="nb">this</span>.errorCorrectLevel,<span class="nb">this</span>.dataList);}</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">    <span class="nb">this</span>.mapData(<span class="nb">this</span>.dataCache,maskPattern);},<span class="nf">setupPositionProbePattern</span>:<span class="kt">function</span>(<span class="nv">row</span>,<span class="nv">col</span>){<span class="k">for</span>(<span class="k">var</span> r<span class="o">=-</span><span class="m">1</span>;r<span class="o">&lt;=</span><span class="m">7</span>;r<span class="o">++</span>){<span class="k">if</span>(row<span class="o">+</span>r<span class="o">&lt;=-</span><span class="m">1</span><span class="o">||</span><span class="nb">this</span>.moduleCount<span class="o">&lt;=</span>row<span class="o">+</span>r)<span class="k">continue</span>;<span class="k">for</span>(<span class="k">var</span> c<span class="o">=-</span><span class="m">1</span>;c<span class="o">&lt;=</span><span class="m">7</span>;c<span class="o">++</span>){<span class="k">if</span>(col<span class="o">+</span>c<span class="o">&lt;=-</span><span class="m">1</span><span class="o">||</span><span class="nb">this</span>.moduleCount<span class="o">&lt;=</span>col<span class="o">+</span>c)<span class="k">continue</span>;<span class="k">if</span>((<span class="m">0</span><span class="o">&lt;=</span>r<span class="o">&amp;&amp;</span>r<span class="o">&lt;=</span><span class="m">6</span><span class="o">&amp;&amp;</span>(c<span class="o">==</span><span class="m">0</span><span class="o">||</span>c<span class="o">==</span><span class="m">6</span>))<span class="o">||</span>(<span class="m">0</span><span class="o">&lt;=</span>c<span class="o">&amp;&amp;</span>c<span class="o">&lt;=</span><span class="m">6</span><span class="o">&amp;&amp;</span>(r<span class="o">==</span><span class="m">0</span><span class="o">||</span>r<span class="o">==</span><span class="m">6</span>))<span class="o">||</span>(<span class="m">2</span><span class="o">&lt;=</span>r<span class="o">&amp;&amp;</span>r<span class="o">&lt;=</span><span class="m">4</span><span class="o">&amp;&amp;</span><span class="m">2</span><span class="o">&lt;=</span>c<span class="o">&amp;&amp;</span>c<span class="o">&lt;=</span><span class="m">4</span>)){<span class="nb">this</span>.modules[row<span class="o">+</span>r][col<span class="o">+</span>c]<span class="o">=</span><span class="kc">true</span>;}<span class="k">else</span>{<span class="nb">this</span>.modules[row<span class="o">+</span>r][col<span class="o">+</span>c]<span class="o">=</span><span class="kc">false</span>;}}}},<span class="nf">getBestMaskPattern</span>:<span class="kt">function</span>(){<span class="k">var</span> minLostPoint<span class="o">=</span><span class="m">0</span>;<span class="k">var</span> pattern<span class="o">=</span><span class="m">0</span>;<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="m">8</span>;i<span class="o">++</span>){<span class="nb">this</span>.makeImpl(<span class="kc">true</span>,i);<span class="k">var</span> lostPoint<span class="o">=</span>QRUtil.getLostPoint(<span class="nb">this</span>);<span class="k">if</span>(i<span class="o">==</span><span class="m">0</span><span class="o">||</span>minLostPoint<span class="o">&gt;</span>lostPoint){minLostPoint<span class="o">=</span>lostPoint;pattern<span class="o">=</span>i;}}</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">    <span class="k">return</span> pattern;},<span class="nf">createMovieClip</span>:<span class="kt">function</span>(<span class="nv">target_mc</span>,<span class="nv">instance_name</span>,<span class="nv">depth</span>){<span class="k">var</span> qr_mc<span class="o">=</span>target_mc.createEmptyMovieClip(instance_name,depth);<span class="k">var</span> cs<span class="o">=</span><span class="m">1</span>;<span class="nb">this</span>.make();<span class="k">for</span>(<span class="k">var</span> row<span class="o">=</span><span class="m">0</span>;row<span class="o">&lt;</span><span class="nb">this</span>.modules.<span class="no">length</span>;row<span class="o">++</span>){<span class="k">var</span> y<span class="o">=</span>row<span class="o">*</span>cs;<span class="k">for</span>(<span class="k">var</span> col<span class="o">=</span><span class="m">0</span>;col<span class="o">&lt;</span><span class="nb">this</span>.modules[row].<span class="no">length</span>;col<span class="o">++</span>){<span class="k">var</span> x<span class="o">=</span>col<span class="o">*</span>cs;<span class="k">var</span> dark<span class="o">=</span><span class="nb">this</span>.modules[row][col];<span class="k">if</span>(dark){qr_mc.beginFill(<span class="m">0</span>,<span class="m">100</span>);qr_mc.<span class="nf">moveTo</span>(x,y);qr_mc.lineTo(x<span class="o">+</span>cs,y);qr_mc.lineTo(x<span class="o">+</span>cs,y<span class="o">+</span>cs);qr_mc.lineTo(x,y<span class="o">+</span>cs);qr_mc.endFill();}}}</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">    <span class="k">return</span> qr_mc;},<span class="nf">setupTimingPattern</span>:<span class="kt">function</span>(){<span class="k">for</span>(<span class="k">var</span> r<span class="o">=</span><span class="m">8</span>;r<span class="o">&lt;</span><span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">8</span>;r<span class="o">++</span>){<span class="k">if</span>(<span class="nb">this</span>.modules[r][<span class="m">6</span>]<span class="o">!=</span><span class="kc">null</span>){<span class="k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">    <span class="nb">this</span>.modules[r][<span class="m">6</span>]<span class="o">=</span>(r<span class="o">%</span><span class="m">2</span><span class="o">==</span><span class="m">0</span>);}</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> c<span class="o">=</span><span class="m">8</span>;c<span class="o">&lt;</span><span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">8</span>;c<span class="o">++</span>){<span class="k">if</span>(<span class="nb">this</span>.modules[<span class="m">6</span>][c]<span class="o">!=</span><span class="kc">null</span>){<span class="k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">    <span class="nb">this</span>.modules[<span class="m">6</span>][c]<span class="o">=</span>(c<span class="o">%</span><span class="m">2</span><span class="o">==</span><span class="m">0</span>);}},<span class="nf">setupPositionAdjustPattern</span>:<span class="kt">function</span>(){<span class="k">var</span> pos<span class="o">=</span>QRUtil.getPatternPosition(<span class="nb">this</span>.typeNumber);<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>pos.<span class="no">length</span>;i<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> j<span class="o">=</span><span class="m">0</span>;j<span class="o">&lt;</span>pos.<span class="no">length</span>;j<span class="o">++</span>){<span class="k">var</span> row<span class="o">=</span>pos[i];<span class="k">var</span> col<span class="o">=</span>pos[j];<span class="k">if</span>(<span class="nb">this</span>.modules[row][col]<span class="o">!=</span><span class="kc">null</span>){<span class="k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> r<span class="o">=-</span><span class="m">2</span>;r<span class="o">&lt;=</span><span class="m">2</span>;r<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> c<span class="o">=-</span><span class="m">2</span>;c<span class="o">&lt;=</span><span class="m">2</span>;c<span class="o">++</span>){<span class="k">if</span>(r<span class="o">==-</span><span class="m">2</span><span class="o">||</span>r<span class="o">==</span><span class="m">2</span><span class="o">||</span>c<span class="o">==-</span><span class="m">2</span><span class="o">||</span>c<span class="o">==</span><span class="m">2</span><span class="o">||</span>(r<span class="o">==</span><span class="m">0</span><span class="o">&amp;&amp;</span>c<span class="o">==</span><span class="m">0</span>)){<span class="nb">this</span>.modules[row<span class="o">+</span>r][col<span class="o">+</span>c]<span class="o">=</span><span class="kc">true</span>;}<span class="k">else</span>{<span class="nb">this</span>.modules[row<span class="o">+</span>r][col<span class="o">+</span>c]<span class="o">=</span><span class="kc">false</span>;}}}}}},<span class="nf">setupTypeNumber</span>:<span class="kt">function</span>(<span class="nv">test</span>){<span class="k">var</span> bits<span class="o">=</span>QRUtil.getBCHTypeNumber(<span class="nb">this</span>.typeNumber);<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="m">18</span>;i<span class="o">++</span>){<span class="k">var</span> mod<span class="o">=</span>(<span class="o">!</span>test<span class="o">&amp;&amp;</span>((bits<span class="o">&gt;&gt;</span>i)<span class="o">&amp;</span><span class="m">1</span>)<span class="o">==</span><span class="m">1</span>);<span class="nb">this</span>.modules[<span class="no">Math</span>.<span class="nf">floor</span>(i/<span class="m">3</span>)][i<span class="o">%</span><span class="m">3</span><span class="o">+</span><span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">8</span><span class="o">-</span><span class="m">3</span>]<span class="o">=</span>mod;}</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="m">18</span>;i<span class="o">++</span>){<span class="k">var</span> mod<span class="o">=</span>(<span class="o">!</span>test<span class="o">&amp;&amp;</span>((bits<span class="o">&gt;&gt;</span>i)<span class="o">&amp;</span><span class="m">1</span>)<span class="o">==</span><span class="m">1</span>);<span class="nb">this</span>.modules[i<span class="o">%</span><span class="m">3</span><span class="o">+</span><span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">8</span><span class="o">-</span><span class="m">3</span>][<span class="no">Math</span>.<span class="nf">floor</span>(i/<span class="m">3</span>)]<span class="o">=</span>mod;}},<span class="nf">setupTypeInfo</span>:<span class="kt">function</span>(<span class="nv">test</span>,<span class="nv">maskPattern</span>){<span class="k">var</span> data<span class="o">=</span>(<span class="nb">this</span>.errorCorrectLevel<span class="o">&lt;&lt;</span><span class="m">3</span>)|maskPattern;<span class="k">var</span> bits<span class="o">=</span>QRUtil.getBCHTypeInfo(data);<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="m">15</span>;i<span class="o">++</span>){<span class="k">var</span> mod<span class="o">=</span>(<span class="o">!</span>test<span class="o">&amp;&amp;</span>((bits<span class="o">&gt;&gt;</span>i)<span class="o">&amp;</span><span class="m">1</span>)<span class="o">==</span><span class="m">1</span>);<span class="k">if</span>(i<span class="o">&lt;</span><span class="m">6</span>){<span class="nb">this</span>.modules[i][<span class="m">8</span>]<span class="o">=</span>mod;}<span class="k">else</span> <span class="k">if</span>(i<span class="o">&lt;</span><span class="m">8</span>){<span class="nb">this</span>.modules[i<span class="o">+</span><span class="m">1</span>][<span class="m">8</span>]<span class="o">=</span>mod;}<span class="k">else</span>{<span class="nb">this</span>.modules[<span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">15</span><span class="o">+</span>i][<span class="m">8</span>]<span class="o">=</span>mod;}}</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="m">15</span>;i<span class="o">++</span>){<span class="k">var</span> mod<span class="o">=</span>(<span class="o">!</span>test<span class="o">&amp;&amp;</span>((bits<span class="o">&gt;&gt;</span>i)<span class="o">&amp;</span><span class="m">1</span>)<span class="o">==</span><span class="m">1</span>);<span class="k">if</span>(i<span class="o">&lt;</span><span class="m">8</span>){<span class="nb">this</span>.modules[<span class="m">8</span>][<span class="nb">this</span>.moduleCount<span class="o">-</span>i<span class="o">-</span><span class="m">1</span>]<span class="o">=</span>mod;}<span class="k">else</span> <span class="k">if</span>(i<span class="o">&lt;</span><span class="m">9</span>){<span class="nb">this</span>.modules[<span class="m">8</span>][<span class="m">15</span><span class="o">-</span>i<span class="o">-</span><span class="m">1</span><span class="o">+</span><span class="m">1</span>]<span class="o">=</span>mod;}<span class="k">else</span>{<span class="nb">this</span>.modules[<span class="m">8</span>][<span class="m">15</span><span class="o">-</span>i<span class="o">-</span><span class="m">1</span>]<span class="o">=</span>mod;}}</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">    <span class="nb">this</span>.modules[<span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">8</span>][<span class="m">8</span>]<span class="o">=</span>(<span class="o">!</span>test);},<span class="nf">mapData</span>:<span class="kt">function</span>(<span class="nv">data</span>,<span class="nv">maskPattern</span>){<span class="k">var</span> inc<span class="o">=-</span><span class="m">1</span>;<span class="k">var</span> row<span class="o">=</span><span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">1</span>;<span class="k">var</span> bitIndex<span class="o">=</span><span class="m">7</span>;<span class="k">var</span> byteIndex<span class="o">=</span><span class="m">0</span>;<span class="k">for</span>(<span class="k">var</span> col<span class="o">=</span><span class="nb">this</span>.moduleCount<span class="o">-</span><span class="m">1</span>;col<span class="o">&gt;</span><span class="m">0</span>;col<span class="o">-=</span><span class="m">2</span>){<span class="k">if</span>(col<span class="o">==</span><span class="m">6</span>)col<span class="o">--</span>;<span class="k">while</span>(<span class="kc">true</span>){<span class="k">for</span>(<span class="k">var</span> c<span class="o">=</span><span class="m">0</span>;c<span class="o">&lt;</span><span class="m">2</span>;c<span class="o">++</span>){<span class="k">if</span>(<span class="nb">this</span>.modules[row][col<span class="o">-</span>c]<span class="o">==</span><span class="kc">null</span>){<span class="k">var</span> dark<span class="o">=</span><span class="kc">false</span>;<span class="k">if</span>(byteIndex<span class="o">&lt;</span>data.<span class="no">length</span>){dark<span class="o">=</span>(((data[byteIndex]<span class="o">&gt;&gt;&gt;</span>bitIndex)<span class="o">&amp;</span><span class="m">1</span>)<span class="o">==</span><span class="m">1</span>);}</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">    <span class="k">var</span> mask<span class="o">=</span>QRUtil.getMask(maskPattern,row,col<span class="o">-</span>c);<span class="k">if</span>(mask){dark<span class="o">=!</span>dark;}</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">    <span class="nb">this</span>.modules[row][col<span class="o">-</span>c]<span class="o">=</span>dark;bitIndex<span class="o">--</span>;<span class="k">if</span>(bitIndex<span class="o">==-</span><span class="m">1</span>){byteIndex<span class="o">++</span>;bitIndex<span class="o">=</span><span class="m">7</span>;}}}</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">    row<span class="o">+=</span>inc;<span class="k">if</span>(row<span class="o">&lt;</span><span class="m">0</span><span class="o">||</span><span class="nb">this</span>.moduleCount<span class="o">&lt;=</span>row){row<span class="o">-=</span>inc;inc<span class="o">=-</span>inc;<span class="k">break</span>;}}}}};QRCodeModel.PAD0<span class="o">=</span><span class="m">0xEC</span>;QRCodeModel.PAD1<span class="o">=</span><span class="m">0x11</span>;<span class="no">QRCodeModel</span>.<span class="nf">createData</span><span class="o">=</span><span class="kt">function</span>(<span class="nv">typeNumber</span>,<span class="nv">errorCorrectLevel</span>,<span class="nv">dataList</span>){<span class="k">var</span> rsBlocks<span class="o">=</span>QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);<span class="k">var</span> buffer<span class="o">=</span><span class="o">new</span> <span class="nc">QRBitBuffer</span>();<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>dataList.<span class="no">length</span>;i<span class="o">++</span>){<span class="k">var</span> data<span class="o">=</span>dataList[i];buffer.put(data.mode,<span class="m">4</span>);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.<span class="nf">write</span>(buffer);}</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">    <span class="k">var</span> totalDataCount<span class="o">=</span><span class="m">0</span>;<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>rsBlocks.<span class="no">length</span>;i<span class="o">++</span>){totalDataCount<span class="o">+=</span>rsBlocks[i].dataCount;}</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">    <span class="k">if</span>(buffer.getLengthInBits()<span class="o">&gt;</span>totalDataCount<span class="o">*</span><span class="m">8</span>){<span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;code length overflow. (&quot;</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">    <span class="o">+</span>buffer.getLengthInBits()</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">    <span class="o">+</span><span class="s2">&quot;&gt;&quot;</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">    <span class="o">+</span>totalDataCount<span class="o">*</span><span class="m">8</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">    <span class="o">+</span><span class="s2">&quot;)&quot;</span>);}</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">    <span class="k">if</span>(buffer.getLengthInBits()<span class="o">+</span><span class="m">4</span><span class="o">&lt;=</span>totalDataCount<span class="o">*</span><span class="m">8</span>){buffer.put(<span class="m">0</span>,<span class="m">4</span>);}</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">    <span class="k">while</span>(buffer.getLengthInBits()<span class="o">%</span><span class="m">8</span><span class="o">!=</span><span class="m">0</span>){buffer.putBit(<span class="kc">false</span>);}</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">    <span class="k">while</span>(<span class="kc">true</span>){<span class="k">if</span>(buffer.getLengthInBits()<span class="o">&gt;=</span>totalDataCount<span class="o">*</span><span class="m">8</span>){<span class="k">break</span>;}</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">    buffer.put(QRCodeModel.PAD0,<span class="m">8</span>);<span class="k">if</span>(buffer.getLengthInBits()<span class="o">&gt;=</span>totalDataCount<span class="o">*</span><span class="m">8</span>){<span class="k">break</span>;}</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">    buffer.put(QRCodeModel.PAD1,<span class="m">8</span>);}</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">    <span class="k">return</span> QRCodeModel.createBytes(buffer,rsBlocks);};<span class="no">QRCodeModel</span>.<span class="nf">createBytes</span><span class="o">=</span><span class="kt">function</span>(<span class="nv">buffer</span>,<span class="nv">rsBlocks</span>){<span class="k">var</span> offset<span class="o">=</span><span class="m">0</span>;<span class="k">var</span> maxDcCount<span class="o">=</span><span class="m">0</span>;<span class="k">var</span> maxEcCount<span class="o">=</span><span class="m">0</span>;<span class="k">var</span> dcdata<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(rsBlocks.<span class="no">length</span>);<span class="k">var</span> ecdata<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(rsBlocks.<span class="no">length</span>);<span class="k">for</span>(<span class="k">var</span> r<span class="o">=</span><span class="m">0</span>;r<span class="o">&lt;</span>rsBlocks.<span class="no">length</span>;r<span class="o">++</span>){<span class="k">var</span> dcCount<span class="o">=</span>rsBlocks[r].dataCount;<span class="k">var</span> ecCount<span class="o">=</span>rsBlocks[r].totalCount<span class="o">-</span>dcCount;maxDcCount<span class="o">=</span><span class="no">Math</span>.<span class="nf">max</span>(maxDcCount,dcCount);maxEcCount<span class="o">=</span><span class="no">Math</span>.<span class="nf">max</span>(maxEcCount,ecCount);dcdata[r]<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(dcCount);<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>dcdata[r].<span class="no">length</span>;i<span class="o">++</span>){dcdata[r][i]<span class="o">=</span><span class="m">0xff</span><span class="o">&amp;</span>buffer.buffer[i<span class="o">+</span>offset];}</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">    offset<span class="o">+=</span>dcCount;<span class="k">var</span> rsPoly<span class="o">=</span>QRUtil.getErrorCorrectPolynomial(ecCount);<span class="k">var</span> rawPoly<span class="o">=</span><span class="o">new</span> <span class="nc">QRPolynomial</span>(dcdata[r],rsPoly.getLength()<span class="o">-</span><span class="m">1</span>);<span class="k">var</span> modPoly<span class="o">=</span>rawPoly.mod(rsPoly);ecdata[r]<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(rsPoly.getLength()<span class="o">-</span><span class="m">1</span>);<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>ecdata[r].<span class="no">length</span>;i<span class="o">++</span>){<span class="k">var</span> modIndex<span class="o">=</span>i<span class="o">+</span>modPoly.getLength()<span class="o">-</span>ecdata[r].<span class="no">length</span>;ecdata[r][i]<span class="o">=</span>(modIndex<span class="o">&gt;=</span><span class="m">0</span>)<span class="o">?</span>modPoly.get(modIndex)<span class="o">:</span><span class="m">0</span>;}}</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">    <span class="k">var</span> totalCodeCount<span class="o">=</span><span class="m">0</span>;<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>rsBlocks.<span class="no">length</span>;i<span class="o">++</span>){totalCodeCount<span class="o">+=</span>rsBlocks[i].totalCount;}</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">    <span class="k">var</span> data<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(totalCodeCount);<span class="k">var</span> index<span class="o">=</span><span class="m">0</span>;<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>maxDcCount;i<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> r<span class="o">=</span><span class="m">0</span>;r<span class="o">&lt;</span>rsBlocks.<span class="no">length</span>;r<span class="o">++</span>){<span class="k">if</span>(i<span class="o">&lt;</span>dcdata[r].<span class="no">length</span>){data[index<span class="o">++</span>]<span class="o">=</span>dcdata[r][i];}}}</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>maxEcCount;i<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> r<span class="o">=</span><span class="m">0</span>;r<span class="o">&lt;</span>rsBlocks.<span class="no">length</span>;r<span class="o">++</span>){<span class="k">if</span>(i<span class="o">&lt;</span>ecdata[r].<span class="no">length</span>){data[index<span class="o">++</span>]<span class="o">=</span>ecdata[r][i];}}}</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">    return data;};var QRMode={MODE_NUMBER:1&lt;&lt;0,MODE_ALPHA_NUM:1&lt;&lt;1,MODE_8BIT_BYTE:1&lt;&lt;2,MODE_KANJI:1&lt;&lt;3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1&lt;&lt;10)|(1&lt;&lt;8)|(1&lt;&lt;5)|(1&lt;&lt;4)|(1&lt;&lt;2)|(1&lt;&lt;1)|(1&lt;&lt;0),G18:(1&lt;&lt;12)|(1&lt;&lt;11)|(1&lt;&lt;10)|(1&lt;&lt;9)|(1&lt;&lt;8)|(1&lt;&lt;5)|(1&lt;&lt;2)|(1&lt;&lt;0),G15_MASK:(1&lt;&lt;14)|(1&lt;&lt;12)|(1&lt;&lt;10)|(1&lt;&lt;4)|(1&lt;&lt;1),getBCHTypeInfo:function(data){var d=data&lt;&lt;10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)&gt;=0){d^=(QRUtil.G15&lt;&lt;(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">    <span class="k">return</span>((data<span class="o">&lt;&lt;</span><span class="m">10</span>)|d)^QRUtil.G15_MASK;},<span class="nf">getBCHTypeNumber</span>:<span class="kt">function</span>(<span class="nv">data</span>){<span class="k">var</span> d<span class="o">=</span>data<span class="o">&lt;&lt;</span><span class="m">12</span>;<span class="k">while</span>(QRUtil.getBCHDigit(d)<span class="o">-</span>QRUtil.getBCHDigit(QRUtil.G18)<span class="o">&gt;=</span><span class="m">0</span>){d<span class="o">^=</span>(QRUtil.G18<span class="o">&lt;&lt;</span>(QRUtil.getBCHDigit(d)<span class="o">-</span>QRUtil.getBCHDigit(QRUtil.G18)));}</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">    <span class="k">return</span>(data<span class="o">&lt;&lt;</span><span class="m">12</span>)|d;},<span class="nf">getBCHDigit</span>:<span class="kt">function</span>(<span class="nv">data</span>){<span class="k">var</span> digit<span class="o">=</span><span class="m">0</span>;<span class="k">while</span>(data<span class="o">!=</span><span class="m">0</span>){digit<span class="o">++</span>;data<span class="o">&gt;&gt;&gt;=</span><span class="m">1</span>;}</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">    <span class="k">return</span> digit;},<span class="nf">getPatternPosition</span>:<span class="kt">function</span>(<span class="nv">typeNumber</span>){<span class="k">return</span> QRUtil.PATTERN_POSITION_TABLE[typeNumber<span class="o">-</span><span class="m">1</span>];},<span class="nf">getMask</span>:<span class="kt">function</span>(<span class="nv">maskPattern</span>,<span class="nv">i</span>,<span class="nv">j</span>){<span class="k">switch</span>(maskPattern){<span class="k">case</span> QRMaskPattern.PATTERN000<span class="o">:</span><span class="k">return</span>(i<span class="o">+</span>j)<span class="o">%</span><span class="m">2</span><span class="o">==</span><span class="m">0</span>;<span class="k">case</span> QRMaskPattern.PATTERN001<span class="o">:</span><span class="k">return</span> i<span class="o">%</span><span class="m">2</span><span class="o">==</span><span class="m">0</span>;<span class="k">case</span> QRMaskPattern.PATTERN010<span class="o">:</span><span class="k">return</span> j<span class="o">%</span><span class="m">3</span><span class="o">==</span><span class="m">0</span>;<span class="k">case</span> QRMaskPattern.PATTERN011<span class="o">:</span><span class="k">return</span>(i<span class="o">+</span>j)<span class="o">%</span><span class="m">3</span><span class="o">==</span><span class="m">0</span>;<span class="k">case</span> QRMaskPattern.PATTERN100<span class="o">:</span><span class="k">return</span>(<span class="no">Math</span>.<span class="nf">floor</span>(i/<span class="m">2</span>)<span class="o">+</span><span class="no">Math</span>.<span class="nf">floor</span>(j/<span class="m">3</span>))<span class="o">%</span><span class="m">2</span><span class="o">==</span><span class="m">0</span>;<span class="k">case</span> QRMaskPattern.PATTERN101<span class="o">:</span><span class="k">return</span>(i<span class="o">*</span>j)<span class="o">%</span><span class="m">2</span><span class="o">+</span>(i<span class="o">*</span>j)<span class="o">%</span><span class="m">3</span><span class="o">==</span><span class="m">0</span>;<span class="k">case</span> QRMaskPattern.PATTERN110<span class="o">:</span><span class="k">return</span>((i<span class="o">*</span>j)<span class="o">%</span><span class="m">2</span><span class="o">+</span>(i<span class="o">*</span>j)<span class="o">%</span><span class="m">3</span>)<span class="o">%</span><span class="m">2</span><span class="o">==</span><span class="m">0</span>;<span class="k">case</span> QRMaskPattern.PATTERN111<span class="o">:</span><span class="k">return</span>((i<span class="o">*</span>j)<span class="o">%</span><span class="m">3</span><span class="o">+</span>(i<span class="o">+</span>j)<span class="o">%</span><span class="m">2</span>)<span class="o">%</span><span class="m">2</span><span class="o">==</span><span class="m">0</span>;default<span class="o">:</span><span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;bad maskPattern:&quot;</span><span class="o">+</span>maskPattern);}},<span class="nf">getErrorCorrectPolynomial</span>:<span class="kt">function</span>(<span class="nv">errorCorrectLength</span>){<span class="k">var</span> a<span class="o">=</span><span class="o">new</span> <span class="nc">QRPolynomial</span>([<span class="m">1</span>],<span class="m">0</span>);<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>errorCorrectLength;i<span class="o">++</span>){a<span class="o">=</span>a.multiply(<span class="o">new</span> <span class="nc">QRPolynomial</span>([<span class="m">1</span>,QRMath.gexp(i)],<span class="m">0</span>));}</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">    <span class="k">return</span> a;},<span class="nf">getLengthInBits</span>:<span class="kt">function</span>(<span class="nv">mode</span>,<span class="nv">type</span>){<span class="k">if</span>(<span class="m">1</span><span class="o">&lt;=</span>type<span class="o">&amp;&amp;</span>type<span class="o">&lt;</span><span class="m">10</span>){<span class="k">switch</span>(mode){<span class="k">case</span> QRMode.MODE_NUMBER<span class="o">:</span><span class="k">return</span> <span class="m">10</span>;<span class="k">case</span> QRMode.MODE_ALPHA_NUM<span class="o">:</span><span class="k">return</span> <span class="m">9</span>;<span class="k">case</span> QRMode.MODE_8BIT_BYTE<span class="o">:</span><span class="k">return</span> <span class="m">8</span>;<span class="k">case</span> QRMode.MODE_KANJI<span class="o">:</span><span class="k">return</span> <span class="m">8</span>;default<span class="o">:</span><span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;mode:&quot;</span><span class="o">+</span>mode);}}<span class="k">else</span> <span class="k">if</span>(type<span class="o">&lt;</span><span class="m">27</span>){<span class="k">switch</span>(mode){<span class="k">case</span> QRMode.MODE_NUMBER<span class="o">:</span><span class="k">return</span> <span class="m">12</span>;<span class="k">case</span> QRMode.MODE_ALPHA_NUM<span class="o">:</span><span class="k">return</span> <span class="m">11</span>;<span class="k">case</span> QRMode.MODE_8BIT_BYTE<span class="o">:</span><span class="k">return</span> <span class="m">16</span>;<span class="k">case</span> QRMode.MODE_KANJI<span class="o">:</span><span class="k">return</span> <span class="m">10</span>;default<span class="o">:</span><span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;mode:&quot;</span><span class="o">+</span>mode);}}<span class="k">else</span> <span class="k">if</span>(type<span class="o">&lt;</span><span class="m">41</span>){<span class="k">switch</span>(mode){<span class="k">case</span> QRMode.MODE_NUMBER<span class="o">:</span><span class="k">return</span> <span class="m">14</span>;<span class="k">case</span> QRMode.MODE_ALPHA_NUM<span class="o">:</span><span class="k">return</span> <span class="m">13</span>;<span class="k">case</span> QRMode.MODE_8BIT_BYTE<span class="o">:</span><span class="k">return</span> <span class="m">16</span>;<span class="k">case</span> QRMode.MODE_KANJI<span class="o">:</span><span class="k">return</span> <span class="m">12</span>;default<span class="o">:</span><span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;mode:&quot;</span><span class="o">+</span>mode);}}<span class="k">else</span>{<span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;type:&quot;</span><span class="o">+</span>type);}},<span class="nf">getLostPoint</span>:<span class="kt">function</span>(<span class="nv">qrCode</span>){<span class="k">var</span> moduleCount<span class="o">=</span>qrCode.getModuleCount();<span class="k">var</span> lostPoint<span class="o">=</span><span class="m">0</span>;<span class="k">for</span>(<span class="k">var</span> row<span class="o">=</span><span class="m">0</span>;row<span class="o">&lt;</span>moduleCount;row<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> col<span class="o">=</span><span class="m">0</span>;col<span class="o">&lt;</span>moduleCount;col<span class="o">++</span>){<span class="k">var</span> sameCount<span class="o">=</span><span class="m">0</span>;<span class="k">var</span> dark<span class="o">=</span>qrCode.isDark(row,col);<span class="k">for</span>(<span class="k">var</span> r<span class="o">=-</span><span class="m">1</span>;r<span class="o">&lt;=</span><span class="m">1</span>;r<span class="o">++</span>){<span class="k">if</span>(row<span class="o">+</span>r<span class="o">&lt;</span><span class="m">0</span><span class="o">||</span>moduleCount<span class="o">&lt;=</span>row<span class="o">+</span>r){<span class="k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> c<span class="o">=-</span><span class="m">1</span>;c<span class="o">&lt;=</span><span class="m">1</span>;c<span class="o">++</span>){<span class="k">if</span>(col<span class="o">+</span>c<span class="o">&lt;</span><span class="m">0</span><span class="o">||</span>moduleCount<span class="o">&lt;=</span>col<span class="o">+</span>c){<span class="k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">    <span class="k">if</span>(r<span class="o">==</span><span class="m">0</span><span class="o">&amp;&amp;</span>c<span class="o">==</span><span class="m">0</span>){<span class="k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">    <span class="k">if</span>(dark<span class="o">==</span>qrCode.isDark(row<span class="o">+</span>r,col<span class="o">+</span>c)){sameCount<span class="o">++</span>;}}}</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">    <span class="k">if</span>(sameCount<span class="o">&gt;</span><span class="m">5</span>){lostPoint<span class="o">+=</span>(<span class="m">3</span><span class="o">+</span>sameCount<span class="o">-</span><span class="m">5</span>);}}}</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> row<span class="o">=</span><span class="m">0</span>;row<span class="o">&lt;</span>moduleCount<span class="o">-</span><span class="m">1</span>;row<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> col<span class="o">=</span><span class="m">0</span>;col<span class="o">&lt;</span>moduleCount<span class="o">-</span><span class="m">1</span>;col<span class="o">++</span>){<span class="k">var</span> count<span class="o">=</span><span class="m">0</span>;<span class="k">if</span>(qrCode.isDark(row,col))count<span class="o">++</span>;<span class="k">if</span>(qrCode.isDark(row<span class="o">+</span><span class="m">1</span>,col))count<span class="o">++</span>;<span class="k">if</span>(qrCode.isDark(row,col<span class="o">+</span><span class="m">1</span>))count<span class="o">++</span>;<span class="k">if</span>(qrCode.isDark(row<span class="o">+</span><span class="m">1</span>,col<span class="o">+</span><span class="m">1</span>))count<span class="o">++</span>;<span class="k">if</span>(count<span class="o">==</span><span class="m">0</span><span class="o">||</span>count<span class="o">==</span><span class="m">4</span>){lostPoint<span class="o">+=</span><span class="m">3</span>;}}}</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> row<span class="o">=</span><span class="m">0</span>;row<span class="o">&lt;</span>moduleCount;row<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> col<span class="o">=</span><span class="m">0</span>;col<span class="o">&lt;</span>moduleCount<span class="o">-</span><span class="m">6</span>;col<span class="o">++</span>){<span class="k">if</span>(qrCode.isDark(row,col)<span class="o">&amp;&amp;!</span>qrCode.isDark(row,col<span class="o">+</span><span class="m">1</span>)<span class="o">&amp;&amp;</span>qrCode.isDark(row,col<span class="o">+</span><span class="m">2</span>)<span class="o">&amp;&amp;</span>qrCode.isDark(row,col<span class="o">+</span><span class="m">3</span>)<span class="o">&amp;&amp;</span>qrCode.isDark(row,col<span class="o">+</span><span class="m">4</span>)<span class="o">&amp;&amp;!</span>qrCode.isDark(row,col<span class="o">+</span><span class="m">5</span>)<span class="o">&amp;&amp;</span>qrCode.isDark(row,col<span class="o">+</span><span class="m">6</span>)){lostPoint<span class="o">+=</span><span class="m">40</span>;}}}</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> col<span class="o">=</span><span class="m">0</span>;col<span class="o">&lt;</span>moduleCount;col<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> row<span class="o">=</span><span class="m">0</span>;row<span class="o">&lt;</span>moduleCount<span class="o">-</span><span class="m">6</span>;row<span class="o">++</span>){<span class="k">if</span>(qrCode.isDark(row,col)<span class="o">&amp;&amp;!</span>qrCode.isDark(row<span class="o">+</span><span class="m">1</span>,col)<span class="o">&amp;&amp;</span>qrCode.isDark(row<span class="o">+</span><span class="m">2</span>,col)<span class="o">&amp;&amp;</span>qrCode.isDark(row<span class="o">+</span><span class="m">3</span>,col)<span class="o">&amp;&amp;</span>qrCode.isDark(row<span class="o">+</span><span class="m">4</span>,col)<span class="o">&amp;&amp;!</span>qrCode.isDark(row<span class="o">+</span><span class="m">5</span>,col)<span class="o">&amp;&amp;</span>qrCode.isDark(row<span class="o">+</span><span class="m">6</span>,col)){lostPoint<span class="o">+=</span><span class="m">40</span>;}}}</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">    <span class="k">var</span> darkCount<span class="o">=</span><span class="m">0</span>;<span class="k">for</span>(<span class="k">var</span> col<span class="o">=</span><span class="m">0</span>;col<span class="o">&lt;</span>moduleCount;col<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> row<span class="o">=</span><span class="m">0</span>;row<span class="o">&lt;</span>moduleCount;row<span class="o">++</span>){<span class="k">if</span>(qrCode.isDark(row,col)){darkCount<span class="o">++</span>;}}}</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">    <span class="k">var</span> ratio<span class="o">=</span><span class="no">Math</span>.<span class="nf">abs</span>(<span class="m">100</span><span class="o">*</span>darkCount/moduleCount/moduleCount<span class="o">-</span><span class="m">50</span>)/<span class="m">5</span>;lostPoint<span class="o">+=</span>ratio<span class="o">*</span><span class="m">10</span>;<span class="k">return</span> lostPoint;}};<span class="k">var</span> QRMath<span class="o">=</span>{<span class="nf">glog</span>:<span class="kt">function</span>(<span class="nv">n</span>){<span class="k">if</span>(n<span class="o">&lt;</span><span class="m">1</span>){<span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;glog(&quot;</span><span class="o">+</span>n<span class="o">+</span><span class="s2">&quot;)&quot;</span>);}</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">    <span class="k">return</span> QRMath.LOG_TABLE[n];},<span class="nf">gexp</span>:<span class="kt">function</span>(<span class="nv">n</span>){<span class="k">while</span>(n<span class="o">&lt;</span><span class="m">0</span>){n<span class="o">+=</span><span class="m">255</span>;}</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">    <span class="k">while</span>(n<span class="o">&gt;=</span><span class="m">256</span>){n<span class="o">-=</span><span class="m">255</span>;}</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">    <span class="k">return</span> QRMath.EXP_TABLE[n];},EXP_TABLE<span class="o">:</span><span class="o">new</span> <span class="nc">Array</span>(<span class="m">256</span>),LOG_TABLE<span class="o">:</span><span class="o">new</span> <span class="nc">Array</span>(<span class="m">256</span>)};<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="m">8</span>;i<span class="o">++</span>){QRMath.EXP_TABLE[i]<span class="o">=</span><span class="m">1</span><span class="o">&lt;&lt;</span>i;}</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">8</span>;i<span class="o">&lt;</span><span class="m">256</span>;i<span class="o">++</span>){QRMath.EXP_TABLE[i]<span class="o">=</span>QRMath.EXP_TABLE[i<span class="o">-</span><span class="m">4</span>]^QRMath.EXP_TABLE[i<span class="o">-</span><span class="m">5</span>]^QRMath.EXP_TABLE[i<span class="o">-</span><span class="m">6</span>]^QRMath.EXP_TABLE[i<span class="o">-</span><span class="m">8</span>];}</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="m">255</span>;i<span class="o">++</span>){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]<span class="o">=</span>i;}</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">QRPolynomial</span>(<span class="nv">num</span>,<span class="nv">shift</span>){<span class="k">if</span>(num.<span class="no">length</span><span class="o">==</span><span class="kc">undefined</span>){<span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(num.<span class="no">length</span><span class="o">+</span><span class="s2">&quot;/&quot;</span><span class="o">+</span>shift);}</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">    <span class="k">var</span> offset<span class="o">=</span><span class="m">0</span>;<span class="k">while</span>(offset<span class="o">&lt;</span>num.<span class="no">length</span><span class="o">&amp;&amp;</span>num[offset]<span class="o">==</span><span class="m">0</span>){offset<span class="o">++</span>;}</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">    <span class="nb">this</span>.num<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(num.<span class="no">length</span><span class="o">-</span>offset<span class="o">+</span>shift);<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>num.<span class="no">length</span><span class="o">-</span>offset;i<span class="o">++</span>){<span class="nb">this</span>.num[i]<span class="o">=</span>num[i<span class="o">+</span>offset];}}</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">    <span class="no">QRPolynomial</span>.<span class="no">prototype</span><span class="o">=</span>{<span class="nf">get</span>:<span class="kt">function</span>(<span class="nv">index</span>){<span class="k">return</span> <span class="nb">this</span>.num[index];},<span class="nf">getLength</span>:<span class="kt">function</span>(){<span class="k">return</span> <span class="nb">this</span>.num.<span class="no">length</span>;},<span class="nf">multiply</span>:<span class="kt">function</span>(<span class="nv">e</span>){<span class="k">var</span> num<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(<span class="nb">this</span>.getLength()<span class="o">+</span>e.getLength()<span class="o">-</span><span class="m">1</span>);<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="nb">this</span>.getLength();i<span class="o">++</span>){<span class="k">for</span>(<span class="k">var</span> j<span class="o">=</span><span class="m">0</span>;j<span class="o">&lt;</span>e.getLength();j<span class="o">++</span>){num[i<span class="o">+</span>j]<span class="o">^=</span>QRMath.gexp(QRMath.glog(<span class="nb">this</span>.get(i))<span class="o">+</span>QRMath.glog(e.get(j)));}}</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">    <span class="k">return</span> <span class="o">new</span> <span class="nc">QRPolynomial</span>(num,<span class="m">0</span>);},<span class="nf">mod</span>:<span class="kt">function</span>(<span class="nv">e</span>){<span class="k">if</span>(<span class="nb">this</span>.getLength()<span class="o">-</span>e.getLength()<span class="o">&lt;</span><span class="m">0</span>){<span class="k">return</span> <span class="nb">this</span>;}</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">    <span class="k">var</span> ratio<span class="o">=</span>QRMath.glog(<span class="nb">this</span>.get(<span class="m">0</span>))<span class="o">-</span>QRMath.glog(e.get(<span class="m">0</span>));<span class="k">var</span> num<span class="o">=</span><span class="o">new</span> <span class="nc">Array</span>(<span class="nb">this</span>.getLength());<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span><span class="nb">this</span>.getLength();i<span class="o">++</span>){num[i]<span class="o">=</span><span class="nb">this</span>.get(i);}</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">    <span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>e.getLength();i<span class="o">++</span>){num[i]<span class="o">^=</span>QRMath.gexp(QRMath.glog(e.get(i))<span class="o">+</span>ratio);}</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">    <span class="k">return</span> <span class="o">new</span> <span class="nc">QRPolynomial</span>(num,<span class="m">0</span>).mod(e);}};<span class="kt">function</span> <span class="nf">QRRSBlock</span>(<span class="nv">totalCount</span>,<span class="nv">dataCount</span>){<span class="nb">this</span>.totalCount<span class="o">=</span>totalCount;<span class="nb">this</span>.dataCount<span class="o">=</span>dataCount;}</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">    QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error(&quot;bad rs block @ typeNumber:&quot;+typeNumber+&quot;/errorCorrectLevel:&quot;+errorCorrectLevel);}</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">    <span class="k">var</span> length<span class="o">=</span>rsBlock.<span class="no">length</span>/<span class="m">3</span>;<span class="k">var</span> list<span class="o">=</span>[];<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>length;i<span class="o">++</span>){<span class="k">var</span> count<span class="o">=</span>rsBlock[i<span class="o">*</span><span class="m">3</span><span class="o">+</span><span class="m">0</span>];<span class="k">var</span> totalCount<span class="o">=</span>rsBlock[i<span class="o">*</span><span class="m">3</span><span class="o">+</span><span class="m">1</span>];<span class="k">var</span> dataCount<span class="o">=</span>rsBlock[i<span class="o">*</span><span class="m">3</span><span class="o">+</span><span class="m">2</span>];<span class="k">for</span>(<span class="k">var</span> j<span class="o">=</span><span class="m">0</span>;j<span class="o">&lt;</span>count;j<span class="o">++</span>){list.<span class="nf">push</span>(<span class="o">new</span> <span class="nc">QRRSBlock</span>(totalCount,dataCount));}}</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">    <span class="k">return</span> list;};<span class="no">QRRSBlock</span>.<span class="nf">getRsBlockTable</span><span class="o">=</span><span class="kt">function</span>(<span class="nv">typeNumber</span>,<span class="nv">errorCorrectLevel</span>){<span class="k">switch</span>(errorCorrectLevel){<span class="k">case</span> QRErrorCorrectLevel.L<span class="o">:</span><span class="k">return</span> QRRSBlock.RS_BLOCK_TABLE[(typeNumber<span class="o">-</span><span class="m">1</span>)<span class="o">*</span><span class="m">4</span><span class="o">+</span><span class="m">0</span>];<span class="k">case</span> QRErrorCorrectLevel.M<span class="o">:</span><span class="k">return</span> QRRSBlock.RS_BLOCK_TABLE[(typeNumber<span class="o">-</span><span class="m">1</span>)<span class="o">*</span><span class="m">4</span><span class="o">+</span><span class="m">1</span>];<span class="k">case</span> QRErrorCorrectLevel.Q<span class="o">:</span><span class="k">return</span> QRRSBlock.RS_BLOCK_TABLE[(typeNumber<span class="o">-</span><span class="m">1</span>)<span class="o">*</span><span class="m">4</span><span class="o">+</span><span class="m">2</span>];<span class="k">case</span> QRErrorCorrectLevel.H<span class="o">:</span><span class="k">return</span> QRRSBlock.RS_BLOCK_TABLE[(typeNumber<span class="o">-</span><span class="m">1</span>)<span class="o">*</span><span class="m">4</span><span class="o">+</span><span class="m">3</span>];default<span class="o">:</span><span class="k">return</span> <span class="kc">undefined</span>;}};<span class="kt">function</span> <span class="nf">QRBitBuffer</span>(){<span class="nb">this</span>.buffer<span class="o">=</span>[];<span class="nb">this</span>.<span class="no">length</span><span class="o">=</span><span class="m">0</span>;}</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">    <span class="no">QRBitBuffer</span>.<span class="no">prototype</span><span class="o">=</span>{<span class="nf">get</span>:<span class="kt">function</span>(<span class="nv">index</span>){<span class="k">var</span> bufIndex<span class="o">=</span><span class="no">Math</span>.<span class="nf">floor</span>(index/<span class="m">8</span>);<span class="k">return</span>((<span class="nb">this</span>.buffer[bufIndex]<span class="o">&gt;&gt;&gt;</span>(<span class="m">7</span><span class="o">-</span>index<span class="o">%</span><span class="m">8</span>))<span class="o">&amp;</span><span class="m">1</span>)<span class="o">==</span><span class="m">1</span>;},<span class="nf">put</span>:<span class="kt">function</span>(<span class="nv">num</span>,<span class="nv">length</span>){<span class="k">for</span>(<span class="k">var</span> i<span class="o">=</span><span class="m">0</span>;i<span class="o">&lt;</span>length;i<span class="o">++</span>){<span class="nb">this</span>.putBit(((num<span class="o">&gt;&gt;&gt;</span>(length<span class="o">-</span>i<span class="o">-</span><span class="m">1</span>))<span class="o">&amp;</span><span class="m">1</span>)<span class="o">==</span><span class="m">1</span>);}},<span class="nf">getLengthInBits</span>:<span class="kt">function</span>(){<span class="k">return</span> <span class="nb">this</span>.<span class="no">length</span>;},<span class="nf">putBit</span>:<span class="kt">function</span>(<span class="nv">bit</span>){<span class="k">var</span> bufIndex<span class="o">=</span><span class="no">Math</span>.<span class="nf">floor</span>(<span class="nb">this</span>.<span class="no">length</span>/<span class="m">8</span>);<span class="k">if</span>(<span class="nb">this</span>.buffer.<span class="no">length</span><span class="o">&lt;=</span>bufIndex){<span class="nb">this</span>.buffer.<span class="nf">push</span>(<span class="m">0</span>);}</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">    <span class="k">if</span>(bit){<span class="nb">this</span>.buffer[bufIndex]|<span class="o">=</span>(<span class="m">0x80</span><span class="o">&gt;&gt;&gt;</span>(<span class="nb">this</span>.<span class="no">length</span><span class="o">%</span><span class="m">8</span>));}</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">    <span class="nb">this</span>.<span class="no">length</span><span class="o">++</span>;}};<span class="k">var</span> QRCodeLimitLength<span class="o">=</span>[[<span class="m">17</span>,<span class="m">14</span>,<span class="m">11</span>,<span class="m">7</span>],[<span class="m">32</span>,<span class="m">26</span>,<span class="m">20</span>,<span class="m">14</span>],[<span class="m">53</span>,<span class="m">42</span>,<span class="m">32</span>,<span class="m">24</span>],[<span class="m">78</span>,<span class="m">62</span>,<span class="m">46</span>,<span class="m">34</span>],[<span class="m">106</span>,<span class="m">84</span>,<span class="m">60</span>,<span class="m">44</span>],[<span class="m">134</span>,<span class="m">106</span>,<span class="m">74</span>,<span class="m">58</span>],[<span class="m">154</span>,<span class="m">122</span>,<span class="m">86</span>,<span class="m">64</span>],[<span class="m">192</span>,<span class="m">152</span>,<span class="m">108</span>,<span class="m">84</span>],[<span class="m">230</span>,<span class="m">180</span>,<span class="m">130</span>,<span class="m">98</span>],[<span class="m">271</span>,<span class="m">213</span>,<span class="m">151</span>,<span class="m">119</span>],[<span class="m">321</span>,<span class="m">251</span>,<span class="m">177</span>,<span class="m">137</span>],[<span class="m">367</span>,<span class="m">287</span>,<span class="m">203</span>,<span class="m">155</span>],[<span class="m">425</span>,<span class="m">331</span>,<span class="m">241</span>,<span class="m">177</span>],[<span class="m">458</span>,<span class="m">362</span>,<span class="m">258</span>,<span class="m">194</span>],[<span class="m">520</span>,<span class="m">412</span>,<span class="m">292</span>,<span class="m">220</span>],[<span class="m">586</span>,<span class="m">450</span>,<span class="m">322</span>,<span class="m">250</span>],[<span class="m">644</span>,<span class="m">504</span>,<span class="m">364</span>,<span class="m">280</span>],[<span class="m">718</span>,<span class="m">560</span>,<span class="m">394</span>,<span class="m">310</span>],[<span class="m">792</span>,<span class="m">624</span>,<span class="m">442</span>,<span class="m">338</span>],[<span class="m">858</span>,<span class="m">666</span>,<span class="m">482</span>,<span class="m">382</span>],[<span class="m">929</span>,<span class="m">711</span>,<span class="m">509</span>,<span class="m">403</span>],[<span class="m">1003</span>,<span class="m">779</span>,<span class="m">565</span>,<span class="m">439</span>],[<span class="m">1091</span>,<span class="m">857</span>,<span class="m">611</span>,<span class="m">461</span>],[<span class="m">1171</span>,<span class="m">911</span>,<span class="m">661</span>,<span class="m">511</span>],[<span class="m">1273</span>,<span class="m">997</span>,<span class="m">715</span>,<span class="m">535</span>],[<span class="m">1367</span>,<span class="m">1059</span>,<span class="m">751</span>,<span class="m">593</span>],[<span class="m">1465</span>,<span class="m">1125</span>,<span class="m">805</span>,<span class="m">625</span>],[<span class="m">1528</span>,<span class="m">1190</span>,<span class="m">868</span>,<span class="m">658</span>],[<span class="m">1628</span>,<span class="m">1264</span>,<span class="m">908</span>,<span class="m">698</span>],[<span class="m">1732</span>,<span class="m">1370</span>,<span class="m">982</span>,<span class="m">742</span>],[<span class="m">1840</span>,<span class="m">1452</span>,<span class="m">1030</span>,<span class="m">790</span>],[<span class="m">1952</span>,<span class="m">1538</span>,<span class="m">1112</span>,<span class="m">842</span>],[<span class="m">2068</span>,<span class="m">1628</span>,<span class="m">1168</span>,<span class="m">898</span>],[<span class="m">2188</span>,<span class="m">1722</span>,<span class="m">1228</span>,<span class="m">958</span>],[<span class="m">2303</span>,<span class="m">1809</span>,<span class="m">1283</span>,<span class="m">983</span>],[<span class="m">2431</span>,<span class="m">1911</span>,<span class="m">1351</span>,<span class="m">1051</span>],[<span class="m">2563</span>,<span class="m">1989</span>,<span class="m">1423</span>,<span class="m">1093</span>],[<span class="m">2699</span>,<span class="m">2099</span>,<span class="m">1499</span>,<span class="m">1139</span>],[<span class="m">2809</span>,<span class="m">2213</span>,<span class="m">1579</span>,<span class="m">1219</span>],[<span class="m">2953</span>,<span class="m">2331</span>,<span class="m">1663</span>,<span class="m">1273</span>]];</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">_isSupportCanvas</span>() {</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">        <span class="k">return</span> <span class="o">typeof</span> CanvasRenderingContext2D <span class="o">!=</span> <span class="s2">&quot;undefined&quot;</span>;</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">    <span class="c1">// android 2.x doesn&#39;t support Data-URI spec</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">_getAndroid</span>() {</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">        <span class="k">var</span> android <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">        <span class="k">var</span> sAgent <span class="o">=</span> <span class="no">navigator</span>.<span class="no">userAgent</span>;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">        <span class="k">if</span> (<span class="sr">/android/i</span>.<span class="nf">test</span>(sAgent)) { <span class="c1">// android</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">            android <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">            aMat <span class="o">=</span> sAgent.<span class="nf">toString</span>().<span class="nf">match</span>(<span class="sr">/android (<span class="no">[<span class="no">0-9</span>]</span><span class="sc">\.</span><span class="no">[<span class="no">0-9</span>]</span>)/i</span>);</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">            <span class="k">if</span> (aMat <span class="o">&amp;&amp;</span> aMat[<span class="m">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">                android <span class="o">=</span> <span class="nf">parseFloat</span>(aMat[<span class="m">1</span>]);</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">        <span class="k">return</span> android;</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">    <span class="k">var</span> svgDrawer <span class="o">=</span> (<span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">        <span class="k">var</span> <span class="nf">Drawing</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">el</span>, <span class="nv">htOption</span>) {</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">            <span class="nb">this</span>._el <span class="o">=</span> el;</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">            <span class="nb">this</span>._htOption <span class="o">=</span> htOption;</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">draw</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">oQRCode</span>) {</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">            <span class="k">var</span> _htOption <span class="o">=</span> <span class="nb">this</span>._htOption;</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">            <span class="k">var</span> _el <span class="o">=</span> <span class="nb">this</span>._el;</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">            <span class="k">var</span> nCount <span class="o">=</span> oQRCode.getModuleCount();</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">            <span class="k">var</span> nWidth <span class="o">=</span> <span class="no">Math</span>.<span class="nf">floor</span>(_htOption.<span class="no">width</span> / nCount);</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">            <span class="k">var</span> nHeight <span class="o">=</span> <span class="no">Math</span>.<span class="nf">floor</span>(_htOption.<span class="no">height</span> / nCount);</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">            <span class="nb">this</span>.<span class="nf">clear</span>();</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">            <span class="kt">function</span> <span class="nf">makeSVG</span>(<span class="nv">tag</span>, <span class="nv">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">                <span class="k">var</span> el <span class="o">=</span> <span class="no">document</span>.createElementNS(<span class="s1">&#39;http://www.w3.org/2000/svg&#39;</span>, tag);</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">                <span class="k">for</span> (<span class="k">var</span> k <span class="o">in</span> attrs)</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">                    <span class="k">if</span> (attrs.hasOwnProperty(k)) el.<span class="nf">setAttribute</span>(k, attrs[k]);</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">                <span class="k">return</span> el;</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">            <span class="k">var</span> svg <span class="o">=</span> makeSVG(<span class="s2">&quot;svg&quot;</span> , {<span class="s1">&#39;viewBox&#39;</span><span class="o">:</span> <span class="s1">&#39;0 0 &#39;</span> <span class="o">+</span> <span class="no">String</span>(nCount) <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="no">String</span>(nCount), <span class="s1">&#39;width&#39;</span><span class="o">:</span> <span class="s1">&#39;100%&#39;</span>, <span class="s1">&#39;height&#39;</span><span class="o">:</span> <span class="s1">&#39;100%&#39;</span>, <span class="s1">&#39;fill&#39;</span><span class="o">:</span> _htOption.colorLight});</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">            svg.setAttributeNS(<span class="s2">&quot;http://www.w3.org/2000/xmlns/&quot;</span>, <span class="s2">&quot;xmlns:xlink&quot;</span>, <span class="s2">&quot;http://www.w3.org/1999/xlink&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">            _el.<span class="nf">appendChild</span>(svg);</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">            svg.<span class="nf">appendChild</span>(makeSVG(<span class="s2">&quot;rect&quot;</span>, {<span class="s2">&quot;fill&quot;</span><span class="o">:</span> _htOption.colorDark, <span class="s2">&quot;width&quot;</span><span class="o">:</span> <span class="s2">&quot;1&quot;</span>, <span class="s2">&quot;height&quot;</span><span class="o">:</span> <span class="s2">&quot;1&quot;</span>, <span class="s2">&quot;id&quot;</span><span class="o">:</span> <span class="s2">&quot;template&quot;</span>}));</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">            <span class="k">for</span> (<span class="k">var</span> row <span class="o">=</span> <span class="m">0</span>; row <span class="o">&lt;</span> nCount; row<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">                <span class="k">for</span> (<span class="k">var</span> col <span class="o">=</span> <span class="m">0</span>; col <span class="o">&lt;</span> nCount; col<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">                    <span class="k">if</span> (oQRCode.isDark(row, col)) {</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">                        <span class="k">var</span> child <span class="o">=</span> makeSVG(<span class="s2">&quot;use&quot;</span>, {<span class="s2">&quot;x&quot;</span><span class="o">:</span> <span class="no">String</span>(row), <span class="s2">&quot;y&quot;</span><span class="o">:</span> <span class="no">String</span>(col)});</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">                        child.setAttributeNS(<span class="s2">&quot;http://www.w3.org/1999/xlink&quot;</span>, <span class="s2">&quot;href&quot;</span>, <span class="s2">&quot;#template&quot;</span>)</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">                        svg.<span class="nf">appendChild</span>(child);</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">clear</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">            <span class="k">while</span> (<span class="nb">this</span>._el.<span class="nf">hasChildNodes</span>())</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">                <span class="nb">this</span>._el.<span class="nf">removeChild</span>(<span class="nb">this</span>._el.<span class="no">lastChild</span>);</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">        <span class="k">return</span> Drawing;</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">    })();</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">    <span class="c1">// Had to change this a bit, because of browserify.</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">    <span class="c1">// document properties cannot be tested when the JS is loaded,</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">    <span class="c1">// all window/document access should be done in the event handlers only.</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">    <span class="k">var</span> useSVG;</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">    <span class="k">if</span>(<span class="nv">global</span>) {</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">        <span class="c1">// tape + Pure NodeJS</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">        useSVG <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">    } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">        useSVG <span class="o">=</span> <span class="no">document</span>.<span class="no">documentElement</span>.<span class="no">tagName</span>.<span class="nf">toLowerCase</span>() <span class="o">===</span> <span class="s2">&quot;svg&quot;</span>;</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">    <span class="c1">// Drawing in DOM by using Table tag</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">    <span class="k">var</span> Drawing <span class="o">=</span> useSVG <span class="o">?</span> svgDrawer <span class="o">:</span> <span class="o">!</span>_isSupportCanvas() <span class="o">?</span> (<span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">        <span class="k">var</span> <span class="nf">Drawing</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">el</span>, <span class="nv">htOption</span>) {</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">            <span class="nb">this</span>._el <span class="o">=</span> el;</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">            <span class="nb">this</span>._htOption <span class="o">=</span> htOption;</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line"><span class="cm">         * Draw the QRCode</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line"><span class="cm">         *</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line"><span class="cm">         * @param {QRCode} oQRCode</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">draw</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">oQRCode</span>) {</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">            <span class="k">var</span> _htOption <span class="o">=</span> <span class="nb">this</span>._htOption;</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">            <span class="k">var</span> _el <span class="o">=</span> <span class="nb">this</span>._el;</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">            <span class="k">var</span> nCount <span class="o">=</span> oQRCode.getModuleCount();</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">            <span class="k">var</span> nWidth <span class="o">=</span> <span class="no">Math</span>.<span class="nf">floor</span>(_htOption.<span class="no">width</span> / nCount);</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">            <span class="k">var</span> nHeight <span class="o">=</span> <span class="no">Math</span>.<span class="nf">floor</span>(_htOption.<span class="no">height</span> / nCount);</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">            <span class="k">var</span> aHTML <span class="o">=</span> [<span class="s1">&#39;&lt;table style=&quot;border:0;border-collapse:collapse;&quot;&gt;&#39;</span>];</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">            <span class="k">for</span> (<span class="k">var</span> row <span class="o">=</span> <span class="m">0</span>; row <span class="o">&lt;</span> nCount; row<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">                aHTML.<span class="nf">push</span>(<span class="s1">&#39;&lt;tr&gt;&#39;</span>);</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">                <span class="k">for</span> (<span class="k">var</span> col <span class="o">=</span> <span class="m">0</span>; col <span class="o">&lt;</span> nCount; col<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">                    aHTML.<span class="nf">push</span>(<span class="s1">&#39;&lt;td style=&quot;border:0;border-collapse:collapse;padding:0;margin:0;width:&#39;</span> <span class="o">+</span> nWidth <span class="o">+</span> <span class="s1">&#39;px;height:&#39;</span> <span class="o">+</span> nHeight <span class="o">+</span> <span class="s1">&#39;px;background-color:&#39;</span> <span class="o">+</span> (oQRCode.isDark(row, col) <span class="o">?</span> _htOption.colorDark <span class="o">:</span> _htOption.colorLight) <span class="o">+</span> <span class="s1">&#39;;&quot;&gt;&lt;/td&gt;&#39;</span>);</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line">                aHTML.<span class="nf">push</span>(<span class="s1">&#39;&lt;/tr&gt;&#39;</span>);</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">            aHTML.<span class="nf">push</span>(<span class="s1">&#39;&lt;/table&gt;&#39;</span>);</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">            _el.innerHTML <span class="o">=</span> aHTML.<span class="nf">join</span>(<span class="s1">&#39;&#39;</span>);</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">            <span class="c1">// Fix the margin values as real size.</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">            <span class="k">var</span> elTable <span class="o">=</span> _el.<span class="no">childNodes</span>[<span class="m">0</span>];</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line">            <span class="k">var</span> nLeftMarginTable <span class="o">=</span> (_htOption.<span class="no">width</span> <span class="o">-</span> elTable.offsetWidth) / <span class="m">2</span>;</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">            <span class="k">var</span> nTopMarginTable <span class="o">=</span> (_htOption.<span class="no">height</span> <span class="o">-</span> elTable.offsetHeight) / <span class="m">2</span>;</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">            <span class="k">if</span> (nLeftMarginTable <span class="o">&gt;</span> <span class="m">0</span> <span class="o">&amp;&amp;</span> nTopMarginTable <span class="o">&gt;</span> <span class="m">0</span>) {</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">                elTable.<span class="no">style</span>.margin <span class="o">=</span> nTopMarginTable <span class="o">+</span> <span class="s2">&quot;px &quot;</span> <span class="o">+</span> nLeftMarginTable <span class="o">+</span> <span class="s2">&quot;px&quot;</span>;</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line"><span class="cm">         * Clear the QRCode</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">clear</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line">            <span class="nb">this</span>._el.innerHTML <span class="o">=</span> <span class="s1">&#39;&#39;</span>;</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">        <span class="k">return</span> Drawing;</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">    })() <span class="o">:</span> (<span class="kt">function</span> () { <span class="c1">// Drawing in Canvas</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">        <span class="kt">function</span> <span class="nf">_onMakeImage</span>() {</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">            <span class="nb">this</span>._elImage.<span class="no">src</span> <span class="o">=</span> <span class="nb">this</span>._elCanvas.toDataURL(<span class="s2">&quot;image/png&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">            <span class="nb">this</span>._elImage.<span class="no">style</span>.<span class="no">display</span> <span class="o">=</span> <span class="s2">&quot;block&quot;</span>;</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">            <span class="nb">this</span>._elCanvas.<span class="no">style</span>.<span class="no">display</span> <span class="o">=</span> <span class="s2">&quot;none&quot;</span>;</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">        <span class="c1">// Android 2.1 bug workaround</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">        <span class="c1">// http://code.google.com/p/android/issues/detail?id=5141</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">        <span class="k">if</span> (<span class="nb">this</span>._android <span class="o">&amp;&amp;</span> <span class="nb">this</span>._android <span class="o">&lt;=</span> <span class="m">2.1</span>) {</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">            <span class="k">var</span> factor <span class="o">=</span> <span class="m">1</span> / <span class="no">window</span>.devicePixelRatio;</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">            <span class="k">var</span> drawImage <span class="o">=</span> CanvasRenderingContext2D.<span class="no">prototype</span>.drawImage;</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">            <span class="no">CanvasRenderingContext2D</span>.<span class="no">prototype</span>.<span class="nf">drawImage</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">image</span>, <span class="nv">sx</span>, <span class="nv">sy</span>, <span class="nv">sw</span>, <span class="nv">sh</span>, <span class="nv">dx</span>, <span class="nv">dy</span>, <span class="nv">dw</span>, <span class="nv">dh</span>) {</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">                <span class="k">if</span> ((<span class="s2">&quot;nodeName&quot;</span> <span class="o">in</span> image) <span class="o">&amp;&amp;</span><span class="sr"> /img/i</span>.<span class="nf">test</span>(image.<span class="no">nodeName</span>)) {</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">                    <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> arguments.<span class="no">length</span> <span class="o">-</span> <span class="m">1</span>; i <span class="o">&gt;=</span> <span class="m">1</span>; i<span class="o">--</span>) {</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">                        arguments[i] <span class="o">=</span> arguments[i] <span class="o">*</span> factor;</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">                } <span class="k">else</span> <span class="k">if</span> (<span class="o">typeof</span> dw <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span>) {</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line">                    arguments[<span class="m">1</span>] <span class="o">*=</span> factor;</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line">                    arguments[<span class="m">2</span>] <span class="o">*=</span> factor;</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line">                    arguments[<span class="m">3</span>] <span class="o">*=</span> factor;</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line">                    arguments[<span class="m">4</span>] <span class="o">*=</span> factor;</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">                drawImage.<span class="nf">apply</span>(<span class="nb">this</span>, arguments);</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line"><span class="cm">         * Check whether the user&#39;s browser supports Data URI or not</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line"><span class="cm">         *</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line"><span class="cm">         * @private</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line"><span class="cm">         * @param {Function} fSuccess Occurs if it supports Data URI</span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line"><span class="cm">         * @param {Function} fFail Occurs if it doesn&#39;t support Data URI</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">        <span class="kt">function</span> <span class="nf">_safeSetDataURI</span>(<span class="nv">fSuccess</span>, <span class="nv">fFail</span>) {</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">            <span class="k">var</span> self <span class="o">=</span> <span class="nb">this</span>;</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">            self._fFail <span class="o">=</span> fFail;</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">            self._fSuccess <span class="o">=</span> fSuccess;</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">            <span class="c1">// Check it just once</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">            <span class="k">if</span> (self._bSupportDataURI <span class="o">===</span> <span class="kc">null</span>) {</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">                <span class="k">var</span> el <span class="o">=</span> <span class="no">document</span>.<span class="nf">createElement</span>(<span class="s2">&quot;img&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">                <span class="k">var</span> <span class="nf">fOnError</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">                    self._bSupportDataURI <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">                    <span class="k">if</span> (self._fFail) {</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">                        _fFail.<span class="nf">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">                <span class="k">var</span> <span class="nf">fOnSuccess</span> <span class="o">=</span> <span class="kt">function</span>() {</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">                    self._bSupportDataURI <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">                    <span class="k">if</span> (self._fSuccess) {</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">                        self._fSuccess.<span class="nf">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">                el.onabort <span class="o">=</span> fOnError;</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">                el.onerror <span class="o">=</span> fOnError;</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">                el.onload <span class="o">=</span> fOnSuccess;</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">                el.<span class="no">src</span> <span class="o">=</span> <span class="s2">&quot;data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==&quot;</span>; <span class="c1">// the Image contains 1px data.</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">                <span class="k">return</span>;</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">            } <span class="k">else</span> <span class="k">if</span> (self._bSupportDataURI <span class="o">===</span> <span class="kc">true</span> <span class="o">&amp;&amp;</span> self._fSuccess) {</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">                self._fSuccess.<span class="nf">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">            } <span class="k">else</span> <span class="k">if</span> (self._bSupportDataURI <span class="o">===</span> <span class="kc">false</span> <span class="o">&amp;&amp;</span> self._fFail) {</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">                self._fFail.<span class="nf">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line"><span class="cm">         * Drawing QRCode by using canvas</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line"><span class="cm">         *</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line"><span class="cm">         * @constructor</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line"><span class="cm">         * @param {HTMLElement} el</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line"><span class="cm">         * @param {Object} htOption QRCode Options</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line">        <span class="k">var</span> <span class="nf">Drawing</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">el</span>, <span class="nv">htOption</span>) {</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line">            <span class="nb">this</span>._bIsPainted <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line">            <span class="nb">this</span>._android <span class="o">=</span> _getAndroid();</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line">            <span class="nb">this</span>._htOption <span class="o">=</span> htOption;</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line">            <span class="nb">this</span>._elCanvas <span class="o">=</span> <span class="no">document</span>.<span class="nf">createElement</span>(<span class="s2">&quot;canvas&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">            <span class="nb">this</span>._elCanvas.<span class="no">width</span> <span class="o">=</span> htOption.<span class="no">width</span>;</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">            <span class="nb">this</span>._elCanvas.<span class="no">height</span> <span class="o">=</span> htOption.<span class="no">height</span>;</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">            el.<span class="nf">appendChild</span>(<span class="nb">this</span>._elCanvas);</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">            <span class="nb">this</span>._el <span class="o">=</span> el;</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">            <span class="nb">this</span>._oContext <span class="o">=</span> <span class="nb">this</span>._elCanvas.getContext(<span class="s2">&quot;2d&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">            <span class="nb">this</span>._bIsPainted <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">            <span class="nb">this</span>._elImage <span class="o">=</span> <span class="no">document</span>.<span class="nf">createElement</span>(<span class="s2">&quot;img&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line">            <span class="nb">this</span>._elImage.<span class="no">style</span>.<span class="no">display</span> <span class="o">=</span> <span class="s2">&quot;none&quot;</span>;</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">            <span class="nb">this</span>._el.<span class="nf">appendChild</span>(<span class="nb">this</span>._elImage);</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">            <span class="nb">this</span>._bSupportDataURI <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line"><span class="cm">         * Draw the QRCode</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line"><span class="cm">         *</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line"><span class="cm">         * @param {QRCode} oQRCode</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">draw</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">oQRCode</span>) {</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line">            <span class="k">var</span> _elImage <span class="o">=</span> <span class="nb">this</span>._elImage;</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line">            <span class="k">var</span> _oContext <span class="o">=</span> <span class="nb">this</span>._oContext;</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line">            <span class="k">var</span> _htOption <span class="o">=</span> <span class="nb">this</span>._htOption;</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line">            <span class="k">var</span> nCount <span class="o">=</span> oQRCode.getModuleCount();</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line">            <span class="k">var</span> nWidth <span class="o">=</span> _htOption.<span class="no">width</span> / nCount;</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">            <span class="k">var</span> nHeight <span class="o">=</span> _htOption.<span class="no">height</span> / nCount;</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">            <span class="k">var</span> nRoundedWidth <span class="o">=</span> <span class="no">Math</span>.<span class="nf">round</span>(nWidth);</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">            <span class="k">var</span> nRoundedHeight <span class="o">=</span> <span class="no">Math</span>.<span class="nf">round</span>(nHeight);</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line">            _elImage.<span class="no">style</span>.<span class="no">display</span> <span class="o">=</span> <span class="s2">&quot;none&quot;</span>;</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">            <span class="nb">this</span>.<span class="nf">clear</span>();</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">            <span class="k">for</span> (<span class="k">var</span> row <span class="o">=</span> <span class="m">0</span>; row <span class="o">&lt;</span> nCount; row<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">                <span class="k">for</span> (<span class="k">var</span> col <span class="o">=</span> <span class="m">0</span>; col <span class="o">&lt;</span> nCount; col<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">                    <span class="k">var</span> bIsDark <span class="o">=</span> oQRCode.isDark(row, col);</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">                    <span class="k">var</span> nLeft <span class="o">=</span> col <span class="o">*</span> nWidth;</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line">                    <span class="k">var</span> nTop <span class="o">=</span> row <span class="o">*</span> nHeight;</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">                    _oContext.strokeStyle <span class="o">=</span> bIsDark <span class="o">?</span> _htOption.colorDark <span class="o">:</span> _htOption.colorLight;</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">                    _oContext.lineWidth <span class="o">=</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">                    _oContext.fillStyle <span class="o">=</span> bIsDark <span class="o">?</span> _htOption.colorDark <span class="o">:</span> _htOption.colorLight;</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line">                    _oContext.fillRect(nLeft, nTop, nWidth, nHeight);</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line">                    <span class="c1">// 안티 앨리어싱 방지 처리</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">                    _oContext.strokeRect(</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">                        <span class="no">Math</span>.<span class="nf">floor</span>(nLeft) <span class="o">+</span> <span class="m">0.5</span>,</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">                        <span class="no">Math</span>.<span class="nf">floor</span>(nTop) <span class="o">+</span> <span class="m">0.5</span>,</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">                        nRoundedWidth,</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">                        nRoundedHeight</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">                    );</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">                    _oContext.strokeRect(</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">                        <span class="no">Math</span>.<span class="nf">ceil</span>(nLeft) <span class="o">-</span> <span class="m">0.5</span>,</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">                        <span class="no">Math</span>.<span class="nf">ceil</span>(nTop) <span class="o">-</span> <span class="m">0.5</span>,</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">                        nRoundedWidth,</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">                        nRoundedHeight</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">                    );</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">            <span class="nb">this</span>._bIsPainted <span class="o">=</span> <span class="kc">true</span>;</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line"><span class="cm">         * Make the image from Canvas if the browser supports Data URI.</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">makeImage</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">            <span class="k">if</span> (<span class="nb">this</span>._bIsPainted) {</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">                _safeSetDataURI.<span class="nf">call</span>(<span class="nb">this</span>, _onMakeImage);</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line"><span class="cm">         * Return whether the QRCode is painted or not</span></td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line"><span class="cm">         *</span></td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line"><span class="cm">         * @return {Boolean}</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">isPainted</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">            <span class="k">return</span> <span class="nb">this</span>._bIsPainted;</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line"><span class="cm">         * Clear the QRCode</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">clear</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">            <span class="nb">this</span>._oContext.clearRect(<span class="m">0</span>, <span class="m">0</span>, <span class="nb">this</span>._elCanvas.<span class="no">width</span>, <span class="nb">this</span>._elCanvas.<span class="no">height</span>);</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line">            <span class="nb">this</span>._bIsPainted <span class="o">=</span> <span class="kc">false</span>;</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">        <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line"><span class="cm">         * @private</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line"><span class="cm">         * @param {Number} nNumber</span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line"><span class="cm">         */</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">        <span class="no">Drawing</span>.<span class="no">prototype</span>.<span class="nf">round</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">nNumber</span>) {</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line">            <span class="k">if</span> (<span class="o">!</span>nNumber) {</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">                <span class="k">return</span> nNumber;</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">            <span class="k">return</span> <span class="no">Math</span>.<span class="nf">floor</span>(nNumber <span class="o">*</span> <span class="m">1000</span>) / <span class="m">1000</span>;</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">        <span class="k">return</span> Drawing;</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">    })();</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line"><span class="cm">     * Get the type by string length</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code js-file-line"><span class="cm">     * @private</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code js-file-line"><span class="cm">     * @param {String} sText</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code js-file-line"><span class="cm">     * @param {Number} nCorrectLevel</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code js-file-line"><span class="cm">     * @return {Number} type</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">_getTypeNumber</span>(<span class="nv">sText</span>, <span class="nv">nCorrectLevel</span>) {</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code js-file-line">        <span class="k">var</span> nType <span class="o">=</span> <span class="m">1</span>;</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code js-file-line">        <span class="k">var</span> length <span class="o">=</span> _getUTF8Length(sText);</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code js-file-line">        <span class="k">for</span> (<span class="k">var</span> i <span class="o">=</span> <span class="m">0</span>, len <span class="o">=</span> QRCodeLimitLength.<span class="no">length</span>; i <span class="o">&lt;=</span> len; i<span class="o">++</span>) {</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code js-file-line">            <span class="k">var</span> nLimit <span class="o">=</span> <span class="m">0</span>;</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code js-file-line">            <span class="k">switch</span> (nCorrectLevel) {</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code js-file-line">                <span class="k">case</span> QRErrorCorrectLevel.L <span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code js-file-line">                    nLimit <span class="o">=</span> QRCodeLimitLength[i][<span class="m">0</span>];</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code js-file-line">                    <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code js-file-line">                <span class="k">case</span> QRErrorCorrectLevel.M <span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code js-file-line">                    nLimit <span class="o">=</span> QRCodeLimitLength[i][<span class="m">1</span>];</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code js-file-line">                    <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code js-file-line">                <span class="k">case</span> QRErrorCorrectLevel.Q <span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code js-file-line">                    nLimit <span class="o">=</span> QRCodeLimitLength[i][<span class="m">2</span>];</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code js-file-line">                    <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code js-file-line">                <span class="k">case</span> QRErrorCorrectLevel.H <span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code js-file-line">                    nLimit <span class="o">=</span> QRCodeLimitLength[i][<span class="m">3</span>];</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code js-file-line">                    <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code js-file-line">            <span class="k">if</span> (length <span class="o">&lt;=</span> nLimit) {</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code js-file-line">                <span class="k">break</span>;</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code js-file-line">            } <span class="k">else</span> {</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code js-file-line">                nType<span class="o">++</span>;</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code js-file-line">        <span class="k">if</span> (nType <span class="o">&gt;</span> QRCodeLimitLength.<span class="no">length</span>) {</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code js-file-line">            <span class="k">throw</span> <span class="o">new</span> <span class="nc">Error</span>(<span class="s2">&quot;Too long data&quot;</span>);</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code js-file-line">        <span class="k">return</span> nType;</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code js-file-line">    <span class="kt">function</span> <span class="nf">_getUTF8Length</span>(<span class="nv">sText</span>) {</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code js-file-line">        <span class="k">var</span> replacedText <span class="o">=</span> encodeURI(sText).<span class="nf">toString</span>().<span class="nf">replace</span>(<span class="sr">/<span class="sc">\%</span><span class="no">[<span class="no">0-9a-fA-F</span>]</span><span class="o">{2}</span>/g</span>, <span class="s1">&#39;a&#39;</span>);</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code js-file-line">        <span class="k">return</span> replacedText.<span class="no">length</span> <span class="o">+</span> (replacedText.<span class="no">length</span> <span class="o">!=</span> sText <span class="o">?</span> <span class="m">3</span> <span class="o">:</span> <span class="m">0</span>);</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code js-file-line"><span class="cm">     * @class QRCode</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code js-file-line"><span class="cm">     * @constructor</span></td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code js-file-line"><span class="cm">     * @example</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code js-file-line"><span class="cm">     * new QRCode(document.getElementById(&quot;test&quot;), &quot;http://jindo.dev.naver.com/collie&quot;);</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code js-file-line"><span class="cm">     * @example</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code js-file-line"><span class="cm">     * var oQRCode = new QRCode(&quot;test&quot;, {</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code js-file-line"><span class="cm">     *    text : &quot;http://naver.com&quot;,</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code js-file-line"><span class="cm">     *    width : 128,</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code js-file-line"><span class="cm">     *    height : 128</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code js-file-line"><span class="cm">     * });</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code js-file-line"><span class="cm">     * oQRCode.clear(); // Clear the QRCode.</span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code js-file-line"><span class="cm">     * oQRCode.makeCode(&quot;http://map.naver.com&quot;); // Re-create the QRCode.</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code js-file-line"><span class="cm">     * @param {HTMLElement|String} el target element or &#39;id&#39; attribute of element.</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code js-file-line"><span class="cm">     * @param {Object|String} vOption</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code js-file-line"><span class="cm">     * @param {String} vOption.text QRCode link data</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code js-file-line"><span class="cm">     * @param {Number} [vOption.width=256]</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code js-file-line"><span class="cm">     * @param {Number} [vOption.height=256]</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code js-file-line"><span class="cm">     * @param {String} [vOption.colorDark=&quot;#000000&quot;]</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code js-file-line"><span class="cm">     * @param {String} [vOption.colorLight=&quot;#ffffff&quot;]</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code js-file-line"><span class="cm">     * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code js-file-line">    <span class="nf">QRCode</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">el</span>, <span class="nv">vOption</span>) {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code js-file-line">        <span class="nb">this</span>._htOption <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code js-file-line">            width <span class="o">:</span> <span class="m">256</span>,</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code js-file-line">            height <span class="o">:</span> <span class="m">256</span>,</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code js-file-line">            typeNumber <span class="o">:</span> <span class="m">4</span>,</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code js-file-line">            colorDark <span class="o">:</span> <span class="s2">&quot;#000000&quot;</span>,</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code js-file-line">            colorLight <span class="o">:</span> <span class="s2">&quot;#ffffff&quot;</span>,</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code js-file-line">            correctLevel <span class="o">:</span> QRErrorCorrectLevel.H</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code js-file-line">        <span class="k">if</span> (<span class="o">typeof</span> vOption <span class="o">===</span> <span class="s1">&#39;string&#39;</span>) {</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code js-file-line">            vOption <span class="o">=</span> {</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code js-file-line">                text <span class="o">:</span> vOption</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code js-file-line">        <span class="c1">// Overwrites options</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code js-file-line">        <span class="k">if</span> (vOption) {</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code js-file-line">            <span class="k">for</span> (<span class="k">var</span> i <span class="o">in</span> vOption) {</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code js-file-line">                <span class="nb">this</span>._htOption[i] <span class="o">=</span> vOption[i];</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code js-file-line">        <span class="k">if</span> (<span class="o">typeof</span> el <span class="o">==</span> <span class="s2">&quot;string&quot;</span>) {</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code js-file-line">            el <span class="o">=</span> <span class="no">document</span>.<span class="nf">getElementById</span>(el);</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code js-file-line">        <span class="nb">this</span>._android <span class="o">=</span> _getAndroid();</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code js-file-line">        <span class="nb">this</span>._el <span class="o">=</span> el;</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code js-file-line">        <span class="nb">this</span>._oQRCode <span class="o">=</span> <span class="kc">null</span>;</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code js-file-line">        <span class="nb">this</span>._oDrawing <span class="o">=</span> <span class="o">new</span> <span class="nc">Drawing</span>(<span class="nb">this</span>._el, <span class="nb">this</span>._htOption);</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code js-file-line">        <span class="k">if</span> (<span class="nb">this</span>._htOption.<span class="no">text</span>) {</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code js-file-line">            <span class="nb">this</span>.makeCode(<span class="nb">this</span>._htOption.<span class="no">text</span>);</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code js-file-line"><span class="cm">     * Make the QRCode</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code js-file-line"><span class="cm">     * @param {String} sText link data</span></td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code js-file-line">    <span class="no">QRCode</span>.<span class="no">prototype</span>.<span class="nf">makeCode</span> <span class="o">=</span> <span class="kt">function</span> (<span class="nv">sText</span>) {</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code js-file-line">        <span class="nb">this</span>._oQRCode <span class="o">=</span> <span class="o">new</span> <span class="nc">QRCodeModel</span>(_getTypeNumber(sText, <span class="nb">this</span>._htOption.correctLevel), <span class="nb">this</span>._htOption.correctLevel);</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code js-file-line">        <span class="nb">this</span>._oQRCode.addData(sText);</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code js-file-line">        <span class="nb">this</span>._oQRCode.make();</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code js-file-line">        <span class="nb">this</span>._el.<span class="no">title</span> <span class="o">=</span> sText;</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code js-file-line">        <span class="nb">this</span>._oDrawing.draw(<span class="nb">this</span>._oQRCode);</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code js-file-line">        <span class="nb">this</span>.makeImage();</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code js-file-line"><span class="cm">     * Make the Image from Canvas element</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code js-file-line"><span class="cm">     * - It occurs automatically</span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code js-file-line"><span class="cm">     * - Android below 3 doesn&#39;t support Data-URI spec.</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code js-file-line"><span class="cm">     *</span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code js-file-line"><span class="cm">     * @private</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code js-file-line">    <span class="no">QRCode</span>.<span class="no">prototype</span>.<span class="nf">makeImage</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code js-file-line">        <span class="k">if</span> (<span class="o">typeof</span> <span class="nb">this</span>._oDrawing.makeImage <span class="o">==</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> (<span class="o">!</span><span class="nb">this</span>._android <span class="o">||</span> <span class="nb">this</span>._android <span class="o">&gt;=</span> <span class="m">3</span>)) {</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code js-file-line">            <span class="nb">this</span>._oDrawing.makeImage();</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code js-file-line"><span class="cm">     * Clear the QRCode</span></td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code js-file-line">    <span class="no">QRCode</span>.<span class="no">prototype</span>.<span class="nf">clear</span> <span class="o">=</span> <span class="kt">function</span> () {</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code js-file-line">        <span class="nb">this</span>._oDrawing.<span class="nf">clear</span>();</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code js-file-line">    <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code js-file-line"><span class="cm">     * @name QRCode.CorrectLevel</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code js-file-line"><span class="cm">     */</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code js-file-line">    QRCode.CorrectLevel <span class="o">=</span> QRErrorCorrectLevel;</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code js-file-line">})();</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code js-file-line"><span class="nv">exports</span>.QRCode <span class="o">=</span> QRCode;</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code js-file-line">},{}]},{},[<span class="m">1</span>])</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code js-file-line">//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbWlra28vY29kZS90YXRpYW5hc3RvcmUvdGF0aWFuYXN0b3JlL3N0YXRpYy9iaXRjb2luYWRkcmVzcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21pa2tvL2NvZGUvdGF0aWFuYXN0b3JlL3RhdGlhbmFzdG9yZS9zdGF0aWMvYml0Y29pbmFkZHJlc3MvYml0Y29pbmFkZHJlc3MuanMiLCIvVXNlcnMvbWlra28vY29kZS90YXRpYW5hc3RvcmUvdGF0aWFuYXN0b3JlL3N0YXRpYy9iaXRjb2luYWRkcmVzcy9xcmNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBiaXRjb2luYWRkcmVzcy5qc1xuICpcbiAqIEJpdGNvaW4gYWRkcmVzcyBhbmQgcGF5bWVudCBoZWxwZXIuXG4gKlxuICogQ29weXJpZ2h0IDIwMTMgTWlra28gT2h0YW1hYSBodHRwOi8vb3BlbnNvdXJjZWhhY2tlci5jb21cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqL1xuXG5cbi8vIFBsZWFzZSBub3RlIHRoYXQgc2NyaXB0IHRoaXMgZGVwZW5kcyBvbiBqUXVlcnksXG4vLyBidXQgSSBkaWQgbm90IGZpbmQgYSBzb2x1dGlvbiBmb3IgaGF2aW5nIFVNRCBsb2FkaW5nIGZvciB0aGUgc2NyaXB0LFxuLy8gc28gdGhhdCBqUXVlcnkgd291bGQgYmUgYXZhaWxhYmxlIHRocm91Z2ggYnJvd3NlcmlmeSBidW5kbGluZ1xuLy8gT1IgQ0ROLiBJbmNsdWRlIGpRdWVyeSBleHRlcm5hbGx5IGJlZm9yZSBpbmNsdWRpbmcgdGhpcyBzY3JpcHQuXG5cbi8qIGdsb2JhbCBtb2R1bGUsIHJlcXVpcmUgKi9cbnZhciBxcmNvZGUgPSByZXF1aXJlKFwiLi9xcmNvZGUuanNcIik7XG5cbi8vIGpRdWVyeSByZWZlcmVuY2VcbnZhciAkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGNvbmZpZyA6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgVVJMIGZvciBiaXRjb2luIFVSSSBzY2hlbWUgcGF5bWVudHMuXG4gICAgICpcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYml0Y29pbi9iaXBzL2Jsb2IvbWFzdGVyL2JpcC0wMDIxLm1lZGlhd2lraSNFeGFtcGxlc1xuICAgICAqXG4gICAgICogaHR0cDovL2JpdGNvaW4uc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzQ5ODcvYml0Y29pbi11cmwtc2NoZW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGFkZHJlc3MgUmVjZWl2aW5nIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGFtb3VudCAgQW1vdW50IGFzIGJpZyBkZWNpbWFsXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBsYWJlbCAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19IG1lc3NhZ2UgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYnVpbGRCaXRjb2luVVJJIDogZnVuY3Rpb24oYWRkcmVzcywgYW1vdW50LCBsYWJlbCwgbWVzc2FnZSkge1xuICAgICAgICB2YXIgdG1wbCA9IFtcImJpdGNvaW46XCIsIGFkZHJlc3MsIFwiP1wiXTtcblxuICAgICAgICBpZihhbW91bnQpIHtcbiAgICAgICAgICAgIHRtcGwgPSB0bXBsLmNvbmNhdChbXCJhbW91bnQ9XCIsIGVuY29kZVVSSUNvbXBvbmVudChhbW91bnQpLCBcIiZcIl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobGFiZWwpIHtcbiAgICAgICAgICAgIHRtcGwgPSB0bXBsLmNvbmNhdChbXCJsYWJlbD1cIiwgZW5jb2RlVVJJQ29tcG9uZW50KGxhYmVsKSwgXCImXCJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRtcGwgPSB0bXBsLmNvbmNhdChbXCJtZXNzYWdlPVwiLCBlbmNvZGVVUklDb21wb25lbnQobWVzc2FnZSksIFwiJlwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHByZWZpeGluZyBleHRyYVxuICAgICAgICB2YXIgbGFzdGMgPSB0bXBsW3RtcGwubGVuZ3RoLTFdO1xuICAgICAgICBpZihsYXN0YyA9PSBcIiZcIiB8fCBsYXN0YyA9PSBcIj9cIikge1xuICAgICAgICAgICAgdG1wbCA9IHRtcGwuc3BsaWNlKDAsIHRtcGwubGVuZ3RoLTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRtcGwuam9pbihcIlwiKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgc3BlY2lhbCBIVE1MIGZvciBiaXRjb2luIGFkZHJlc3MgbWFuaXB1bGF0aW9uLlxuICAgICAqIEBwYXJhbSAge0RPTX0gZWxlbSAgIFRlbXBsYXRpemVkIHRhcmdldFxuICAgICAqIEBwYXJhbSAge0RPTX0gc291cmNlIE9yaWdpbmFsIHNvdXJjZSB0cmVlIGVsZW1lbnQgd2l0aCBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBidWlsZENvbnRyb2xzIDogZnVuY3Rpb24oZWxlbSwgc291cmNlKSB7XG5cbiAgICAgICAgLy8gUmVwbGFjZSAuYml0Y29pbi1hZGRyZXNzIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICB2YXIgYWRkciA9IGVsZW0uZmluZChcIi5iaXRjb2luLWFkZHJlc3NcIik7XG5cbiAgICAgICAgLy8gQWRkIGEgbWFrZXIgY2xhc3Mgc28gdGhhdCB3ZSBkb24ndCByZWFwcGx5IHRlbXBsYXRlXG4gICAgICAgIC8vIG9uIHRoZSBzdWJzZXF1ZW50IHNjYW5zXG4gICAgICAgIGFkZHIuYWRkQ2xhc3MoXCJiaXRjb2luLWFkZHJlc3MtY29udHJvbHNcIik7XG5cbiAgICAgICAgYWRkci50ZXh0KHNvdXJjZS5hdHRyKFwiZGF0YS1iYy1hZGRyZXNzXCIpKTtcblxuICAgICAgICAvLyBDb3B5IG9yaWduYWwgYXR0cmlidXRlcztcbiAgICAgICAgJC5lYWNoKFtcImFkZHJlc3NcIiwgXCJhbW91bnRcIiwgXCJsYWJlbFwiLCBcIm1lc3NhZ2VcIl0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGF0dHJOYW1lID0gXCJkYXRhLWJjLVwiICsgdGhpcztcbiAgICAgICAgICAgIGVsZW0uYXR0cihhdHRyTmFtZSwgc291cmNlLmF0dHIoYXR0ck5hbWUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQnVpbGQgQlRDIFVSTFxuICAgICAgICB2YXIgdXJsID0gdGhpcy5idWlsZEJpdGNvaW5VUkkoc291cmNlLmF0dHIoXCJkYXRhLWJjLWFkZHJlc3NcIiksXG4gICAgICAgICAgICBzb3VyY2UuYXR0cihcImRhdGEtYmMtYW1vdW50XCIpLFxuICAgICAgICAgICAgc291cmNlLmF0dHIoXCJkYXRhLWJjLWxhYmVsXCIpLFxuICAgICAgICAgICAgc291cmNlLmF0dHIoXCJkYXRhLWJjLW1lc3NhZ2VcIikpO1xuXG4gICAgICAgIGVsZW0uZmluZChcIi5iaXRjb2luLWFkZHJlc3MtYWN0aW9uLXNlbmRcIikuYXR0cihcImhyZWZcIiwgdXJsKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB0ZW1wbGF0ZSBlbGVtZW50IGRlZmluZWQgaW4gdGhlIG9wdGlvbnMuXG4gICAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0VGVtcGxhdGUgOiBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgaWYoIXRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCaXRjb2luIGFkZHJlc3MgdGVtcGxhdGUgZWxlbWVudCBtaXNzaW5nOlwiICsgdGhpcy5jb25maWcudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGVtcGxhdGUgPSAkKHRlbXBsYXRlKTtcblxuICAgICAgICBpZih0ZW1wbGF0ZS5zaXplKCkgIT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQml0Y29pbiBhZGRyZXNzIHRlbXBsYXRlIERPTSBkb2VzIG5vdCBjb250YWluIGEgc2luZ2xlIGVsZW1lbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYml0Y29pbmFkZHJlc3MgRE9NIHRlbXBsYXRlIHRvIGEgY2VydGFpbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogVGhlIGB0YXJnZXRgIGVsZW1lbnQgbXVzdCBjb250YWluIG5lY2Vzc2FyeSBkYXRhLWF0dHJpYnV0ZXNcbiAgICAgKiBmcm9tIHdoZXJlIHdlIHNjb29wIHRoZSBpbmZvLlxuICAgICAqXG4gICAgICogQWxzbyBidWlsZHMgYml0Y29pbjogVVJJLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW0galF1ZXJ5IHNlbGVjdGlvbiBvZiB0YXJnZXQgYml0Y29pbiBhZGRyZXNzXG4gICAgICogQHBhcmFtIHtqUXVlcnl9IHRlbXBsYXRlIChvcHRpb25hbCkgVGVtcGxhdGUgZWxlbWVudCB0byBiZSBhcHBsaWVkXG4gICAgICovXG4gICAgYXBwbHlUZW1wbGF0ZSA6IGZ1bmN0aW9uKHRhcmdldCwgdGVtcGxhdGUpIHtcblxuICAgICAgICBpZighdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSBhIGRlZXAgY29weSwgc28gd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG1vZGlmeVxuICAgICAgICAvLyB0ZW1wbGF0ZSBlbGVtZW50cyBpbi1wbGFjZVxuICAgICAgICB2YXIgZWxlbSA9IHRlbXBsYXRlLmNsb25lKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmJ1aWxkQ29udHJvbHMoZWxlbSwgdGFyZ2V0KTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgYXJlIHZpc2libGUgKEhUTUw1IHdheSwgQ1NTIHdheSlcbiAgICAgICAgLy8gYW5kIGNsZWFuIHVwIHRoZSB0ZW1wbGF0ZSBpZCBpZiB3ZSBtYW5hZ2VkIHRvIGNvcHkgaXQgYXJvdW5kXG4gICAgICAgIGVsZW0ucmVtb3ZlQXR0cihcImhpZGRlbiBpZFwiKTtcblxuICAgICAgICBlbGVtLnNob3coKTtcblxuICAgICAgICB0YXJnZXQucmVwbGFjZVdpdGgoZWxlbSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjYW4gdGhlIHBhZ2UgZm9yIGJpdGNvaW4gYWRkcmVzc2VzLlxuICAgICAqXG4gICAgICogQ3JlYXRlIHVzZXIgaW50ZXJmYWNlIGZvciBhbGwgYml0Y29pbiBhZGRyZXNzIGVsZW1lbnRzIG9uIHRoZSBwYWdlLS5cbiAgICAgKiBZb3UgY2FuIGNhbGwgdGhpcyBmdW5jdGlvbiBtdWx0aXBsZSB0aW1lcyBpZiBuZXcgYml0Y29pbiBhZGRyZXNzZXMgYmVjb21lIGF2YWlsYWJsZS5cbiAgICAgKi9cbiAgICBzY2FuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGUoKTtcblxuICAgICAgICAvLyBPcHRpb25hbGx5IGJhaWwgb3V0IGlmIHRoZSBkZWZhdWx0IHNlbGVjdGlvblxuICAgICAgICAvLyBpcyBub3QgZ2l2ZW4gKHVzZXIgY2FsbHMgYXBwbHlUZW1wbGF0ZSgpIG1hbnVhbGx5KVxuICAgICAgICBpZighdGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5jb25maWcuc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIFRlbXBsYXRlIGFscmVhZHkgYXBwbGllZFxuICAgICAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoXCJiaXRjb2luLWFkZHJlc3MtY29udHJvbHNcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBhcHBseSB0aGUgdGVtcGxhdGUgb24gdGhlIHRlbXBsYXRlIGl0c2VsZlxuICAgICAgICAgICAgaWYoJHRoaXMucGFyZW50cyhcIiNcIiArIHNlbGYuY29uZmlnLnRlbXBsYXRlKS5zaXplKCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCByZWFwcGx5IHRlbXBsYXRlcyBvbiBzdWJzZXF1ZW50IHNjYW5zXG5cbiAgICAgICAgICAgIHNlbGYuYXBwbHlUZW1wbGF0ZSgkdGhpcywgdGVtcGxhdGUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSBzZWxlY3Rpb24gaW4gLmJpdGNvaW4tYWRkcmVzcy1jb250YWluZXIgZm9yIGNvcHkgcGFzdGVcbiAgICAgKi9cbiAgICBwcmVwYXJlQ29weVNlbGVjdGlvbiA6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgdmFyIGFkZHkgPSBlbGVtLmZpbmQoXCIuYml0Y29pbi1hZGRyZXNzXCIpO1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuc2VsZWN0QWxsQ2hpbGRyZW4oYWRkeS5nZXQoMCkpO1xuICAgICAgICBlbGVtLmZpbmQoXCIuYml0Y29pbi1hY3Rpb24taGludFwiKS5oaWRlKCk7XG4gICAgICAgIGVsZW0uZmluZChcIi5iaXRjb2luLWFjdGlvbi1oaW50LWNvcHlcIikuc2xpZGVEb3duKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbmQgcGF5bWVudCBhY3Rpb24gaGFuZGxlclxuICAgICAqL1xuICAgIG9uQWN0aW9uU2VuZCA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGVsZW0gPSAkKGUudGFyZ2V0KS5wYXJlbnRzKFwiLmJpdGNvaW4tYWRkcmVzcy1jb250YWluZXJcIik7XG4gICAgICAgIC8vIFdlIG5ldmVyIGtub3cgaWYgdGhlIGNsaWNrIGFjdGlvbiB3YXMgc3VjY2VzZnVsbHkgY29tcGxldGVcbiAgICAgICAgZWxlbS5maW5kKFwiLmJpdGNvaW4tYWN0aW9uLWhpbnRcIikuaGlkZSgpO1xuICAgICAgICBlbGVtLmZpbmQoXCIuYml0Y29pbi1hY3Rpb24taGludC1zZW5kXCIpLnNsaWRlRG93bigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3B5IGFjdGlvbiBoYW5kbGVyLlxuICAgICAqL1xuICAgIG9uQWN0aW9uQ29weSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZWxlbSA9ICQoZS50YXJnZXQpLnBhcmVudHMoXCIuYml0Y29pbi1hZGRyZXNzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlQ29weVNlbGVjdGlvbihlbGVtKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBRUiBjb2RlIGluc2lkZSB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2VuZXJhdGVRUiA6IGZ1bmN0aW9uKHFyQ29udGFpbmVyKSB7XG5cbiAgICAgICAgdmFyIGVsZW0gPSBxckNvbnRhaW5lci5wYXJlbnRzKFwiLmJpdGNvaW4tYWRkcmVzcy1jb250YWluZXJcIik7XG4gICAgICAgIC8vdmFyIGFkZHIgPSBlbGVtLmF0dHIoXCJkYXRhLWJjLWFkZHJlc3NcIik7XG5cbiAgICAgICAgdmFyIHVybCA9IHRoaXMuYnVpbGRCaXRjb2luVVJJKGVsZW0uYXR0cihcImRhdGEtYmMtYWRkcmVzc1wiKSxcbiAgICAgICAgICAgIGVsZW0uYXR0cihcImRhdGEtYmMtYW1vdW50XCIpLFxuICAgICAgICAgICAgZWxlbS5hdHRyKFwiZGF0YS1iYy1sYWJlbFwiKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJRUiBhZGRyZXNzIFVSTCBpcyBcIiwgdXJsKTtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmNvbmZpZy5xciwge1xuICAgICAgICAgICAgdGV4dDogdXJsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcXJDb2RlID0gbmV3IHFyY29kZS5RUkNvZGUocXJDb250YWluZXIuZ2V0KDApLCBvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUVIgY29kZSBnZW5lcmF0aW9uIGFjdGlvbi5cbiAgICAgKi9cbiAgICBvbkFjdGlvblFSIDogZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBlbGVtID0gJChlLnRhcmdldCkucGFyZW50cyhcIi5iaXRjb2luLWFkZHJlc3MtY29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgYWRkciA9IGVsZW0uYXR0cihcImRhdGEtYmMtYWRkcmVzc1wiKTtcbiAgICAgICAgdmFyIHFyQ29udGFpbmVyID0gZWxlbS5maW5kKFwiLmJpdGNvaW4tYWRkcmVzcy1xci1jb250YWluZXJcIik7XG5cbiAgICAgICAgLy8gTGF6aWx5IGdlbmVyYXRlIHRoZSBRUiBjb2RlXG4gICAgICAgIGlmKHFyQ29udGFpbmVyLmNoaWxkcmVuKCkuc2l6ZSgpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlUVIocXJDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbS5maW5kKFwiLmJpdGNvaW4tYWN0aW9uLWhpbnRcIikuaGlkZSgpO1xuICAgICAgICBlbGVtLmZpbmQoXCIuYml0Y29pbi1hY3Rpb24taGludC1xclwiKS5zbGlkZURvd24oKTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBlbGVtID0gJChlLnRhcmdldCkucGFyZW50cyhcIi5iaXRjb2luLWFkZHJlc3MtY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnByZXBhcmVDb3B5U2VsZWN0aW9uKGVsZW0pO1xuICAgIH0sXG5cbiAgICBpbml0VVggOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkub24oXCJjbGlja1wiLCBcIi5iaXRjb2luLWFkZHJlc3MtYWN0aW9uLWNvcHlcIiwgJC5wcm94eSh0aGlzLm9uQWN0aW9uQ29weSwgdGhpcykpO1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLm9uKFwiY2xpY2tcIiwgXCIuYml0Y29pbi1hZGRyZXNzLWFjdGlvbi1zZW5kXCIsICQucHJveHkodGhpcy5vbkFjdGlvblNlbmQsIHRoaXMpKTtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5vbihcImNsaWNrXCIsIFwiLmJpdGNvaW4tYWRkcmVzcy1hY3Rpb24tcXJcIiwgJC5wcm94eSh0aGlzLm9uQWN0aW9uUVIsIHRoaXMpKTtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5vbihcImNsaWNrXCIsIFwiLmJpdGNvaW4tYWRkcmVzc1wiLCAkLnByb3h5KHRoaXMub25DbGljaywgdGhpcykpO1xuXG4gICAgICAgIC8vIEhpZGUgYW55IGNvcHkgaGludHMgd2hlbiB1c2VyIHByZXNzZXMgQ1RSTCtDXG4gICAgICAgIC8vIG9uIGFueSBwYXJ0IG9mIHRoZSBwYWdlXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkub24oXCJjb3B5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5iaXRjb2luLWFjdGlvbi1oaW50LWNvcHlcIikuc2xpZGVVcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZih0aGlzLmNvbmZpZy5nZW5lcmF0ZVFSRWFnZXJseSkge1xuICAgICAgICAgICAgJChcIi5iaXRjb2luLWFkZHJlc3MtY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBhZGRyID0gZWxlbS5hdHRyKFwiZGF0YS1iYy1hZGRyZXNzXCIpO1xuICAgICAgICAgICAgICAgIHZhciBxckNvbnRhaW5lciA9IGVsZW0uZmluZChcIi5iaXRjb2luLWFkZHJlc3MtcXItY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYuZ2VuZXJhdGVRUihxckNvbnRhaW5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGwgdG8gaW5pdGlhbGl6ZSB0aGUgZGV0YXVsdCBiaXRjb2lucHJpY2VzIFVJLlxuICAgICAqL1xuICAgIGluaXQgOiBmdW5jdGlvbihfY29uZmlnKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZighX2NvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgZ2l2ZSBiaXRjb2luYWRkcmVzcyBjb25maWcgb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnID0gX2NvbmZpZztcbiAgICAgICAgJCA9IHRoaXMuY29uZmlnLmpRdWVyeSB8fCBqUXVlcnk7XG4gICAgICAgIHRoaXMuc2NhbigpO1xuICAgICAgICB0aGlzLmluaXRVWCgpO1xuICAgIH1cbn07XG4iLCJ2YXIgZ2xvYmFsPXR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fTsvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIC0gVXNpbmcgdGhlICdRUkNvZGUgZm9yIEphdmFzY3JpcHQgbGlicmFyeSdcbiAqIC0gRml4ZWQgZGF0YXNldCBvZiAnUVJDb2RlIGZvciBKYXZhc2NyaXB0IGxpYnJhcnknIGZvciBzdXBwb3J0IGZ1bGwtc3BlYy5cbiAqIC0gdGhpcyBsaWJyYXJ5IGhhcyBubyBkZXBlbmRlbmNpZXMuXG4gKlxuICogQGF1dGhvciBkYXZpZHNoaW1qc1xuICogQHNlZSA8YSBocmVmPVwiaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS88L2E+XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwOi8vamVyb21lZXRpZW5uZS5naXRodWIuY29tL2pxdWVyeS1xcmNvZGUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cDovL2plcm9tZWV0aWVubmUuZ2l0aHViLmNvbS9qcXVlcnktcXJjb2RlLzwvYT5cbiAqL1xuXG4vKiBnbG9iYWwgZG9jdW1lbnQgKi9cblxudmFyIFFSQ29kZTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuICAgIC8vXG4gICAgLy8gQ29weXJpZ2h0IChjKSAyMDA5IEthenVoaWtvIEFyYXNlXG4gICAgLy9cbiAgICAvLyBVUkw6IGh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9cbiAgICAvL1xuICAgIC8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAgICAvLyAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gICAgLy9cbiAgICAvLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuICAgIC8vIERFTlNPIFdBVkUgSU5DT1JQT1JBVEVEXG4gICAgLy8gICBodHRwOi8vd3d3LmRlbnNvLXdhdmUuY29tL3FyY29kZS9mYXFwYXRlbnQtZS5odG1sXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIFFSOGJpdEJ5dGUoZGF0YSkge1xuICAgICAgICB0aGlzLm1vZGUgPSBRUk1vZGUuTU9ERV84QklUX0JZVEU7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucGFyc2VkRGF0YSA9IFtdO1xuXG4gICAgICAgIC8vIEFkZGVkIHRvIHN1cHBvcnQgVVRGLTggQ2hhcmFjdGVyc1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBieXRlQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHZhciBjb2RlID0gdGhpcy5kYXRhLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgICAgIGlmIChjb2RlID4gMHgxMDAwMCkge1xuICAgICAgICAgICAgICAgIGJ5dGVBcnJheVswXSA9IDB4RjAgfCAoKGNvZGUgJiAweDFDMDAwMCkgPj4+IDE4KTtcbiAgICAgICAgICAgICAgICBieXRlQXJyYXlbMV0gPSAweDgwIHwgKChjb2RlICYgMHgzRjAwMCkgPj4+IDEyKTtcbiAgICAgICAgICAgICAgICBieXRlQXJyYXlbMl0gPSAweDgwIHwgKChjb2RlICYgMHhGQzApID4+PiA2KTtcbiAgICAgICAgICAgICAgICBieXRlQXJyYXlbM10gPSAweDgwIHwgKGNvZGUgJiAweDNGKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA+IDB4ODAwKSB7XG4gICAgICAgICAgICAgICAgYnl0ZUFycmF5WzBdID0gMHhFMCB8ICgoY29kZSAmIDB4RjAwMCkgPj4+IDEyKTtcbiAgICAgICAgICAgICAgICBieXRlQXJyYXlbMV0gPSAweDgwIHwgKChjb2RlICYgMHhGQzApID4+PiA2KTtcbiAgICAgICAgICAgICAgICBieXRlQXJyYXlbMl0gPSAweDgwIHwgKGNvZGUgJiAweDNGKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA+IDB4ODApIHtcbiAgICAgICAgICAgICAgICBieXRlQXJyYXlbMF0gPSAweEMwIHwgKChjb2RlICYgMHg3QzApID4+PiA2KTtcbiAgICAgICAgICAgICAgICBieXRlQXJyYXlbMV0gPSAweDgwIHwgKGNvZGUgJiAweDNGKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnl0ZUFycmF5WzBdID0gY29kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wYXJzZWREYXRhLnB1c2goYnl0ZUFycmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFyc2VkRGF0YSA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHRoaXMucGFyc2VkRGF0YSk7XG5cbiAgICAgICAgaWYgKHRoaXMucGFyc2VkRGF0YS5sZW5ndGggIT0gdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wYXJzZWREYXRhLnVuc2hpZnQoMTkxKTtcbiAgICAgICAgICAgIHRoaXMucGFyc2VkRGF0YS51bnNoaWZ0KDE4Nyk7XG4gICAgICAgICAgICB0aGlzLnBhcnNlZERhdGEudW5zaGlmdCgyMzkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgUVI4Yml0Qnl0ZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIGdldExlbmd0aDogZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VkRGF0YS5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMucGFyc2VkRGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0KHRoaXMucGFyc2VkRGF0YVtpXSwgOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gUVJDb2RlTW9kZWwodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcbiAgICAgICAgdGhpcy50eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcbiAgICAgICAgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZHVsZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5kYXRhQ2FjaGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gW107XG4gICAgfVxuXG4gICAgUVJDb2RlTW9kZWwucHJvdG90eXBlPXthZGREYXRhOmZ1bmN0aW9uKGRhdGEpe3ZhciBuZXdEYXRhPW5ldyBRUjhiaXRCeXRlKGRhdGEpO3RoaXMuZGF0YUxpc3QucHVzaChuZXdEYXRhKTt0aGlzLmRhdGFDYWNoZT1udWxsO30saXNEYXJrOmZ1bmN0aW9uKHJvdyxjb2wpe2lmKHJvdzwwfHx0aGlzLm1vZHVsZUNvdW50PD1yb3d8fGNvbDwwfHx0aGlzLm1vZHVsZUNvdW50PD1jb2wpe3Rocm93IG5ldyBFcnJvcihyb3crXCIsXCIrY29sKTt9XG4gICAgcmV0dXJuIHRoaXMubW9kdWxlc1tyb3ddW2NvbF07fSxnZXRNb2R1bGVDb3VudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZHVsZUNvdW50O30sbWFrZTpmdW5jdGlvbigpe3RoaXMubWFrZUltcGwoZmFsc2UsdGhpcy5nZXRCZXN0TWFza1BhdHRlcm4oKSk7fSxtYWtlSW1wbDpmdW5jdGlvbih0ZXN0LG1hc2tQYXR0ZXJuKXt0aGlzLm1vZHVsZUNvdW50PXRoaXMudHlwZU51bWJlcio0KzE3O3RoaXMubW9kdWxlcz1uZXcgQXJyYXkodGhpcy5tb2R1bGVDb3VudCk7Zm9yKHZhciByb3c9MDtyb3c8dGhpcy5tb2R1bGVDb3VudDtyb3crKyl7dGhpcy5tb2R1bGVzW3Jvd109bmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO2Zvcih2YXIgY29sPTA7Y29sPHRoaXMubW9kdWxlQ291bnQ7Y29sKyspe3RoaXMubW9kdWxlc1tyb3ddW2NvbF09bnVsbDt9fVxuICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLDApO3RoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50LTcsMCk7dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsdGhpcy5tb2R1bGVDb3VudC03KTt0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7dGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTt0aGlzLnNldHVwVHlwZUluZm8odGVzdCxtYXNrUGF0dGVybik7aWYodGhpcy50eXBlTnVtYmVyPj03KXt0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KTt9XG4gICAgaWYodGhpcy5kYXRhQ2FjaGU9PW51bGwpe3RoaXMuZGF0YUNhY2hlPVFSQ29kZU1vZGVsLmNyZWF0ZURhdGEodGhpcy50eXBlTnVtYmVyLHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwsdGhpcy5kYXRhTGlzdCk7fVxuICAgIHRoaXMubWFwRGF0YSh0aGlzLmRhdGFDYWNoZSxtYXNrUGF0dGVybik7fSxzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuOmZ1bmN0aW9uKHJvdyxjb2wpe2Zvcih2YXIgcj0tMTtyPD03O3IrKyl7aWYocm93K3I8PS0xfHx0aGlzLm1vZHVsZUNvdW50PD1yb3crciljb250aW51ZTtmb3IodmFyIGM9LTE7Yzw9NztjKyspe2lmKGNvbCtjPD0tMXx8dGhpcy5tb2R1bGVDb3VudDw9Y29sK2MpY29udGludWU7aWYoKDA8PXImJnI8PTYmJihjPT0wfHxjPT02KSl8fCgwPD1jJiZjPD02JiYocj09MHx8cj09NikpfHwoMjw9ciYmcjw9NCYmMjw9YyYmYzw9NCkpe3RoaXMubW9kdWxlc1tyb3crcl1bY29sK2NdPXRydWU7fWVsc2V7dGhpcy5tb2R1bGVzW3JvdytyXVtjb2wrY109ZmFsc2U7fX19fSxnZXRCZXN0TWFza1BhdHRlcm46ZnVuY3Rpb24oKXt2YXIgbWluTG9zdFBvaW50PTA7dmFyIHBhdHRlcm49MDtmb3IodmFyIGk9MDtpPDg7aSsrKXt0aGlzLm1ha2VJbXBsKHRydWUsaSk7dmFyIGxvc3RQb2ludD1RUlV0aWwuZ2V0TG9zdFBvaW50KHRoaXMpO2lmKGk9PTB8fG1pbkxvc3RQb2ludD5sb3N0UG9pbnQpe21pbkxvc3RQb2ludD1sb3N0UG9pbnQ7cGF0dGVybj1pO319XG4gICAgcmV0dXJuIHBhdHRlcm47fSxjcmVhdGVNb3ZpZUNsaXA6ZnVuY3Rpb24odGFyZ2V0X21jLGluc3RhbmNlX25hbWUsZGVwdGgpe3ZhciBxcl9tYz10YXJnZXRfbWMuY3JlYXRlRW1wdHlNb3ZpZUNsaXAoaW5zdGFuY2VfbmFtZSxkZXB0aCk7dmFyIGNzPTE7dGhpcy5tYWtlKCk7Zm9yKHZhciByb3c9MDtyb3c8dGhpcy5tb2R1bGVzLmxlbmd0aDtyb3crKyl7dmFyIHk9cm93KmNzO2Zvcih2YXIgY29sPTA7Y29sPHRoaXMubW9kdWxlc1tyb3ddLmxlbmd0aDtjb2wrKyl7dmFyIHg9Y29sKmNzO3ZhciBkYXJrPXRoaXMubW9kdWxlc1tyb3ddW2NvbF07aWYoZGFyayl7cXJfbWMuYmVnaW5GaWxsKDAsMTAwKTtxcl9tYy5tb3ZlVG8oeCx5KTtxcl9tYy5saW5lVG8oeCtjcyx5KTtxcl9tYy5saW5lVG8oeCtjcyx5K2NzKTtxcl9tYy5saW5lVG8oeCx5K2NzKTtxcl9tYy5lbmRGaWxsKCk7fX19XG4gICAgcmV0dXJuIHFyX21jO30sc2V0dXBUaW1pbmdQYXR0ZXJuOmZ1bmN0aW9uKCl7Zm9yKHZhciByPTg7cjx0aGlzLm1vZHVsZUNvdW50LTg7cisrKXtpZih0aGlzLm1vZHVsZXNbcl1bNl0hPW51bGwpe2NvbnRpbnVlO31cbiAgICB0aGlzLm1vZHVsZXNbcl1bNl09KHIlMj09MCk7fVxuICAgIGZvcih2YXIgYz04O2M8dGhpcy5tb2R1bGVDb3VudC04O2MrKyl7aWYodGhpcy5tb2R1bGVzWzZdW2NdIT1udWxsKXtjb250aW51ZTt9XG4gICAgdGhpcy5tb2R1bGVzWzZdW2NdPShjJTI9PTApO319LHNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuOmZ1bmN0aW9uKCl7dmFyIHBvcz1RUlV0aWwuZ2V0UGF0dGVyblBvc2l0aW9uKHRoaXMudHlwZU51bWJlcik7Zm9yKHZhciBpPTA7aTxwb3MubGVuZ3RoO2krKyl7Zm9yKHZhciBqPTA7ajxwb3MubGVuZ3RoO2orKyl7dmFyIHJvdz1wb3NbaV07dmFyIGNvbD1wb3Nbal07aWYodGhpcy5tb2R1bGVzW3Jvd11bY29sXSE9bnVsbCl7Y29udGludWU7fVxuICAgIGZvcih2YXIgcj0tMjtyPD0yO3IrKyl7Zm9yKHZhciBjPS0yO2M8PTI7YysrKXtpZihyPT0tMnx8cj09Mnx8Yz09LTJ8fGM9PTJ8fChyPT0wJiZjPT0wKSl7dGhpcy5tb2R1bGVzW3JvdytyXVtjb2wrY109dHJ1ZTt9ZWxzZXt0aGlzLm1vZHVsZXNbcm93K3JdW2NvbCtjXT1mYWxzZTt9fX19fX0sc2V0dXBUeXBlTnVtYmVyOmZ1bmN0aW9uKHRlc3Qpe3ZhciBiaXRzPVFSVXRpbC5nZXRCQ0hUeXBlTnVtYmVyKHRoaXMudHlwZU51bWJlcik7Zm9yKHZhciBpPTA7aTwxODtpKyspe3ZhciBtb2Q9KCF0ZXN0JiYoKGJpdHM+PmkpJjEpPT0xKTt0aGlzLm1vZHVsZXNbTWF0aC5mbG9vcihpLzMpXVtpJTMrdGhpcy5tb2R1bGVDb3VudC04LTNdPW1vZDt9XG4gICAgZm9yKHZhciBpPTA7aTwxODtpKyspe3ZhciBtb2Q9KCF0ZXN0JiYoKGJpdHM+PmkpJjEpPT0xKTt0aGlzLm1vZHVsZXNbaSUzK3RoaXMubW9kdWxlQ291bnQtOC0zXVtNYXRoLmZsb29yKGkvMyldPW1vZDt9fSxzZXR1cFR5cGVJbmZvOmZ1bmN0aW9uKHRlc3QsbWFza1BhdHRlcm4pe3ZhciBkYXRhPSh0aGlzLmVycm9yQ29ycmVjdExldmVsPDwzKXxtYXNrUGF0dGVybjt2YXIgYml0cz1RUlV0aWwuZ2V0QkNIVHlwZUluZm8oZGF0YSk7Zm9yKHZhciBpPTA7aTwxNTtpKyspe3ZhciBtb2Q9KCF0ZXN0JiYoKGJpdHM+PmkpJjEpPT0xKTtpZihpPDYpe3RoaXMubW9kdWxlc1tpXVs4XT1tb2Q7fWVsc2UgaWYoaTw4KXt0aGlzLm1vZHVsZXNbaSsxXVs4XT1tb2Q7fWVsc2V7dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQtMTUraV1bOF09bW9kO319XG4gICAgZm9yKHZhciBpPTA7aTwxNTtpKyspe3ZhciBtb2Q9KCF0ZXN0JiYoKGJpdHM+PmkpJjEpPT0xKTtpZihpPDgpe3RoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50LWktMV09bW9kO31lbHNlIGlmKGk8OSl7dGhpcy5tb2R1bGVzWzhdWzE1LWktMSsxXT1tb2Q7fWVsc2V7dGhpcy5tb2R1bGVzWzhdWzE1LWktMV09bW9kO319XG4gICAgdGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQtOF1bOF09KCF0ZXN0KTt9LG1hcERhdGE6ZnVuY3Rpb24oZGF0YSxtYXNrUGF0dGVybil7dmFyIGluYz0tMTt2YXIgcm93PXRoaXMubW9kdWxlQ291bnQtMTt2YXIgYml0SW5kZXg9Nzt2YXIgYnl0ZUluZGV4PTA7Zm9yKHZhciBjb2w9dGhpcy5tb2R1bGVDb3VudC0xO2NvbD4wO2NvbC09Mil7aWYoY29sPT02KWNvbC0tO3doaWxlKHRydWUpe2Zvcih2YXIgYz0wO2M8MjtjKyspe2lmKHRoaXMubW9kdWxlc1tyb3ddW2NvbC1jXT09bnVsbCl7dmFyIGRhcms9ZmFsc2U7aWYoYnl0ZUluZGV4PGRhdGEubGVuZ3RoKXtkYXJrPSgoKGRhdGFbYnl0ZUluZGV4XT4+PmJpdEluZGV4KSYxKT09MSk7fVxuICAgIHZhciBtYXNrPVFSVXRpbC5nZXRNYXNrKG1hc2tQYXR0ZXJuLHJvdyxjb2wtYyk7aWYobWFzayl7ZGFyaz0hZGFyazt9XG4gICAgdGhpcy5tb2R1bGVzW3Jvd11bY29sLWNdPWRhcms7Yml0SW5kZXgtLTtpZihiaXRJbmRleD09LTEpe2J5dGVJbmRleCsrO2JpdEluZGV4PTc7fX19XG4gICAgcm93Kz1pbmM7aWYocm93PDB8fHRoaXMubW9kdWxlQ291bnQ8PXJvdyl7cm93LT1pbmM7aW5jPS1pbmM7YnJlYWs7fX19fX07UVJDb2RlTW9kZWwuUEFEMD0weEVDO1FSQ29kZU1vZGVsLlBBRDE9MHgxMTtRUkNvZGVNb2RlbC5jcmVhdGVEYXRhPWZ1bmN0aW9uKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwsZGF0YUxpc3Qpe3ZhciByc0Jsb2Nrcz1RUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlcixlcnJvckNvcnJlY3RMZXZlbCk7dmFyIGJ1ZmZlcj1uZXcgUVJCaXRCdWZmZXIoKTtmb3IodmFyIGk9MDtpPGRhdGFMaXN0Lmxlbmd0aDtpKyspe3ZhciBkYXRhPWRhdGFMaXN0W2ldO2J1ZmZlci5wdXQoZGF0YS5tb2RlLDQpO2J1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSxRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEubW9kZSx0eXBlTnVtYmVyKSk7ZGF0YS53cml0ZShidWZmZXIpO31cbiAgICB2YXIgdG90YWxEYXRhQ291bnQ9MDtmb3IodmFyIGk9MDtpPHJzQmxvY2tzLmxlbmd0aDtpKyspe3RvdGFsRGF0YUNvdW50Kz1yc0Jsb2Nrc1tpXS5kYXRhQ291bnQ7fVxuICAgIGlmKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKT50b3RhbERhdGFDb3VudCo4KXt0aHJvdyBuZXcgRXJyb3IoXCJjb2RlIGxlbmd0aCBvdmVyZmxvdy4gKFwiXG4gICAgK2J1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKVxuICAgICtcIj5cIlxuICAgICt0b3RhbERhdGFDb3VudCo4XG4gICAgK1wiKVwiKTt9XG4gICAgaWYoYnVmZmVyLmdldExlbmd0aEluQml0cygpKzQ8PXRvdGFsRGF0YUNvdW50Kjgpe2J1ZmZlci5wdXQoMCw0KTt9XG4gICAgd2hpbGUoYnVmZmVyLmdldExlbmd0aEluQml0cygpJTghPTApe2J1ZmZlci5wdXRCaXQoZmFsc2UpO31cbiAgICB3aGlsZSh0cnVlKXtpZihidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCk+PXRvdGFsRGF0YUNvdW50Kjgpe2JyZWFrO31cbiAgICBidWZmZXIucHV0KFFSQ29kZU1vZGVsLlBBRDAsOCk7aWYoYnVmZmVyLmdldExlbmd0aEluQml0cygpPj10b3RhbERhdGFDb3VudCo4KXticmVhazt9XG4gICAgYnVmZmVyLnB1dChRUkNvZGVNb2RlbC5QQUQxLDgpO31cbiAgICByZXR1cm4gUVJDb2RlTW9kZWwuY3JlYXRlQnl0ZXMoYnVmZmVyLHJzQmxvY2tzKTt9O1FSQ29kZU1vZGVsLmNyZWF0ZUJ5dGVzPWZ1bmN0aW9uKGJ1ZmZlcixyc0Jsb2Nrcyl7dmFyIG9mZnNldD0wO3ZhciBtYXhEY0NvdW50PTA7dmFyIG1heEVjQ291bnQ9MDt2YXIgZGNkYXRhPW5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO3ZhciBlY2RhdGE9bmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7Zm9yKHZhciByPTA7cjxyc0Jsb2Nrcy5sZW5ndGg7cisrKXt2YXIgZGNDb3VudD1yc0Jsb2Nrc1tyXS5kYXRhQ291bnQ7dmFyIGVjQ291bnQ9cnNCbG9ja3Nbcl0udG90YWxDb3VudC1kY0NvdW50O21heERjQ291bnQ9TWF0aC5tYXgobWF4RGNDb3VudCxkY0NvdW50KTttYXhFY0NvdW50PU1hdGgubWF4KG1heEVjQ291bnQsZWNDb3VudCk7ZGNkYXRhW3JdPW5ldyBBcnJheShkY0NvdW50KTtmb3IodmFyIGk9MDtpPGRjZGF0YVtyXS5sZW5ndGg7aSsrKXtkY2RhdGFbcl1baV09MHhmZiZidWZmZXIuYnVmZmVyW2krb2Zmc2V0XTt9XG4gICAgb2Zmc2V0Kz1kY0NvdW50O3ZhciByc1BvbHk9UVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7dmFyIHJhd1BvbHk9bmV3IFFSUG9seW5vbWlhbChkY2RhdGFbcl0scnNQb2x5LmdldExlbmd0aCgpLTEpO3ZhciBtb2RQb2x5PXJhd1BvbHkubW9kKHJzUG9seSk7ZWNkYXRhW3JdPW5ldyBBcnJheShyc1BvbHkuZ2V0TGVuZ3RoKCktMSk7Zm9yKHZhciBpPTA7aTxlY2RhdGFbcl0ubGVuZ3RoO2krKyl7dmFyIG1vZEluZGV4PWkrbW9kUG9seS5nZXRMZW5ndGgoKS1lY2RhdGFbcl0ubGVuZ3RoO2VjZGF0YVtyXVtpXT0obW9kSW5kZXg+PTApP21vZFBvbHkuZ2V0KG1vZEluZGV4KTowO319XG4gICAgdmFyIHRvdGFsQ29kZUNvdW50PTA7Zm9yKHZhciBpPTA7aTxyc0Jsb2Nrcy5sZW5ndGg7aSsrKXt0b3RhbENvZGVDb3VudCs9cnNCbG9ja3NbaV0udG90YWxDb3VudDt9XG4gICAgdmFyIGRhdGE9bmV3IEFycmF5KHRvdGFsQ29kZUNvdW50KTt2YXIgaW5kZXg9MDtmb3IodmFyIGk9MDtpPG1heERjQ291bnQ7aSsrKXtmb3IodmFyIHI9MDtyPHJzQmxvY2tzLmxlbmd0aDtyKyspe2lmKGk8ZGNkYXRhW3JdLmxlbmd0aCl7ZGF0YVtpbmRleCsrXT1kY2RhdGFbcl1baV07fX19XG4gICAgZm9yKHZhciBpPTA7aTxtYXhFY0NvdW50O2krKyl7Zm9yKHZhciByPTA7cjxyc0Jsb2Nrcy5sZW5ndGg7cisrKXtpZihpPGVjZGF0YVtyXS5sZW5ndGgpe2RhdGFbaW5kZXgrK109ZWNkYXRhW3JdW2ldO319fVxuICAgIHJldHVybiBkYXRhO307dmFyIFFSTW9kZT17TU9ERV9OVU1CRVI6MTw8MCxNT0RFX0FMUEhBX05VTToxPDwxLE1PREVfOEJJVF9CWVRFOjE8PDIsTU9ERV9LQU5KSToxPDwzfTt2YXIgUVJFcnJvckNvcnJlY3RMZXZlbD17TDoxLE06MCxROjMsSDoyfTt2YXIgUVJNYXNrUGF0dGVybj17UEFUVEVSTjAwMDowLFBBVFRFUk4wMDE6MSxQQVRURVJOMDEwOjIsUEFUVEVSTjAxMTozLFBBVFRFUk4xMDA6NCxQQVRURVJOMTAxOjUsUEFUVEVSTjExMDo2LFBBVFRFUk4xMTE6N307dmFyIFFSVXRpbD17UEFUVEVSTl9QT1NJVElPTl9UQUJMRTpbW10sWzYsMThdLFs2LDIyXSxbNiwyNl0sWzYsMzBdLFs2LDM0XSxbNiwyMiwzOF0sWzYsMjQsNDJdLFs2LDI2LDQ2XSxbNiwyOCw1MF0sWzYsMzAsNTRdLFs2LDMyLDU4XSxbNiwzNCw2Ml0sWzYsMjYsNDYsNjZdLFs2LDI2LDQ4LDcwXSxbNiwyNiw1MCw3NF0sWzYsMzAsNTQsNzhdLFs2LDMwLDU2LDgyXSxbNiwzMCw1OCw4Nl0sWzYsMzQsNjIsOTBdLFs2LDI4LDUwLDcyLDk0XSxbNiwyNiw1MCw3NCw5OF0sWzYsMzAsNTQsNzgsMTAyXSxbNiwyOCw1NCw4MCwxMDZdLFs2LDMyLDU4LDg0LDExMF0sWzYsMzAsNTgsODYsMTE0XSxbNiwzNCw2Miw5MCwxMThdLFs2LDI2LDUwLDc0LDk4LDEyMl0sWzYsMzAsNTQsNzgsMTAyLDEyNl0sWzYsMjYsNTIsNzgsMTA0LDEzMF0sWzYsMzAsNTYsODIsMTA4LDEzNF0sWzYsMzQsNjAsODYsMTEyLDEzOF0sWzYsMzAsNTgsODYsMTE0LDE0Ml0sWzYsMzQsNjIsOTAsMTE4LDE0Nl0sWzYsMzAsNTQsNzgsMTAyLDEyNiwxNTBdLFs2LDI0LDUwLDc2LDEwMiwxMjgsMTU0XSxbNiwyOCw1NCw4MCwxMDYsMTMyLDE1OF0sWzYsMzIsNTgsODQsMTEwLDEzNiwxNjJdLFs2LDI2LDU0LDgyLDExMCwxMzgsMTY2XSxbNiwzMCw1OCw4NiwxMTQsMTQyLDE3MF1dLEcxNTooMTw8MTApfCgxPDw4KXwoMTw8NSl8KDE8PDQpfCgxPDwyKXwoMTw8MSl8KDE8PDApLEcxODooMTw8MTIpfCgxPDwxMSl8KDE8PDEwKXwoMTw8OSl8KDE8PDgpfCgxPDw1KXwoMTw8Mil8KDE8PDApLEcxNV9NQVNLOigxPDwxNCl8KDE8PDEyKXwoMTw8MTApfCgxPDw0KXwoMTw8MSksZ2V0QkNIVHlwZUluZm86ZnVuY3Rpb24oZGF0YSl7dmFyIGQ9ZGF0YTw8MTA7d2hpbGUoUVJVdGlsLmdldEJDSERpZ2l0KGQpLVFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE1KT49MCl7ZF49KFFSVXRpbC5HMTU8PChRUlV0aWwuZ2V0QkNIRGlnaXQoZCktUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpKSk7fVxuICAgIHJldHVybigoZGF0YTw8MTApfGQpXlFSVXRpbC5HMTVfTUFTSzt9LGdldEJDSFR5cGVOdW1iZXI6ZnVuY3Rpb24oZGF0YSl7dmFyIGQ9ZGF0YTw8MTI7d2hpbGUoUVJVdGlsLmdldEJDSERpZ2l0KGQpLVFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KT49MCl7ZF49KFFSVXRpbC5HMTg8PChRUlV0aWwuZ2V0QkNIRGlnaXQoZCktUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpKSk7fVxuICAgIHJldHVybihkYXRhPDwxMil8ZDt9LGdldEJDSERpZ2l0OmZ1bmN0aW9uKGRhdGEpe3ZhciBkaWdpdD0wO3doaWxlKGRhdGEhPTApe2RpZ2l0Kys7ZGF0YT4+Pj0xO31cbiAgICByZXR1cm4gZGlnaXQ7fSxnZXRQYXR0ZXJuUG9zaXRpb246ZnVuY3Rpb24odHlwZU51bWJlcil7cmV0dXJuIFFSVXRpbC5QQVRURVJOX1BPU0lUSU9OX1RBQkxFW3R5cGVOdW1iZXItMV07fSxnZXRNYXNrOmZ1bmN0aW9uKG1hc2tQYXR0ZXJuLGksail7c3dpdGNoKG1hc2tQYXR0ZXJuKXtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMDpyZXR1cm4oaStqKSUyPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDAxOnJldHVybiBpJTI9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTA6cmV0dXJuIGolMz09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMTpyZXR1cm4oaStqKSUzPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTAwOnJldHVybihNYXRoLmZsb29yKGkvMikrTWF0aC5mbG9vcihqLzMpKSUyPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTAxOnJldHVybihpKmopJTIrKGkqaiklMz09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMDpyZXR1cm4oKGkqaiklMisoaSpqKSUzKSUyPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTExOnJldHVybigoaSpqKSUzKyhpK2opJTIpJTI9PTA7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJiYWQgbWFza1BhdHRlcm46XCIrbWFza1BhdHRlcm4pO319LGdldEVycm9yQ29ycmVjdFBvbHlub21pYWw6ZnVuY3Rpb24oZXJyb3JDb3JyZWN0TGVuZ3RoKXt2YXIgYT1uZXcgUVJQb2x5bm9taWFsKFsxXSwwKTtmb3IodmFyIGk9MDtpPGVycm9yQ29ycmVjdExlbmd0aDtpKyspe2E9YS5tdWx0aXBseShuZXcgUVJQb2x5bm9taWFsKFsxLFFSTWF0aC5nZXhwKGkpXSwwKSk7fVxuICAgIHJldHVybiBhO30sZ2V0TGVuZ3RoSW5CaXRzOmZ1bmN0aW9uKG1vZGUsdHlwZSl7aWYoMTw9dHlwZSYmdHlwZTwxMCl7c3dpdGNoKG1vZGUpe2Nhc2UgUVJNb2RlLk1PREVfTlVNQkVSOnJldHVybiAxMDtjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTTpyZXR1cm4gOTtjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTpyZXR1cm4gODtjYXNlIFFSTW9kZS5NT0RFX0tBTkpJOnJldHVybiA4O2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIittb2RlKTt9fWVsc2UgaWYodHlwZTwyNyl7c3dpdGNoKG1vZGUpe2Nhc2UgUVJNb2RlLk1PREVfTlVNQkVSOnJldHVybiAxMjtjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTTpyZXR1cm4gMTE7Y2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEU6cmV0dXJuIDE2O2Nhc2UgUVJNb2RlLk1PREVfS0FOSkk6cmV0dXJuIDEwO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIittb2RlKTt9fWVsc2UgaWYodHlwZTw0MSl7c3dpdGNoKG1vZGUpe2Nhc2UgUVJNb2RlLk1PREVfTlVNQkVSOnJldHVybiAxNDtjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTTpyZXR1cm4gMTM7Y2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEU6cmV0dXJuIDE2O2Nhc2UgUVJNb2RlLk1PREVfS0FOSkk6cmV0dXJuIDEyO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIittb2RlKTt9fWVsc2V7dGhyb3cgbmV3IEVycm9yKFwidHlwZTpcIit0eXBlKTt9fSxnZXRMb3N0UG9pbnQ6ZnVuY3Rpb24ocXJDb2RlKXt2YXIgbW9kdWxlQ291bnQ9cXJDb2RlLmdldE1vZHVsZUNvdW50KCk7dmFyIGxvc3RQb2ludD0wO2Zvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50O3JvdysrKXtmb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudDtjb2wrKyl7dmFyIHNhbWVDb3VudD0wO3ZhciBkYXJrPXFyQ29kZS5pc0Rhcmsocm93LGNvbCk7Zm9yKHZhciByPS0xO3I8PTE7cisrKXtpZihyb3crcjwwfHxtb2R1bGVDb3VudDw9cm93K3Ipe2NvbnRpbnVlO31cbiAgICBmb3IodmFyIGM9LTE7Yzw9MTtjKyspe2lmKGNvbCtjPDB8fG1vZHVsZUNvdW50PD1jb2wrYyl7Y29udGludWU7fVxuICAgIGlmKHI9PTAmJmM9PTApe2NvbnRpbnVlO31cbiAgICBpZihkYXJrPT1xckNvZGUuaXNEYXJrKHJvdytyLGNvbCtjKSl7c2FtZUNvdW50Kys7fX19XG4gICAgaWYoc2FtZUNvdW50PjUpe2xvc3RQb2ludCs9KDMrc2FtZUNvdW50LTUpO319fVxuICAgIGZvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50LTE7cm93Kyspe2Zvcih2YXIgY29sPTA7Y29sPG1vZHVsZUNvdW50LTE7Y29sKyspe3ZhciBjb3VudD0wO2lmKHFyQ29kZS5pc0Rhcmsocm93LGNvbCkpY291bnQrKztpZihxckNvZGUuaXNEYXJrKHJvdysxLGNvbCkpY291bnQrKztpZihxckNvZGUuaXNEYXJrKHJvdyxjb2wrMSkpY291bnQrKztpZihxckNvZGUuaXNEYXJrKHJvdysxLGNvbCsxKSljb3VudCsrO2lmKGNvdW50PT0wfHxjb3VudD09NCl7bG9zdFBvaW50Kz0zO319fVxuICAgIGZvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50O3JvdysrKXtmb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudC02O2NvbCsrKXtpZihxckNvZGUuaXNEYXJrKHJvdyxjb2wpJiYhcXJDb2RlLmlzRGFyayhyb3csY29sKzEpJiZxckNvZGUuaXNEYXJrKHJvdyxjb2wrMikmJnFyQ29kZS5pc0Rhcmsocm93LGNvbCszKSYmcXJDb2RlLmlzRGFyayhyb3csY29sKzQpJiYhcXJDb2RlLmlzRGFyayhyb3csY29sKzUpJiZxckNvZGUuaXNEYXJrKHJvdyxjb2wrNikpe2xvc3RQb2ludCs9NDA7fX19XG4gICAgZm9yKHZhciBjb2w9MDtjb2w8bW9kdWxlQ291bnQ7Y29sKyspe2Zvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50LTY7cm93Kyspe2lmKHFyQ29kZS5pc0Rhcmsocm93LGNvbCkmJiFxckNvZGUuaXNEYXJrKHJvdysxLGNvbCkmJnFyQ29kZS5pc0Rhcmsocm93KzIsY29sKSYmcXJDb2RlLmlzRGFyayhyb3crMyxjb2wpJiZxckNvZGUuaXNEYXJrKHJvdys0LGNvbCkmJiFxckNvZGUuaXNEYXJrKHJvdys1LGNvbCkmJnFyQ29kZS5pc0Rhcmsocm93KzYsY29sKSl7bG9zdFBvaW50Kz00MDt9fX1cbiAgICB2YXIgZGFya0NvdW50PTA7Zm9yKHZhciBjb2w9MDtjb2w8bW9kdWxlQ291bnQ7Y29sKyspe2Zvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50O3JvdysrKXtpZihxckNvZGUuaXNEYXJrKHJvdyxjb2wpKXtkYXJrQ291bnQrKzt9fX1cbiAgICB2YXIgcmF0aW89TWF0aC5hYnMoMTAwKmRhcmtDb3VudC9tb2R1bGVDb3VudC9tb2R1bGVDb3VudC01MCkvNTtsb3N0UG9pbnQrPXJhdGlvKjEwO3JldHVybiBsb3N0UG9pbnQ7fX07dmFyIFFSTWF0aD17Z2xvZzpmdW5jdGlvbihuKXtpZihuPDEpe3Rocm93IG5ldyBFcnJvcihcImdsb2coXCIrbitcIilcIik7fVxuICAgIHJldHVybiBRUk1hdGguTE9HX1RBQkxFW25dO30sZ2V4cDpmdW5jdGlvbihuKXt3aGlsZShuPDApe24rPTI1NTt9XG4gICAgd2hpbGUobj49MjU2KXtuLT0yNTU7fVxuICAgIHJldHVybiBRUk1hdGguRVhQX1RBQkxFW25dO30sRVhQX1RBQkxFOm5ldyBBcnJheSgyNTYpLExPR19UQUJMRTpuZXcgQXJyYXkoMjU2KX07Zm9yKHZhciBpPTA7aTw4O2krKyl7UVJNYXRoLkVYUF9UQUJMRVtpXT0xPDxpO31cbiAgICBmb3IodmFyIGk9ODtpPDI1NjtpKyspe1FSTWF0aC5FWFBfVEFCTEVbaV09UVJNYXRoLkVYUF9UQUJMRVtpLTRdXlFSTWF0aC5FWFBfVEFCTEVbaS01XV5RUk1hdGguRVhQX1RBQkxFW2ktNl1eUVJNYXRoLkVYUF9UQUJMRVtpLThdO31cbiAgICBmb3IodmFyIGk9MDtpPDI1NTtpKyspe1FSTWF0aC5MT0dfVEFCTEVbUVJNYXRoLkVYUF9UQUJMRVtpXV09aTt9XG4gICAgZnVuY3Rpb24gUVJQb2x5bm9taWFsKG51bSxzaGlmdCl7aWYobnVtLmxlbmd0aD09dW5kZWZpbmVkKXt0aHJvdyBuZXcgRXJyb3IobnVtLmxlbmd0aCtcIi9cIitzaGlmdCk7fVxuICAgIHZhciBvZmZzZXQ9MDt3aGlsZShvZmZzZXQ8bnVtLmxlbmd0aCYmbnVtW29mZnNldF09PTApe29mZnNldCsrO31cbiAgICB0aGlzLm51bT1uZXcgQXJyYXkobnVtLmxlbmd0aC1vZmZzZXQrc2hpZnQpO2Zvcih2YXIgaT0wO2k8bnVtLmxlbmd0aC1vZmZzZXQ7aSsrKXt0aGlzLm51bVtpXT1udW1baStvZmZzZXRdO319XG4gICAgUVJQb2x5bm9taWFsLnByb3RvdHlwZT17Z2V0OmZ1bmN0aW9uKGluZGV4KXtyZXR1cm4gdGhpcy5udW1baW5kZXhdO30sZ2V0TGVuZ3RoOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubnVtLmxlbmd0aDt9LG11bHRpcGx5OmZ1bmN0aW9uKGUpe3ZhciBudW09bmV3IEFycmF5KHRoaXMuZ2V0TGVuZ3RoKCkrZS5nZXRMZW5ndGgoKS0xKTtmb3IodmFyIGk9MDtpPHRoaXMuZ2V0TGVuZ3RoKCk7aSsrKXtmb3IodmFyIGo9MDtqPGUuZ2V0TGVuZ3RoKCk7aisrKXtudW1baStqXV49UVJNYXRoLmdleHAoUVJNYXRoLmdsb2codGhpcy5nZXQoaSkpK1FSTWF0aC5nbG9nKGUuZ2V0KGopKSk7fX1cbiAgICByZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sMCk7fSxtb2Q6ZnVuY3Rpb24oZSl7aWYodGhpcy5nZXRMZW5ndGgoKS1lLmdldExlbmd0aCgpPDApe3JldHVybiB0aGlzO31cbiAgICB2YXIgcmF0aW89UVJNYXRoLmdsb2codGhpcy5nZXQoMCkpLVFSTWF0aC5nbG9nKGUuZ2V0KDApKTt2YXIgbnVtPW5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpKTtmb3IodmFyIGk9MDtpPHRoaXMuZ2V0TGVuZ3RoKCk7aSsrKXtudW1baV09dGhpcy5nZXQoaSk7fVxuICAgIGZvcih2YXIgaT0wO2k8ZS5nZXRMZW5ndGgoKTtpKyspe251bVtpXV49UVJNYXRoLmdleHAoUVJNYXRoLmdsb2coZS5nZXQoaSkpK3JhdGlvKTt9XG4gICAgcmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLDApLm1vZChlKTt9fTtmdW5jdGlvbiBRUlJTQmxvY2sodG90YWxDb3VudCxkYXRhQ291bnQpe3RoaXMudG90YWxDb3VudD10b3RhbENvdW50O3RoaXMuZGF0YUNvdW50PWRhdGFDb3VudDt9XG4gICAgUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFPVtbMSwyNiwxOV0sWzEsMjYsMTZdLFsxLDI2LDEzXSxbMSwyNiw5XSxbMSw0NCwzNF0sWzEsNDQsMjhdLFsxLDQ0LDIyXSxbMSw0NCwxNl0sWzEsNzAsNTVdLFsxLDcwLDQ0XSxbMiwzNSwxN10sWzIsMzUsMTNdLFsxLDEwMCw4MF0sWzIsNTAsMzJdLFsyLDUwLDI0XSxbNCwyNSw5XSxbMSwxMzQsMTA4XSxbMiw2Nyw0M10sWzIsMzMsMTUsMiwzNCwxNl0sWzIsMzMsMTEsMiwzNCwxMl0sWzIsODYsNjhdLFs0LDQzLDI3XSxbNCw0MywxOV0sWzQsNDMsMTVdLFsyLDk4LDc4XSxbNCw0OSwzMV0sWzIsMzIsMTQsNCwzMywxNV0sWzQsMzksMTMsMSw0MCwxNF0sWzIsMTIxLDk3XSxbMiw2MCwzOCwyLDYxLDM5XSxbNCw0MCwxOCwyLDQxLDE5XSxbNCw0MCwxNCwyLDQxLDE1XSxbMiwxNDYsMTE2XSxbMyw1OCwzNiwyLDU5LDM3XSxbNCwzNiwxNiw0LDM3LDE3XSxbNCwzNiwxMiw0LDM3LDEzXSxbMiw4Niw2OCwyLDg3LDY5XSxbNCw2OSw0MywxLDcwLDQ0XSxbNiw0MywxOSwyLDQ0LDIwXSxbNiw0MywxNSwyLDQ0LDE2XSxbNCwxMDEsODFdLFsxLDgwLDUwLDQsODEsNTFdLFs0LDUwLDIyLDQsNTEsMjNdLFszLDM2LDEyLDgsMzcsMTNdLFsyLDExNiw5MiwyLDExNyw5M10sWzYsNTgsMzYsMiw1OSwzN10sWzQsNDYsMjAsNiw0NywyMV0sWzcsNDIsMTQsNCw0MywxNV0sWzQsMTMzLDEwN10sWzgsNTksMzcsMSw2MCwzOF0sWzgsNDQsMjAsNCw0NSwyMV0sWzEyLDMzLDExLDQsMzQsMTJdLFszLDE0NSwxMTUsMSwxNDYsMTE2XSxbNCw2NCw0MCw1LDY1LDQxXSxbMTEsMzYsMTYsNSwzNywxN10sWzExLDM2LDEyLDUsMzcsMTNdLFs1LDEwOSw4NywxLDExMCw4OF0sWzUsNjUsNDEsNSw2Niw0Ml0sWzUsNTQsMjQsNyw1NSwyNV0sWzExLDM2LDEyXSxbNSwxMjIsOTgsMSwxMjMsOTldLFs3LDczLDQ1LDMsNzQsNDZdLFsxNSw0MywxOSwyLDQ0LDIwXSxbMyw0NSwxNSwxMyw0NiwxNl0sWzEsMTM1LDEwNyw1LDEzNiwxMDhdLFsxMCw3NCw0NiwxLDc1LDQ3XSxbMSw1MCwyMiwxNSw1MSwyM10sWzIsNDIsMTQsMTcsNDMsMTVdLFs1LDE1MCwxMjAsMSwxNTEsMTIxXSxbOSw2OSw0Myw0LDcwLDQ0XSxbMTcsNTAsMjIsMSw1MSwyM10sWzIsNDIsMTQsMTksNDMsMTVdLFszLDE0MSwxMTMsNCwxNDIsMTE0XSxbMyw3MCw0NCwxMSw3MSw0NV0sWzE3LDQ3LDIxLDQsNDgsMjJdLFs5LDM5LDEzLDE2LDQwLDE0XSxbMywxMzUsMTA3LDUsMTM2LDEwOF0sWzMsNjcsNDEsMTMsNjgsNDJdLFsxNSw1NCwyNCw1LDU1LDI1XSxbMTUsNDMsMTUsMTAsNDQsMTZdLFs0LDE0NCwxMTYsNCwxNDUsMTE3XSxbMTcsNjgsNDJdLFsxNyw1MCwyMiw2LDUxLDIzXSxbMTksNDYsMTYsNiw0NywxN10sWzIsMTM5LDExMSw3LDE0MCwxMTJdLFsxNyw3NCw0Nl0sWzcsNTQsMjQsMTYsNTUsMjVdLFszNCwzNywxM10sWzQsMTUxLDEyMSw1LDE1MiwxMjJdLFs0LDc1LDQ3LDE0LDc2LDQ4XSxbMTEsNTQsMjQsMTQsNTUsMjVdLFsxNiw0NSwxNSwxNCw0NiwxNl0sWzYsMTQ3LDExNyw0LDE0OCwxMThdLFs2LDczLDQ1LDE0LDc0LDQ2XSxbMTEsNTQsMjQsMTYsNTUsMjVdLFszMCw0NiwxNiwyLDQ3LDE3XSxbOCwxMzIsMTA2LDQsMTMzLDEwN10sWzgsNzUsNDcsMTMsNzYsNDhdLFs3LDU0LDI0LDIyLDU1LDI1XSxbMjIsNDUsMTUsMTMsNDYsMTZdLFsxMCwxNDIsMTE0LDIsMTQzLDExNV0sWzE5LDc0LDQ2LDQsNzUsNDddLFsyOCw1MCwyMiw2LDUxLDIzXSxbMzMsNDYsMTYsNCw0NywxN10sWzgsMTUyLDEyMiw0LDE1MywxMjNdLFsyMiw3Myw0NSwzLDc0LDQ2XSxbOCw1MywyMywyNiw1NCwyNF0sWzEyLDQ1LDE1LDI4LDQ2LDE2XSxbMywxNDcsMTE3LDEwLDE0OCwxMThdLFszLDczLDQ1LDIzLDc0LDQ2XSxbNCw1NCwyNCwzMSw1NSwyNV0sWzExLDQ1LDE1LDMxLDQ2LDE2XSxbNywxNDYsMTE2LDcsMTQ3LDExN10sWzIxLDczLDQ1LDcsNzQsNDZdLFsxLDUzLDIzLDM3LDU0LDI0XSxbMTksNDUsMTUsMjYsNDYsMTZdLFs1LDE0NSwxMTUsMTAsMTQ2LDExNl0sWzE5LDc1LDQ3LDEwLDc2LDQ4XSxbMTUsNTQsMjQsMjUsNTUsMjVdLFsyMyw0NSwxNSwyNSw0NiwxNl0sWzEzLDE0NSwxMTUsMywxNDYsMTE2XSxbMiw3NCw0NiwyOSw3NSw0N10sWzQyLDU0LDI0LDEsNTUsMjVdLFsyMyw0NSwxNSwyOCw0NiwxNl0sWzE3LDE0NSwxMTVdLFsxMCw3NCw0NiwyMyw3NSw0N10sWzEwLDU0LDI0LDM1LDU1LDI1XSxbMTksNDUsMTUsMzUsNDYsMTZdLFsxNywxNDUsMTE1LDEsMTQ2LDExNl0sWzE0LDc0LDQ2LDIxLDc1LDQ3XSxbMjksNTQsMjQsMTksNTUsMjVdLFsxMSw0NSwxNSw0Niw0NiwxNl0sWzEzLDE0NSwxMTUsNiwxNDYsMTE2XSxbMTQsNzQsNDYsMjMsNzUsNDddLFs0NCw1NCwyNCw3LDU1LDI1XSxbNTksNDYsMTYsMSw0NywxN10sWzEyLDE1MSwxMjEsNywxNTIsMTIyXSxbMTIsNzUsNDcsMjYsNzYsNDhdLFszOSw1NCwyNCwxNCw1NSwyNV0sWzIyLDQ1LDE1LDQxLDQ2LDE2XSxbNiwxNTEsMTIxLDE0LDE1MiwxMjJdLFs2LDc1LDQ3LDM0LDc2LDQ4XSxbNDYsNTQsMjQsMTAsNTUsMjVdLFsyLDQ1LDE1LDY0LDQ2LDE2XSxbMTcsMTUyLDEyMiw0LDE1MywxMjNdLFsyOSw3NCw0NiwxNCw3NSw0N10sWzQ5LDU0LDI0LDEwLDU1LDI1XSxbMjQsNDUsMTUsNDYsNDYsMTZdLFs0LDE1MiwxMjIsMTgsMTUzLDEyM10sWzEzLDc0LDQ2LDMyLDc1LDQ3XSxbNDgsNTQsMjQsMTQsNTUsMjVdLFs0Miw0NSwxNSwzMiw0NiwxNl0sWzIwLDE0NywxMTcsNCwxNDgsMTE4XSxbNDAsNzUsNDcsNyw3Niw0OF0sWzQzLDU0LDI0LDIyLDU1LDI1XSxbMTAsNDUsMTUsNjcsNDYsMTZdLFsxOSwxNDgsMTE4LDYsMTQ5LDExOV0sWzE4LDc1LDQ3LDMxLDc2LDQ4XSxbMzQsNTQsMjQsMzQsNTUsMjVdLFsyMCw0NSwxNSw2MSw0NiwxNl1dO1FSUlNCbG9jay5nZXRSU0Jsb2Nrcz1mdW5jdGlvbih0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsKXt2YXIgcnNCbG9jaz1RUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpO2lmKHJzQmxvY2s9PXVuZGVmaW5lZCl7dGhyb3cgbmV3IEVycm9yKFwiYmFkIHJzIGJsb2NrIEAgdHlwZU51bWJlcjpcIit0eXBlTnVtYmVyK1wiL2Vycm9yQ29ycmVjdExldmVsOlwiK2Vycm9yQ29ycmVjdExldmVsKTt9XG4gICAgdmFyIGxlbmd0aD1yc0Jsb2NrLmxlbmd0aC8zO3ZhciBsaXN0PVtdO2Zvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7dmFyIGNvdW50PXJzQmxvY2tbaSozKzBdO3ZhciB0b3RhbENvdW50PXJzQmxvY2tbaSozKzFdO3ZhciBkYXRhQ291bnQ9cnNCbG9ja1tpKjMrMl07Zm9yKHZhciBqPTA7ajxjb3VudDtqKyspe2xpc3QucHVzaChuZXcgUVJSU0Jsb2NrKHRvdGFsQ291bnQsZGF0YUNvdW50KSk7fX1cbiAgICByZXR1cm4gbGlzdDt9O1FSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGU9ZnVuY3Rpb24odHlwZU51bWJlcixlcnJvckNvcnJlY3RMZXZlbCl7c3dpdGNoKGVycm9yQ29ycmVjdExldmVsKXtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTDpyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyLTEpKjQrMF07Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLk06cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlci0xKSo0KzFdO2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5ROnJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXItMSkqNCsyXTtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuSDpyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyLTEpKjQrM107ZGVmYXVsdDpyZXR1cm4gdW5kZWZpbmVkO319O2Z1bmN0aW9uIFFSQml0QnVmZmVyKCl7dGhpcy5idWZmZXI9W107dGhpcy5sZW5ndGg9MDt9XG4gICAgUVJCaXRCdWZmZXIucHJvdG90eXBlPXtnZXQ6ZnVuY3Rpb24oaW5kZXgpe3ZhciBidWZJbmRleD1NYXRoLmZsb29yKGluZGV4LzgpO3JldHVybigodGhpcy5idWZmZXJbYnVmSW5kZXhdPj4+KDctaW5kZXglOCkpJjEpPT0xO30scHV0OmZ1bmN0aW9uKG51bSxsZW5ndGgpe2Zvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7dGhpcy5wdXRCaXQoKChudW0+Pj4obGVuZ3RoLWktMSkpJjEpPT0xKTt9fSxnZXRMZW5ndGhJbkJpdHM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGg7fSxwdXRCaXQ6ZnVuY3Rpb24oYml0KXt2YXIgYnVmSW5kZXg9TWF0aC5mbG9vcih0aGlzLmxlbmd0aC84KTtpZih0aGlzLmJ1ZmZlci5sZW5ndGg8PWJ1ZkluZGV4KXt0aGlzLmJ1ZmZlci5wdXNoKDApO31cbiAgICBpZihiaXQpe3RoaXMuYnVmZmVyW2J1ZkluZGV4XXw9KDB4ODA+Pj4odGhpcy5sZW5ndGglOCkpO31cbiAgICB0aGlzLmxlbmd0aCsrO319O3ZhciBRUkNvZGVMaW1pdExlbmd0aD1bWzE3LDE0LDExLDddLFszMiwyNiwyMCwxNF0sWzUzLDQyLDMyLDI0XSxbNzgsNjIsNDYsMzRdLFsxMDYsODQsNjAsNDRdLFsxMzQsMTA2LDc0LDU4XSxbMTU0LDEyMiw4Niw2NF0sWzE5MiwxNTIsMTA4LDg0XSxbMjMwLDE4MCwxMzAsOThdLFsyNzEsMjEzLDE1MSwxMTldLFszMjEsMjUxLDE3NywxMzddLFszNjcsMjg3LDIwMywxNTVdLFs0MjUsMzMxLDI0MSwxNzddLFs0NTgsMzYyLDI1OCwxOTRdLFs1MjAsNDEyLDI5MiwyMjBdLFs1ODYsNDUwLDMyMiwyNTBdLFs2NDQsNTA0LDM2NCwyODBdLFs3MTgsNTYwLDM5NCwzMTBdLFs3OTIsNjI0LDQ0MiwzMzhdLFs4NTgsNjY2LDQ4MiwzODJdLFs5MjksNzExLDUwOSw0MDNdLFsxMDAzLDc3OSw1NjUsNDM5XSxbMTA5MSw4NTcsNjExLDQ2MV0sWzExNzEsOTExLDY2MSw1MTFdLFsxMjczLDk5Nyw3MTUsNTM1XSxbMTM2NywxMDU5LDc1MSw1OTNdLFsxNDY1LDExMjUsODA1LDYyNV0sWzE1MjgsMTE5MCw4NjgsNjU4XSxbMTYyOCwxMjY0LDkwOCw2OThdLFsxNzMyLDEzNzAsOTgyLDc0Ml0sWzE4NDAsMTQ1MiwxMDMwLDc5MF0sWzE5NTIsMTUzOCwxMTEyLDg0Ml0sWzIwNjgsMTYyOCwxMTY4LDg5OF0sWzIxODgsMTcyMiwxMjI4LDk1OF0sWzIzMDMsMTgwOSwxMjgzLDk4M10sWzI0MzEsMTkxMSwxMzUxLDEwNTFdLFsyNTYzLDE5ODksMTQyMywxMDkzXSxbMjY5OSwyMDk5LDE0OTksMTEzOV0sWzI4MDksMjIxMywxNTc5LDEyMTldLFsyOTUzLDIzMzEsMTY2MywxMjczXV07XG5cbiAgICBmdW5jdGlvbiBfaXNTdXBwb3J0Q2FudmFzKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCAhPSBcInVuZGVmaW5lZFwiO1xuICAgIH1cblxuICAgIC8vIGFuZHJvaWQgMi54IGRvZXNuJ3Qgc3VwcG9ydCBEYXRhLVVSSSBzcGVjXG4gICAgZnVuY3Rpb24gX2dldEFuZHJvaWQoKSB7XG4gICAgICAgIHZhciBhbmRyb2lkID0gZmFsc2U7XG4gICAgICAgIHZhciBzQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gICAgICAgIGlmICgvYW5kcm9pZC9pLnRlc3Qoc0FnZW50KSkgeyAvLyBhbmRyb2lkXG4gICAgICAgICAgICBhbmRyb2lkID0gdHJ1ZTtcbiAgICAgICAgICAgIGFNYXQgPSBzQWdlbnQudG9TdHJpbmcoKS5tYXRjaCgvYW5kcm9pZCAoWzAtOV1cXC5bMC05XSkvaSk7XG5cbiAgICAgICAgICAgIGlmIChhTWF0ICYmIGFNYXRbMV0pIHtcbiAgICAgICAgICAgICAgICBhbmRyb2lkID0gcGFyc2VGbG9hdChhTWF0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbmRyb2lkO1xuICAgIH1cblxuICAgIHZhciBzdmdEcmF3ZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIERyYXdpbmcgPSBmdW5jdGlvbiAoZWwsIGh0T3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICAgICAgdGhpcy5faHRPcHRpb24gPSBodE9wdGlvbjtcbiAgICAgICAgfTtcblxuICAgICAgICBEcmF3aW5nLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKG9RUkNvZGUpIHtcbiAgICAgICAgICAgIHZhciBfaHRPcHRpb24gPSB0aGlzLl9odE9wdGlvbjtcbiAgICAgICAgICAgIHZhciBfZWwgPSB0aGlzLl9lbDtcbiAgICAgICAgICAgIHZhciBuQ291bnQgPSBvUVJDb2RlLmdldE1vZHVsZUNvdW50KCk7XG4gICAgICAgICAgICB2YXIgbldpZHRoID0gTWF0aC5mbG9vcihfaHRPcHRpb24ud2lkdGggLyBuQ291bnQpO1xuICAgICAgICAgICAgdmFyIG5IZWlnaHQgPSBNYXRoLmZsb29yKF9odE9wdGlvbi5oZWlnaHQgLyBuQ291bnQpO1xuXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1ha2VTVkcodGFnLCBhdHRycykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXR0cnMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrKSkgZWwuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzdmcgPSBtYWtlU1ZHKFwic3ZnXCIgLCB7J3ZpZXdCb3gnOiAnMCAwICcgKyBTdHJpbmcobkNvdW50KSArIFwiIFwiICsgU3RyaW5nKG5Db3VudCksICd3aWR0aCc6ICcxMDAlJywgJ2hlaWdodCc6ICcxMDAlJywgJ2ZpbGwnOiBfaHRPcHRpb24uY29sb3JMaWdodH0pO1xuICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIiwgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG4gICAgICAgICAgICBfZWwuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKG1ha2VTVkcoXCJyZWN0XCIsIHtcImZpbGxcIjogX2h0T3B0aW9uLmNvbG9yRGFyaywgXCJ3aWR0aFwiOiBcIjFcIiwgXCJoZWlnaHRcIjogXCIxXCIsIFwiaWRcIjogXCJ0ZW1wbGF0ZVwifSkpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBuQ291bnQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbkNvdW50OyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob1FSQ29kZS5pc0Rhcmsocm93LCBjb2wpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBtYWtlU1ZHKFwidXNlXCIsIHtcInhcIjogU3RyaW5nKHJvdyksIFwieVwiOiBTdHJpbmcoY29sKX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiLCBcIiN0ZW1wbGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRHJhd2luZy5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fZWwuaGFzQ2hpbGROb2RlcygpKVxuICAgICAgICAgICAgICAgIHRoaXMuX2VsLnJlbW92ZUNoaWxkKHRoaXMuX2VsLmxhc3RDaGlsZCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBEcmF3aW5nO1xuICAgIH0pKCk7XG5cbiAgICAvLyBIYWQgdG8gY2hhbmdlIHRoaXMgYSBiaXQsIGJlY2F1c2Ugb2YgYnJvd3NlcmlmeS5cbiAgICAvLyBkb2N1bWVudCBwcm9wZXJ0aWVzIGNhbm5vdCBiZSB0ZXN0ZWQgd2hlbiB0aGUgSlMgaXMgbG9hZGVkLFxuICAgIC8vIGFsbCB3aW5kb3cvZG9jdW1lbnQgYWNjZXNzIHNob3VsZCBiZSBkb25lIGluIHRoZSBldmVudCBoYW5kbGVycyBvbmx5LlxuICAgIHZhciB1c2VTVkc7XG4gICAgaWYoZ2xvYmFsKSB7XG4gICAgICAgIC8vIHRhcGUgKyBQdXJlIE5vZGVKU1xuICAgICAgICB1c2VTVkcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1c2VTVkcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInN2Z1wiO1xuICAgIH1cblxuICAgIC8vIERyYXdpbmcgaW4gRE9NIGJ5IHVzaW5nIFRhYmxlIHRhZ1xuICAgIHZhciBEcmF3aW5nID0gdXNlU1ZHID8gc3ZnRHJhd2VyIDogIV9pc1N1cHBvcnRDYW52YXMoKSA/IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBEcmF3aW5nID0gZnVuY3Rpb24gKGVsLCBodE9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgICAgIHRoaXMuX2h0T3B0aW9uID0gaHRPcHRpb247XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERyYXcgdGhlIFFSQ29kZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1FSQ29kZX0gb1FSQ29kZVxuICAgICAgICAgKi9cbiAgICAgICAgRHJhd2luZy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChvUVJDb2RlKSB7XG4gICAgICAgICAgICB2YXIgX2h0T3B0aW9uID0gdGhpcy5faHRPcHRpb247XG4gICAgICAgICAgICB2YXIgX2VsID0gdGhpcy5fZWw7XG4gICAgICAgICAgICB2YXIgbkNvdW50ID0gb1FSQ29kZS5nZXRNb2R1bGVDb3VudCgpO1xuICAgICAgICAgICAgdmFyIG5XaWR0aCA9IE1hdGguZmxvb3IoX2h0T3B0aW9uLndpZHRoIC8gbkNvdW50KTtcbiAgICAgICAgICAgIHZhciBuSGVpZ2h0ID0gTWF0aC5mbG9vcihfaHRPcHRpb24uaGVpZ2h0IC8gbkNvdW50KTtcbiAgICAgICAgICAgIHZhciBhSFRNTCA9IFsnPHRhYmxlIHN0eWxlPVwiYm9yZGVyOjA7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1wiPiddO1xuXG4gICAgICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBuQ291bnQ7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgYUhUTUwucHVzaCgnPHRyPicpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbkNvdW50OyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICBhSFRNTC5wdXNoKCc8dGQgc3R5bGU9XCJib3JkZXI6MDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7cGFkZGluZzowO21hcmdpbjowO3dpZHRoOicgKyBuV2lkdGggKyAncHg7aGVpZ2h0OicgKyBuSGVpZ2h0ICsgJ3B4O2JhY2tncm91bmQtY29sb3I6JyArIChvUVJDb2RlLmlzRGFyayhyb3csIGNvbCkgPyBfaHRPcHRpb24uY29sb3JEYXJrIDogX2h0T3B0aW9uLmNvbG9yTGlnaHQpICsgJztcIj48L3RkPicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFIVE1MLnB1c2goJzwvdHI+Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFIVE1MLnB1c2goJzwvdGFibGU+Jyk7XG4gICAgICAgICAgICBfZWwuaW5uZXJIVE1MID0gYUhUTUwuam9pbignJyk7XG5cbiAgICAgICAgICAgIC8vIEZpeCB0aGUgbWFyZ2luIHZhbHVlcyBhcyByZWFsIHNpemUuXG4gICAgICAgICAgICB2YXIgZWxUYWJsZSA9IF9lbC5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdmFyIG5MZWZ0TWFyZ2luVGFibGUgPSAoX2h0T3B0aW9uLndpZHRoIC0gZWxUYWJsZS5vZmZzZXRXaWR0aCkgLyAyO1xuICAgICAgICAgICAgdmFyIG5Ub3BNYXJnaW5UYWJsZSA9IChfaHRPcHRpb24uaGVpZ2h0IC0gZWxUYWJsZS5vZmZzZXRIZWlnaHQpIC8gMjtcblxuICAgICAgICAgICAgaWYgKG5MZWZ0TWFyZ2luVGFibGUgPiAwICYmIG5Ub3BNYXJnaW5UYWJsZSA+IDApIHtcbiAgICAgICAgICAgICAgICBlbFRhYmxlLnN0eWxlLm1hcmdpbiA9IG5Ub3BNYXJnaW5UYWJsZSArIFwicHggXCIgKyBuTGVmdE1hcmdpblRhYmxlICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhciB0aGUgUVJDb2RlXG4gICAgICAgICAqL1xuICAgICAgICBEcmF3aW5nLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBEcmF3aW5nO1xuICAgIH0pKCkgOiAoZnVuY3Rpb24gKCkgeyAvLyBEcmF3aW5nIGluIENhbnZhc1xuICAgICAgICBmdW5jdGlvbiBfb25NYWtlSW1hZ2UoKSB7XG4gICAgICAgICAgICB0aGlzLl9lbEltYWdlLnNyYyA9IHRoaXMuX2VsQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcbiAgICAgICAgICAgIHRoaXMuX2VsSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHRoaXMuX2VsQ2FudmFzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuZHJvaWQgMi4xIGJ1ZyB3b3JrYXJvdW5kXG4gICAgICAgIC8vIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9hbmRyb2lkL2lzc3Vlcy9kZXRhaWw/aWQ9NTE0MVxuICAgICAgICBpZiAodGhpcy5fYW5kcm9pZCAmJiB0aGlzLl9hbmRyb2lkIDw9IDIuMSkge1xuICAgICAgICAgICAgdmFyIGZhY3RvciA9IDEgLyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICAgIHZhciBkcmF3SW1hZ2UgPSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdJbWFnZTtcbiAgICAgICAgICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZHJhd0ltYWdlID0gZnVuY3Rpb24gKGltYWdlLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoKFwibm9kZU5hbWVcIiBpbiBpbWFnZSkgJiYgL2ltZy9pLnRlc3QoaW1hZ2Uubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1tpXSA9IGFyZ3VtZW50c1tpXSAqIGZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGR3ID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzFdICo9IGZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzJdICo9IGZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzNdICo9IGZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzRdICo9IGZhY3RvcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkcmF3SW1hZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgd2hldGhlciB0aGUgdXNlcidzIGJyb3dzZXIgc3VwcG9ydHMgRGF0YSBVUkkgb3Igbm90XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZTdWNjZXNzIE9jY3VycyBpZiBpdCBzdXBwb3J0cyBEYXRhIFVSSVxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmRmFpbCBPY2N1cnMgaWYgaXQgZG9lc24ndCBzdXBwb3J0IERhdGEgVVJJXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfc2FmZVNldERhdGFVUkkoZlN1Y2Nlc3MsIGZGYWlsKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBzZWxmLl9mRmFpbCA9IGZGYWlsO1xuICAgICAgICAgICAgc2VsZi5fZlN1Y2Nlc3MgPSBmU3VjY2VzcztcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaXQganVzdCBvbmNlXG4gICAgICAgICAgICBpZiAoc2VsZi5fYlN1cHBvcnREYXRhVVJJID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICB2YXIgZk9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fYlN1cHBvcnREYXRhVVJJID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX2ZGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZkZhaWwuY2FsbChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGZPblN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fYlN1cHBvcnREYXRhVVJJID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fZlN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2ZTdWNjZXNzLmNhbGwoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZWwub25hYm9ydCA9IGZPbkVycm9yO1xuICAgICAgICAgICAgICAgIGVsLm9uZXJyb3IgPSBmT25FcnJvcjtcbiAgICAgICAgICAgICAgICBlbC5vbmxvYWQgPSBmT25TdWNjZXNzO1xuICAgICAgICAgICAgICAgIGVsLnNyYyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFGQ0FZQUFBQ05ieWJsQUFBQUhFbEVRVlFJMTJQNC8vOC93MzhHSUFYRElCS0UwREh4Z2xqTkJBQU85VFhMMFk0T0h3QUFBQUJKUlU1RXJrSmdnZz09XCI7IC8vIHRoZSBJbWFnZSBjb250YWlucyAxcHggZGF0YS5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuX2JTdXBwb3J0RGF0YVVSSSA9PT0gdHJ1ZSAmJiBzZWxmLl9mU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHNlbGYuX2ZTdWNjZXNzLmNhbGwoc2VsZik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuX2JTdXBwb3J0RGF0YVVSSSA9PT0gZmFsc2UgJiYgc2VsZi5fZkZhaWwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9mRmFpbC5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3aW5nIFFSQ29kZSBieSB1c2luZyBjYW52YXNcbiAgICAgICAgICpcbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBodE9wdGlvbiBRUkNvZGUgT3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIERyYXdpbmcgPSBmdW5jdGlvbiAoZWwsIGh0T3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9iSXNQYWludGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9hbmRyb2lkID0gX2dldEFuZHJvaWQoKTtcblxuICAgICAgICAgICAgdGhpcy5faHRPcHRpb24gPSBodE9wdGlvbjtcbiAgICAgICAgICAgIHRoaXMuX2VsQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRoaXMuX2VsQ2FudmFzLndpZHRoID0gaHRPcHRpb24ud2lkdGg7XG4gICAgICAgICAgICB0aGlzLl9lbENhbnZhcy5oZWlnaHQgPSBodE9wdGlvbi5oZWlnaHQ7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZCh0aGlzLl9lbENhbnZhcyk7XG4gICAgICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICAgICAgdGhpcy5fb0NvbnRleHQgPSB0aGlzLl9lbENhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICB0aGlzLl9iSXNQYWludGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9lbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIHRoaXMuX2VsSW1hZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgdGhpcy5fZWwuYXBwZW5kQ2hpbGQodGhpcy5fZWxJbWFnZSk7XG4gICAgICAgICAgICB0aGlzLl9iU3VwcG9ydERhdGFVUkkgPSBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEcmF3IHRoZSBRUkNvZGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtRUkNvZGV9IG9RUkNvZGVcbiAgICAgICAgICovXG4gICAgICAgIERyYXdpbmcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAob1FSQ29kZSkge1xuICAgICAgICAgICAgdmFyIF9lbEltYWdlID0gdGhpcy5fZWxJbWFnZTtcbiAgICAgICAgICAgIHZhciBfb0NvbnRleHQgPSB0aGlzLl9vQ29udGV4dDtcbiAgICAgICAgICAgIHZhciBfaHRPcHRpb24gPSB0aGlzLl9odE9wdGlvbjtcblxuICAgICAgICAgICAgdmFyIG5Db3VudCA9IG9RUkNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcbiAgICAgICAgICAgIHZhciBuV2lkdGggPSBfaHRPcHRpb24ud2lkdGggLyBuQ291bnQ7XG4gICAgICAgICAgICB2YXIgbkhlaWdodCA9IF9odE9wdGlvbi5oZWlnaHQgLyBuQ291bnQ7XG4gICAgICAgICAgICB2YXIgblJvdW5kZWRXaWR0aCA9IE1hdGgucm91bmQobldpZHRoKTtcbiAgICAgICAgICAgIHZhciBuUm91bmRlZEhlaWdodCA9IE1hdGgucm91bmQobkhlaWdodCk7XG5cbiAgICAgICAgICAgIF9lbEltYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbkNvdW50OyByb3crKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG5Db3VudDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJJc0RhcmsgPSBvUVJDb2RlLmlzRGFyayhyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuTGVmdCA9IGNvbCAqIG5XaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5Ub3AgPSByb3cgKiBuSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBfb0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBiSXNEYXJrID8gX2h0T3B0aW9uLmNvbG9yRGFyayA6IF9odE9wdGlvbi5jb2xvckxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBfb0NvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgICAgICAgICAgX29Db250ZXh0LmZpbGxTdHlsZSA9IGJJc0RhcmsgPyBfaHRPcHRpb24uY29sb3JEYXJrIDogX2h0T3B0aW9uLmNvbG9yTGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIF9vQ29udGV4dC5maWxsUmVjdChuTGVmdCwgblRvcCwgbldpZHRoLCBuSGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDslYjti7Ag7JWo66as7Ja07IuxIOuwqeyngCDsspjrpqxcbiAgICAgICAgICAgICAgICAgICAgX29Db250ZXh0LnN0cm9rZVJlY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG5MZWZ0KSArIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoblRvcCkgKyAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuUm91bmRlZFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgblJvdW5kZWRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBfb0NvbnRleHQuc3Ryb2tlUmVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguY2VpbChuTGVmdCkgLSAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoblRvcCkgLSAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuUm91bmRlZFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgblJvdW5kZWRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2JJc1BhaW50ZWQgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYWtlIHRoZSBpbWFnZSBmcm9tIENhbnZhcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBEYXRhIFVSSS5cbiAgICAgICAgICovXG4gICAgICAgIERyYXdpbmcucHJvdG90eXBlLm1ha2VJbWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9iSXNQYWludGVkKSB7XG4gICAgICAgICAgICAgICAgX3NhZmVTZXREYXRhVVJJLmNhbGwodGhpcywgX29uTWFrZUltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJuIHdoZXRoZXIgdGhlIFFSQ29kZSBpcyBwYWludGVkIG9yIG5vdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgRHJhd2luZy5wcm90b3R5cGUuaXNQYWludGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JJc1BhaW50ZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFyIHRoZSBRUkNvZGVcbiAgICAgICAgICovXG4gICAgICAgIERyYXdpbmcucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fb0NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2VsQ2FudmFzLndpZHRoLCB0aGlzLl9lbENhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5fYklzUGFpbnRlZCA9IGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gbk51bWJlclxuICAgICAgICAgKi9cbiAgICAgICAgRHJhd2luZy5wcm90b3R5cGUucm91bmQgPSBmdW5jdGlvbiAobk51bWJlcikge1xuICAgICAgICAgICAgaWYgKCFuTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5OdW1iZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKG5OdW1iZXIgKiAxMDAwKSAvIDEwMDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIERyYXdpbmc7XG4gICAgfSkoKTtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdHlwZSBieSBzdHJpbmcgbGVuZ3RoXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzVGV4dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBuQ29ycmVjdExldmVsXG4gICAgICogQHJldHVybiB7TnVtYmVyfSB0eXBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2dldFR5cGVOdW1iZXIoc1RleHQsIG5Db3JyZWN0TGV2ZWwpIHtcbiAgICAgICAgdmFyIG5UeXBlID0gMTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IF9nZXRVVEY4TGVuZ3RoKHNUZXh0KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gUVJDb2RlTGltaXRMZW5ndGgubGVuZ3RoOyBpIDw9IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbkxpbWl0ID0gMDtcblxuICAgICAgICAgICAgc3dpdGNoIChuQ29ycmVjdExldmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkwgOlxuICAgICAgICAgICAgICAgICAgICBuTGltaXQgPSBRUkNvZGVMaW1pdExlbmd0aFtpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdExldmVsLk0gOlxuICAgICAgICAgICAgICAgICAgICBuTGltaXQgPSBRUkNvZGVMaW1pdExlbmd0aFtpXVsxXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdExldmVsLlEgOlxuICAgICAgICAgICAgICAgICAgICBuTGltaXQgPSBRUkNvZGVMaW1pdExlbmd0aFtpXVsyXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkggOlxuICAgICAgICAgICAgICAgICAgICBuTGltaXQgPSBRUkNvZGVMaW1pdExlbmd0aFtpXVszXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsZW5ndGggPD0gbkxpbWl0KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5UeXBlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoblR5cGUgPiBRUkNvZGVMaW1pdExlbmd0aC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRvbyBsb25nIGRhdGFcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gblR5cGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFVURjhMZW5ndGgoc1RleHQpIHtcbiAgICAgICAgdmFyIHJlcGxhY2VkVGV4dCA9IGVuY29kZVVSSShzVGV4dCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXCVbMC05YS1mQS1GXXsyfS9nLCAnYScpO1xuICAgICAgICByZXR1cm4gcmVwbGFjZWRUZXh0Lmxlbmd0aCArIChyZXBsYWNlZFRleHQubGVuZ3RoICE9IHNUZXh0ID8gMyA6IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBjbGFzcyBRUkNvZGVcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG5ldyBRUkNvZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0XCIpLCBcImh0dHA6Ly9qaW5kby5kZXYubmF2ZXIuY29tL2NvbGxpZVwiKTtcbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogdmFyIG9RUkNvZGUgPSBuZXcgUVJDb2RlKFwidGVzdFwiLCB7XG4gICAgICogICAgdGV4dCA6IFwiaHR0cDovL25hdmVyLmNvbVwiLFxuICAgICAqICAgIHdpZHRoIDogMTI4LFxuICAgICAqICAgIGhlaWdodCA6IDEyOFxuICAgICAqIH0pO1xuICAgICAqXG4gICAgICogb1FSQ29kZS5jbGVhcigpOyAvLyBDbGVhciB0aGUgUVJDb2RlLlxuICAgICAqIG9RUkNvZGUubWFrZUNvZGUoXCJodHRwOi8vbWFwLm5hdmVyLmNvbVwiKTsgLy8gUmUtY3JlYXRlIHRoZSBRUkNvZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fFN0cmluZ30gZWwgdGFyZ2V0IGVsZW1lbnQgb3IgJ2lkJyBhdHRyaWJ1dGUgb2YgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZPcHRpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdk9wdGlvbi50ZXh0IFFSQ29kZSBsaW5rIGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ZPcHRpb24ud2lkdGg9MjU2XVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbdk9wdGlvbi5oZWlnaHQ9MjU2XVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbdk9wdGlvbi5jb2xvckRhcms9XCIjMDAwMDAwXCJdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFt2T3B0aW9uLmNvbG9yTGlnaHQ9XCIjZmZmZmZmXCJdXG4gICAgICogQHBhcmFtIHtRUkNvZGUuQ29ycmVjdExldmVsfSBbdk9wdGlvbi5jb3JyZWN0TGV2ZWw9UVJDb2RlLkNvcnJlY3RMZXZlbC5IXSBbTHxNfFF8SF1cbiAgICAgKi9cbiAgICBRUkNvZGUgPSBmdW5jdGlvbiAoZWwsIHZPcHRpb24pIHtcbiAgICAgICAgdGhpcy5faHRPcHRpb24gPSB7XG4gICAgICAgICAgICB3aWR0aCA6IDI1NixcbiAgICAgICAgICAgIGhlaWdodCA6IDI1NixcbiAgICAgICAgICAgIHR5cGVOdW1iZXIgOiA0LFxuICAgICAgICAgICAgY29sb3JEYXJrIDogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICBjb2xvckxpZ2h0IDogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICBjb3JyZWN0TGV2ZWwgOiBRUkVycm9yQ29ycmVjdExldmVsLkhcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIHZPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2T3B0aW9uID0ge1xuICAgICAgICAgICAgICAgIHRleHQgOiB2T3B0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3ZlcndyaXRlcyBvcHRpb25zXG4gICAgICAgIGlmICh2T3B0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHZPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9odE9wdGlvbltpXSA9IHZPcHRpb25baV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGVsID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYW5kcm9pZCA9IF9nZXRBbmRyb2lkKCk7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX29RUkNvZGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9vRHJhd2luZyA9IG5ldyBEcmF3aW5nKHRoaXMuX2VsLCB0aGlzLl9odE9wdGlvbik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2h0T3B0aW9uLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubWFrZUNvZGUodGhpcy5faHRPcHRpb24udGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWFrZSB0aGUgUVJDb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc1RleHQgbGluayBkYXRhXG4gICAgICovXG4gICAgUVJDb2RlLnByb3RvdHlwZS5tYWtlQ29kZSA9IGZ1bmN0aW9uIChzVGV4dCkge1xuICAgICAgICB0aGlzLl9vUVJDb2RlID0gbmV3IFFSQ29kZU1vZGVsKF9nZXRUeXBlTnVtYmVyKHNUZXh0LCB0aGlzLl9odE9wdGlvbi5jb3JyZWN0TGV2ZWwpLCB0aGlzLl9odE9wdGlvbi5jb3JyZWN0TGV2ZWwpO1xuICAgICAgICB0aGlzLl9vUVJDb2RlLmFkZERhdGEoc1RleHQpO1xuICAgICAgICB0aGlzLl9vUVJDb2RlLm1ha2UoKTtcbiAgICAgICAgdGhpcy5fZWwudGl0bGUgPSBzVGV4dDtcbiAgICAgICAgdGhpcy5fb0RyYXdpbmcuZHJhdyh0aGlzLl9vUVJDb2RlKTtcbiAgICAgICAgdGhpcy5tYWtlSW1hZ2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTWFrZSB0aGUgSW1hZ2UgZnJvbSBDYW52YXMgZWxlbWVudFxuICAgICAqIC0gSXQgb2NjdXJzIGF1dG9tYXRpY2FsbHlcbiAgICAgKiAtIEFuZHJvaWQgYmVsb3cgMyBkb2Vzbid0IHN1cHBvcnQgRGF0YS1VUkkgc3BlYy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgUVJDb2RlLnByb3RvdHlwZS5tYWtlSW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb0RyYXdpbmcubWFrZUltYWdlID09IFwiZnVuY3Rpb25cIiAmJiAoIXRoaXMuX2FuZHJvaWQgfHwgdGhpcy5fYW5kcm9pZCA+PSAzKSkge1xuICAgICAgICAgICAgdGhpcy5fb0RyYXdpbmcubWFrZUltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgdGhlIFFSQ29kZVxuICAgICAqL1xuICAgIFFSQ29kZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX29EcmF3aW5nLmNsZWFyKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBuYW1lIFFSQ29kZS5Db3JyZWN0TGV2ZWxcbiAgICAgKi9cbiAgICBRUkNvZGUuQ29ycmVjdExldmVsID0gUVJFcnJvckNvcnJlY3RMZXZlbDtcbn0pKCk7XG5cbmV4cG9ydHMuUVJDb2RlID0gUVJDb2RlO1xuXG4iXX0=</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code js-file-line">(<span class="m">1</span>)</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code js-file-line">});</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.12697s from github-fe128-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fe1dc1d9b25d6a0cda010576a3c4be01906c9fd2ac07462042e5fceda326d50c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-c8f5a4424163c50676e3997086b3402a848de0036b6d5ac88070e6050be8cde8.js" type="text/javascript"></script>
      
      
  </body>
</html>


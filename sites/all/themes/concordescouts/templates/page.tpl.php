<div id="outer">
	<div class="container_12">

		<div id="header">
			<a class="home" href="<?php print $front_page ?>">
				Home
			</a>
			<?php print theme('links', array('links' => $main_menu)) ?>
      <?php print render($page['header']) ?>			
		</div>

		<div class="clear"></div>

		<div id="body">
			<div id="body-inner">
				<div class="grid_12">

					<?php if ($tabs): ?>
						<?php print render($tabs); ?>
					<?php endif; ?>

					<?php print $breadcrumb; ?>

					<?php if ($page['highlighted']): ?>
						<div id="highlighted">
							<?php print render($page['highlighted']); ?>
						</div>
					<?php endif; ?>

					<a id="main-content"></a>

					<?php print render($title_prefix); ?>

					<?php if ($title): ?>
						<h1 class="page-title"><?php print $title ?></h1>
					<?php endif; ?>

					<?php print render($title_suffix); ?>

					<?php print render($tabs2); ?>

					<?php print $messages; ?>

					<?php print render($page['help']); ?>

					<?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>

					<div class="clearfix">
						<?php print render($page['content']); ?>
					</div>


					<?php print $feed_icons ?>

					<?php print render($page['content_footer']); ?>

				</div>

				<div class="clear"></div>
			</div>
		</div>

		<div id="body-footer"></div>

		<div id="footer">

		  <?php print render($page['footer']); ?>

		</div>

	</div>
</div>



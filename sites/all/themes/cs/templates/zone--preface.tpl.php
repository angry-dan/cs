<?php if ($wrapper): ?><div<?php print $attributes; ?>><?php endif; ?>
  <div<?php print $content_attributes; ?>>
    <?php if ($breadcrumb): ?>
      <div id="breadcrumb" class="grid-4 push-1 suffix-4"><?php print $breadcrumb; ?></div>
    <?php else: ?>
      <div class="grid-8 push-1">&nbsp;</div>
    <?php endif; ?>
    <?php print $content; ?>
  </div>
<?php if ($wrapper): ?></div><?php endif; ?>
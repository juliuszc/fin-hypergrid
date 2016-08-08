(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.grid = [
'.hypergrid-input {',
'	position: absolute;',
'	display: none;',
'	outline: 0;',
'	padding: 0;',
'	border: solid 2px black;',
'	box-sizing: border-box;',
'	box-shadow: white 0 0 1px 1px;',
'	background-color: ivory;',
'	color: black;',
'	font-size: 7pt;',
'	line--height: 0;',
'}',
'div.hypergrid-input > input {',
'	position: absolute;',
'	height: 100%;',
'	right: 20px;',
'	left: 0;',
'	width: 100%;',
'	outline: 0;',
'	padding: 0;',
'',
'	border: 5px solid transparent;',
'	border-right-width: 20px;',
'	border-bottom-width: 0;',
'	border-top-width: 0;',
'	box-sizing: border-box;',
'',
'	font-size: 7pt;',
'	line--height: 0;',
'	color: black;',
'	background-color: transparent;',
'}',
'div.hypergrid-input > span {',
'	position: absolute;',
'	box-sizing: border-box;',
'	width: 20px;',
'	height: 100%;',
'	right: 0;',
'	text-align: center;',
'	font-size: 15px;',
'	line-height: 11px;',
'}',
'div.hypergrid-input span[title] {',
'	color: lightgrey;',
'	cursor: pointer;',
'}',
'div.hypergrid-input span[title]:hover {',
'	color: grey;',
'}',
'div.hypergrid-input span[title]:active, div.hypergrid-input span[title].active {',
'	color: blue;',
'}',
'div.hypergrid-input > span::after {',
'	content: \'\\25BE\';',
'	font-size: 20px;',
'}',
'div.hypergrid-input > div {',
'	position: absolute;',
'	height: 137px;',
'	left: -2px;',
'	right: -2px;',
'	top: 13px;',
'	height: 0;',
'	transition: height .25s;',
'	visibility: hidden;',
'	box-shadow: white 0 0 1px 1px;',
'	box-sizing: border-box;',
'	border: 2px solid black;',
'	background-color: ivory;',
'	-webkit-user-select: none;',
'	-moz-user-select: none;',
'	-ms-user-select: none;',
'}',
'div.hypergrid-input > div > div {',
'	position: absolute;',
'	height: 13px;',
'	width: 100%;',
'	text-align: center;',
'}',
'div.hypergrid-input > div span[title] {',
'	font-weight: bold;',
'	font-size: 10px;',
'	font-family: verdana, geneva, sans-serif;',
'	margin-left: 6px;',
'	margin-right: 6px;',
'}',
'div.hypergrid-input > div span:not([title]) {',
'	font-style: italic;',
'	padding-top: 1px;',
'}',
'div.hypergrid-input > div select {',
'	position: absolute;',
'	border: 0;',
'	outline: 0;',
'	border-top: 2px solid black;',
'	width: 100%;',
'	bottom: 0;',
'	top:14px;',
'	background-color: transparent;',
'}'
].join('\n');

exports['list-dragon-addendum'] = [
'div.dragon-list, li.dragon-pop {',
'	font-family: Roboto, sans-serif;',
'	text-transform: capitalize; }',
'div.dragon-list {',
'	position: absolute;',
'	top: 4%;',
'	left: 4%;',
'	height: 92%;',
'	width: 20%; }',
'div.dragon-list:nth-child(2) { left: 28%; }',
'div.dragon-list:nth-child(3) { left: 52%; }',
'div.dragon-list:nth-child(4) { left: 76%; }',
'div.dragon-list > div, div.dragon-list > ul > li, li.dragon-pop { line-height: 46px; }',
'div.dragon-list > ul { top: 46px; }',
'div.dragon-list > ul > li:not(:last-child)::before, li.dragon-pop::before {',
'	content: \'\\2b24\';',
'	color: #b6b6b6;',
'	font-size: 30px;',
'	margin: 8px 14px 8px 8px; }',
'li.dragon-pop { opacity:.8; }'
].join('\n');

},{}],2:[function(require,module,exports){
'use strict';

exports.CQL = [
'<li>',
'	<label title="${1}">',
'		<a type="button" class="filter-copy"></a>',
'		<div class="filter-tree-remove-button" title="delete conditional"></div>',
'		<strong>%{0}:</strong>',
'		<input name="${1}" class="filter-text-box ${3}" value="%{2}">',
'	</label>',
'	<div class="filter-tree-warn"></div>',
'</li>'
].join('\n');

exports.SQL = [
'<li>',
'	<label title="${1}">',
'		<a type="button" class="filter-copy"></a>',
'		<div class="filter-tree-remove-button" title="delete conditional"></div>',
'		<strong>%{0}:</strong>',
'		<textarea name="${1}" rows="1" class="filter-text-box ${3}">%{2}</textarea>',
'	</label>',
'	<div class="filter-tree-warn"></div>',
'</li>'
].join('\n');

exports.dialog = [
'<div id="hypergrid-dialog">',
'',
'	<style>',
'		#hypergrid-dialog {',
'			position: absolute;',
'			top: 0;',
'			left: 0;',
'			bottom: 0;',
'			right: 0;',
'			background-color: white;',
'			font: 10pt sans-serif;',
'			opacity: 0;',
'			transition: opacity 1s;',
'			box-shadow: rgba(0, 0, 0, 0.298039) 0px 19px 38px, rgba(0, 0, 0, 0.219608) 0px 15px 12px;',
'		}',
'		#hypergrid-dialog.hypergrid-dialog-visible {',
'			opacity: 1;',
'			transition: opacity 1s;',
'		}',
'',
'		#hypergrid-dialog .hypergrid-dialog-control-panel {',
'			position: absolute;',
'			top: 0px;',
'			right: 12px;',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-control-panel a {',
'			color: #999;',
'			font-size: 33px;',
'			transition: text-shadow .35s, color .35s;',
'			text-decoration: none;',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-close:after {',
'			content: \'\\D7\';',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-settings:after {',
'			font-family: Apple Symbols;',
'			content: \'\\2699\';',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-control-panel a:hover {',
'			color: black;',
'			text-shadow: 0 0 6px #337ab7;',
'			transition: text-shadow .35s, color .35s;',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-control-panel a:active {',
'			color: #d00;',
'			transition: color 0s;',
'		}',
'	</style>',
'',
'	<span class="hypergrid-dialog-control-panel">',
'		<a class="hypergrid-dialog-settings" title="(There are no settings for Manage Filters at this time.)"></a>',
'		<a class="hypergrid-dialog-close"></a>',
'	</span>',
'',
'</div>'
].join('\n');

exports.filterTrees = [
'<style>',
'	#hypergrid-dialog > div {',
'		position: absolute;',
'		top: 0;',
'		left: 0;',
'		bottom: 0;',
'		right: 0;',
'	}',
'	#hypergrid-dialog > div:first-of-type {',
'		padding: 1em 1em 1em 0.5em;',
'		margin-left: 50%;',
'	}',
'	#hypergrid-dialog > div:last-of-type {',
'		padding: 1em 0.5em 1em 1em;',
'		margin-right: 50%;',
'	}',
'	#hypergrid-dialog > div > p:first-child {',
'		margin-top: 0;',
'	}',
'	#hypergrid-dialog > div > p > span:first-child {',
'		font-size: larger;',
'		letter-spacing: 2px;',
'		font-weight: bold;',
'		color: #666;',
'		margin-right: 1em;',
'	}',
'	#hypergrid-dialog input, #hypergrid-dialog textarea {',
'		outline: 0;',
'		line-height: initial;',
'	}',
'',
'	.tabz { z-index: 0 }',
'	.tabz > p:first-child, .tabz > section > p:first-child, .tabz > section > div > p:first-child { margin-top: 0 }',
'',
'	#hypergrid-dialog a.more-info { font-size: smaller; }',
'	#hypergrid-dialog a.more-info::after { content: \'(more info)\'; }',
'	#hypergrid-dialog a.more-info.hide-info { color: red; }',
'	#hypergrid-dialog a.more-info.hide-info::after { content: \'(hide info)\'; }',
'	#hypergrid-dialog div.more-info {',
'		border: 1px tan solid;',
'		border-radius: 8px;',
'		padding: 0 8px .2em;',
'		display: none;',
'		background-color: ivory;',
'		box-shadow: 3px 3px 5px #707070;',
'		margin-bottom: 1em;',
'	}',
'	#hypergrid-dialog div.more-info > p { margin: .5em 0; }',
'',
'	#hypergrid-dialog .tabz ul {',
'		padding-left: 1.5em;',
'		list-style-type: circle;',
'		font-weight: bold;',
'	}',
'	#hypergrid-dialog .tabz ul > li > ul {',
'		list-style-type: disc;',
'		font-weight: normal;',
'	}',
'	#hypergrid-dialog .tabz li {',
'		margin: .3em 0;',
'	}',
'	#hypergrid-dialog .tabz li > code {',
'		background: #e0e0e0;',
'		margin: 0 .1em;',
'		padding: 0 5px;',
'		border-radius: 4px;',
'	}',
'',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > div:last-child ol {',
'		padding-left: 1.6em;',
'	}',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > div:last-child ol > li > label {',
'		width: 100%;',
'		font-weight: normal;',
'		display: inline;',
'	}',
'	#hypergrid-dialog .tabz .filter-tree-warn {',
'		color: darkred;',
'		font-size: smaller;',
'		font-style: italic;',
'		line-height: initial;',
'	}',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > textarea,',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > div:last-child textarea,',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > div:last-child input {',
'		display: block;',
'		position: relative;',
'		min-width: 100%;',
'		max-width: 100%;',
'		box-sizing: border-box;',
'		border: 1px solid black;',
'		padding: .4em .7em;',
'		font-family: monospace;',
'		font-size: 9pt;',
'		margin-top: 3px;',
'	}',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > textarea {',
'		height: 96%;',
'	}',
'	#hypergrid-dialog .tabz a.filter-copy {',
'		display: block;',
'		float: right;',
'		font-size: smaller;',
'	}',
'	#hypergrid-dialog .tabz a.filter-copy:before {',
'		content: \'(copy\';',
'	}',
'	#hypergrid-dialog .tabz a.filter-copy:after {',
'		content: \')\';',
'	}',
'	#hypergrid-dialog .tabz a.filter-copy:active {',
'		color: red;',
'	}',
'</style>',
'',
'<div>',
'	<select id="add-column-filter-subexpression" style="float:right; margin-left:1em; margin-right:4em;">',
'		<option value="">New column filter&hellip;</option>',
'	</select>',
'',
'	<p>',
'		<span>Column Filters</span>',
'		<a class="more-info"></a>',
'	</p>',
'	<div class="more-info">',
'		<p>The table filter can be viewed in the Query Builder or as SQL WHERE clause syntax. Both interfaces manipulate the same underlying filter data structure.</p>',
'		<p>All column filters are AND&rsquo;d together. Each grid row is first qualified by the table filter and then successively qualified by each column filter subexpression.</p>',
'	</div>',
'',
'	<div class="tabz" id="columnFiltersPanel">',
'',
'		<header id="columnsQB" class="default-tab">',
'			Query Builder',
'		</header>',
'',
'		<section>',
'		</section>',
'',
'		<header id="columnsSQL" class="tabz-bg2">',
'			SQL',
'		</header>',
'',
'		<section class="filter-expression-syntax tabz-bg2">',
'			<div>',
'				<p>',
'					<span></span>',
'					<a type="button" class="filter-copy" title="The state of the column filters subtree expressed in SQL syntax (all the column filter subexpressions shown below AND&rsquo;d together).">',
'						all</a>',
'				</p>',
'				<ol></ol>',
'			</div>',
'		</section>',
'',
'		<header id="columnsCQL" class="tabz-bg1">',
'			CQL',
'		</header>',
'',
'		<section class="filter-expression-syntax tabz-bg1">',
'			<p>',
'				<em>',
'					<small>Column filter cells accept a simplified, compact, and intuitive syntax, which is however not as flexible or concise as SQL syntax or using the Query Builder.</small>',
'					<a class="more-info"></a>',
'				</em>',
'			</p>',
'			<div class="more-info">',
'				<ul>',
'					<li>',
'						Simple expressions',
'						<ul>',
'							<li>All simple expressions take the form <i>operator literal</i> or <i>operator identifier</i>. The (left side) column is always implied and is the same for all simple expressions in a compound expression. This is because column filters are always tied to a known column.</li>',
'',
'							<li>If the operator is an equals sign (=), it may be omitted.</li>',
'',
'							<li>Besides operators, no other punctuation is permitted, meaning that no quotation marks and no parentheses.</li>',
'',
'							<li>If a literal exactly matches a column name or alias, the operand is not taken literally and instead refers to the value in that column. (There are properties to control what constitutes such a match: Column name, alias, or either; and the case-sensitivity of the match.)</li>',
'',
'							<li>As literals are unquoted, any operator symbol or operator word (including logical operators for compound expressions) terminates a literal.</li>',
'',
'							<li>An important corollary to the above features is that operators may not appear in literals.</li>',
'						</ul>',
'					</li>',
'',
'					<li>',
'						Compound expressions',
'						<ul>',
'							<li>Compound expressions are formed by connecting simple expressions with the logical operators <code>AND</code>, <code>OR</code>, <code>NOR</code>, or <code>NAND</code> ("not and").</li>',
'',
'							<li>However, all logical operators used in a compound column filter expression must be homogeneous. You may not mix the above logical operators in a single column. (If you need to do this, create a table filter expression instead.)</li>',
'						</ul>',
'					</li>',
'',
'					<li>',
'						Hidden logic',
'						<ul>',
'							<li>If the column is also referenced in a table filter expression (on the left side of a simple expression), the column filter is flagged in its grid cell with a special star character. This is just a flag; it is not part of the syntax. <span style="color:red; font-style:italic">Not yet implemented.</span></li>',
'						</ul>',
'					</li>',
'				</ul>',
'			</div>',
'',
'			<div>',
'				<p><span></span></p>',
'				<ol></ol>',
'			</div>',
'		</section>',
'	</div>',
'</div>',
'',
'<div>',
'	<p>',
'		<span>Table Filter</span>',
'		<a class="more-info"></a>',
'	</p>',
'	<div class="more-info">',
'		<p>The table filter can be viewed in the Query Builder or as SQL WHERE clause syntax. Both interfaces manipulate the same underlying filter data structure.</p>',
'		<p>',
'			These filter subexpressions are both required (<code>AND</code>&rsquo;d together), resulting in a subset of <em>qualified rows</em> which have passed through both filters.',
'			It\'s called a <dfn>tree</dfn> because it contains both <dfn>branches</dfn> and <dfn>leaves</dfn>.',
'			The leaves represent <dfn>conditional expressions</dfn> (or simply <dfn>conditionals</dfn>).',
'			The branches, also known as <dfn>subtrees</dfn>, contain leaves and/or other branches and represent subexpressions that group conditionals together.',
'			Grouped conditionals are evaluated together, before conditionals outside the group.',
'		</p>',
'	</div>',
'',
'	<div class="tabz" id="tableFilterPanel">',
'		<header id="tableQB">',
'			Query Builder',
'		</header>',
'',
'		<section>',
'		</section>',
'',
'		<header id="tableSQL" class="tabz-bg2">',
'			SQL',
'		</header>',
'',
'		<section class="filter-expression-syntax tabz-bg2">',
'			<div>',
'				<p>',
'					SQL WHERE clause syntax with certain restrictions.',
'					<a class="more-info"></a>',
'				</p>',
'				<div class="more-info">',
'					<ul>',
'						<li>',
'							Simple expressions',
'							<ul>',
'								<li>All simple expressions must be of the form <i>column operator literal</i> or <i>column operator identifier</i>. That is, the left side must refer to a column (may not be a literal); whereas the right side may be either.</li>',
'',
'								<li>Column names may be quoted with the currently set quote characters (typically double-quotes). If unquoted, they must consist of classic identifier syntax (alphanumerics and underscore, but not beginning with a numeral).</li>',
'',
'								<li>All literals must be quoted strings (using single quotes). (In a future release we expect to support unquoted numeric syntax for columns explicitly typed as numeric.)</li>',
'							</ul>',
'						</li>',
'',
'						<li>',
'							Compound expressions',
'							<ul>',
'								<li>Compound expressions are formed by connecting simple expressions with the logical operators <code>AND</code> or <code>OR</code>.</li>',
'',
'								<li>However, all logical operators at each level in a complex expression (each parenthesized subexpression) must be homogeneous, <i>i.e.,</i> either <code>AND</code> or <code>OR</code> but not a mixture of the two. In other words, there is no implicit operator precedence; grouping of expressions must always be explicitly stated with parentheses.</li>',
'',
'								<li>The unary logical operator <code>NOT</code> is supoorted before parentheses only. While the Query Builder and the Column Filter allow they syntax <code>&hellip; NOT <i>operator</i> &hellip;</code> (where <code><i>operator</i></code> is <code>IN</code>, <code>LIKE</code>, <i>etc.</i>), these must be expressed here with parenthethes: <code>NOT (&hellip; <i>operator</i> &hellip;)</code>.</li>',
'',
'								<li>While the Query Builder and Column Filter syntax support the pseudo-operators <code>NOR</code> and <code>NAND</code>, in SQL these must be expressed as <code>NOT (&hellip; OR &hellip;)</code> and <code>NOT (&hellip; AND &hellip;)</code>, respectively.</li>',
'',
'								<li>The Query Builder and Column Filter syntax also support the pseudo-operators <code>BEGINS abc</code>, <code>ENDS xyz</code>, and <code>CONTAINS def</code>. These are expressed in SQL by <code>LIKE \'abc%\'</code>, <code>LIKE \'%xyz\'</code>, and <code>LIKE \'%def%\'</code>, respectively.</li>',
'							</ul>',
'						</li>',
'					</ul>',
'				</div>',
'			</div>',
'			<div class="filter-tree-warn"></div>',
'			<textarea></textarea>',
'		</section>',
'',
'	</div>',
'</div>'
].join('\n');

},{}],3:[function(require,module,exports){
module.exports = { // This file generated by gulp-imagine-64 at 11:44:03 PM on 8/7/2016
	"calendar": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nIXQwQkCMRSE4U9ZLMCT9Xjaq2AfNhfYU5oQLMAOtoN48EWei5iBIRPe/yYQ3qrhf1lFG7iKcEaJxSfukUvMWgdHavt0uWHtg2QwxXnAnJZ2uOLyVZtybzzhgWNmfoFl0/YB87NbzR1cjP9xeQHSDC6mcL1xFQAAAABJRU5ErkJggg=="
	},
	"checked": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAYJJREFUOE+NkstLglEQxf0fahG0iFrUxm2ElFDYLohCqCDaCAkWPaxIRbFFEJEaGEKLDCoMETRFUAMLyaIHBUG6sSKIMtKFqEhLT818ZUgmDhzu3DPn9z0uV1RrmUwmyGQyqNVqfFvViwBxu5RFPZuLSyGMKhz/qlEsRV19K8xm6y+w7bpBPFnAferjj3bdQX6DpHcAUwavAHUN2RGIZxBJZHH2mC/TUeydwwTZvBegLENNgw7sX6Wh1FswNmPEmjPCDyGRRwCtW9E3tMgdAtQw7GZjYcNX+gza2wJ3ZXsSZUuQ0vWCOV8SHfJJ/uluhbHUj1v8PKNMszIoQNRMHCShD6Wh8zyhrbOPwz8w+STKlCCJ7oRNUzQH63kBs5thBghePXxlj2aUoSxDPcuXPNiLAc5EEZ6HIkbmV2DYiXBPHs0o079+K0DTVj/s11mE00A0L+g4VcDp10qKZMAzytBhMaTRaPmYg885DlcSzSij0eoEiIouoUqlqqqaL2rlEok+Ad4vlfzPoVDsAAAAAElFTkSuQmCC"
	},
	"dialog": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAH4AAAAUCAMAAAB8knmGAAAAXVBMVEXn4tfm4dfn4tjn49no5Nrp5dzp5Nvm4dbi3NDg2s3o5Nvl4NTh287k39Pp5dvh3M/j3dHk39Tl4NXg287k3tPi3dHh3NDm4tfj3tLh28/o49ro49ng2s7l4dbl4Nb6VbEyAAAC1ElEQVR4AXVV0YKDKAwE4AAVK6SwC9bt/3/mnYJ2tF7ewMEJyWRgjHMuhFT/nEMb261hxbrqh23hRomYhxLrYfXATTm6DTv060q0vxh9+b+SYj3Muj3c5IORAFMBEtD0rKgoAHIJLWLlfpIG8qAAIk3wk9tJKz2E84GrHUvbVhLbyvw0iA2/6ota/Qbbvv+YbUekbUV6R/Dg3YWN+ZyzT/a8X6KpBLpW3cta2FCOLFMkLuZe97PgFJM7joaG9bUHlVyZWM63tGllZp+yzIwipGFJQwJ5rqgX2e7/w9KrwuYMAtBkgTbS73z0r9JD9IJyy2GJEjSQD9kJwiIeTSNxyC9Dz2VcGiKT6IHplr7VynbA+UpVA+bxQYi/kNPknJtSDn9CfebBNPSrZdK0r+6ImE8p5RzDm4szgFtIQNqme3ZkcBsP1rRvJZBbfr6c4O8Qc04pgfJrY5rs4dJ5hhZ0z9z6+x0vys8Oyj5nKEMTP8oLBw+7OAh9TkCdJ8/5Nno4dt6d506dybUYbhTDmFjtxwxjTvjVDhITiJVNoe5LyoGIQk4Ftd+QEcnlYPF+KY+DWc1WgPSqJeXjXxPpT9uXoBqGx6m7jylyvRvm8hGApuNAyWis98rXYvevZVSguzgfw8kGf3aR4gd2DNUcQX1qXHavvLFrpv6L/nt/d+9RXV8OFDCFEAhHBt+qSr6/FN+37JVS7BC9zwOXj6/JW04JLB7m984v/HIiX77m7iH5kL1198ov8OI0ziX01b32Fo9c3VHzce9xdcs+LC0TeHPKRfmulOLcZfTyW2ICz6Dr5Fl4F41o1q1nYeAts6buhieSy3e+kqzM7PP885AtfB0FJOCoUZnUQSyllAU3kmk4ckAuRqC2OXAh1b3ylaBj9Ka3PidQQxJcBEtGrWRncv2ejrEjVCnSX9tYOuBk07YI4J6MYppcBU0pEgOvDtv+xCCTrtwL5l87wVO3O/g5GQAAAABJRU5ErkJggg=="
	},
	"down-rectangle": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAAkAAAAECAYAAABcDxXOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAABpJREFUGFdjgIL/eDAKIKgABggqgAE0BQwMAPTlD/Fpi0JfAAAAAElFTkSuQmCC"
	},
	"filter-off": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAChSURBVChTzZHBCoUgFET9TqEiskgyWoutQvRLRIr+cR7XQAjiJW/1BgZmMUevXsY5xy9OoDEGMcYiUzeB67qibVuwQjVNA6311V+WBeM4vsLDMEApde/1fY9pmtI453neHEKAlBJd1z0fXtc16PbjODK07zvmeUZVVd8nooc75zJIOX3Gm6i0bVsGKf8xKIRIuyJTLgJJ3nvQzsjW2geIsQ/pr9hMVrSncAAAAABJRU5ErkJggg=="
	},
	"filter-on": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAACoSURBVChTY3BqfP2fHAzWmDbj7f8p294RhVOBasEa02e+/e/VBmQQCTxaX/9PnvYGoj5ywpv/Qd2ENft3vv4f1gfVBAP+nW/+h/a+ATtn1q73KHjytvdgg3070DTBgHvL6/8g22fsQGiaDmSHA21xaybgIpDHixa8hWssnA8NDEIApCh3LkIjiD2INYJCL2X6W3B8gdhEaQQBUOCA4gyE8+e9xaKJgQEA/74BNE3cElkAAAAASUVORK5CYII="
	},
	"unchecked": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAARBJREFUOE+9krtug1AQRPldSio7FQ1tZImOkoKOBomGT0EURC5ino54yTw90WywQhTkIkVWGoF2zuxdrlD+t0zThKZpT0Vmxb8CQRCg6zr0fb8rer7vfwcPxxdcrx+YpgnzPGNZlh9ibxxHlGUJshLSdV0at9tNpg7DIBrX5+OkPM9BVkKGYSBJEtR1jbZrBdiqbVtUVYU0TUFWQq+nE+I4xvvlImGaW7FHjwxZCVmWhbfzGVmWoSgKWXUr9uiRISshx3FkEldomubXauzRI0NWQp7nyUR+NG/rfr/jUXxnjx5vmKyEbNuWox9Xvid6ZMhK6HA4wnVdhGGIKIp2RY8MWQmx+JuoqvpUZFb8L6UonyYL3uOtrFH+AAAAAElFTkSuQmCC"
	},
	"up-down-spin": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAGJJREFUOE+lkwEKACEIBH2Zb/PnHsoGeaVJDUjGOgRRpKpkiIj+y4MME3eDR7kaKOVNsJyMNjIHzGy9YnW6J7qIcrriQimeCqORNABd0fpRTkt8uVUj7EsxC6vs/q3e/Q6iD2bwnByjPXHNAAAAAElFTkSuQmCC"
	},
	"up-down": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAGFJREFUOE+lkkEKQCEIRD2ZJ3Ph3iN4WD9GflpYhj0YYowpGgJmbikd3gjMDFokwbuT1iAiurG5nomgqo5QaPo9ERQRI6Jf7sfGjudy2je23+i0Wl2oQ85TOdlfrJQOazF8br+rqTXQKn0AAAAASUVORK5CYII="
	},
};

},{}],4:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var _ = require('object-iterators');

var images = require('./images'); // this is the file generated by gulpfile.js (and ignored by git)

_(images).each(function(image, key) {
    var element = new Image();
    element.src = 'data:' + image.type + ';base64,' + image.data;
    images[key] = element;
});

images.checkbox = function(state) {
    return images[state ? 'checked' : 'unchecked'];
};

images.filter = function(state) {
    return images[state ? 'filter-on' : 'filter-off'];
};

module.exports = images;

},{"./images":3,"object-iterators":51}],5:[function(require,module,exports){
/* eslint-env browser */

'use strict';

/** @module automat */

var ENCODERS = /%\{(\d+)\}/g; // double $$ to encode

var REPLACERS = /\$\{(.*?)\}/g; // single $ to replace


/**
 * @summary String formatter.
 *
 * @desc String substitution is performed on numbered _replacer_ patterns like `${n}` or _encoder_ patterns like `%{n}` where n is the zero-based `arguments` index. So `${0}` would be replaced with the first argument following `text`.
 *
 * Encoders are just like replacers except the argument is HTML-encoded before being used.
 *
 * To change the format patterns, assign new `RegExp` patterns to `automat.encoders` and `automat.replacers`.
 *
 * @param {string|function} template - A template to be formatted as described above. Overloads:
 * * A string primitive containing the template.
 * * A function to be called with `this` as the calling context. The template is the value returned from this call.
 *
 * @param {...*} [replacements] - Replacement values for numbered format patterns.
 *
 * @return {string} The formatted text.
 *
 * @memberOf module:automat
 */
function automat(template, replacements/*...*/) {
    var hasReplacements = arguments.length > 1;

    // if `template` is a function, convert it to text
    if (typeof template === 'function') {
        template = template.call(this); // non-template function: call it with context and use return value
    }

    if (hasReplacements) {
        var args = arguments;
        template = template.replace(automat.replacersRegex, function(match, key) {
            key -= -1; // convert to number and increment
            return args.length > key ? args[key] : '';
        });

        template = template.replace(automat.encodersRegex, function(match, key) {
            key -= -1; // convert to number and increment
            if (args.length > key) {
                var htmlEncoderNode = document.createElement('DIV');
                htmlEncoderNode.textContent = args[key];
                return htmlEncoderNode.innerHTML;
            } else {
                return '';
            }
        });
    }

    return template;
}

/**
 * @summary Replace contents of `el` with `Nodes` generated from formatted template.
 *
 * @param {string|function} template - See `template` parameter of {@link automat}.
 *
 * @param {HTMLElement} [el] - Node in which to return markup generated from template. If omitted, a new `<div>...</div>` element will be created and returned.
 *
 * @param {...*} [replacements] - Replacement values for numbered format patterns.
 *
 * @return {HTMLElement} The `el` provided or a new `<div>...</div>` element, its `innerHTML` set to the formatted text.
 *
 * @memberOf module:automat
 */
function replace(template, el, replacements/*...*/) {
    var elOmitted = typeof el !== 'object',
        args = Array.prototype.slice.call(arguments, 1);

    if (elOmitted) {
        el = document.createElement('DIV');
        args.unshift(template);
    } else {
        args[0] = template;
    }

    el.innerHTML = automat.apply(null, args);

    return el;
}

/**
 * @summary Append or insert `Node`s generated from formatted template into given `el`.
 *
 * @param {string|function} template - See `template` parameter of {@link automat}.
 *
 * @param {HTMLElement} el
 *
 * @param {Node} [referenceNode=null] Inserts before this element within `el` or at end of `el` if `null`.
 *
 * @param {...*} [replacements] - Replacement values for numbered format patterns.
 *
 * @returns {Node[]} Array of the generated nodes (this is an actual Array instance; not an Array-like object).
 *
 * @memberOf module:automat
 */
function append(template, el, referenceNode, replacements/*...*/) {
    var replacementsStartAt = 3,
        referenceNodeOmitted = typeof referenceNode !== 'object';  // replacements are never objects

    if (referenceNodeOmitted) {
        referenceNode = null;
        replacementsStartAt = 2;
    }

    replacements = Array.prototype.slice.call(arguments, replacementsStartAt);
    var result = [],
        div = replace.apply(null, [template].concat(replacements));

    while (div.childNodes.length) {
        result.push(div.firstChild);
        el.insertBefore(div.firstChild, referenceNode); // removes child from div
    }

    return result;
}

/**
 * Use this convenience wrapper to return the first child node described in `template`.
 *
 * @param {string|function} template - If a function, extract template from comment within.
 *
 * @returns {HTMLElement} The first `Node` in your template.
 *
 * @memberOf module:automat
 */
function firstChild(template, replacements/*...*/) {
    return replace.apply(null, arguments).firstChild;
}

/**
 * Use this convenience wrapper to return the first child element described in `template`.
 *
 * @param {string|function} template - If a function, extract template from comment within.
 *
 * @returns {HTMLElement} The first `HTMLElement` in your template.
 *
 * @memberOf module:automat
 */
function firstElement(template, replacements/*...*/) {
    return replace.apply(null, arguments).firstElementChild;
}

/**
 * @summary Finds string substitution lexemes that require HTML encoding.
 * @desc Modify to suit.
 * @default %{n}
 * @type {RegExp}
 * @memberOf module:automat
 */
automat.encodersRegex = ENCODERS;

/**
 * @summary Finds string substitution lexemes.
 * @desc Modify to suit.
 * @default ${n}
 * @type {RegExp}
 * @memberOf module:automat
 */
automat.replacersRegex = REPLACERS;

automat.format = automat; // if you find using just `automat()` confusing
automat.replace = replace;
automat.append = append;
automat.firstChild = firstChild;
automat.firstElement = firstElement;

module.exports = automat;

},{}],6:[function(require,module,exports){
'use strict';

/* eslint-env browser */

/** @namespace cssInjector */

/**
 * @summary Insert base stylesheet into DOM
 *
 * @desc Creates a new `<style>...</style>` element from the named text string(s) and inserts it but only if it does not already exist in the specified container as per `referenceElement`.
 *
 * > Caveat: If stylesheet is for use in a shadow DOM, you must specify a local `referenceElement`.
 *
 * @returns A reference to the newly created `<style>...</style>` element.
 *
 * @param {string|string[]} cssRules
 * @param {string} [ID]
 * @param {undefined|null|Element|string} [referenceElement] - Container for insertion. Overloads:
 * * `undefined` type (or omitted): injects stylesheet at top of `<head>...</head>` element
 * * `null` value: injects stylesheet at bottom of `<head>...</head>` element
 * * `Element` type: injects stylesheet immediately before given element, wherever it is found.
 * * `string` type: injects stylesheet immediately before given first element found that matches the given css selector.
 *
 * @memberOf cssInjector
 */
function cssInjector(cssRules, ID, referenceElement) {
    if (typeof referenceElement === 'string') {
        referenceElement = document.querySelector(referenceElement);
        if (!referenceElement) {
            throw 'Cannot find reference element for CSS injection.';
        }
    } else if (referenceElement && !(referenceElement instanceof Element)) {
        throw 'Given value not a reference element.';
    }

    var container = referenceElement && referenceElement.parentNode || document.head || document.getElementsByTagName('head')[0];

    if (ID) {
        ID = cssInjector.idPrefix + ID;

        if (container.querySelector('#' + ID)) {
            return; // stylesheet already in DOM
        }
    }

    var style = document.createElement('style');
    style.type = 'text/css';
    if (ID) {
        style.id = ID;
    }
    if (cssRules instanceof Array) {
        cssRules = cssRules.join('\n');
    }
    cssRules = '\n' + cssRules + '\n';
    if (style.styleSheet) {
        style.styleSheet.cssText = cssRules;
    } else {
        style.appendChild(document.createTextNode(cssRules));
    }

    if (referenceElement === undefined) {
        referenceElement = container.firstChild;
    }

    container.insertBefore(style, referenceElement);

    return style;
}

/**
 * @summary Optional prefix for `<style>` tag IDs.
 * @desc Defaults to `'injected-stylesheet-'`.
 * @type {string}
 * @memberOf cssInjector
 */
cssInjector.idPrefix = 'injected-stylesheet-';

// Interface
module.exports = cssInjector;

},{}],7:[function(require,module,exports){
'use strict';

/** @namespace extend-me **/

/** @summary Extends an existing constructor into a new constructor.
 *
 * @returns {ChildConstructor} A new constructor, extended from the given context, possibly with some prototype additions.
 *
 * @desc Extends "objects" (constructors), with optional additional code, optional prototype additions, and optional prototype member aliases.
 *
 * > CAVEAT: Not to be confused with Underscore-style .extend() which is something else entirely. I've used the name "extend" here because other packages (like Backbone.js) use it this way. You are free to call it whatever you want when you "require" it, such as `var inherits = require('extend')`.
 *
 * Provide a constructor as the context and any prototype additions you require in the first argument.
 *
 * For example, if you wish to be able to extend `BaseConstructor` to a new constructor with prototype overrides and/or additions, basic usage is:
 *
 * ```javascript
 * var Base = require('extend-me').Base;
 * var BaseConstructor = Base.extend(basePrototype); // mixes in .extend
 * var ChildConstructor = BaseConstructor.extend(childPrototypeOverridesAndAdditions);
 * var GrandchildConstructor = ChildConstructor.extend(grandchildPrototypeOverridesAndAdditions);
 * ```
 *
 * This function (`extend()`) is added to the new extended object constructor as a property `.extend`, essentially making the object constructor itself easily "extendable." (Note: This is a property of each constructor and not a method of its prototype!)
 *
 * @param {string} [extendedClassName] - This is simply added to the prototype as $$CLASS_NAME. Useful for debugging because all derived constructors appear to have the same name ("Constructor") in the debugger.
 *
 * @param {extendedPrototypeAdditionsObject} [prototypeAdditions] - Object with members to copy to new constructor's prototype. Most members will be copied to the prototype. Some members, however, have special meanings as explained in the {@link extendedPrototypeAdditionsObject|type definition} (and may or may not be copied to the prototype).
 *
 * @property {boolean} [debug] - See parameter `extendedClassName` _(above)_.
 *
 * @property {object} Base - A convenient base class from which all other classes can be extended.
 *
 * @memberOf extend-me
 */
function extend(extendedClassName, prototypeAdditions) {
    switch (arguments.length) {
        case 0:
            prototypeAdditions = {};
            break;
        case 1:
            switch (typeof extendedClassName) {
                case 'object':
                    prototypeAdditions = extendedClassName;
                    extendedClassName = undefined;
                    break;
                case 'string':
                    prototypeAdditions = {};
                default:
                    throw 'Single-parameter overload must be either string or object.';
            }
            break;
        case 2:
            if (typeof extendedClassName !== 'string' || typeof prototypeAdditions !== 'object') {
                throw 'Two-parameter overload must be string, object.';
            }
            break;
        default:
            throw 'Too many parameters';
    }

    function Constructor() {
        if (prototypeAdditions.preInitialize) {
            prototypeAdditions.preInitialize.apply(this, arguments);
        }

        initializePrototypeChain.apply(this, arguments);

        if (prototypeAdditions.postInitialize) {
            prototypeAdditions.postInitialize.apply(this, arguments);
        }
    }

    Constructor.extend = extend;

    var prototype = Constructor.prototype = Object.create(this.prototype);
    prototype.constructor = Constructor;

    if (extendedClassName) {
        prototype.$$CLASS_NAME = extendedClassName;
    }

    for (var key in prototypeAdditions) {
        if (prototypeAdditions.hasOwnProperty(key)) {
            var value = prototypeAdditions[key];
            switch (key) {
                case 'initializeOwn':
                    // already called above; not needed in prototype
                    break;
                case 'aliases':
                    for (var alias in value) {
                        if (value.hasOwnProperty(alias)) {
                            makeAlias(value[alias], alias);
                        }
                    }
                    break;
                default:
                    if (typeof value === 'string' && value[0] === '#') {
                        makeAlias(value, key.substr(1));
                    } else if (isDescriptor(value)) {
                        Object.defineProperty(prototype, key, value);
                    } else {
                        prototype[key] = value;
                    }
            }
        }
    }

    return Constructor;

    function makeAlias(value, key) { // eslint-disable-line no-shadow
        prototype[key] = prototypeAdditions[value];
    }
}

function isDescriptor(value) {
    var result;
    if(typeof value === 'object' && value) {
        var len = Object.keys(value).length,
            hasSetter = typeof value.set === 'function' && value.set.length === 1,
            hasGetter = typeof value.get === 'function' && value.get.length === 0;

        result = typeof value.configurable === 'boolean' ||
            typeof value.enumerable === 'boolean' ||
            len === 1 && (hasSetter || hasGetter) ||
            len === 2 && hasSetter && hasGetter;
    }
    return result;
}

function Base() {}
Base.prototype = {
    constructor: Base.prototype.constructor,
    get super() {
        return Object.getPrototypeOf(Object.getPrototypeOf(this));
    }
};
Base.extend = extend;
extend.Base = Base;

/** @typedef {function} extendedConstructor
 * @property prototype.super - A reference to the prototype this constructor was extended from.
 * @property [extend] - If `prototypeAdditions.extendable` was truthy, this will be a reference to {@link extend.extend|extend}.
 */

/** @typedef {object} extendedPrototypeAdditionsObject
 * @property {function} [initialize] - Additional constructor code for new object. This method is added to the new constructor's prototype. Gets passed new object as context + same args as constructor itself. Called on instantiation after similar function in all ancestors called with same signature.
 * @property {function} [initializeOwn] - Additional constructor code for new object. This method is added to the new constructor's prototype. Gets passed new object as context + same args as constructor itself. Called on instantiation after (all) the `initialize` function(s).
 * @property {object} [aliases] - Hash of aliases for prototype members in form `{ key: 'member', ... }` where `key` is the name of an alieas and `'member'` is the name of an existing member in the prototype. Each such key is added to the prototype as a reference to the named member. (The `aliases` object itself is *not* added to prototype.) Alternatively:
 * @property {string} [keys] - Arbitrary property names defined here with string values starting with a `#` character will alias the actual properties named in the strings (following the `#`). This is an alternative to providing an `aliases` hash, perhaps simpler (though subtler). (Use your own identifiers here; don't use the name `keys`!)
 * @property {descriptorObject} [descriptors] - Will be run through `Object.defineProperty()`. Use your own identifiers here; don't use the name `descriptors`!)
 * Detected by duck-typing:
 * * It has a `configurable` property.
 * * It has an `enumerable` property.
 * * It has only: a `set` function that takes exactly one parameter and/or only a `get` function that takes no parameters.
 * @property {*} [arbitraryProperties] - Any additional arbitrary properties defined here will be added to the new constructor's prototype. (Use your own identifiers here; don't use the name `aribitraryProperties`!)
 */

/** @summary Call all `initialize` methods found in prototype chain.
 * @desc This recursive routine is called by the constructor.
 * 1. Walks back the prototype chain to `Object`'s prototype
 * 2. Walks forward to new object, calling any `initialize` methods it finds along the way with the same context and arguments with which the constructor was called.
 * @private
 * @memberOf extend-me
 */
function initializePrototypeChain() {
    var term = this,
        args = arguments;
    recur(term);

    function recur(obj) {
        var proto = Object.getPrototypeOf(obj);
        if (proto.constructor !== Object) {
            recur(proto);
            if (proto.hasOwnProperty('initialize')) {
                proto.initialize.apply(term, args);
            }
        }
    }
}

module.exports = extend;

},{}],8:[function(require,module,exports){
'use strict';

exports['column-CQL-syntax'] = [
'<li>',
'	<button type="button" class="copy"></button>',
'	<div class="filter-tree-remove-button" title="delete conditional"></div>',
'	{1}:',
'	<input name="{2}" class="{4}" value="{3:encode}">',
'</li>'
].join('\n');

exports['column-SQL-syntax'] = [
'<li>',
'	<button type="button" class="copy"></button>',
'	<div class="filter-tree-remove-button" title="delete conditional"></div>',
'	{1}:',
'	<textarea name="{2}" rows="1" class="{4}">{3:encode}</textarea>',
'</li>'
].join('\n');

exports.columnFilter = [
'<span class="filter-tree">',
'	 <strong><span>{2} </span>column filter subexpression:</strong><br>',
'	 Match',
'	 <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-or">any</label>',
'	 <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-and">all</label>',
'	 <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-nor">none</label>',
'	 of the following:',
'	 <select>',
'		 <option value="">New expression&hellip;</option>',
'	 </select>',
'	 <ol></ol>',
' </span>'
].join('\n');

exports.columnFilters = [
'<span class="filter-tree filter-tree-type-column-filters">',
'	 Match <strong>all</strong> of the following column filters:',
'	 <ol></ol>',
' </span>'
].join('\n');

exports.lockedColumn = [
'<span>',
'	 {1:encode}',
'	 <input type="hidden" value="{2}">',
' </span>'
].join('\n');

exports.note = [
'<div class="footnotes">',
'	<div class="footnote"></div>',
'	<p>Select a new value or delete the expression altogether.</p>',
'</div>'
].join('\n');

exports.notes = [
'<div class="footnotes">',
'	<p>Note the following error conditions:</p>',
'	<ul class="footnote"></ul>',
'	<p>Select new values or delete the expression altogether.</p>',
'</div>'
].join('\n');

exports.optionMissing = [
'The requested value of <span class="field-name">{1:encode}</span>',
'(<span class="field-value">{2:encode}</span>) is not valid.'
].join('\n');

exports.removeButton = [
'<div class="filter-tree-remove-button" title="delete conditional"></div>'
].join('\n');

exports.subtree = [
'<span class="filter-tree">',
'	 Match',
'	 <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-or">any</label>',
'	 <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-and">all</label>',
'	 <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-nor">none</label>',
'	 of the following:',
'	 <select>',
'		 <option value="">New expression&hellip;</option>',
'		 <option value="subexp" style="border-bottom:1px solid black">Subexpression</option>',
'	 </select>',
'	 <ol></ol>',
' </span>'
].join('\n');

},{}],9:[function(require,module,exports){
'use strict';

var _ = require('object-iterators');
var popMenu = require('pop-menu');

var FilterTree = require('./js/FilterTree');
FilterTree.Node = require('./js/FilterNode'); // aka: Object.getPrototypeOf(FilterTree.prototype).constructor
FilterTree.Leaf = require('./js/FilterLeaf'); // aka: FilterTree.prototype.editors.Default

// expose some objects for plug-in access

FilterTree.Conditionals = require('./js/Conditionals');

// FOLLOWING PROPERTIES ARE *** TEMPORARY ***,
// FOR THE DEMO TO ACCESS THESE NODE MODULES.

FilterTree._ = _;
FilterTree.popMenu = popMenu;


module.exports = FilterTree;

},{"./js/Conditionals":10,"./js/FilterLeaf":11,"./js/FilterNode":12,"./js/FilterTree":13,"object-iterators":51,"pop-menu":52}],10:[function(require,module,exports){
/** @module conditionals */

'use strict';

var Base = require('extend-me').Base;
var _ = require('object-iterators');
var regExpLIKE = require('regexp-like');

var IN = 'IN',
    NOT_IN = 'NOT ' + IN,
    LIKE = 'LIKE',
    NOT_LIKE = 'NOT ' + LIKE,
    LIKE_WILD_CARD = '%',
    NIL = '';

var toString;

var defaultIdQts = {
    beg: '"',
    end: '"'
};


/**
 * @constructor
 */
var Conditionals = Base.extend({
    /**
     * @param {sqlIdQtsObject} [options.sqlIdQts={beg:'"',end:'"'}]
     * @memberOf Conditionals.prototype
     */
    initialize: function(options) {
        var idQts = options && options.sqlIdQts;
        if (idQts) {
            this.sqlIdQts = idQts; // only override if defined
        }
    },

    sqlIdQts: defaultIdQts,
    /**
     * @param id
     * @returns {string}
     * @memberOf Conditionals.prototype
     */
    makeSqlIdentifier: function(id) {
        return this.sqlIdQts.beg + id + this.sqlIdQts.end;
    },

    /**
     * @param string
     * @returns {string}
     * @memberOf Conditionals.prototype
     */
    makeSqlString: function(string) {
        return '\'' + sqEsc(string) + '\'';
    },

    /**
     * @memberOf Conditionals.prototype
     */
    makeLIKE: function(beg, end, op, originalOp, c) {
        var escaped = c.operand.replace(/([_\[\]%])/g, '[$1]'); // escape all LIKE reserved chars
        return this.makeSqlIdentifier(c.column) +
            ' ' + op +
            ' ' + this.makeSqlString(beg + escaped + end);
    },

    /**
     * @memberOf Conditionals.prototype
     */
    makeIN: function(op, c) {
        return this.makeSqlIdentifier(c.column) +
            ' ' + op +
            ' ' + '(\'' + sqEsc(c.operand).replace(/\s*,\s*/g, '\', \'') + '\')';
    },

    /**
     * @memberOf Conditionals.prototype
     */
    make: function(op, c) {
        return this.makeSqlIdentifier(c.column) +
            ' ' + op +
            ' ' + c.makeSqlOperand();
    }
});

var ops = Conditionals.prototype.ops = {
    undefined: {
        test: function() { return true; },
        make: function() { return ''; }
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    '<': {
        test: function(a, b) { return a < b; },
        make: function(c) { return this.make('<', c); }
    },
    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    '<=': {
        test: function(a, b) { return a <= b; },
        make: function(c) { return this.make('<=', c); }
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    '=': {
        test: function(a, b) { return a === b; },
        make: function(c) { return this.make('=', c); }
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    '>=': {
        test: function(a, b) { return a >= b; },
        make: function(c) { return this.make('>=', c); }
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    '>': {
        test: function(a, b) { return a > b; },
        make: function(c) { return this.make('>', c); }
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    '<>': {
        test: function(a, b) { return a !== b; },
        make: function(c) { return this.make('<>', c); }
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    LIKE: {
        test: function(a, b) { return regExpLIKE.cached(b, true).test(a); },
        make: function(c) { return this.make(LIKE, c); },
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    'NOT LIKE': {
        test: function(a, b) { return !regExpLIKE.cached(b, true).test(a); },
        make: function(c) { return this.make(NOT_LIKE, c); },
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    IN: { // TODO: currently forcing string typing; rework calling code to respect column type
        test: function(a, b) { return inOp(a, b) >= 0; },
        make: function(c) { return this.makeIN(IN, c); },
        operandList: true,
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    'NOT IN': { // TODO: currently forcing string typing; rework calling code to respect column type
        test: function(a, b) { return inOp(a, b) < 0; },
        make: function(c) { return this.makeIN(NOT_IN, c); },
        operandList: true,
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    CONTAINS: {
        test: function(a, b) { return containsOp(a, b) >= 0; },
        make: function(c) { return this.makeLIKE(LIKE_WILD_CARD, LIKE_WILD_CARD, LIKE, 'CONTAINS', c); },
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    'NOT CONTAINS': {
        test: function(a, b) { return containsOp(a, b) < 0; },
        make: function(c) { return this.makeLIKE(LIKE_WILD_CARD, LIKE_WILD_CARD, NOT_LIKE, 'NOT CONTAINS', c); },
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    BEGINS: {
        test: function(a, b) { b = toString(b); return beginsOp(a, b.length) === b; },
        make: function(c) { return this.makeLIKE(NIL, LIKE_WILD_CARD, LIKE, 'BEGINS', c); },
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    'NOT BEGINS': {
        test: function(a, b) { b = toString(b); return beginsOp(a, b.length) !== b; },
        make: function(c) { return this.makeLIKE(NIL, LIKE_WILD_CARD, NOT_LIKE, 'NOT BEGINS', c); },
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    ENDS: {
        test: function(a, b) { b = toString(b); return endsOp(a, b.length) === b; },
        make: function(c) { return this.makeLIKE(LIKE_WILD_CARD, NIL, LIKE, 'ENDS', c); },
        type: 'string'
    },

    /** @type {relationalOperator}
     * @memberOf Conditionals.prototype
     */
    'NOT ENDS': {
        test: function(a, b) { b = toString(b); return endsOp(a, b.length) !== b; },
        make: function(c) { return this.makeLIKE(LIKE_WILD_CARD, NIL, NOT_LIKE, 'NOT ENDS', c); },
        type: 'string'
    }
};

// some synonyms
ops['\u2264'] = ops['<='];  // UNICODE 'LESS-THAN OR EQUAL TO'
ops['\u2265'] = ops['>='];  // UNICODE 'GREATER-THAN OR EQUAL TO'
ops['\u2260'] = ops['<>'];  // UNICODE 'NOT EQUAL TO'

function inOp(a, b) {
    return b
        .trim() // remove leading and trailing space chars
        .replace(/\s*,\s*/g, ',') // remove any white-space chars from around commas
        .split(',') // put in an array
        .indexOf((a + '')); // search array whole matches
}

function containsOp(a, b) {
    return toString(a).indexOf(toString(b));
}

function beginsOp(a, length) {
    return toString(a).substr(0, length);
}

function endsOp(a, length) {
    return toString(a).substr(-length, length);
}

function sqEsc(string) {
    return string.replace(/'/g, '\'\'');
}

var groups = {
    equality: {
        label: 'Equality',
        submenu: ['=']
    },
    inequalities: {
        label: 'Inequalities',
        submenu: [
            '<',
            '\u2264', // UNICODE 'LESS-THAN OR EQUAL TO'; on a Mac, type option-comma (≤)
            '\u2260', // UNICODE 'NOT EQUALS'; on a Mac, type option-equals (≠)
            '\u2265', // UNICODE 'GREATER-THAN OR EQUAL TO'; on a Mac, type option-period (≥)
            '>'
        ]
    },
    sets: {
        label: 'Set scans',
        submenu: ['IN', 'NOT IN']
    },
    strings: {
        label: 'String scans',
        submenu: [
            'CONTAINS', 'NOT CONTAINS',
            'BEGINS', 'NOT BEGINS',
            'ENDS', 'NOT ENDS'
        ]
    },
    patterns: {
        label: 'Pattern scans',
        submenu: ['LIKE', 'NOT LIKE']
    }
};

// add a `name` prop to each group
_(groups).each(function(group, key) { group.name = key; });

/**
 * @memberOf Conditionals
 */
Conditionals.groups = groups;

/** Default operator menu when consisting of all of the groups in {@link module:conditionals.groups|groups}. This menu is used when none of the following is otherwise defined:
 * * The `opMenu` property of the column schema.
 * * The entry in the node's `typeOpMap` hash corresponding to the `type` property of the column schema.
 * * The node's `treeOpMenu` object.
 * @type {menuItem[]}
 * @memberOf Conditionals
 */
Conditionals.defaultOpMenu = [ // hierarchical menu of relational operators
    groups.equality,
    groups.inequalities,
    groups.sets,
    groups.strings,
    groups.patterns
];


// Meant to be called by FilterTree.prototype.setSensitivity only
Conditionals.setToString = function(fn) {
    return (toString = fn);
};

module.exports = Conditionals;

},{"extend-me":7,"object-iterators":51,"regexp-like":54}],11:[function(require,module,exports){
/* eslint-env browser */
/* eslint-disable key-spacing */

'use strict';

var popMenu = require('pop-menu');

var FilterNode = require('./FilterNode');
var Conditionals = require('./Conditionals');


var toString; // set by FilterLeaf.setToString() called from ../index.js


/** @typedef {object} converter
 * @property {function} toType - Returns input value converted to type. Fails silently.
 * @property {function} failed - Tests input value against type, returning `false if type or `true` if not type.
 */

/** @type {converter} */
var numberConverter = {
    toType: Number,
    failed: isNaN
};

/** @type {converter} */
var dateConverter = {
    toType: function(s) { return new Date(s); },
    failed: isNaN
};

/**
 * @typedef {object} filterLeafViewObject
 *
 * @property {HTMLElement} column - A drop-down with options from the `FilterLeaf` instance's schema. Value is the name of the column being tested (i.e., the column to which this conditional expression applies).
 *
 * @property operator - A drop-down with options from {@link columnOpMenu}, {@link typeOpMap}, or {@link treeOpMenu}. Value is the string representation of the operator.
 *
 * @property operand - An input element, such as a drop-down or a text box.
 */

/** @constructor
 * @summary An object that represents a conditional expression node in a filter tree.
 * @desc This object represents a conditional expression. It is always a terminal node in the filter tree; it has no child nodes of its own.
 *
 * A conditional expression is a simple dyadic expression with the following syntax in the UI:
 *
 * > _column operator operand_
 *
 * where:
 * * _column_ is the name of a column from the data row object
 * * _operator_ is the name of an operator from the node's operator list
 * * _operand_ is a literal value to compare against the value in the named column
 *
 * **NOTE:** The {@link ColumnLeaf} extension of this object has a different implementation of _operand_ which is: The name of a column from which to fetch the compare value (from the same data row object) to compare against the value in the named column. See *Extending the conditional expression object* in the {@link http://joneit.github.io/filter-tree/index.html|readme}.
 *
 * The values of the terms of the expression above are stored in the first three properties below. Each of these three properties is set either by `setState()` or by the user via a control in `el`. Note that these properties are not dynamically bound to the UI controls; they are updated by the validation function, `invalid()`.
 *
 * **See also the properties of the superclass:** {@link FilterNode}
 *
 * @property {string} column - Name of the member in the data row objects against which `operand` will be compared. Reflects the value of the `view.column` control after validation.
 *
 * @property {string} operator - Operator symbol. This must match a key in the `this.root.conditionals.ops` hash. Reflects the value of the `view.operator` control after validation.
 *
 * @property {string} operand - Value to compare against the the member of data row named by `column`. Reflects the value of the `view.operand` control, after validation.
 *
 * @property {string} name - Used to describe the object in the UI so user can select an expression editor.
 *
 * @property {string} [type='string'] - The data type of the subexpression if neither the operator nor the column schema defines a type.
 *
 * @property {HTMLElement} el - A `<span>...</span>` element that contains the UI controls. This element is automatically appeneded to the parent `FilterTree`'s `el`. Generated by {@link FilterLeaf#createView|createView}.
 *
 * @property {filterLeafViewObject} view - A hash containing direct references to the controls in `el`. Added by {@link FilterLeaf#createView|createView}.
 */
var FilterLeaf = FilterNode.extend('FilterLeaf', {

    name: 'column = value', // display string for drop-down

    destroy: function() {
        if (this.view) {
            for (var key in this.view) {
                this.view[key].removeEventListener('change', this.onChange);
            }
        }
    },

    /** @summary Create a new view.
     * @desc This new "view" is a group of HTML `Element` controls that completely describe the conditional expression this object represents. This method creates the view, setting `this.el` to point to it, and the members of `this.view` to point to the individual controls therein.
     * @memberOf FilterLeaf.prototype
     */
    createView: function(state) {
        var el = this.el = document.createElement('span');

        el.className = 'filter-tree-editor filter-tree-default';

        if (state && state.column) {
            // State includes column:
            // Operator menu is built later in loadState; we don't need to build it now. The call to
            // getOpMenu below with undefined columnName returns [] resulting in an empty drop-down.
        } else {
            // When state does NOT include column, it's because either:
            // a. column is unknown and op menu will be empty until user chooses a column; or
            // b. column is hard-coded when there's only one possible column as inferable from schema:
            var schema = this.schema && this.schema.length === 1 && this.schema[0],
                columnName = schema && schema.name || schema;
        }

        this.view = {
            column: this.makeElement(this.schema, 'column', this.sortColumnMenu),
            operator: this.makeElement(getOpMenu.call(this, columnName), 'operator'),
            operand: this.makeElement()
        };

        el.appendChild(document.createElement('br'));
    },

    loadState: function(state) {
        if (state) {
            var value, el, i, b, selected, notes = [];
            for (var key in state) {
                if (!FilterNode.optionsSchema[key]) {
                    value = this[key] = state[key];
                    el = this.view[key];
                    switch (el.type) {
                        case 'checkbox':
                        case 'radio':
                            el = document.querySelectorAll('input[name=\'' + el.name + '\']');
                            for (i = 0; i < el.length; i++) {
                                el[i].checked = value.indexOf(el[i].value) >= 0;
                            }
                            break;
                        case 'select-multiple':
                            el = el.options;
                            for (i = 0, b = false; i < el.length; i++, b = b || selected) {
                                selected = value.indexOf(el[i].value) >= 0;
                                el[i].selected = selected;
                            }
                            FilterNode.setWarningClass(el, b);
                            break;
                        default:
                            el.value = value;
                            if (FilterNode.setWarningClass(el) !== value) {
                                notes.push({ key: key, value: value });
                            } else if (key === 'column') {
                                makeOpMenu.call(this, value);
                            }
                    }
                }
            }
            if (notes.length) {
                var multiple = notes.length > 1,
                    templates = this.templates,
                    footnotes = templates.get(multiple ? 'notes' : 'note'),
                    inner = footnotes.querySelector('.footnote');
                notes.forEach(function(note) {
                    var footnote = multiple ? document.createElement('li') : inner;
                    note = templates.get('optionMissing', note.key, note.value);
                    while (note.length) { footnote.appendChild(note[0]); }
                    if (multiple) { inner.appendChild(footnote); }
                });
            }
            this.notesEl = footnotes;
        }
    },

    /**
     * @property {converter} number
     * @property {converter} int - synonym of `number`
     * @property {converter} float - synonym of `number`
     * @property {converter} date
     * @property {converter} string
     */
    converters: {
        number: numberConverter,
        int: numberConverter,
        float: numberConverter,
        date: dateConverter
    },

    /**
     * Called by the parent node's {@link FilterTree#invalid|invalid()} method, which catches the error thrown when invalid.
     *
     * Also performs the following compilation actions:
     * * Copies all `this.view`' values from the DOM to similarly named properties of `this`.
     * * Pre-sets `this.op` and `this.converter` for use in `test`'s tree walk.
     *
     * @param {boolean} [options.throw=false] - Throw an error if missing or invalid value.
     * @param {boolean} [options.focus=false] - Move focus to offending control.
     * @returns {undefined} This is the normal return when valid; otherwise throws error when invalid.
     * @memberOf FilterLeaf.prototype
     */
    invalid: function(options) {
        var elementName, type, focused;

        for (elementName in this.view) {
            var el = this.view[elementName],
                value = controlValue(el).trim();

            if (value === '') {
                if (!focused && options && options.focus) {
                    clickIn(el);
                    focused = true;
                }
                if (options && options.throw) {
                    throw new this.Error('Missing or invalid ' + elementName + ' in conditional expression. Complete the expression or remove it.', this);
                }
            } else {
                // Copy each controls's value as a new similarly named property of this object.
                this[elementName] = value;
            }
        }

        this.op = this.root.conditionals.ops[this.operator];

        type = this.getType();

        this.converter = type && type !== 'string' && this.converters[type];

        this.calculator = this.getCalculator();
    },

    getType: function() {
        return (
            this.op.type // the expression's operator's type (because some operators only work with strings)
            ||
            (this.schema.lookup(this.column) || {}).type // the expression's column schema type
            ||
            this.type // the expression node's type
        );
    },

    getCalculator: function() {
        return (
            (this.schema.lookup(this.column) || {}).calculator || // the expression's column schema calculator
            this.calculator // the expression node's calculator
        );
    },

    valOrFunc: function(dataRow, columnName) {
        var result = dataRow[columnName],
            calculator = (typeof result)[0] === 'f' && result || this.calculator;
        if (calculator) {
            result = calculator(dataRow, columnName);
        }
        return result || result === 0 || result === false ? result : '';
    },

    p: function(dataRow) {
        return this.valOrFunc(dataRow, this.column);
    },

    // To be overridden when operand is a column name (see columns.js).
    q: function() {
        return this.operand;
    },

    test: function(dataRow) {
        var p, q, // untyped versions of args
            P, Q, // typed versions of p and q
            converter;

        // TODO: If a literal (i.e., when this.q is not overridden), q only needs to be fetched ONCE for all rows
        return (
            (p = this.p(dataRow)) === undefined ||
            (q = this.q(dataRow)) === undefined
        )
            ? false // data inaccessible so exclude row
            : (
                (converter = this.converter) &&
                !converter.failed(P = converter.toType(p)) && // attempt to convert data to type
                !converter.failed(Q = converter.toType(q))
            )
                ? this.op.test(P, Q) // both conversions successful: compare as types
                : this.op.test(toString(p), toString(q)); // one or both conversions failed: compare as strings
    },

    toJSON: function() {
        var state = {};
        if (this.editor) {
            state.editor = this.editor;
        }
        for (var key in this.view) {
            state[key] = this[key];
        }
        if (this.schema !== this.parent.schema) {
            state.schema = this.schema;
        }
        return state;
    },

    /**
     * For `'object'` and `'JSON'` note that the subtree's version of `getState` will not call this leaf version of `getState` because the former uses `unstrungify()` and `JSON.stringify()`, respectively, both of which recurse and call `toJSON()` on their own.
     *
     * @param {object} [options='object'] - See the subtree version of {@link FilterTree#getState|getState} for more info.
     *
     * @memberOf FilterLeaf.prototype
     */
    getState: function getState(options) {
        var result = '',
            syntax = options && options.syntax || 'object';

        switch (syntax) {
            case 'object': // see note above
                result = this.toJSON();
                break;
            case 'JSON': // see note above
                result = JSON.stringify(this, null, options && options.space) || '';
                break;
            case 'SQL':
                result = this.getSyntax(this.root.conditionals);
        }

        return result;
    },

    makeSqlOperand: function() {
        return this.root.conditionals.makeSqlString(this.operand); // todo: this should be a number if type is number instead of a string -- but we will have to ensure it is numeric!
    },

    getSyntax: function(conditionals) {
        return this.root.conditionals.ops[this.operator].make.call(conditionals, this);
    },

    /** @summary HTML form controls factory.
     * @desc Creates and appends a text box or a drop-down.
     * > Defined on the FilterTree prototype for access by derived types (alternate filter editors).
     * @returns The new element.
     * @param {menuItem[]} [menu] - Overloads:
     * * If omitted, will create an `<input/>` (text box) element.
     * * If contains only a single option, will create a `<span>...</span>` element containing the string and a `<input type=hidden>` containing the value.
     * * Otherwise, creates a `<select>...</select>` element with these menu items.
     * @param {null|string} [prompt=''] - Adds an initial `<option>...</option>` element to the drop-down with this value, parenthesized, as its `text`; and empty string as its `value`. Omitting creates a blank prompt; `null` suppresses.
     * @param [sort]
     * @memberOf FilterLeaf.prototype
     */
    makeElement: function(menu, prompt, sort) {
        var el, result, options,
            option = menu,
            tagName = menu ? 'SELECT' : 'INPUT';

        // determine if there would be only a single item in the dropdown
        while (option instanceof Array) {
            if (option.length === 1 && !popMenu.isGroupProxy(option[0])) {
                option = option[0];
            } else {
                option = undefined;
            }
        }

        if (option) {
            // hard text when single item
            el = this.templates.get(
                'lockedColumn',
                option.alias || option.name || option,
                option.name || option.alias || option
            );
            result = el.querySelector('input');
        } else {
            options = {
                prompt: prompt,
                sort: sort,
                group: function(groupName) { return Conditionals.groups[groupName]; }
            };

            // make an element
            el = popMenu.build(tagName, menu, options);

            // if it's a textbox, listen for keyup events
            if (el.type === 'text' && this.eventHandler) {
                this.el.addEventListener('keyup', this.eventHandler);
            }

            // handle onchange events
            this.onChange = this.onChange || cleanUpAndMoveOn.bind(this);
            this.el.addEventListener('change', this.onChange);

            FilterNode.setWarningClass(el);
            result = el;
        }

        this.el.appendChild(el);

        return result;
    }
});

/** `change` event handler for all form controls.
 * Rebuilds the operator drop-down as needed.
 * Removes error CSS class from control.
 * Adds warning CSS class from control if blank; removes if not blank.
 * Adds warning CSS class from control if blank; removes if not blank.
 * Moves focus to next non-blank sibling control.
 * @this Bound to this node.
 */
function cleanUpAndMoveOn(evt) {
    var el = evt.target;

    // remove `error` CSS class, which may have been added by `FilterLeaf.prototype.invalid`
    el.classList.remove('filter-tree-error');

    // set or remove 'warning' CSS class, as per el.value
    FilterNode.setWarningClass(el);

    if (el === this.view.column) {
        // rebuild operator list according to selected column name or type, restoring selected item
        makeOpMenu.call(this, el.value);
    }

    if (el.value) {
        // find next sibling control, if any
        if (!el.multiple) {
            while ((el = el.nextElementSibling) && (!('name' in el) || el.value.trim() !== '')); // eslint-disable-line curly
        }

        // and click in it (opens select list)
        if (el && el.value.trim() === '') {
            el.value = ''; // rid of any white space
            FilterNode.clickIn(el);
        }
    }

    // forward the event to the application's event handler
    if (this.eventHandler) {
        this.eventHandler(evt);
    }
}

function getOpMenu(columnName) {
    var column = this.schema.lookup(columnName) || {};
    return (
        column.opMenu
            ||
        this.typeOpMap && this.typeOpMap[column.type || this.type]
            ||
        this.opMenu
    );
}

function makeOpMenu(columnName) {
    var opMenu = getOpMenu.call(this, columnName);

    if (opMenu !== this.renderedOpMenu) {
        var newOpDrop = this.makeElement(opMenu, 'operator');

        newOpDrop.value = this.view.operator.value;
        this.el.replaceChild(newOpDrop, this.view.operator);
        this.view.operator = newOpDrop;

        FilterNode.setWarningClass(newOpDrop);

        this.renderedOpMenu = opMenu;
    }
}

function clickIn(el) {
    setTimeout(function() {
        el.classList.add('filter-tree-error');
        FilterNode.clickIn(el);
    }, 0);
}

function controlValue(el) {
    var value, i;

    switch (el.type) {
        case 'checkbox':
        case 'radio':
            el = document.querySelectorAll('input[name=\'' + el.name + '\']:enabled:checked');
            for (value = [], i = 0; i < el.length; i++) {
                value.push(el[i].value);
            }
            break;

        case 'select-multiple':
            el = el.options;
            for (value = [], i = 0; i < el.length; i++) {
                if (!el.disabled && el.selected) {
                    value.push(el[i].value);
                }
            }
            break;

        default:
            value = el.value;
    }

    return value;
}

// Meant to be called by FilterTree.prototype.setSensitivity only
FilterLeaf.setToString = function(fn) {
    toString = fn;
    return Conditionals.setToString(fn);
};


module.exports = FilterLeaf;

},{"./Conditionals":10,"./FilterNode":12,"pop-menu":52}],12:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var _ = require('object-iterators');
var extend = require('extend-me'), Base = extend.Base; extend.debug = true;
var popMenu = require('pop-menu');

var cssInjector = require('./stylesheet');
var Templates = require('./Templates');
var Conditionals = require('./Conditionals');
var ParserSQL = require('./parser-SQL');


var CHILDREN_TAG = 'OL',
    CHILD_TAG = 'LI';

// JSON-detector: begins _and_ ends with either [ and ] _or_ { and }
var reJSON = /^\s*((\[[^]*\])|(\{[^]*\}))\s*$/;

function FilterTreeError(message, node) {
    this.message = message;
    this.node = node;
}
FilterTreeError.prototype = Object.create(Error.prototype);
FilterTreeError.prototype.name = 'FilterTreeError';

/** @typedef {object} FilterTreeSetStateOptionsObject
 *
 * @property {boolean} [syntax='auto'] - Specify parser to use on `state`. One of:
 * * `'auto'` - Auto-detect; see {@link FilterNode#parseStateString} for algorithm.
 * * `'object'` - A raw state object such as that produced by the [getState()]{@link FilterTree#getState} method.
 * * `'JSON'` - A JSON string version of a state object such as that produced by the [getState()]{@link FilterTree#getState} method.
 * * `'SQL'` - A SQL [search condition expression]{@link https://msdn.microsoft.com/en-us/library/ms173545.aspx} string.
 *
 * @param {Element} [context] If defined, the provided input string is used as a selector to an `HTMLElement` contained in `context`. The `value` property of this element is fetched from the DOM and is used as the input state string; proceed as above.
 */

/** @typedef {object} FilterTreeOptionsObject
 *
 * @property {menuItem[]} [schema] - A default list of column names for field drop-downs of all descendant terminal nodes. Overrides `options.state.schema` (see). May be defined for any node and pertains to all descendants of that node (including terminal nodes). If omitted (and no `ownSchema`), will use the nearest ancestor `schema` definition. However, descendants with their own definition of `types` will override any ancestor definition.
 *
 * > Typically only used by the caller for the top-level (root) tree.
 *
 * @property {menuItem[]} [ownSchema] - A default list of column names for field drop-downs of immediate descendant terminal nodes _only_. Overrides `options.state.ownSchema` (see).
 *
 * Although both `options.schema` and `options.ownSchema` are notated as optional herein, by the time a terminal node tries to render a schema drop-down, a `schema` list should be defined through (in order of priority):
 *
 * * Terminal node's own `options.schema` (or `options.state.schema`) definition.
 * * Terminal node's parent node's `option.ownSchema` (or `option.state.nodesFields`) definition.
 * * Terminal node's parent (or any ancestor) node's `options.schema` (or `options.state.schema`) definition.
 *
 * @property {FilterTreeStateObject} [state] - A data structure that describes a tree, subtree, or leaf (terminal node). If undefined, loads an empty filter, which is a `FilterTree` node consisting the default `operator` value (`'op-and'`).
 *
 * @property {function} [editor='Default'] - The name of the conditional expression's UI "editor." This name must be registered in the parent node's {@link FilterTree#editors|editors} hash, where it maps to a leaf constructor (`FilterLeaf` or a descendant thereof). (Use {@link FilterTree#addEditor} to register new editors.)
 *
 * @property {FilterTree} [parent] - Used internally to insert element when creating nested subtrees. The only time it may be (and must be) omitted is when creating the root node.
 *
 * @property {string|HTMLElement} [cssStylesheetReferenceElement] - passed to cssInsert
 */

/** @typedef {object|string} FilterTreeStateObject
 *
 * @summary State with which to create a new node or replace an existing node.
 *
 * @desc A string or plain object that describes a filter-tree node. If a string, it is parsed into an object by {@link FilterNode~parseStateString}. (See, for available overloads.)
 *
 * The resulting object may be a flat object that describes a terminal node or a childless root or branch node; or may be a hierarchical object to define an entire tree or subtree.
 *
 * In any case, the resulting object may have any of the following properties:
 *
 * @property {menuItem[]} [schema] - See `schema` property of {@link FilterTreeOptionsObject}.
 *
 * @property {string} [editor='Default'] - See `editor` property of {@link FilterTreeOptionsObject}.
 *
 * @property misc - Other miscellaneous properties will be copied directly to the new `FitlerNode` object. (The name "misc" here is just a stand-in; there is no specific property called "misc".)
 *
 * * May describe a non-terminal node with properties:
 *   * `schema` - Overridden on instantiation by `options.schema`. If both unspecified, uses parent's definition.
 *   * `operator` - One of {@link treeOperators}.
 *   * `children` -  Array containing additional terminal and non-terminal nodes.
 *
 * The constructor auto-detects `state`'s type:
 *  * JSON string to be parsed by `JSON.parse()` into a plain object
 *  * SQL WHERE clause string to be parsed into a plain object
 *  * CSS selector of an Element whose `value` contains one of the above
 *  * plain object
 */

/**
 * @constructor
 *
 * @summary A node in a filter tree.
 *
 * @description A filter tree represents a _complex conditional expression_ and consists of a single instance of a {@link FilterTree} object as the _root_ of an _n_-ary tree.
 *
 * Filter trees are comprised of instances of `FilterNode` objects. However, the `FilterNode` constructor is an "abstract class"; filter node objects are never instantiated directly from this constructor. A filter tree is actually comprised of instances of two "subclasses" of `FilterNode` objects:
 * * {@link FilterTree} (or subclass thereof) objects, instances of which represent the root node and all the branch nodes:
 *   * There is always exactly one root node, containing the whole filter tree, which represents the filter expression in its entirety. The root node is distinguished by having no parent node.
 *   * There are zero or more branch nodes, or subtrees, which are child nodes of the root or other branches higher up in the tree, representing subexpressions within the larger filter expression. Each branch node has exactly one parent node.
 *   * These nodes point to zero or more child nodes which are either nested subtrees, or:
 * * {@link FilterLeaf} (or subclass thereof) objects, each instance of which represents a single simple conditional expression. These are terminal nodes, having exactly one parent node, and no child nodes.
 *
 * The programmer may extend the semantics of filter trees by extending the above objects.
 *
 * @property {FilterNode} [parent] - Undefined means this is the root node.
 *
 * @property {FilterNode} root - Convenience reference to the root node.
 *
 * @property {menuItem[]} schema - Column schema used by descendant leaf nodes (including this node if it is a leaf node) to render a column choice drop-down.
 *
 * @property {string} [editor] - Name of filter editor used by descendant leaf nodes (including this node if it is a leaf node).
 *
 * @property {function} [eventHandler] - Event handler for UI events. See *Events* in the {@link http://joneit.github.io/filter-tree/index.html|readme} for more information.
 *
 * @property {menuItem[]} [treeOpMenu=Conditionals.defaultOpMenu] - Default operator menu for all descendant leaf nodes. Only used if the leaf node has no defined `opMenu` property _and_ there is no menu defined in `typeOpMenus` keyed to the column's `type`.
 *
 * @property {object} [typeOpMap] - A hash of type names. Each member thus defined contains a specific operator menu for all descendant leaf nodes that:
 * 1. do not have their own operator menu (`opMenu` property) of their own; and
 * 2. whose columns resolve to that type.
 *
 * The type is determined by (in priority order):
 * 1. the `type` property of the {@link FilterLeaf}; or
 * 2. the `type` property of the element in the nearest node (including the leaf node itself) that has a defined `ownSchema` or `schema` array property with an element having a matching column name.
 *
 * @property {sqlIdQtsObject} [sqlIdQts={beg:'"',end:'"'}] - Quote characters for SQL identifiers. Used for both parsing and generating SQL. Should be placed on the root node.
 *
 * @property {HTMLElement} el - The DOM element created by the `render` method to represent this node. Contains the `el`s for all child nodes (which are themselves pointed to by those nodes). This is always generated but is only in the page DOM if you put it there.
 */

var FilterNode = Base.extend('FilterNode', {

    /**
     * @summary Create a new node or subtree.
     * @desc Typically used by the application layer to create the entire filter tree; and internally, recursively, to create each node including both subtrees and leaves.
     *
     * **Node properties and options:** Nodes are instantiated with:
     * 1. Certain **required properties** which differ for subtrees and leaves.
     * 2. Arbitrary **non-standard option properties** are defined on the `options` object (so long as their names do not conflict with any standard options) and never persist.
     * 3. Certain **standard options properties** as defined in the {@link FilterNode~optionsSchema|optionsSchema} hash, come from various sources, as prioritized as follows:
     *    1. `options` object; does not persist
     *    2. `state`; object; persists
     *    3. `parent` object; persists
     *    4. `default` object; does not persist
     *
     * Notes:
     * 1. "Persists" means output by {@link FilterTree#getState|getState()}.
     * 2. The `parent` object is generated internally for subtrees. It allows standard options to inherit from the parent node.
     * 3. The `default` object comes from the `default` property, if any, of the {@link FilterNode~optionsSchema|schema object} for the standard option in question. Note that once defined, subtrees will then inherit this value.
     * 4. If not defined by any of the above, the standard option remains undefined on the node.
     *
     * **Query Builder UI support:** If your app wants to make use of the generated UI, you are responsible for inserting the top-level `.el` into the DOM. (Otherwise just ignore it.)
     *
     * @param {FilterTreeOptionsObject} [options] - The node state; or an options object possibly containing `state` among other options. Although you can instantiate a filter without any options, this is generally not useful. See *Instantiating a filter* in the {@link http://joneit.github.io/filter-tree/index.html|readme} for a practical discussion of minimum options.
     *
     * * @memberOf FilterNode.prototype
     */
    initialize: function(options) {
        options = options || {};

        var parent = this.parent = this.parent || options.parent,
            root = parent && parent.root;

        if (!root) {
            root = this;

            this.stylesheet = this.stylesheet ||
                cssInjector(options.cssStylesheetReferenceElement);

            this.conditionals = new Conditionals(options); // .sqlIdQts

            this.ParserSQL = new ParserSQL(options); // .schema, .caseSensitiveColumnNames, .resolveAliases

            var keys = ['name'];
            if (options.resolveAliases) {
                keys.push('alias');
            }

            this.findOptions = {
                caseSensitive: options.caseSensitiveColumnNames,
                keys: keys
            };
        }

        this.root = root;

        this.dontPersist = {}; // hash of truthy values

        this.setState(options.state, options);
    },

    /** Insert each subtree into its parent node along with a "delete" button.
     * > The root tree (which has no parent) is inserted into the DOM by the instantiating code (without a delete button).
     * @memberOf FilterNode.prototype
     */
    render: function() {
        if (this.parent) {
            var newListItem = document.createElement(CHILD_TAG);

            if (this.notesEl) {
                newListItem.appendChild(this.notesEl);
            }

            if (!this.keep) {
                var el = this.templates.get('removeButton');
                el.addEventListener('click', this.remove.bind(this));
                newListItem.appendChild(el);
            }

            newListItem.appendChild(this.el);

            this.parent.el.querySelector(CHILDREN_TAG).appendChild(newListItem);
        }
    },

    /**
     *
     * @param {FilterTreeStateObject} state
     * @param {FilterTreeSetStateOptionsObject} [options]
     * @memberOf FilterNode.prototype
     */
    setState: function(state, options) {
        var oldEl = this.el;

        state = this.parseStateString(state, options);

        this.mixInStandardOptions(state, options);
        this.mixInNonstandardOptions(options);
        this.createView(state);
        this.loadState(state);
        this.render();

        if (oldEl) {
            var newEl = this.el;
            if (this.parent && oldEl.parentElement.tagName === 'LI') {
                oldEl = oldEl.parentNode;
                newEl = newEl.parentNode;
            }
            oldEl.parentNode.replaceChild(newEl, oldEl);
        }
    },

    /**
     * @summary Convert a string to a state object.
     *
     * @desc They string's syntax is inferred as follows:
     * 1. If state is undefined or already an object, return as is.
     * 2. If `options.context` is defined, `state` is assumed to be a CSS selector string (auto-detected) pointing to an HTML form control with a `value` property, such as a {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement HTMLInputElement} or a {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement HTMLTextAreaElement}. The element is selected and if found, its value is fetched from the DOM and assigned to `state`.
     * 3. If `options.syntax` is `'auto'`, JSON syntax is detected if `state` begins _and_ ends with either `[` and `]` _or_ `{` and `}` (ignoring leading and trailing white space).
     * 4. If JSON syntax, parse the string into an actual `FilterTreeStateObject` using {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse|JSON.parse} and throw an error if unparsable.
     * 5. If not JSON, parse the string as SQL into an actual `FilterTreeStateObject` using parser-SQL's {@link ParserSQL#parser|parser} and throw an error if unparsable.
     *
     * @param {FilterTreeStateObject} [state]
     * @param {FilterTreeSetStateOptionsObject} [options]
     *
     * @returns {FilterTreeStateObject} The unmolested `state` parameter. Throws an error if `state` is unknown or invalid syntax.
     *
     * @memberOf FilterNode
     * @inner
     */
    parseStateString: function(state, options) {
        if (state) {
            if (typeof state === 'string') {
                var context = options && options.context,
                    syntax = options && options.syntax || 'auto'; // default is 'auto'

                if (context) {
                    state = context.querySelector(state).value;
                }

                if (syntax === 'auto') {
                    syntax = reJSON.test(state) ? 'JSON' : 'SQL';
                }

                switch (syntax) {
                    case 'JSON':
                        try {
                            state = JSON.parse(state);
                        } catch (error) {
                            throw new FilterTreeError('JSON parser: ' + error);
                        }
                        break;
                    case 'SQL':
                        try {
                            state = this.root.ParserSQL.parse(state);
                        } catch (error) {
                            throw new FilterTreeError('SQL WHERE clause parser: ' + error);
                        }
                        break;
                }
            }

            if (typeof state !== 'object') {
                throw new FilterTreeError('Unexpected input state.');
            }
        }

        return state;
    },

    /**
     * Create each standard option from when found on the `options` or `state` objects, respectively; or if not an "own" option, on the `parent` object or from the options schema default (if any)
     * @param state
     * @param options
     */
    mixInStandardOptions: function(state, options) {
        var node = this;

        _(FilterNode.optionsSchema).each(function(optionSchema, key) {
            if (!optionSchema.ignore && (this !== this.root || optionSchema.rootBound)) {
                var option;

                node.dontPersist[key] = // truthy if from `options` or `default`
                    (option = options && options[key]) !== undefined ||
                    (option = state && state[key]) === undefined &&
                    !(optionSchema.own || node.hasOwnProperty(key) && option !== null) &&
                    !(option = node.parent && node.parent[key]) &&
                    (option = optionSchema.default);

                if (option === null) {
                    delete node[key];
                    node.dontPersist[key] = false;
                } else if (option) {
                    if (key === 'schema' && !option.walk) {
                        // attach the `walk` and `find` convenience methods to the `schema` array
                        option.walk = popMenu.walk.bind(option);
                        option.lookup = popMenu.lookup.bind(option, node.root.findOptions);
                    }
                    node[key] = option;
                }
            }
        });
    },

    /**
     * @param options
     */
    mixInNonstandardOptions: function(options) {
        var node = this;

        // copy all remaining options directly to the new instance, overriding prototype members of the same name
        _(options).each(function(value, key) {
            if (!FilterNode.optionsSchema[key]) {
                node[key] = value;
            }
        });
    },

    /** Remove both:
     * * `this` filter node from it's `parent`'s `children` collection; and
     * * `this` filter node's `el`'s container (always a `<li>` element) from its parent element.
     * @memberOf FilterNode.prototype
     */
    remove: function() {
        var avert,
            parent = this.parent;

        if (parent) {
            if (this.eventHandler) {
                this.eventHandler.call(parent, {
                    type: 'delete',
                    preventDefault: function() { avert = true; }
                });
            }
            if (!avert) {
                if (
                    parent.keep || // never "prune" (remove if empty) this particular subexpression
                    parent.children.length > 1 // this node has siblings so will not be empty after this remove
                ) {
                    // proceed with remove
                    this.el.parentNode.remove(); // the parent is always the containing <li> tag
                    parent.children.splice(parent.children.indexOf(this), 1);
                } else {
                    // recurse to prune entire subexpression because it's prune-able and would end up empty (childless)
                    parent.remove();
                }
            }
        }
    },

    Error: FilterTreeError,

    templates: new Templates()
});

/** @typedef optionsSchemaObject
 * @summary Standard option schema
 * @desc Standard options are automatically added to nodes. Data sources for standard options include `options`, `state`, `parent` and `default` (in that order). Describes standard options through various properties:
 * @property {boolean} [ignore] - Do not automatically add to nodes (processed elsewhere).
 * @property {boolean} [own] - Do not automatically add from `parent` or `default`.
 * @property {boolean} [rootBound] - Automatically add to root node only.
 * @property {*} [default] - This is the default data source when all other strategies fail.
 */

/**
 * @summary Defines the standard options available to a node.
 * @desc The following properties bear the same names as the node options they define.
 * @type {pbject}
 * @memberOf FilterNode
 */
FilterNode.optionsSchema = {

    state: { ignore: true },

    cssStylesheetReferenceElement: { ignore: true },

    /** @summary Default column schema for column drop-downs of direct descendant leaf nodes only.
     * @desc > This docs entry describes a property in the FilterNode prototype. It does not describe the optionsSchema property (despite it's position in the source code).
     * @type {string[]}
     * @memberOf FilterNode.optionsSchema
     */
    ownSchema: { own: true },

    /** @summary Default column schema for column drop-downs of all descendant leaf nodes.
     * @desc > This docs entry describes a property in the FilterNode prototype. It does not describe the optionsSchema property (despite it's position in the source code).
     * @type {menuItem[]}
     * @memberOf FilterNode.optionsSchema
     */
    schema: {},

    /** @summary Type of filter editor.
     * @desc > This docs entry describes a property in the FilterNode prototype. It does not describe the optionsSchema property (despite it's position in the source code).
     * @type {string}
     * @memberOf FilterNode.optionsSchema
     */
    editor: {},

    /** @summary Event handler for UI events.
     * @desc > This docs entry describes a property in the FilterNode prototype. It does not describe the optionsSchema property (despite it's position in the source code).
     * @type {string}
     * @memberOf FilterNode.optionsSchema
     */
    eventHandler: {},

    type: { own: true },

    keep: { own: true },

    /** @summary Override operator list at any node.
     * @desc > This docs entry describes a property in the FilterNode prototype. It does not describe the optionsSchema property (despite it's position in the source code).
     * @type {string[]}
     * @memberOf FilterNode.optionsSchema
     */
    opMenu: { default: Conditionals.defaultOpMenu },

    typeOpMap: { rootBound: true },

    /** @summary Truthy will sort the column menus.
     * @type {boolean}
     * @memberOf FilterNode.optionsSchema
     */
    sortColumnMenu: {}
};

FilterNode.setWarningClass = function(el, value) {
    if (arguments.length < 2) {
        value = el.value;
    }
    el.classList[value ? 'remove' : 'add']('filter-tree-warning');
    return value;
};

FilterNode.clickIn = function(el) {
    if (el) {
        if (el.tagName === 'SELECT') {
            setTimeout(function() { el.dispatchEvent(new MouseEvent('mousedown')); }, 0);
        } else {
            el.focus();
        }
    }
};

module.exports = FilterNode;

},{"./Conditionals":10,"./Templates":14,"./parser-SQL":16,"./stylesheet":17,"extend-me":7,"object-iterators":51,"pop-menu":52}],13:[function(require,module,exports){
/* eslint-env browser */

// This is the main file, usable as is, such as by /test/index.js.

// For npm: require this file
// For CDN: gulpfile.js browserifies this file with sourcemap to /build/filter-tree.js and uglified without sourcemap to /build/filter-tree.min.js. The CDN is https://joneit.github.io/filter-tree.

'use strict';

var popMenu = require('pop-menu');
var unstrungify = require('unstrungify');

var _ = require('object-iterators');
var FilterNode = require('./FilterNode');
var FilterLeaf = require('./FilterLeaf');
var operators = require('./tree-operators');


var ordinal = 0;

/** @constructor
 * @summary An object that represents the root node or a branch node in a filter tree.
 * @desc A node representing a subexpression in the filter expression. May be thought of as a parenthesized subexpression in algebraic expression syntax. As discussed under {@link FilterNode}, a `FilterTree` instance's child nodes may be either:
 * * Other (nested) `FilterTree` (or subclass thereof) nodes representing subexpressions.
 * * {@link FilterLeaf} (or subclass thereof) terminal nodes representing conditional expressions.
 *
 * The `FilterTree` object also has methods, some of which operate on a specific subtree instance, and some of which recurse through all the subtree's child nodes and all their descendants, _etc._
 *
 * The recursive methods are interesting. They all work similarly, looping through the list of child nodes, recursing when the child node is a nested subtree (which will recurse further when it has its own nested subtrees); and calling the polymorphic method when the child node is a `FilterLeaf` object, which is a terminal node. Such polymorphic methods include `setState()`, `getState()`, `invalid()`, and `test()`.
 *
 * For example, calling `test(dataRow)` on the root tree recurses through any subtrees eventually calling `test(dataRow)` on each of its leaf nodes and concatenating the results together using the subtree's `operator`. The subtree's `test(dataRow)` call then returns the result to it's parent's `test()` call, _etc.,_ eventually bubbling up to the root node's `test(dataRow)` call, which returns the final result to the original caller. This result determines if the given data row passed through the entire filter expression successfully (`true`) and should be displayed, or was blocked somewhere (`false`) and should not be displayed.
 *
 * Note that in practice:
 * 1. `children` may be empty. This represents a an empty subexpression. Normally pointless, empty subexpressions could be pruned. Filter-tree allows them however as harmless placeholders.
 * 1. `operator` may be omitted in which case it defaults to AND.
 * 1. A `false` result from a child node will short-stop an AND operation; a `true` result will short-stop an OR or NOR operation.
 *
 * Additional notes:
 * 1. A `FilterTree` may consist of a single leaf, in which case the concatenation `operator` is not needed and may be left undefined. However, if a second child is added and the operator is still undefined, it will be set to the default (`'op-and'`).
 * 2. The order of the children is undefined as all operators are commutative. For the '`op-or`' operator, evaluation ceases on the first positive result and for efficiency, all simple conditional expressions will be evaluated before any complex subexpressions.
 * 3. A nested `FilterTree` is distinguished (duck-typed) from a leaf node by the presence of a `children` member.
 * 4. Nesting a `FilterTree` containing a single child is valid (albeit pointless).
 *
 * **See also the properties of the superclass:** {@link FilterNode}
 *
 * @property {string} [operator='op-and'] - The operator that concatentates the test results from all the node's `children` (child nodes). Must be one of:
 * * `'op-and'`
 * * `'op-or'`
 * * `'op-nor'`
 *
 * Note that there is only one `operator` per subexpression. If you need to mix operators, create a subordinate subexpression as one of the child nodes.
 *
 * @property {FilterNode[]} children - A list of descendants of this node. As noted, these may be other `FilterTree` (or subclass thereof) nodes; or may be terminal `FilterLeaf` (or subclass thereof) nodes. May be any length including 0 (none; empty).
 *
 * @property {boolean} [keep=false] - Do not automatically prune when last child removed.
 *
 * @property {fieldItem[]} [ownSchema] - Column menu to be used only by leaf nodes that are children (direct descendants) of this node.
 *
 * @property {string} [type='subtree'] - Type of node, for rendering purposes; names the rendering template to use to generate the node's UI representation.
 */
var FilterTree = FilterNode.extend('FilterTree', {

    /**
     * Hash of constructors for objects that extend from {@link FilterLeaf}, which is the `Default` member here.
     *
     * Add additional editors to this object (in the prototype) prior to instantiating a leaf node that refers to it. This object exists in the prototype and additions to it will affect all nodes that don't have their an "own" hash.
     *
     * If you create an "own" hash in your instance be sure to include the default editor, for example: `{ Default: FilterTree.prototype.editors.Default, ... }`. (One way of overriding would be to include such an object in an `editors` member of the options object passed to the constructor on instantiation. This works because all miscellaneous members are simply copied to the new instance. Not to be confused with the standard option `editor` which is a string containing a key from this hash and tells the leaf node what type to use.)
     */
    editors: {
        Default: FilterLeaf
    },

    /**
     * An extension is a hash of prototype overrides (methods, properties) used to extend the default editor.
     * @param {string} [key='Default'] - Nme of the new extension given in `ext` or name of an existing extension in `FilterTree.extensions`. As a constructor, should have an initial capital. If omitted, replaces the default editor (FilterLeaf).
     * @param {object} [ext] An extension hash
     * @param {FilerLeaf} [BaseEditor=this.editors.Default] - Constructor to extend from.
     * @returns {FillterLeaf} A new class extended from `BaseEditor` -- which is initially `FilterLeaf` but may itself have been extended by a call to `.addEditor('Default', extension)`.
     */
    addEditor: function(key, ext, BaseEditor) {
        if (typeof key === 'object') {
            // `key` (string) was omitted
            BaseEditor = ext;
            ext = key;
            key = 'Default';
        }
        BaseEditor = BaseEditor || this.editors.Default;
        ext = ext || FilterTree.extensions[key];
        return (this.editors[key] = BaseEditor.extend(key, ext));
    },

    /**
     * @param {string} key - The name of the existing editor to remove.
     * @memberOf FilterTree.prototype
     */
    removeEditor: function(key) {
        if (key === 'Default') {
            throw 'Cannot remove default editor.';
        }
        delete this.editors[key];
    },

    /**
     *
     * @memberOf FilterTree.prototype
     */
    createView: function() {
        this.el = this.templates.get(
            this.type || 'subtree',
            ++ordinal,
            this.schema[0] && popMenu.formatItem(this.schema[0])
        );

        // Add the expression editors to the "add new" drop-down
        var addNewCtrl = this.el.querySelector(':scope>select');
        if (addNewCtrl) {
            var submenu, optgroup,
                editors = this.editors;

            if (addNewCtrl.length === 1 && this.editors.length === 1) {
                // this editor is the only option besides the null prompt option
                // so make it th eonly item i the drop-down
                submenu = addNewCtrl;
            } else {
                // there are already options and/or multiple editors
                submenu = optgroup = document.createElement('optgroup');
                optgroup.label = 'Conditional Expressions';
            }
            Object.keys(editors).forEach(function(key) {
                var name = editors[key].prototype.name || key;
                submenu.appendChild(new Option(name, key));
            });
            if (optgroup) {
                addNewCtrl.add(optgroup);
            }
            this.el.addEventListener('change', onchange.bind(this));
        }

        this.el.addEventListener('click', onTreeOpClick.bind(this));
    },

    /**
     *
     * @memberOf FilterTree.prototype
     */
    loadState: function(state) {
        this.operator = 'op-and';
        this.children = [];

        if (!state) {
            this.add();
        } else {
            // Validate `state.children` (required)
            if (!(state.children instanceof Array)) {
                throw new this.Error('Expected `children` property to be an array.');
            }

            // Validate `state.operator` (if given)
            if (state.operator) {
                if (!operators[state.operator]) {
                    throw new this.Error('Expected `operator` property to be one of: ' + Object.keys(operators));
                }

                this.operator = state.operator;
            }

            state.children.forEach(this.add.bind(this));
        }
    },

    /**
     *
     * @memberOf FilterTree.prototype
     */
    render: function() {
        var radioButton = this.el.querySelector(':scope > label > input[value=' + this.operator + ']'),
            addFilterLink = this.el.querySelector('.filter-tree-add-conditional');

        if (radioButton) {
            radioButton.checked = true;
            onTreeOpClick.call(this, {
                target: radioButton
            });
        }

        // when multiple filter editors available, simulate click on the new "add conditional" link
        if (addFilterLink && !this.children.length && Object.keys(this.editors).length > 1) {
            this['filter-tree-add-conditional']({
                target: addFilterLink
            });
        }

        // proceed with render
        FilterNode.prototype.render.call(this);
    },

    /**
     * @summary Create a new node as per `state`.
     *
     * @param {object} [options={state:{}}] - May be one of:
     *
     * * an `options` object containing a `state` property
     * * a `state` object (in which case there is no `options` object)
     *
     * In any case, resulting `state` object may be either...
     * * A new subtree (has a `children` property):
     *   Add a new `FilterTree` node.
     * * A new leaf (no `children` property): add a new `FilterLeaf` node:
     *   * If there is an `editor` property:
     *     Add leaf using `this.editors[state.editor]`.
     *   * Otherwise (including the case where `state` is undefined):
     *     Add leaf using `this.editors.Default`.
     *
     * @param {boolean} [options.focus=false] Call invalid() after inserting to focus on first blank control (if any).
     *
     * @returns {FilterNode} The new node.
     *
     * @memberOf FilterTree.prototype
     */
    add: function(options) {
        var Constructor, newNode;

        options = options || {};

        if (!options.state) {
            options = { state: options };
        }

        if (options.state.children) {
            Constructor = this.constructor;
        } else {
            Constructor = this.editors[options.state.editor || 'Default'];
        }

        options.parent = this;
        newNode = new Constructor(options);
        this.children.push(newNode);

        if (options.focus) {
            // focus on blank control a beat after adding it
            setTimeout(function() { newNode.invalid(options); }, 750);
        }

        return newNode;
    },

    /** @typedef {object} FilterTreeValidationOptionsObject
     * @property {boolean} [throw=false] - Throw (do not catch) `FilterTreeError`s.
     * @property {boolean} [alert=false] - Announce error via window.alert() before returning.
     * @property {boolean} [focus=false] - Place the focus on the offending control and give it error color.
     */

    /**
     * @param {FilterTreeValidationOptionsObject} [options]
     * @returns {undefined|FilterTreeError} `undefined` if valid; or the caught `FilterTreeError` if error.
     * @memberOf FilterTree.prototype
     */
    invalid: function(options) {
        var result;

        options = options || {};

        try {
            result = invalid.call(this, options);
        } catch (err) {
            result = err;

            // Throw when unexpected (not a filter tree error)
            if (!(err instanceof this.Error)) {
                throw err;
            }
        }

        // Alter and/or throw when requested
        if (result) {
            if (options.alert) {
                window.alert(result.message || result); // eslint-disable-line no-alert
            }
            if (options.throw) {
                throw result;
            }
        }

        return result;
    },

    /**
     *
     * @param dataRow
     * @returns {boolean}
     * @memberOf FilterTree.prototype
     */
    test: function test(dataRow) {
        var operator = operators[this.operator],
            result = operator.seed,
            noChildrenDefined = true;

        this.children.find(function(child) {
            if (child) {
                noChildrenDefined = false;
                if (child instanceof FilterLeaf) {
                    result = operator.reduce(result, child.test(dataRow));
                } else if (child.children.length) {
                    result = operator.reduce(result, test.call(child, dataRow));
                }
                return result === operator.abort;
            }

            return false;
        });

        return noChildrenDefined || (operator.negate ? !result : result);
    },

    /**
     * @returns {number} Number of filters (terminal nodes) defined in this subtree.
     */
    filterCount: function filterCount() {
        var n = 0;

        this.children.forEach(function(child) {
            n += child instanceof FilterLeaf ? 1 : filterCount.call(child);
        });

        return n;
    },

    /** @typedef {object} FilterTreeGetStateOptionsObject
     *
     * @summary Object containing options for producing a state object.
     *
     * @desc State is commonly used for two purposes:
     * 1. To persist the filter state so that it can be reloaded later.
     * 2. To send a query to a database engine.
     *
     * @property {boolean} [syntax='object'] - A case-sensitive string indicating the expected type and format of a state object to be generated from a filter tree. One of:
     * * `'object'` (default) A raw state object produced by walking the tree using `{@link https://www.npmjs.com/package/unstrungify|unstrungify()}`, respecting `JSON.stringify()`'s "{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior|toJSON() behavior}," and returning a plain object suitable for resubmitting to {@link FilterNode#setState|setState}. This is an "essential" version of the actual node objects in the tree.
     * * `'JSON'` - A stringified state object produced by walking the tree using `{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior|JSON.stringify()}`, returning a JSON string by calling `toJSON` at every node. This is a string representation of the same "essential" object as that produced by the `'object'` option, but "stringified" and therefore suitable for text-based storage media.
     * * `'SQL'` - The subexpression in SQL conditional syntax produced by walking the tree and returning a SQL [search condition expression]{@link https://msdn.microsoft.com/en-us/library/ms173545.aspx}. Suitable for use in the WHERE clause of a SQL `SELECT` statement used to query a database for a filtered result set.
     *
     * @param {number|string} [space] - When `options.syntax === 'JSON'`, forwarded to `JSON.stringify` as the third parameter, `space` (see).
     *
     * NOTE: The SQL syntax result cannot accommodate node meta-data. While meta-data such as `type` typically comes from the column schema, meta-data can be installed directly on a node. Such meta-data will not be part of the resulting SQL expression. For this reason, SQL should not be used to persist filter state but rather its use should be limited to generating a filter query for a remote data server.
     */

    /**
     * @summary Get a representation of filter state.
     * @desc Calling this on the root will get the entire tree's state; calling this on any subtree will get just that subtree's state.
     *
     * Only _essential_ properties will be output:
     *
     * 1. `FilterTree` nodes will output at least 2 properties:
     *    * `operator`
     *    * `children`
     * 2. `FilterLeaf` nodes will output (via {@link FilterLeaf#getState|getState}) at least 3 properties, one property for each item in it's `view`:
     *    * `column`
     *    * `operator`
     *    * `operand`
     * 3. Additional node properties will be output when:
     *    1. When the property was **NOT** externally sourced:
     *       1. Did *not* come from the `options` object on node instantiation.
     *       2. Did *not* come from the options schema `default` object, if any.
     *    2. **AND** at least one of the following is true:
     *       1. When it's an "own" property.
     *       2. When its value differs from it's parent's.
     *       3. When this is the root node.
     *
     * @param {FilterTreeGetStateOptionsObject} [options]
     * @param {object} [options.sqlIdQts] - When `options.syntax === 'SQL'`, forwarded to `conditionals.pushSqlIdQts()`.
     * @returns {object|string} Returns object when `options.syntax === 'object'`; otherwise returns string.
     * @memberOf FilterTree.prototype
     */
    getState: function getState(options) {
        var result = '',
            syntax = options && options.syntax || 'object';

        switch (syntax) {
            case 'object':
                result = unstrungify.call(this);
                break;

            case 'JSON':
                result = JSON.stringify(this, null, options && options.space) || '';
                break;

            case 'SQL':
                var lexeme = operators[this.operator].SQL;

                this.children.forEach(function(child, idx) {
                    var op = idx ? ' ' + lexeme.op + ' ' : '';
                    if (child instanceof FilterLeaf) {
                        result += op + child.getState(options);
                    } else if (child.children.length) {
                        result += op + getState.call(child, options);
                    }
                });

                if (result) {
                    result = lexeme.beg + result + lexeme.end;
                }
                break;

            default:
                throw new this.Error('Unknown syntax option "' + syntax + '"');
        }

        return result;
    },

    toJSON: function toJSON() {
        var self = this,
            state = {
                operator: this.operator,
                children: []
            };

        this.children.forEach(function(child) {
            state.children.push(child instanceof FilterLeaf ? child : toJSON.call(child));
        });

        _(FilterNode.optionsSchema).each(function(optionSchema, key) {
            if (
                self[key] && // there is a standard option on the node which may need to be output
                !self.dontPersist[key] && (
                    optionSchema.own || // output because it's an "own" option (belongs to the node)
                    !self.parent || // output because it's the root node
                    self[key] !== self.parent[key] // output because it differs from its parent's version
                )
            ) {
                state[key] = self[key];
            }
        });

        return state;
    },

    /**
     * @summary Set the case sensitivity of filter tests against data.
     * @desc Case sensitivity pertains to string compares only. This includes untyped columns, columns typed as strings, typed columns containing data that cannot be coerced to type or when the filter expression operand cannot be coerced.
     *
     * NOTE: This is a shared property and affects all filter-tree instances constructed by this code instance.
     * @param {boolean} isSensitive
     * @memberOf Filtertree.prototype.prototype
     */
    setCaseSensitivity: function(isSensitive) {
        var toString = isSensitive ? toStringCaseSensitive : toStringCaseInsensitive;
        FilterLeaf.setToString(toString);
    }

});

function toStringCaseInsensitive(s) { return (s + '').toUpperCase(); }
function toStringCaseSensitive(s) { return s + ''; }

// Some event handlers bound to FilterTree object

function onchange(evt) { // called in context
    var ctrl = evt.target;
    if (ctrl.parentElement === this.el) {
        if (ctrl.value === 'subexp') {
            this.children.push(new FilterTree({
                parent: this
            }));
        } else {
            this.add({
                state: { editor: ctrl.value },
                focus: true
            });
        }
        ctrl.selectedIndex = 0;
    }
}

function onTreeOpClick(evt) { // called in context
    var ctrl = evt.target;

    if (ctrl.className === 'filter-tree-op-choice') {
        this.operator = ctrl.value;

        // display strike-through
        var radioButtons = this.el.querySelectorAll('label>input.filter-tree-op-choice[name=' + ctrl.name + ']');
        Array.prototype.forEach.call(radioButtons, function(ctrl) {
            ctrl.parentElement.style.textDecoration = ctrl.checked ? 'none' : 'line-through';
        });

        // display operator between filters by adding operator string as a CSS class of this tree
        for (var key in operators) {
            this.el.classList.remove(key);
        }
        this.el.classList.add(this.operator);
    }
}

/**
 * Throws error if invalid expression tree.
 * Caught by {@link FilterTree#invalid|FilterTree.prototype.invalid()}.
 * @param {boolean} [options.focus=false] - Move focus to offending control.
 * @returns {undefined} if valid
 * @private
 */
function invalid(options) { // called in context
    //if (this instanceof FilterTree && !this.children.length) {
    //    throw new this.Error('Empty subexpression (no filters).');
    //}

    this.children.forEach(function(child) {
        if (child instanceof FilterLeaf) {
            child.invalid(options);
        } else if (child.children.length) {
            invalid.call(child, options);
        }
    });
}

FilterTree.extensions = {
    Columns: require('./extensions/columns')
};

// module initialization
FilterTree.prototype.setCaseSensitivity(true);  // default is case-sensitive which is more efficient; may be reset at will


module.exports = FilterTree;

},{"./FilterLeaf":11,"./FilterNode":12,"./extensions/columns":15,"./tree-operators":18,"object-iterators":51,"pop-menu":52,"unstrungify":58}],14:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var templex = require('templex');

var templates = require('../html');

var encoders = /\{(\d+)\:encode\}/g;

function Templates() {}
var constructor = Templates.prototype.constructor;
Templates.prototype = templates;
Templates.prototype.constructor = constructor; // restore it
Templates.prototype.get = function(templateName) { // mix it in
    var keys,
        matches = {},
        temp = document.createElement('div'),
        text = this[templateName],
        args = Array.prototype.slice.call(arguments, 1);

    encoders.lastIndex = 0;

    while ((keys = encoders.exec(text))) {
        matches[keys[1]] = true;
    }

    keys = Object.keys(matches);

    if (keys.length) {
        keys.forEach(function(key) {
            temp.textContent = args[key];
            args[key] = temp.innerHTML;
        });
        text = text.replace(encoders, '{$1}');
    }

    temp.innerHTML = templex.apply(this, [text].concat(args));

    // if only one HTMLElement, return it; otherwise entire list of nodes
    return temp.children.length === 1 && temp.childNodes.length === 1
        ? temp.firstChild
        : temp.childNodes;
};

module.exports = Templates;

},{"../html":8,"templex":57}],15:[function(require,module,exports){
'use strict';

var Conditionals = require('../Conditionals');
var FilterLeaf = require('../FilterLeaf');

/**
 * @summary Prototype additions object for extending {@link FilterLeaf}.
 * @desc Resulting object is similar to {@link FilterLeaf} except:
 * 1. The `operand` property names another column rather than contains a literal.
 * 2. Operators are limited to equality, inequalities, and sets (IN/NOT IN). Omitted are the string and pattern scans (BEGINS/NOT BEGINS, ENDS/NOT ENDS, CONTAINS/NOT CONTAINS, and LIKE/NOT LIKE).
 *
 * @extends FilterLeaf
 *
 * @property {string} identifier - Name of column (member of data row object) to compare against this column (member of data row object named by `column`).
 */
var ColumnLeaf = {
    name: 'column = column', // display string for drop-down

    createView: function() {
        // Create the `view` hash and insert the three default elements (`column`, `operator`, `operand`) into `.el`
        FilterLeaf.prototype.createView.call(this);

        // Replace the `operand` element from the `view` hash
        var oldOperand = this.view.operand,
            newOperand = this.view.operand = this.makeElement(this.root.schema, 'column', this.sortColumnMenu);

        // Replace the operand element with the new one. There are no event listeners to worry about.
        this.el.replaceChild(newOperand, oldOperand);
    },

    makeSqlOperand: function() {
        return this.conditionals.makeSqlIdentifier(this.operand);
    },

    opMenu: [
        Conditionals.groups.equality,
        Conditionals.groups.inequalities,
        Conditionals.groups.sets
    ],

    q: function(dataRow) {
        return this.valOrFunc(dataRow, this.operand);
    }
};

module.exports = ColumnLeaf;

},{"../Conditionals":10,"../FilterLeaf":11}],16:[function(require,module,exports){
'use strict';

var reOp = /^((=|>=?|<[>=]?)|(NOT )?(LIKE|IN)\b)/i, // match[1]
    reLit = /^'(\d+)'/,
    reLitAnywhere = /'(\d+)'/,
    reIn = /^\((.*?)\)/,
    reBool = /^(AND|OR)\b/i,
    reGroup = /^(NOT ?)?\(/i;

var SQT = '\'';

var defaultIdQts = {
    beg: '"',
    end: '"'
};

function ParserSqlError(message) {
    this.message = message;
}
ParserSqlError.prototype = Object.create(Error.prototype);
ParserSqlError.prototype.name = 'ParserSqlError';

/** @typedef {object} sqlIdQtsObject
 * @desc On a practical level, the useful characters are:
 * * SQL-92 standard: "double quotes"
 * * SQL Server: "double quotes" or \[square brackets\]
 * * mySQL: \`tick marks\`
 * @property {string} beg - The open quote character.
 * @property {string} end - The close quote character.
 */

/**
 * @constructor
 * @summary Structured Query Language (SQL) parser
 * @author Jonathan Eiten <jonathan@openfin.com>
 * @desc This is a subset of SQL conditional expression syntax.
 *
 * @see {@link https://msdn.microsoft.com/en-us/library/ms173545.aspx SQL Search Condition}
 *
 * @param {menuItem[]} [options.schema] - Column schema for column name validation. Throws an error if name fails validation (but see `resolveAliases`). Omit to skip column name validation.
 * @param {boolean} [options.resolveAliases] - Validate column aliases against schema and use the associated column name in the returned expression state object. Requires `options.schema`. Throws error if no such column found.
 * @param {boolean} [options.caseSensitiveColumnNames] - Ignore case while validating column names and aliases.
 * @param {sqlIdQtsObject} [options.sqlIdQts={beg:'"',end:'"'}]
 */
function ParserSQL(options) {
    options = options || {};

    this.schema = options.schema;

    var idQts = options.sqlIdQts || defaultIdQts;
    this.reName = new RegExp('^(' + idQts.beg + '(.+?)' + idQts.end + '|([A-Z_][A-Z_@\\$#]*)\\b)', 'i'); // match[2] || match[3]
}

ParserSQL.prototype = {

    constructor: ParserSQL.prototype.constructor,

    /**
     * @param {string} sql
     * @returns {*}
     * @memberOf module:sqlSearchCondition
     */
    parse: function(sql) {
        var state;

        // reduce all runs of white space to a single space; then trim
        sql = sql.replace(/\s\s+/g, ' ').trim();

        sql = stripLiterals.call(this, sql);
        state = walk.call(this, sql);

        if (!state.children) {
            state = { children: [ state ] };
        }

        return state;
    }
};

function walk(t) {
    var m, name, op, operand, bool, token, tokens = [];
    var i = 0;

    t = t.trim();

    while (i < t.length) {
        m = t.substr(i).match(reGroup);
        if (m) {
            var not = !!m[1];

            i += m[0].length;
            for (var j = i, v = 1; j < t.length && v; ++j) {
                if (t[j] === '(') {
                    ++v;
                } else if (t[j] === ')') {
                    --v;
                }
            }

            if (v) {
                throw new ParserSqlError('Expected ")"');
            }
            token = walk.call(this, t.substr(i, j - 1 - i));
            if (typeof token !== 'object') {
                return token;
            }

            if (not) {
                if (token.operator !== 'op-or') {
                    throw new ParserSqlError('Expected OR in NOT(...) subexpression but found ' + token.operator.substr(3).toUpperCase() + '.');
                }
                token.operator = 'op-nor';
            }

            i = j;
        } else {
            m = t.substr(i).match(this.reName);
            if (!m) {
                throw new ParserSqlError('Expected identifier or quoted identifier.');
            }
            name = m[2] || m[3];
            if (!/^[A-Z_]/i.test(t[i])) { i += 2; }
            i += name.length;

            if (t[i] === ' ') { ++i; }
            m = t.substr(i).match(reOp);
            if (!m) {
                throw new ParserSqlError('Expected relational operator.');
            }
            op = m[1].toUpperCase();
            i += op.length;

            if (t[i] === ' ') { ++i; }
            if (m[4] && m[4].toUpperCase() === 'IN') {
                m = t.substr(i).match(reIn);
                if (!m) {
                    throw new ParserSqlError('Expected parenthesized list.');
                }
                operand = m[1];
                i += operand.length + 2;
                while ((m = operand.match(reLitAnywhere))) {
                    operand = operand.replace(reLitAnywhere, this.literals[m[1]]);
                }
            } else {
                m = t.substr(i).match(reLit);
                if (!m) {
                    throw new ParserSqlError('Expected string literal.');
                }
                operand = m[1];
                i += operand.length + 2;
                operand = this.literals[operand];
            }

            if (this.schema) {
                var item = this.schema.lookup(name);
                if (item) {
                    name = item.name;
                } else {
                    throw new ParserSqlError(this.resolveAliases
                        ? 'Expected valid column name.'
                        : 'Expected valid column name or alias.'
                    );
                }
            }

            token = {
                column: name,
                operator: op,
                operand: operand
            };
        }

        tokens.push(token);

        if (i < t.length) {
            if (t[i] === ' ') { ++i; }
            m = t.substr(i).match(reBool);
            if (!m) {
                throw new ParserSqlError('Expected boolean opearator.');
            }
            bool = m[1].toLowerCase();
            i += bool.length;
            bool = 'op-' + bool;
            if (tokens.operator && tokens.operator !== bool) {
                throw new ParserSqlError('Expected same boolean operator throughout subexpression.');
            }
            tokens.operator = bool;
        }

        if (t[i] === ' ') { ++i; }
    }

    return (
        tokens.length === 1 ? tokens[0] : {
            operator: tokens.operator,
            children: tokens
        }
    );
}

function stripLiterals(t) {
    var i = 0, j = 0, k;

    this.literals = [];

    while ((j = t.indexOf(SQT, j)) >= 0) {
        k = j;
        do {
            k = t.indexOf(SQT, k + 1);
            if (k < 0) {
                throw new ParserSqlError('Expected ' + SQT + ' (single quote).');
            }
        } while (t[++k] === SQT);
        this.literals.push(t.slice(++j, --k).replace(/''/g, SQT));
        t = t.substr(0, j) + i + t.substr(k);
        j = j + 1 + (i + '').length + 1;
        i++;
    }

    return t;
}

module.exports = ParserSQL;

},{}],17:[function(require,module,exports){
'use strict';

var cssInjector = require('css-injector');

var css; // defined by code inserted by gulpfile between following comments
/* inject:css */
css = '.filter-tree{font-family:sans-serif;font-size:10pt;line-height:1.5em}.filter-tree label{font-weight:400}.filter-tree input[type=checkbox],.filter-tree input[type=radio]{margin-left:3px;margin-right:3px}.filter-tree ol{margin-top:0}.filter-tree>select{float:right;border:1px dotted grey;background-color:transparent;box-shadow:none}.filter-tree-remove-button{display:inline-block;width:15px;height:15px;border-radius:8px;background-color:#e88;font-size:11.5px;color:#fff;text-align:center;line-height:normal;font-style:normal;font-family:sans-serif;margin-right:4px;cursor:pointer}.filter-tree-remove-button:hover{background-color:transparent;color:#e88;font-weight:700;box-shadow:red 0 0 2px inset}.filter-tree-remove-button::before{content:\'\\d7\'}.filter-tree li::after{font-size:70%;font-style:italic;font-weight:700;color:#080}.filter-tree>ol>li:last-child::after{display:none}.op-and>ol,.op-nor>ol,.op-or>ol{padding-left:5px;margin-left:27px}.op-or>ol>li::after{margin-left:2.5em;content:\'— OR —\'}.op-and>ol>li::after{margin-left:2.5em;content:\'— AND —\'}.op-nor>ol>li::after{margin-left:2.5em;content:\'— NOR —\'}.filter-tree-editor>*{font-weight:700}.filter-tree-editor>span{font-size:smaller}.filter-tree-editor>input[type=text]{width:8em;padding:1px 5px 2px}.filter-tree-warning{background-color:#ffc!important;border-color:#edb!important;font-weight:400!important}.filter-tree-error{background-color:#fcc!important;border-color:#c99!important;font-weight:400!important}.filter-tree-default>:enabled{margin:0 .4em;background-color:#ddd;border:1px solid transparent}.filter-tree.filter-tree-type-column-filters>ol>li:not(:last-child){padding-bottom:.75em;border-bottom:3px double #080;margin-bottom:.75em}.filter-tree .footnotes{margin:0 0 6px;font-size:8pt;font-weight:400;line-height:normal;white-space:normal;color:#c00}.filter-tree .footnotes>p{margin:0}.filter-tree .footnotes>ul{margin:-3px 0 0;padding-left:17px;text-index:-6px}.filter-tree .footnotes>ul>li{margin:2px 0}.filter-tree .footnotes .field-name,.filter-tree .footnotes .field-value{font-weight:700;font-style:normal}.filter-tree .footnotes .field-value{font-family:monospace;color:#000;background-color:#ddd;padding:0 5px;margin:0 3px;border-radius:3px}';
/* endinject */

module.exports = cssInjector.bind(this, css, 'filter-tree-base');

},{"css-injector":6}],18:[function(require,module,exports){
'use strict';

/** @typedef {function} operationReducer
 * @param {boolean} p
 * @param {boolean} q
 * @returns {boolean} The result of applying the operator to the two parameters.
 */

/**
 * @private
 * @type {operationReducer}
 */
function AND(p, q) {
    return p && q;
}

/**
 * @private
 * @type {operationReducer}
 */
function OR(p, q) {
    return p || q;
}

/** @typedef {obejct} treeOperator
 * @desc Each `treeOperator` object describes two things:
 *
 * 1. How to take the test results of _n_ child nodes by applying the operator to all the results to "reduce" it down to a single result.
 * 2. How to generate SQL WHERE clause syntax that applies the operator to _n_ child nodes.
 *
 * @property {operationReducer} reduce
 * @property {boolean} seed -
 * @property {boolean} abort -
 * @property {boolean} negate -
 * @property {string} SQL.op -
 * @property {string} SQL.beg -
 * @property {string} SQL.end -
 */

/** A hash of {@link treeOperator} objects.
 * @type {object}
 */
var treeOperators = {
    'op-and': {
        reduce: AND,
        seed: true,
        abort: false,
        negate: false,
        SQL: {
            op: 'AND',
            beg: '(',
            end: ')'
        }
    },
    'op-or': {
        reduce: OR,
        seed: false,
        abort: true,
        negate: false,
        SQL: {
            op: 'OR',
            beg: '(',
            end: ')'
        }
    },
    'op-nor': {
        reduce: OR,
        seed: false,
        abort: true,
        negate: true,
        SQL: {
            op: 'OR',
            beg: 'NOT (',
            end: ')'
        }
    }
};

module.exports = treeOperators;

},{}],19:[function(require,module,exports){
'use strict';

/* eslint-env node, browser */

var cssInjector = require('css-injector');

/**
 * @constructor FinBar
 * @summary Create a scrollbar object.
 * @desc Creating a scrollbar is a three-step process:
 *
 * 1. Instantiate the scrollbar object by calling this constructor function. Upon instantiation, the DOM element for the scrollbar (with a single child element for the scrollbar "thumb") is created but is not insert it into the DOM.
 * 2. After instantiation, it is the caller's responsibility to insert the scrollbar, {@link FinBar#bar|this.bar}, into the DOM.
 * 3. After insertion, the caller must call {@link FinBar#resize|resize()} at least once to size and position the scrollbar and its thumb. After that, `resize()` should also be called repeatedly on resize events (as the content element is being resized).
 *
 * Suggested configurations:
 * * _**Unbound**_<br/>
 * The scrollbar serves merely as a simple range (slider) control. Omit both `options.onchange` and `options.content`.
 * * _**Bound to virtual content element**_<br/>
 * Virtual content is projected into the element using a custom event handler supplied by the programmer in `options.onchange`. A typical use case would be to handle scrolling of the virtual content. Other use cases include data transformations, graphics transformations, _etc._
 * * _**Bound to real content**_<br/>
 * Set `options.content` to the "real" content element but omit `options.onchange`. This will cause the scrollbar to use the built-in event handler (`this.scrollRealContent`) which implements smooth scrolling of the content element within the container.
 *
 * @param {finbarOptions} [options={}] - Options object. See the type definition for member details.
 */
function FinBar(options) {

    // make bound versions of all the mouse event handler
    var bound = this._bound = {};
    for (key in handlersToBeBound) {
        bound[key] = handlersToBeBound[key].bind(this);
    }

    /**
     * @name thumb
     * @summary The generated scrollbar thumb element.
     * @desc The thumb element's parent element is always the {@link FinBar#bar|bar} element.
     *
     * This property is typically referenced internally only. The size and position of the thumb element is maintained by `_calcThumb()`.
     * @type {Element}
     * @memberOf FinBar.prototype
     */
    var thumb = document.createElement('div');
    thumb.classList.add('thumb');
    thumb.onclick = bound.shortStop;
    thumb.onmouseover = bound.onmouseover;
    this.thumb = thumb;

    /**
     * @name bar
     * @summary The generated scrollbar element.
     * @desc The caller inserts this element into the DOM (typically into the content container) and then calls its {@link FinBar#resize|resize()} method.
     *
     * Thus the node tree is typically:
     * * A **content container** element, which contains:
     *    * The content element(s)
     *    * This **scrollbar element**, which in turn contains:
     *        * The **thumb element**
     *
     * @type {Element}
     * @memberOf FinBar.prototype
     */
    var bar = document.createElement('div');

    bar.classList.add('finbar-vertical');

    bar.appendChild(thumb);
    if (this.paging) {
        bar.onclick = bound.onclick;
    }
    this.bar = bar;

    options = options || {};

    // presets
    this.orientation = 'vertical';
    this._min = this._index = 0;
    this._max = 100;

    // options
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            var option = options[key];
            switch (key) {

            case 'index':
                this._index = option;
                break;

            case 'range':
                validRange(option);
                this._min = option.min;
                this._max = option.max;
                this.contentSize = option.max - option.min + 1;
                break;

            default:
                if (
                    key.charAt(0) !== '_' &&
                    typeof FinBar.prototype[key] !== 'function'
                ) {
                    // override prototype defaults for standard ;
                    // extend with additional properties (for use in onchange event handlers)
                    this[key] = option;
                }
                break;

            }
        }
    }

    cssInjector(cssFinBars, 'finbar-base', options.cssStylesheetReferenceElement);
}

FinBar.prototype = {

    /**
     * @summary The scrollbar orientation.
     * @desc Set by the constructor to either `'vertical'` or `'horizontal'`. See the similarly named property in the {@link finbarOptions} object.
     *
     * Useful values are `'vertical'` (the default) or `'horizontal'`.
     *
     * Setting this property resets `this.oh` and `this.deltaProp` and changes the class names so as to reposition the scrollbar as per the CSS rules for the new orientation.
     * @default 'vertical'
     * @type {string}
     * @memberOf FinBar.prototype
     */
    set orientation(orientation) {
        if (orientation === this._orientation) {
            return;
        }

        this._orientation = orientation;

        /**
         * @readonly
         * @name oh
         * @summary <u>O</u>rientation <u>h</u>ash for this scrollbar.
         * @desc Set by the `orientation` setter to either the vertical or the horizontal orientation hash. The property should always be synchronized with `orientation`; do not update directly!
         *
         * This object is used internally to access scrollbars' DOM element properties in a generalized way without needing to constantly query the scrollbar orientation. For example, instead of explicitly coding `this.bar.top` for a vertical scrollbar and `this.bar.left` for a horizontal scrollbar, simply code `this.bar[this.oh.leading]` instead. See the {@link orientationHashType} definition for details.
         *
         * This object is useful externally for coding generalized {@link finbarOnChange} event handler functions that serve both horizontal and vertical scrollbars.
         * @type {orientationHashType}
         * @memberOf FinBar.prototype
         */
        this.oh = orientationHashes[this._orientation];

        if (!this.oh) {
            error('Invalid value for `options._orientation.');
        }

        /**
         * @name deltaProp
         * @summary The name of the `WheelEvent` property this scrollbar should listen to.
         * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
         *
         * Useful values are `'deltaX'`, `'deltaY'`, or `'deltaZ'`. A value of `null` means to ignore mouse wheel events entirely.
         *
         * The mouse wheel is one-dimensional and only emits events with `deltaY` data. This property is provided so that you can override the default of `'deltaX'` with a value of `'deltaY'` on your horizontal scrollbar primarily to accommodate certain "panoramic" interface designs where the mouse wheel should control horizontal rather than vertical scrolling. Just give `{ deltaProp: 'deltaY' }` in your horizontal scrollbar instantiation.
         *
         * Caveat: Note that a 2-finger drag on an Apple trackpad emits events with _both_ `deltaX ` and `deltaY` data so you might want to delay making the above adjustment until you can determine that you are getting Y data only with no X data at all (which is a sure bet you on a mouse wheel rather than a trackpad).

         * @type {object|null}
         * @memberOf FinBar.prototype
         */
        this.deltaProp = this.oh.delta;

        this.bar.className = this.bar.className.replace(/(vertical|horizontal)/g, orientation);

        if (this.bar.style.cssText || this.thumb.style.cssText) {
            this.bar.removeAttribute('style');
            this.thumb.removeAttribute('style');
            this.resize();
        }
    },
    get orientation() {
        return this._orientation;
    },

    /**
     * @summary Callback for scroll events.
     * @desc Set by the constructor via the similarly named property in the {@link finbarOptions} object. After instantiation, `this.onchange` may be updated directly.
     *
     * This event handler is called whenever the value of the scrollbar is changed through user interaction. The typical use case is when the content is scrolled. It is called with the `FinBar` object as its context and the current value of the scrollbar (its index, rounded) as the only parameter.
     *
     * Set this property to `null` to stop emitting such events.
     * @type {function(number)|null}
     * @memberOf FinBar.prototype
     */
    onchange: null,

    /**
     * @summary Add a CSS class name to the bar element's class list.
     * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
     *
     * The bar element's class list will always include `finbar-vertical` (or `finbar-horizontal` based on the current orientation). Whenever this property is set to some value, first the old prefix+orientation is removed from the bar element's class list; then the new prefix+orientation is added to the bar element's class list. This property causes _an additional_ class name to be added to the bar element's class list. Therefore, this property will only add at most one additional class name to the list.
     *
     * To remove _classname-orientation_ from the bar element's class list, set this property to a falsy value, such as `null`.
     *
     * > NOTE: You only need to specify an additional class name when you need to have mulltiple different styles of scrollbars on the same page. If this is not a requirement, then you don't need to make a new class; you would just create some additional rules using the same selectors in the built-in stylesheet (../css/finbars.css):
     * *`div.finbar-vertical` (or `div.finbar-horizontal`) for the scrollbar
     * *`div.finbar-vertical > div` (or `div.finbar-horizontal > div`) for the "thumb."
     *
     * Of course, your rules should come after the built-ins.
     * @type {string}
     * @memberOf FinBar.prototype
     */
    set classPrefix(prefix) {
        if (this._classPrefix) {
            this.bar.classList.remove(this._classPrefix + this.orientation);
        }

        this._classPrefix = prefix;

        if (prefix) {
            this.bar.classList.add(prefix + '-' + this.orientation);
        }
    },
    get classPrefix() {
        return this._classPrefix;
    },

    /**
     * @name increment
     * @summary Number of scrollbar index units representing a pageful. Used exclusively for paging up and down and for setting thumb size relative to content size.
     * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
     *
     * Can also be given as a parameter to the {@link FinBar#resize|resize} method, which is pertinent because content area size changes affect the definition of a "pageful." However, you only need to do this if this value is being used. It not used when:
     * * you define `paging.up` and `paging.down`
     * * your scrollbar is using `scrollRealContent`
     * @type {number}
     * @memberOf FinBar.prototype
     */
    increment: 1,

    /**
     * @name barStyles
     * @summary Scrollbar styles to be applied by {@link FinBar#resize|resize()}.
     * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
     *
     * This is a value to be assigned to {@link FinBar#styles|styles} on each call to {@link FinBar#resize|resize()}. That is, a hash of values to be copied to the scrollbar element's style object on resize; or `null` for none.
     *
     * @see {@link FinBar#style|style}
     * @type {finbarStyles|null}
     * @memberOf FinBar.prototype
     */
    barStyles: null,

    /**
     * @name style
     * @summary Additional scrollbar styles.
     * @desc See type definition for more details. These styles are applied directly to the scrollbar's `bar` element.
     *
     * Values are adjusted as follows before being applied to the element:
     * 1. Included "pseudo-property" names from the scrollbar's orientation hash, {@link FinBar#oh|oh}, are translated to actual property names before being applied.
     * 2. When there are margins, percentages are translated to absolute pixel values because CSS ignores margins in its percentage calculations.
     * 3. If you give a value without a unit (a raw number), "px" unit is appended.
     *
     * General notes:
     * 1. It is always preferable to specify styles via a stylesheet. Only set this property when you need to specifically override (a) stylesheet value(s).
     * 2. Can be set directly or via calls to the {@link FinBar#resize|resize} method.
     * 3. Should only be set after the scrollbar has been inserted into the DOM.
     * 4. Before applying these new values to the element, _all_ in-line style values are reset (by removing the element's `style` attribute), exposing inherited values (from stylesheets).
     * 5. Empty object has no effect.
     * 6. Falsey value in place of object has no effect.
     *
     * > CAVEAT: Do not attempt to treat the object you assign to this property as if it were `this.bar.style`. Specifically, changing this object after assigning it will have no effect on the scrollbar. You must assign it again if you want it to have an effect.
     *
     * @see {@link FinBar#barStyles|barStyles}
     * @type {finbarStyles}
     * @memberOf FinBar.prototype
     */
    set style(styles) {
        var keys = Object.keys(styles = extend({}, styles, this._auxStyles));

        if (keys.length) {
            var bar = this.bar,
                barRect = bar.getBoundingClientRect(),
                container = this.container || bar.parentElement,
                containerRect = container.getBoundingClientRect(),
                oh = this.oh;

            // Before applying new styles, revert all styles to values inherited from stylesheets
            bar.removeAttribute('style');

            keys.forEach(function (key) {
                var val = styles[key];

                if (key in oh) {
                    key = oh[key];
                }

                if (!isNaN(Number(val))) {
                    val = (val || 0) + 'px';
                } else if (/%$/.test(val)) {
                    // When bar size given as percentage of container, if bar has margins, restate size in pixels less margins.
                    // (If left as percentage, CSS's calculation will not exclude margins.)
                    var oriented = axis[key],
                        margins = barRect[oriented.marginLeading] + barRect[oriented.marginTrailing];
                    if (margins) {
                        val = parseInt(val, 10) / 100 * containerRect[oriented.size] - margins + 'px';
                    }
                }

                bar.style[key] = val;
            });
        }
    },

    /**
     * @readonly
     * @name paging
     * @summary Enable page up/dn clicks.
     * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
     *
     * If truthy, listen for clicks in page-up and page-down regions of scrollbar.
     *
     * If an object, call `.paging.up()` on page-up clicks and `.paging.down()` will be called on page-down clicks.
     *
     * Changing the truthiness of this value after instantiation currently has no effect.
     * @type {boolean|object}
     * @memberOf FinBar.prototype
     */
    paging: true,

    /**
     * @name range
     * @summary Setter for the minimum and maximum scroll values.
     * @desc Set by the constructor. These values are the limits for {@link FooBar#index|index}.
     *
     * The setter accepts an object with exactly two numeric properties: `.min` which must be less than `.max`. The values are extracted and the object is discarded.
     *
     * The getter returns a new object with `.min` and '.max`.
     *
     * @type {rangeType}
     * @memberOf FinBar.prototype
     */
    set range(range) {
        validRange(range);
        this._min = range.min;
        this._max = range.max;
        this.contentSize = range.max - range.min + 1;
        this.index = this.index; // re-clamp
    },
    get range() {
        return {
            min: this._min,
            max: this._max
        };
    },

    /**
     * @summary Index value of the scrollbar.
     * @desc This is the position of the scroll thumb.
     *
     * Setting this value clamps it to {@link FinBar#min|min}..{@link FinBar#max|max}, scroll the content, and moves thumb.
     *
     * Getting this value returns the current index. The returned value will be in the range `min`..`max`. It is intentionally not rounded.
     *
     * Use this value as an alternative to (or in addition to) using the {@link FinBar#onchange|onchange} callback function.
     *
     * @see {@link FinBar#_setScroll|_setScroll}
     * @type {number}
     * @memberOf FinBar.prototype
     */
    set index(idx) {
        idx = Math.min(this._max, Math.max(this._min, idx)); // clamp it
        this._setScroll(idx);
        // this._setThumbSize();
    },
    get index() {
        return this._index;
    },

    /**
     * @private
     * @summary Move the thumb.
     * @desc Also displays the index value in the test panel and invokes the callback.
     * @param idx - The new scroll index, a value in the range `min`..`max`.
     * @param [scaled=f(idx)] - The new thumb position in pixels and scaled relative to the containing {@link FinBar#bar|bar} element, i.e., a proportional number in the range `0`..`thumbMax`. When omitted, a function of `idx` is used.
     * @memberOf FinBar.prototype
     */
    _setScroll: function (idx, scaled) {
        this._index = idx;

        // Display the index value in the test panel
        if (this.testPanelItem && this.testPanelItem.index instanceof Element) {
            this.testPanelItem.index.innerHTML = Math.round(idx);
        }

        // Call the callback
        if (this.onchange) {
            this.onchange.call(this, Math.round(idx));
        }

        // Move the thumb
        if (scaled === undefined) {
            scaled = (idx - this._min) / (this._max - this._min) * this._thumbMax;
        }
        this.thumb.style[this.oh.leading] = scaled + 'px';
    },

    scrollRealContent: function (idx) {
        var containerRect = this.content.parentElement.getBoundingClientRect(),
            sizeProp = this.oh.size,
            maxScroll = Math.max(0, this.content[sizeProp] - containerRect[sizeProp]),
            //scroll = Math.min(idx, maxScroll);
            scroll = (idx - this._min) / (this._max - this._min) * maxScroll;
        //console.log('scroll: ' + scroll);
        this.content.style[this.oh.leading] = -scroll + 'px';
    },

    /**
     * @summary Recalculate thumb position.
     *
     * @desc This method recalculates the thumb size and position. Call it once after inserting your scrollbar into the DOM, and repeatedly while resizing the scrollbar (which typically happens when the scrollbar's parent is resized by user.
     *
     * > This function shifts args if first arg omitted.
     *
     * @param {number} [increment=this.increment] - Resets {@link FooBar#increment|increment} (see).
     *
     * @param {finbarStyles} [barStyles=this.barStyles] - (See type definition for details.) Scrollbar styles to be applied to the bar element.
     *
     * Only specify a `barStyles` object when you need to override stylesheet values. If provided, becomes the new default (`this.barStyles`), for use as a default on subsequent calls.
     *
     * It is generally the case that the scrollbar's new position is sufficiently described by the current styles. Therefore, it is unusual to need to provide a `barStyles` object on every call to `resize`.
     *
     * @returns {FinBar} Self for chaining.
     * @memberOf FinBar.prototype
     */
    resize: function (increment, barStyles) {
        var bar = this.bar;

        if (!bar.parentNode) {
            return; // not in DOM yet so nothing to do
        }

        var container = this.container || bar.parentElement,
            containerRect = container.getBoundingClientRect();

        // shift args if if 1st arg omitted
        if (typeof increment === 'object') {
            barStyles = increment;
            increment = undefined;
        }

        this.style = this.barStyles = barStyles || this.barStyles;

        // Bound to real content: Content was given but no onchange handler.
        // Set up .onchange, .containerSize, and .increment.
        // Note this only makes sense if your index unit is pixels.
        if (this.content) {
            if (!this.onchange) {
                this.onchange = this.scrollRealContent;
                this.contentSize = this.content[this.oh.size];
                this._min = 0;
                this._max = this.contentSize - 1;
            }
        }
        if (this.onchange === this.scrollRealContent) {
            this.containerSize = containerRect[this.oh.size];
            this.increment = this.containerSize / (this.contentSize - this.containerSize) * (this._max - this._min);
        } else {
            this.containerSize = 1;
            this.increment = increment || this.increment;
        }

        var index = this.index;
        this.testPanelItem = this.testPanelItem || this._addTestPanelItem();
        this._setThumbSize();
        this.index = index;

        if (this.deltaProp !== null) {
            container.addEventListener('wheel', this._bound.onwheel);
        }

        return this;
    },

    /**
     * @summary Shorten trailing end of scrollbar by thickness of some other scrollbar.
     * @desc In the "classical" scenario where vertical scroll bar is on the right and horizontal scrollbar is on the bottom, you want to shorten the "trailing end" (bottom and right ends, respectively) of at least one of them so they don't overlay.
     *
     * This convenience function is an programmatic alternative to hardcoding the correct style with the correct value in your stylesheet; or setting the correct style with the correct value in the {@link FinBar#barStyles|barStyles} object.
     *
     * @see {@link FinBar#foreshortenBy|foreshortenBy}.
     *
     * @param {FinBar|null} otherFinBar - Other scrollbar to avoid by shortening this one; `null` removes the trailing space
     * @returns {FinBar} For chaining
     */
    shortenBy: function (otherFinBar) { return this.shortenEndBy('trailing', otherFinBar); },

    /**
     * @summary Shorten leading end of scrollbar by thickness of some other scrollbar.
     * @desc Supports non-classical scrollbar scenarios where vertical scroll bar may be on left and horizontal scrollbar may be on top, in which case you want to shorten the "leading end" rather than the trailing end.
     * @see {@link FinBar#shortenBy|shortenBy}.
     * @param {FinBar|null} otherFinBar - Other scrollbar to avoid by shortening this one; `null` removes the trailing space
     * @returns {FinBar} For chaining
     */
    foreshortenBy: function (otherFinBar) { return this.shortenEndBy('leading', otherFinBar); },

    /**
     * @summary Generalized shortening function.
     * @see {@link FinBar#shortenBy|shortenBy}.
     * @see {@link FinBar#foreshortenBy|foreshortenBy}.
     * @param {string} whichEnd - a CSS style property name or an orientation hash name that translates to a CSS style property name.
     * @param {FinBar|null} otherFinBar - Other scrollbar to avoid by shortening this one; `null` removes the trailing space
     * @returns {FinBar} For chaining
     */
    shortenEndBy: function (whichEnd, otherFinBar) {
        if (!otherFinBar) {
            delete this._auxStyles;
        } else if (otherFinBar instanceof FinBar && otherFinBar.orientation !== this.orientation) {
            var otherStyle = window.getComputedStyle(otherFinBar.bar),
                ooh = orientationHashes[otherFinBar.orientation];
            this._auxStyles = {};
            this._auxStyles[whichEnd] = otherStyle[ooh.thickness];
        }
        return this; // for chaining
    },

    /**
     * @private
     * @summary Sets the proportional thumb size and hides thumb when 100%.
     * @desc The thumb size has an absolute minimum of 20 (pixels).
     * @memberOf FinBar.prototype
     */
    _setThumbSize: function () {
        var oh = this.oh,
            thumbComp = window.getComputedStyle(this.thumb),
            thumbMarginLeading = parseInt(thumbComp[oh.marginLeading]),
            thumbMarginTrailing = parseInt(thumbComp[oh.marginTrailing]),
            thumbMargins = thumbMarginLeading + thumbMarginTrailing,
            barSize = this.bar.getBoundingClientRect()[oh.size],
            thumbSize = Math.max(20, barSize * this.containerSize / this.contentSize);

        if (this.containerSize < this.contentSize) {
            this.bar.style.visibility = 'visible';
            this.thumb.style[oh.size] = thumbSize + 'px';
        } else {
            this.bar.style.visibility = 'hidden';
        }

        /**
         * @private
         * @name _thumbMax
         * @summary Maximum offset of thumb's leading edge.
         * @desc This is the pixel offset within the scrollbar of the thumb when it is at its maximum position at the extreme end of its range.
         *
         * This value takes into account the newly calculated size of the thumb element (including its margins) and the inner size of the scrollbar (the thumb's containing element, including _its_ margins).
         *
         * NOTE: Scrollbar padding is not taken into account and assumed to be 0 in the current implementation and is assumed to be `0`; use thumb margins in place of scrollbar padding.
         * @type {number}
         * @memberOf FinBar.prototype
         */
        this._thumbMax = barSize - thumbSize - thumbMargins;

        this._thumbMarginLeading = thumbMarginLeading; // used in mousedown
    },

    /**
     * @summary Remove the scrollbar.
     * @desc Unhooks all the event handlers and then removes the element from the DOM. Always call this method prior to disposing of the scrollbar object.
     * @memberOf FinBar.prototype
     */
    remove: function () {
        this._removeEvt('mousedown');
        this._removeEvt('mousemove');
        this._removeEvt('mouseup');

        (this.container || this.bar.parentElement)._removeEvt('wheel', this._bound.onwheel);

        this.bar.onclick =
            this.thumb.onclick =
                this.thumb.onmouseover =
                    this.thumb.transitionend =
                        this.thumb.onmouseout = null;

        this.bar.remove();
    },

    /**
     * @private
     * @function _addTestPanelItem
     * @summary Append a test panel element.
     * @desc If there is a test panel in the DOM (typically an `<ol>...</ol>` element) with class names of both `this.classPrefix` and `'test-panel'` (or, barring that, any element with class name `'test-panel'`), an `<li>...</li>` element will be created and appended to it. This new element will contain a span for each class name given.
     *
     * You should define a CSS selector `.listening` for these spans. This class will be added to the spans to alter their appearance when a listener is added with that class name (prefixed with 'on').
     *
     * (This is an internal function that is called once by the constructor on every instantiation.)
     * @returns {Element|undefined} The appended `<li>...</li>` element or `undefined` if there is no test panel.
     * @memberOf FinBar.prototype
     */
    _addTestPanelItem: function () {
        var testPanelItem,
            testPanelElement = document.querySelector('.' + this._classPrefix + '.test-panel') || document.querySelector('.test-panel');

        if (testPanelElement) {
            var testPanelItemPartNames = [ 'mousedown', 'mousemove', 'mouseup', 'index' ],
                item = document.createElement('li');

            testPanelItemPartNames.forEach(function (partName) {
                item.innerHTML += '<span class="' + partName + '">' + partName.replace('mouse', '') + '</span>';
            });

            testPanelElement.appendChild(item);

            testPanelItem = {};
            testPanelItemPartNames.forEach(function (partName) {
                testPanelItem[partName] = item.getElementsByClassName(partName)[0];
            });
        }

        return testPanelItem;
    },

    _addEvt: function (evtName) {
        var spy = this.testPanelItem && this.testPanelItem[evtName];
        if (spy) { spy.classList.add('listening'); }
        window.addEventListener(evtName, this._bound['on' + evtName]);
    },

    _removeEvt: function (evtName) {
        var spy = this.testPanelItem && this.testPanelItem[evtName];
        if (spy) { spy.classList.remove('listening'); }
        window.removeEventListener(evtName, this._bound['on' + evtName]);
    }
};

function extend(obj) {
    for (var i = 1; i < arguments.length; ++i) {
        var objn = arguments[i];
        if (objn) {
            for (var key in objn) {
                obj[key] = objn[key];
            }
        }
    }
    return obj;
}

function validRange(range) {
    var keys = Object.keys(range),
        valid =  keys.length === 2 &&
            typeof range.min === 'number' &&
            typeof range.max === 'number' &&
            range.min <= range.max;

    if (!valid) {
        error('Invalid .range object.');
    }
}

/**
 * @private
 * @name handlersToBeBound
 * @type {object}
 * @desc The functions defined in this object are all DOM event handlers that are bound by the FinBar constructor to each new instance. In other words, the `this` value of these handlers, once bound, refer to the FinBar object and not to the event emitter. "Do not consume raw."
 */
var handlersToBeBound = {
    shortStop: function (evt) {
        evt.stopPropagation();
    },

    onwheel: function (evt) {
        this.index += evt[this.deltaProp];
        evt.stopPropagation();
        evt.preventDefault();
    },

    onclick: function (evt) {
        var thumbBox = this.thumb.getBoundingClientRect(),
            goingUp = evt[this.oh.coordinate] < thumbBox[this.oh.leading];

        if (typeof this.paging === 'object') {
            this.index = this.paging[goingUp ? 'up' : 'down'](Math.round(this.index));
        } else {
            this.index += goingUp ? -this.increment : this.increment;
        }

        // make the thumb glow momentarily
        this.thumb.classList.add('hover');
        var self = this;
        this.thumb.addEventListener('transitionend', function waitForIt() {
            this.removeEventListener('transitionend', waitForIt);
            self._bound.onmouseup(evt);
        });

        evt.stopPropagation();
    },

    onmouseover: function () {
        this.thumb.classList.add('hover');
        this.thumb.onmouseout = this._bound.onmouseout;
        this._addEvt('mousedown');
    },

    onmouseout: function () {
        this._removeEvt('mousedown');
        this.thumb.onmouseover = this._bound.onmouseover;
        this.thumb.classList.remove('hover');
    },

    onmousedown: function (evt) {
        this._removeEvt('mousedown');
        this.thumb.onmouseover = this.thumb.onmouseout = null;

        var thumbBox = this.thumb.getBoundingClientRect();
        this.pinOffset = evt[this.oh.axis] - thumbBox[this.oh.leading] + this.bar.getBoundingClientRect()[this.oh.leading] + this._thumbMarginLeading;
        document.documentElement.style.cursor = 'default';

        this._addEvt('mousemove');
        this._addEvt('mouseup');

        evt.stopPropagation();
        evt.preventDefault();
    },

    onmousemove: function (evt) {
        var scaled = Math.min(this._thumbMax, Math.max(0, evt[this.oh.axis] - this.pinOffset));
        var idx = scaled / this._thumbMax * (this._max - this._min) + this._min;

        this._setScroll(idx, scaled);

        evt.stopPropagation();
        evt.preventDefault();
    },

    onmouseup: function (evt) {
        this._removeEvt('mousemove');
        this._removeEvt('mouseup');

        document.documentElement.style.cursor = 'auto';

        var thumbBox = this.thumb.getBoundingClientRect();
        if (
            thumbBox.left <= evt.clientX && evt.clientX <= thumbBox.right &&
            thumbBox.top <= evt.clientY && evt.clientY <= thumbBox.bottom
        ) {
            this._bound.onmouseover(evt);
        } else {
            this._bound.onmouseout(evt);
        }

        evt.stopPropagation();
        evt.preventDefault();
    }
};

var orientationHashes = {
    vertical: {
        coordinate:     'clientY',
        axis:           'pageY',
        size:           'height',
        outside:        'right',
        inside:         'left',
        leading:        'top',
        trailing:       'bottom',
        marginLeading:  'marginTop',
        marginTrailing: 'marginBottom',
        thickness:      'width',
        delta:          'deltaY'
    },
    horizontal: {
        coordinate:     'clientX',
        axis:           'pageX',
        size:           'width',
        outside:        'bottom',
        inside:         'top',
        leading:        'left',
        trailing:       'right',
        marginLeading:  'marginLeft',
        marginTrailing: 'marginRight',
        thickness:      'height',
        delta:          'deltaX'
    }
};

var axis = {
    top:    'vertical',
    bottom: 'vertical',
    height: 'vertical',
    left:   'horizontal',
    right:  'horizontal',
    width:  'horizontal'
};

var cssFinBars; // definition inserted by gulpfile between following comments
/* inject:css */
cssFinBars = 'div.finbar-horizontal,div.finbar-vertical{position:absolute;margin:3px}div.finbar-horizontal>.thumb,div.finbar-vertical>.thumb{position:absolute;background-color:#d3d3d3;-webkit-box-shadow:0 0 1px #000;-moz-box-shadow:0 0 1px #000;box-shadow:0 0 1px #000;border-radius:4px;margin:2px;opacity:.4;transition:opacity .5s}div.finbar-horizontal>.thumb.hover,div.finbar-vertical>.thumb.hover{opacity:1;transition:opacity .5s}div.finbar-vertical{top:0;bottom:0;right:0;width:11px}div.finbar-vertical>.thumb{top:0;right:0;width:7px}div.finbar-horizontal{left:0;right:0;bottom:0;height:11px}div.finbar-horizontal>.thumb{left:0;bottom:0;height:7px}';
/* endinject */

function error(msg) {
    throw 'finbars: ' + msg;
}

// Interface
module.exports = FinBar;

},{"css-injector":6}],20:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var rectangular = require('rectangular');

var GraphicsContext = require('./js/GraphicsContext.js');

var RESIZE_POLLING_INTERVAL = 200,
    paintables = [],
    resizables = [],
    paintLoopRunning = true,
    resizeLoopRunning = true,
    charMap = makeCharMap();

function Canvas(div, component, options) {
    var self = this;

    this.div = div;
    this.component = component;

    options = options || {};
    this.doubleClickDelay = options.doubleClickDelay || 325;

    this.dragEndtime = Date.now();

    this.canvas = document.createElement('canvas');
    this.div.appendChild(this.canvas);

    this.canvas.style.outline = 'none';

    // this.focuser = document.createElement('button');
    // this.focuser.style.position = 'absolute';
    // this.focuser.style.top = '0px';
    // this.focuser.style.left = '0px';
    // this.focuser.style.zIndex = '-1';
    // this.focuser.style.outline = 'none';
    // this.div.appendChild(this.focuser);

    this.canvasCTX = this.canvas.getContext('2d');
    this.gc = new GraphicsContext(this.canvasCTX);

    this.buffer = document.createElement('canvas');
    this.bufferCTX = this.buffer.getContext('2d');
    this.bufferGC = new GraphicsContext(this.bufferCTX);

    this.mouseLocation = new rectangular.Point(-1, -1);
    this.dragstart = new rectangular.Point(-1, -1);
    //this.origin = new rectangular.Point(0, 0);
    this.bounds = new rectangular.Rectangle(0, 0, 0, 0);
    this.hasMouse = false;

    document.addEventListener('mousemove', function(e) {
        if (self.hasMouse || self.isDragging()) {
            self.finmousemove(e);
        }
    });
    document.addEventListener('mouseup', function(e) {
        self.finmouseup(e);
    });
    document.addEventListener('wheel', function(e) {
        self.finwheelmoved(e);
    });
    document.addEventListener('keydown', function(e) {
        self.finkeydown(e);
    });
    document.addEventListener('keyup', function(e) {
        self.finkeyup(e);
    });

    this.canvas.onmouseover = function() {
        self.hasMouse = true;
    };
    this.canvas.addEventListener('focus', function(e) {
        self.finfocusgained(e);
    });
    this.canvas.addEventListener('blur', function(e) {
        self.finfocuslost(e);
    });
    this.canvas.addEventListener('mousedown', function(e) {
        self.finmousedown(e);
    });
    this.canvas.addEventListener('mouseout', function(e) {
        self.hasMouse = false;
        self.finmouseout(e);
    });
    this.canvas.addEventListener('click', function(e) {
        self.finclick(e);
    });
    this.canvas.addEventListener('contextmenu', function(e) {
        self.fincontextmenu(e);
        e.preventDefault();
        return false;
    });

    this.canvas.setAttribute('tabindex', 0);
    this.canvas.contentEditable = true;

    this.resize();

    this.beginResizing();
    this.beginPainting();
}

Canvas.prototype = {
    constructor: Canvas.prototype.constructor,
    div: null,
    component: null,
    canvas: null,
    canvasCTX: null,
    focuser: null,
    buffer: null,
    ctx: null,
    mouseLocation: null,
    dragstart: null,
    origin: null,
    bounds: null,
    dirty: false,
    size: null,
    mousedown: false,
    dragging: false,
    repeatKeyCount: 0,
    repeatKey: null,
    repeatKeyStartTime: 0,
    currentKeys: [],
    hasMouse: false,
    lastDoubleClickTime: 0,
    dragEndTime: 0,
    lastRepaintTime: 0,

    addEventListener: function(name, callback) {
        this.canvas.addEventListener(name, callback);
    },

    stopPaintLoop: function() {
        paintLoopRunning = false;
    },

    restartPaintLoop: function() {
        if (paintLoopRunning) {
            return; // already running
        }
        paintLoopRunning = true;
        requestAnimationFrame(paintLoopFunction);
    },

    stopResizeLoop: function() {
        resizeLoopRunning = false;
    },

    restartResizeLoop: function() {
        if (resizeLoopRunning) {
            return; // already running
        }
        resizeLoopRunning = true;
        setInterval(resizablesLoopFunction, 200);
    },

    detached: function() {
        this.stopPainting();
        this.stopResizing();
    },

    useHiDPI: function() {
        return this.component.resolveProperty('useHiDPI');
    },

    useBitBlit: function() {
        return this.component.resolveProperty('useBitBlit');
    },

    getFPS: function() {
        var fps = this.component.resolveProperty('repaintIntervalRate');
        return fps ? parseInt(fps) : 0;
    },

    tickPaint: function(now) {
        var fps = this.getFPS();
        if (fps === 0) {
            return;
        }
        var interval = 1000 / fps;

        var elapsed = now - this.lastRepaintTime;
        if (elapsed > interval && this.dirty) {
            this.lastRepaintTime = now - (elapsed % interval);
            this.paintNow();
        }
    },

    beginPainting: function() {
        var self = this;
        this.dirty = true;
        this.tickPainter = function(now) {
            self.tickPaint(now);
        };
        paintables.push(this);
    },

    stopPainting: function() {
        paintables.splice(paintables.indexOf(this), 1);
    },

    beginResizing: function() {
        var self = this;
        this.tickResizer = function() {
            self.checksize();
        };
        resizables.push(this);
    },

    stopResizing: function() {
        resizables.splice(resizables.indexOf(this), 1);
    },

    start: function() {
        this.beginPainting();
        this.beginResizing();
    },

    stop: function() {
        this.stopPainting();
        this.stopResizing();
    },

    checksize: function() {
        //this is expensive lets do it at some modulo
        var sizeNow = this.div.getBoundingClientRect();
        if (sizeNow.width !== this.size.width || sizeNow.height !== this.size.height) {
            this.sizeChangedNotification();
        }
    },

    sizeChangedNotification: function() {
        this.resize();
    },

    resize: function() {
        var box = this.size = this.div.getBoundingClientRect();

        this.width = box.width;
        this.height = box.height;

        //fix ala sir spinka, see
        //http://www.html5rocks.com/en/tutorials/canvas/hidpi/
        //just add 'hdpi' as an attribute to the fin-canvas tag
        var ratio = 1;
        var useBitBlit = this.useBitBlit();
        var isHIDPI = window.devicePixelRatio && this.useHiDPI();
        if (isHIDPI) {
            var devicePixelRatio = window.devicePixelRatio || 1;
            var backingStoreRatio = this.canvasCTX.webkitBackingStorePixelRatio ||
                this.canvasCTX.mozBackingStorePixelRatio ||
                this.canvasCTX.msBackingStorePixelRatio ||
                this.canvasCTX.oBackingStorePixelRatio ||
                this.canvasCTX.backingStorePixelRatio || 1;

            ratio = devicePixelRatio / backingStoreRatio;
            //this.canvasCTX.scale(ratio, ratio);
        }

        this.buffer.width = this.canvas.width = this.width * ratio;
        this.buffer.height = this.canvas.height = this.height * ratio;

        this.canvas.style.width = this.buffer.style.width = this.width + 'px';
        this.canvas.style.height = this.buffer.style.height = this.height + 'px';

        this.bufferCTX.scale(ratio, ratio);
        if (isHIDPI && !useBitBlit) {
            this.canvasCTX.scale(ratio, ratio);
        }

        //this.origin = new rectangular.Point(Math.round(this.size.left), Math.round(this.size.top));
        this.bounds = new rectangular.Rectangle(0, 0, this.width, this.height);
        //setTimeout(function() {
        var comp = this.component;
        if (comp) {
            comp.setBounds(this.bounds);
        }
        this.resizeNotification();
        this.paintNow();
        //});
    },

    resizeNotification: function() {
        //to be overridden
    },

    getBounds: function() {
        return this.bounds;
    },

    paintNow: function() {
        var self = this;
        this.safePaintImmediately(function(gc) {
            gc.clearRect(0, 0, self.width, self.height);

            var comp = self.component;
            if (comp) {
                comp.paint(gc);
            }

            self.dirty = false;
        });
    },

    safePaintImmediately: function(paintFunction) {
        var useBitBlit = this.useBitBlit(),
            gc = useBitBlit ? this.bufferGC : this.gc;
        try {
            gc.save();
            paintFunction(gc);
        } catch (e) {
            console.error(e);
        } finally {
            gc.restore();
        }
        if (useBitBlit) {
            this.flushBuffer();
        }
    },

    flushBuffer: function() {
        if (this.buffer.width > 0 && this.buffer.height > 0) {
            this.canvasCTX.drawImage(this.buffer, 0, 0);
        }
    },

    dispatchNewEvent: function(event, name, detail) {
        detail = {
            detail: detail || {}
        };
        detail.detail.primitiveEvent = event;
        return this.canvas.dispatchEvent(new CustomEvent(name, detail));
    },

    dispatchNewMouseKeysEvent: function(event, name, detail) {
        detail = detail || {};
        detail.mouse = this.mouseLocation;
        detail.keys = this.currentKeys;
        return this.dispatchNewEvent(event, name, detail);
    },

    finmousemove: function(e) {
        if (!this.isDragging() && this.mousedown) {
            this.beDragging();
            this.dispatchNewMouseKeysEvent(e, 'fin-canvas-dragstart', {
                isRightClick: this.isRightClick(e)
            });
            this.dragstart = new rectangular.Point(this.mouseLocation.x, this.mouseLocation.y);
        }
        this.mouseLocation = this.getLocal(e);
        //console.log(this.mouseLocation);
        if (this.isDragging()) {
            this.dispatchNewMouseKeysEvent(e, 'fin-canvas-drag', {
                dragstart: this.dragstart,
                isRightClick: this.isRightClick(e)
            });
        }
        if (this.bounds.contains(this.mouseLocation)) {
            this.dispatchNewMouseKeysEvent(e, 'fin-canvas-mousemove');
        }
    },

    finmousedown: function(e) {
        this.mouseLocation = this.mouseDownLocation = this.getLocal(e);
        this.mousedown = true;

        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-mousedown', {
            isRightClick: this.isRightClick(e)
        });
        this.takeFocus();
    },

    finmouseup: function(e) {
        if (this.isDragging()) {
            this.dispatchNewMouseKeysEvent(e, 'fin-canvas-dragend', {
                dragstart: this.dragstart,
                isRightClick: this.isRightClick(e)
            });
            this.beNotDragging();
            this.dragEndtime = Date.now();
        }
        this.mousedown = false;
        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-mouseup', {
            isRightClick: this.isRightClick(e)
        });
        //this.mouseLocation = new rectangular.Point(-1, -1);
    },

    finmouseout: function(e) {
        if (!this.mousedown) {
            this.mouseLocation = new rectangular.Point(-1, -1);
        }
        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-mouseout');
    },

    finwheelmoved: function(e) {
        if (this.isDragging() || !this.hasFocus()) {
            return;
        }
        e.preventDefault();
        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-wheelmoved', {
            isRightClick: this.isRightClick(e)
        });
    },

    finclick: function(e) {
        if (this.doubleClickTimer && Date.now() - this.lastClickTime < this.doubleClickDelay) {
            //this is a double click...
            clearTimeout(this.doubleClickTimer); // prevent click event
            this.doubleClickTimer = undefined;
            this.findblclick(e);
        } else {
            this.lastClickTime = Date.now();

            this.doubleClickTimer = setTimeout(function() {
                this.doubleClickTimer = undefined;
                this.mouseLocation = this.getLocal(e);
                this.dispatchNewMouseKeysEvent(e, 'fin-canvas-click', {
                    isRightClick: this.isRightClick(e)
                });
            }.bind(this), this.doubleClickDelay);
        }
    },

    findblclick: function(e) {
        this.mouseLocation = this.getLocal(e);
        this.lastDoubleClickTime = Date.now();
        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-dblclick', {
            isRightClick: this.isRightClick(e)
        });
        //console.log('dblclick', this.currentKeys);
    },

    getCharMap: function() { //TODO: This is static. Make it a property of the constructor.
        return charMap;
    },

    finkeydown: function(e) {
        if (!this.hasFocus()) {
            return;
        }

        //e.preventDefault();
        var keyChar = e.shiftKey ? charMap[e.keyCode][1] : charMap[e.keyCode][0];
        if (e.repeat) {
            if (this.repeatKey === keyChar) {
                this.repeatKeyCount++;
            } else {
                this.repeatKey = keyChar;
                this.repeatKeyStartTime = Date.now();
            }
        } else {
            this.repeatKey = null;
            this.repeatKeyCount = 0;
            this.repeatKeyStartTime = 0;
        }
        if (this.currentKeys.indexOf(keyChar) === -1) {
            this.currentKeys.push(keyChar);
        }
        //console.log(keyChar, e.keyCode);
        this.dispatchNewEvent(e, 'fin-canvas-keydown', {
            alt: e.altKey,
            ctrl: e.ctrlKey,
            char: keyChar,
            code: e.charCode,
            key: e.keyCode,
            meta: e.metaKey,
            repeatCount: this.repeatKeyCount,
            repeatStartTime: this.repeatKeyStartTime,
            shift: e.shiftKey,
            identifier: e.keyIdentifier,
            currentKeys: this.currentKeys.slice(0)
        });
    },

    finkeyup: function(e) {
        var keyChar = e.shiftKey ? charMap[e.keyCode][1] : charMap[e.keyCode][0];
        this.currentKeys.splice(this.currentKeys.indexOf(keyChar), 1);
        if (!this.hasFocus()) {
            return;
        }
        this.repeatKeyCount = 0;
        this.repeatKey = null;
        this.repeatKeyStartTime = 0;
        this.dispatchNewEvent(e, 'fin-canvas-keyup', {
            alt: e.altKey,
            ctrl: e.ctrlKey,
            char: keyChar,
            code: e.charCode,
            key: e.keyCode,
            meta: e.metaKey,
            repeat: e.repeat,
            shift: e.shiftKey,
            identifier: e.keyIdentifier,
            currentKeys: this.currentKeys.slice(0)
        });
    },

    finfocusgained: function(e) {
        this.dispatchNewEvent(e, 'fin-canvas-focus-gained');
    },

    finfocuslost: function(e) {
        this.dispatchNewEvent(e, 'fin-canvas-focus-lost');
    },

    fincontextmenu: function(e) {
        if (e.ctrlKey && this.currentKeys.indexOf('CTRL') === -1) {
            this.currentKeys.push('CTRL');
        }
        if (this.doubleRightClickTimer && Date.now() - this.lastClickTime < this.doubleClickDelay) {
            //this is a double click...
            clearTimeout(this.doubleRightClickTimer); // prevent context menu event
            this.doubleRightClickTimer = undefined;
            this.findblclick(e);
        } else {
            this.lastClickTime = Date.now();

            this.doubleRightClickTimer = setTimeout(function() {
                this.doubleRightClickTimer = undefined;
                this.dispatchNewMouseKeysEvent(e, 'fin-canvas-context-menu', {
                    isRightClick: this.isRightClick(e)
                });
            }.bind(this), this.doubleClickDelay);
        }
    },

    repaint: function() {
        var fps = this.getFPS();
        this.dirty = true;
        if (!paintLoopRunning || fps === 0) {
            this.paintNow();
        }
    },

    getMouseLocation: function() {
        return this.mouseLocation;
    },

    getOrigin: function() {
        var rect = this.canvas.getBoundingClientRect();
        var p = new rectangular.Point(rect.left, rect.top);
        return p;
    },

    getLocal: function(e) {
        var rect = this.canvas.getBoundingClientRect();
        var p = new rectangular.Point(e.clientX - rect.left, e.clientY - rect.top);
        return p;
    },

    hasFocus: function() {
        return document.activeElement === this.canvas;
    },

    takeFocus: function() {
        var self = this;
        if (!this.hasFocus()) {
            setTimeout(function() {
                self.canvas.focus();
            }, 10);
        }
    },

    beDragging: function() {
        this.dragging = true;
        this.disableDocumentElementSelection();
    },

    beNotDragging: function() {
        this.dragging = false;
        this.enableDocumentElementSelection();
    },

    isDragging: function() {
        return this.dragging;
    },

    disableDocumentElementSelection: function() {
        var style = document.body.style;
        style.cssText = style.cssText + '-webkit-user-select: none';
    },

    enableDocumentElementSelection: function() {
        var style = document.body.style;
        style.cssText = style.cssText.replace('-webkit-user-select: none', '');
    },

    setFocusable: function(truthy) {
        this.focuser.style.display = truthy ? '' : 'none';
    },

    isRightClick: function(e) {
        var isRightMB;
        e = e || window.event;

        if ('which' in e) { // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = e.which === 3;
        } else if ('button' in e) { // IE, Opera
            isRightMB = e.button === 2;
        }
        return isRightMB;
    },

    dispatchEvent: function(e) {
        return this.canvas.dispatchEvent(e);
    }
};

function paintLoopFunction(now) {
    if (!paintLoopRunning) {
        return;
    }
    for (var i = 0; i < paintables.length; i++) {
        try {
            paintables[i].tickPainter(now);
        } catch (e) {
            console.error(e);
        }
    }
    requestAnimationFrame(paintLoopFunction);
}
requestAnimationFrame(paintLoopFunction);

function resizablesLoopFunction(now) {
    if (!resizeLoopRunning) {
        return;
    }
    for (var i = 0; i < resizables.length; i++) {
        try {
            resizables[i].tickResizer(now);
        } catch (e) {
            console.error(e);
        }
    }
}
setInterval(resizablesLoopFunction, RESIZE_POLLING_INTERVAL);

function makeCharMap() {
    var map = [];

    var empty = ['', ''];

    for (var i = 0; i < 256; i++) {
        map[i] = empty;
    }

    map[27] = ['ESC', 'ESCSHIFT'];
    map[192] = ['`', '~'];
    map[49] = ['1', '!'];
    map[50] = ['2', '@'];
    map[51] = ['3', '#'];
    map[52] = ['4', '$'];
    map[53] = ['5', '%'];
    map[54] = ['6', '^'];
    map[55] = ['7', '&'];
    map[56] = ['8', '*'];
    map[57] = ['9', '('];
    map[48] = ['0', ')'];
    map[189] = ['-', '_'];
    map[187] = ['=', '+'];
    map[8] = ['BACKSPACE', 'BACKSPACESHIFT'];
    map[46] = ['DELETE', 'DELETESHIFT'];
    map[9] = ['TAB', 'TABSHIFT'];
    map[81] = ['q', 'Q'];
    map[87] = ['w', 'W'];
    map[69] = ['e', 'E'];
    map[82] = ['r', 'R'];
    map[84] = ['t', 'T'];
    map[89] = ['y', 'Y'];
    map[85] = ['u', 'U'];
    map[73] = ['i', 'I'];
    map[79] = ['o', 'O'];
    map[80] = ['p', 'P'];
    map[219] = ['[', '{'];
    map[221] = [']', '}'];
    map[220] = ['\\', '|'];
    map[220] = ['CAPSLOCK', 'CAPSLOCKSHIFT'];
    map[65] = ['a', 'A'];
    map[83] = ['s', 'S'];
    map[68] = ['d', 'D'];
    map[70] = ['f', 'F'];
    map[71] = ['g', 'G'];
    map[72] = ['h', 'H'];
    map[74] = ['j', 'J'];
    map[75] = ['k', 'K'];
    map[76] = ['l', 'L'];
    map[186] = [';', ':'];
    map[222] = ['\'', '|'];
    map[13] = ['RETURN', 'RETURNSHIFT'];
    map[16] = ['SHIFT', 'SHIFT'];
    map[90] = ['z', 'Z'];
    map[88] = ['x', 'X'];
    map[67] = ['c', 'C'];
    map[86] = ['v', 'V'];
    map[66] = ['b', 'B'];
    map[78] = ['n', 'N'];
    map[77] = ['m', 'M'];
    map[188] = [',', '<'];
    map[190] = ['.', '>'];
    map[191] = ['/', '?'];
    map[16] = ['SHIFT', 'SHIFT'];
    map[17] = ['CTRL', 'CTRLSHIFT'];
    map[18] = ['ALT', 'ALTSHIFT'];
    map[91] = ['COMMANDLEFT', 'COMMANDLEFTSHIFT'];
    map[32] = ['SPACE', 'SPACESHIFT'];
    map[93] = ['COMMANDRIGHT', 'COMMANDRIGHTSHIFT'];
    map[18] = ['ALT', 'ALTSHIFT'];
    map[38] = ['UP', 'UPSHIFT'];
    map[37] = ['LEFT', 'LEFTSHIFT'];
    map[40] = ['DOWN', 'DOWNSHIFT'];
    map[39] = ['RIGHT', 'RIGHTSHIFT'];

    map[33] = ['PAGEUP', 'PAGEUPSHIFT'];
    map[34] = ['PAGEDOWN', 'PAGEDOWNSHIFT'];
    map[35] = ['PAGERIGHT', 'PAGERIGHTSHIFT']; // END
    map[36] = ['PAGELEFT', 'PAGELEFTSHIFT']; // HOME

    map[112] = ['F1', 'F1SHIFT'];
    map[113] = ['F2', 'F2SHIFT'];
    map[114] = ['F3', 'F3SHIFT'];
    map[115] = ['F4', 'F4SHIFT'];
    map[116] = ['F5', 'F5SHIFT'];
    map[117] = ['F6', 'F6SHIFT'];
    map[118] = ['F7', 'F7SHIFT'];
    map[119] = ['F8', 'F8SHIFT'];
    map[120] = ['F9', 'F9SHIFT'];
    map[121] = ['F10', 'F10SHIFT'];
    map[122] = ['F11', 'F1S1HIFT'];
    map[123] = ['F12', 'F121HIFT'];

    return map;
}

module.exports = Canvas;

},{"./js/GraphicsContext.js":21,"rectangular":53}],21:[function(require,module,exports){
'use strict';

var consoleLogger = require('./gc-console-logger');

/**
 * @constructor
 * @param gc - The 2-D graphics context from your canvas
 * @param {boolean|apiLogger} [logger=true]
 * * `true` uses `gc-console-logger` function bound to 'gc.' as prefix
 * * string uses `gc-console-logger` function bound to string
 * * function used as is
 */
function GraphicsContext(gc, logger) {
    this.gc = gc;

    var self = this;
    var reWEBKIT = /^webkit/;

    switch (typeof logger) {

        case 'string':
            logger =  consoleLogger.bind(undefined, logger + '.');
            break;

        case 'boolean':
            if (logger === true) {
                logger = consoleLogger.bind(undefined, 'gc.');
            }
            break;

        case 'function':
            if (logger.length !== 3) {
                throw 'GraphicsContext: User-supplied API logger function does not accept three parameters.';
            }
            break;

        default:
            logger = false;
    }

    // Stub out all the prototype members of the canvas 2D graphics context:
    Object.keys(Object.getPrototypeOf(gc)).forEach(MakeStub);

    // Some older browsers (e.g., Chrome 40) did not have all members of canvas
    // 2D graphics context in the prototype so we make this additional call:
    Object.keys(gc).forEach(MakeStub);

    function MakeStub(key) {
        if (key in GraphicsContext.prototype || reWEBKIT.test(key)) {
            return;
        }
        if (typeof gc[key] === 'function') {
            self[key] = !logger ? gc[key].bind(gc) : function() {
                return logger(key, arguments, gc[key].apply(gc, arguments));
            };
        } else {
            Object.defineProperty(self, key, {
                get: function() {
                    var result = gc[key];
                    return logger ? logger(key, 'getter', result) : result;
                },
                set: function(value) {
                    gc[key] = logger ? logger(key, 'setter', value) : value;
                }
            });
        }
    }
}

module.exports = GraphicsContext;

},{"./gc-console-logger":22}],22:[function(require,module,exports){
'use strict';

var YIELDS = '\u27F9'; // LONG RIGHTWARDS DOUBLE ARROW

function consoleLogger(prefix, name, args, value) {
    var result = value;

    if (typeof value === 'string') {
        result = '"' + result + '"';
    }

    name = prefix + name;

    switch (args) {
        case 'getter':
            console.log(name, '=', result);
            break;

        case 'setter':
            console.log(name, YIELDS, result);
            break;

        default: // method call
            name += '(' + Array.prototype.slice.call(args).join(', ') + ')';
            if (result === undefined) {
                console.log(name);
            } else {
                console.log(name, YIELDS, result);
            }
    }

    return value;
}

module.exports = consoleLogger;

},{}],23:[function(require,module,exports){
'use strict';

module.exports = {
    JSDataSource: require('./js/DataSource'),
    DataSourceSorter: require('./js/DataSourceSorter'),
    DataSourceSorterComposite: require('./js/DataSourceSorterComposite'),
    DataSourceGlobalFilter: require('./js/DataSourceGlobalFilter'),
    DataSourceGroupView: require('./js/DataSourceGroupView'),
    DataSourceAggregator: require('./js/DataSourceAggregator'),
    DataSourceTreeview: require('./js/DataSourceTreeview'),
    DataSourceTreeviewSorter: require('./js/DataSourceTreeviewSorter'),
    DataNodeGroupSorter: require('./js/DataNodeGroupSorter'),
    util: {
        aggregations: require('./js/util/aggregations'),
        Mappy: require('./js/util/Mappy'),
        stableSort: require('./js/util/stableSort'),
        headerify: require('./js/util/headerify')
    }
};

},{"./js/DataNodeGroupSorter":31,"./js/DataSource":34,"./js/DataSourceAggregator":35,"./js/DataSourceGlobalFilter":37,"./js/DataSourceGroupView":38,"./js/DataSourceSorter":40,"./js/DataSourceSorterComposite":41,"./js/DataSourceTreeview":42,"./js/DataSourceTreeviewSorter":43,"./js/util/Mappy":44,"./js/util/aggregations":45,"./js/util/headerify":46,"./js/util/stableSort":47}],24:[function(require,module,exports){
'use strict';


var AggregatorNodeBaseMixin = {
    getRowData: function(aggregator) {
        var index = this.getIndex();

        if (index.length) {
            var groupsOffset = Number(aggregator.hasGroups());

            // redimension the data
            var data = this.data;
            data.length = groupsOffset + aggregator.aggregates.length;

            var sorter = aggregator.sorterInstance;
            sorter.index = index;

            aggregator.aggregates.forEach(function(aggregate, i) {
                data[groupsOffset + i] = aggregate(sorter);
            });
        }
    }
};

module.exports = AggregatorNodeBaseMixin;

},{}],25:[function(require,module,exports){
'use strict';

var AggregatorNodeBaseMixin = require('./AggregatorNodeBaseMixin');
var DataNodeGroup = require('./DataNodeGroup');

/**
 * @constructor
 * @extends DataNodeBase
 */
var AggregatorNodeGroup = DataNodeGroup.extend('AggregatorNodeGroup', {
    getRowData: function (drillDown) {
        AggregatorNodeBaseMixin.getRowData.apply(this, arguments);
        if (this.expanded) {
            this.children.forEach(function (child) {
                child.getRowData(drillDown);
            });
        }
    }
});

module.exports = AggregatorNodeGroup;

},{"./AggregatorNodeBaseMixin":24,"./DataNodeGroup":30}],26:[function(require,module,exports){
'use strict';

var AggregatorNodeBaseMixin = require('./AggregatorNodeBaseMixin');
var DataNodeLeaf = require('./DataNodeLeaf');

/**
 * @constructor
 * @extends DataNodeBase
 */
var AggregatorNodeLeaf = DataNodeLeaf.extend('AggregatorNodeLeaf', AggregatorNodeBaseMixin);

module.exports = AggregatorNodeLeaf;

},{"./AggregatorNodeBaseMixin":24,"./DataNodeLeaf":32}],27:[function(require,module,exports){
'use strict';

var AggregatorNodeBaseMixin = require('./AggregatorNodeBaseMixin');
var DataNodeTree = require('./DataNodeTree');

/**
 * @constructor
 * @extends DataNodeBase
 */
var AggregatorNodeTree = DataNodeTree.extend('AggregatorNodeTree', {
    getRowData: function (drillDown) {
        AggregatorNodeBaseMixin.getRowData.apply(this, arguments);
        if (this.expanded) {
            this.children.forEach(function (child) {
                child.getRowData(drillDown);
            });
        }
    }
});

module.exports = AggregatorNodeTree;

},{"./AggregatorNodeBaseMixin":24,"./DataNodeTree":33}],28:[function(require,module,exports){
'use strict';

function Base() {}
Base.extend = require('extend-me');

Base.prototype = {
    constructor: Base.prototype.constructor,

    replaceIndent: '_',

    getHeaders: function() {
        if (this.dataSource) {
            return this.dataSource.getHeaders.apply(this.dataSource, arguments);
        }
    },

    getCalculators: function() {
        if (this.dataSource) {
            return this.dataSource.getCalculators.apply(this.dataSource, arguments);
        }
    },

    click: function() {
        if (this.dataSource) {
            return this.dataSource.click.apply(this.dataSource, arguments);
        }
    },

    findRow: function() {
        if (this.dataSource) {
            return this.dataSource.findRow.apply(this.dataSource, arguments);
        }
    },

    revealRow: function() {
        if (this.dataSource) {
            return this.dataSource.revealRow.apply(this.dataSource, arguments);
        }
    },

    /**
     * Get new object with name and index given the name or the index.
     * @param {string|number} [column] - Column name or index.
     * @param {string} [defaultName] - Name to use when column is omitted or undefined. May be omitted when column is definitely defined.
     * @returns {{name: string, index: number}}
     */
    getColumnInfo: function(column, defaultName) {
        var name, index;
        if (column === undefined) {
            column = defaultName;
        }
        if (typeof column === 'number') {
            name = this.getFields()[index = column];
        } else {
            index = this.getFields().indexOf(name = column);
        }
        if (name && index >= 0) {
            return {
                name: name,
                index: index
            };
        }
    },

    fixIndentForTableDisplay: function(string) {
        var count = string.search(/\S/);
        var end = string.substring(count);
        var result = Array(count + 1).join(this.replaceIndent) + end;
        return result;
    },

    dump: function(max) {
        max = Math.min(this.getRowCount(), max || Math.max(100, this.getRowCount()));
        var data = [];
        var fields = this.getHeaders();
        var cCount = this.getColumnCount();
        var viewMakesSense = this.viewMakesSense;
        for (var r = 0; r < max; r++) {
            var row = {};
            for (var c = 0; c < cCount; c++) {
                var val = this.getValue(c, r);
                if (c === 0 && viewMakesSense) {
                    val = this.fixIndentForTableDisplay(val);
                }
                row[fields[c]] = val;
            }
            data[r] = row;
        }
        console.table(data);
    }
};

module.exports = Base;

},{"extend-me":7}],29:[function(require,module,exports){
'use strict';

var Base = require('./Base');

/**
 * See {@link DataBaseNode#initialize|initialize()} method for parameters.
 * @constructor
 */
var DataNodeBase = Base.extend('DataNodeBase', {

    isNullObject: false,

    INDENT: '   ', // 3 spaces

    /**
     * @memberOf DataNodeBase.prototype
     * @param {string} key
     */
    initialize: function(key) {
        /**
         * @memberOf DataNodeBase.prototype
         * @type {string}
         */

        this.label = key;

        /**
         * @memberOf DataNodeBase.prototype
         * @type {string[]}
         * @default false
         */
        this.data = [''];

        /**
         * @memberOf DataNodeBase.prototype
         * @type {number[]}
         * @default ['']
         */
        this.index = []; // formerly rowIndex

        /**
         * @memberOf DataNodeBase.prototype
         * @type {boolean}
         * @default false
         */
        this.hasChildren = true;

        /**
         * @memberOf DataNodeBase.prototype
         * @type {number}
         * @default 0
         */
        this.depth = 0;

        /**
         * @memberOf DataNodeBase.prototype
         * @type {number}
         * @default 1
         */
        this.height = 1;

        /**
         * @memberOf DataNodeBase.prototype
         * @type {boolean}
         * @default false
         */
        this.expanded = false;
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @param x
     * @returns {*}
     */
    getValue: function(x) {
        return this.data[x];
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @param depth
     */
    toArray: function(depth) {
        this.depth = depth;
        this.data[0] = this.computeDepthString();
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @returns {string}
     */
    computeDepthString: function() {
        return Array(this.depth + 1).join(this.INDENT) + '  ' + this.label;
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @returns {number}
     */
    computeHeight: function() {
        return 1;
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @returns {Array}
     */
    getIndex: function() { // TODO: formerly getAllRowIndexes
        return this.index;
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @param drillDown
     */
    getRowData: function(drillDown) {
        var index = this.getIndex();

        if (index.length) {
            // Group and Tree nodes will have no data besides the tree column
            this.data.length = drillDown.getColumnCount();
        }
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @param drillDown
     */
    buildView: function(drillDown) {
        drillDown.addView(this);
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     */
    toggleExpansionState: function() {
        //do nothing by default
    },

    sortGroups: function(groupSorter) {
    }
});


module.exports = DataNodeBase;

},{"./Base":28}],30:[function(require,module,exports){
'use strict';

var Map = require('./util/Mappy');
var DataNodeBase = require('./DataNodeBase');

var expandedMap = {
    true: '\u25bc', // BLACK DOWN-POINTING TRIANGLE aka '▼'
    false: '\u25b6' // BLACK RIGHT-POINTING TRIANGLE aka '▶'
};

/**
 * > See {@link DataNodeGroup#initialize|initialize()} method for constructor parameters.
 * @constructor
 * @extends DataNodeBase
 */
var DataNodeGroup = DataNodeBase.extend('DataNodeGroup', {

    extendable: true,

    /**
     * @memberOf DataNodeGroup.prototype
     * @param key
     */
    initialize: function(key) {
        this.children = new Map();
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @param depth
     */
    toArray: function(depth) {
        this.depth = depth;
        this.children = this.children.values;
        this.children.forEach(function(child) {
            child.toArray(depth + 1);
        });
        this.data[0] = this.computeDepthString();
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @returns {string}
     */
    computeDepthString: function() {
        var string = Array(this.depth + 1).join(this.INDENT) +
            expandedMap[this.expanded] + ' ' +
            this.label;
        return string;
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @returns {*}
     */
    getIndex: function() {
        if (this.index.length === 0) {
            this.index = this.computeIndex();
        }
        return this.index;
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @returns {Array}
     */
    computeIndex: function() { // TODO: formerly computeAllRowIndexes
        var result = [];
        result.append = append;
        this.children.forEach(function(child) {
            result.append(child.getIndex());
        });
        return result;
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @param drillDown
     * @param {boolean} [expand] - One of:
     * * `true` - Expand all rows that are currently collapsed.
     * * `false` - Collapse all rows that are currently expanded.
     * * `undefined` (or omitted) - Expand all currently collapsed rows; collapse all currently expanded rows.
     * @returns {boolean} If this call resulted in a state change.
     */
    toggleExpansionState: function(drillDown, expand) { /* aggregator */
        if (expand === undefined) {
            expand = !this.expanded;
        }
        var changed = this.expanded ^ expand;
        this.expanded = expand;
        this.data[0] = this.computeDepthString();
        if (this.expanded) {
            this.getRowData(drillDown);
        }
        return !!changed;
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @param drillDown
     */
    getRowData: function(drillDown) {
        DataNodeBase.prototype.getRowData.call(this, drillDown); // call base class's version
        if (this.expanded) {
            this.children.forEach(function(child) {
                child.getRowData(drillDown);
            });
        }
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @param aggregator
     */
    buildView: function(drillDown) {
        drillDown.view.push(this);
        if (this.expanded) {
            this.children.forEach(function(child) {
                child.buildView(drillDown);
            });
        }
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @returns {number}
     */
    computeHeight: function() {
        var height = 1;

        if (this.expanded) {
            this.children.forEach(function(child) {
                height = height + child.computeHeight();
            });
        }

        return (this.height = height);
    },

    sortWith: function(sorter) {
        if (this.expanded) {
            sorter.sortGroup(this);
            this.children.forEach(function(child) {
                child.sortWith(sorter);
            });
        }
    },
    clearGroupSorts: function() {
        if (this.originalOrder) {
            for (var i = 0; i < this.originalOrder.length; i++) {
                this.children[i] = this.originalOrder[i];
            }
        }
        this.children.forEach(function(child) {
            child.clearGroupSorts();
        });
    }

});

/**
 * @private
 * @summary Array mixin to append another array to end of `this` one.
 * @desc Appends in place, unlike `this.concat()` which creates a new array.
 * Uses less memory than concat, important when `appendix` is huge.
 * > CAUTION: Mutates `this` array!
 * @param {Array} appendix
 * @returns {Array} Reference to `this` (for convenience)
 */
function append(appendix) {
    this.splice.bind(this, this.length, 0).apply(this, appendix);
    return this;
}

module.exports = DataNodeGroup;

},{"./DataNodeBase":29,"./util/Mappy":44}],31:[function(require,module,exports){
'use strict';

var Base = require('./Base');
var stableSort = require('./util/stableSort').sort;

/**
 * @constructor
 * @extends DataSourceIndexed
 */
var DataNodeGroupSorter = Base.extend('DataNodeGroupSorter', {

    /**
     * @memberOf DataSourceSorterComposite.prototype
     */
    initialize: function(dataSource) {
        this.dataSource = dataSource;
        this.sorts = [];

    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     * @param {number} y
     * @returns {Object}
     */
    getRow: function(y) {
        return this.last.getRow(y);
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     * @param columnIndex
     * @param direction
     */
    sortOn: function(columnIndex, direction) {
        this.sorts.push({ columnIndex: columnIndex, direction: direction });
    },

    set: function(sorts) {
        this.sorts = sorts || [];
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     */
    apply: function() {
        this.dataSource.sortGroups(this);
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     */
    clearSorts: function() {
        this.sorts.length = 0;
        this.dataSource.buildView();
    },

    sortGroup: function(group) {
        if (!group.originalOrder) {
            group.originalOrder = group.children.slice(0);
        }
        var sorts = this.sorts;
        for (var i = sorts.length - 1; i >= 0; i--) {
            this.sortGroupOnEach(group, sorts[sorts.length - i - 1]);
        }
    },

    sortGroupOnEach: function(group, sortSpec) {
        // we actually sort the children here....
        var children = group.children.slice(0);
        var indexVector = [];

        for (var i = 0; i < children.length; i++) {
            indexVector[i] = i;
        }

        stableSort(indexVector, function(rowNumber) {
            var child = children[rowNumber];
            if (sortSpec.columnIndex === 0) {
                return child.label;
            }
            return child.data[sortSpec.columnIndex];
        }, sortSpec.direction);

        for (i = 0; i < children.length; i++) {
            group.children[i] = children[indexVector[i]];
        }
    }

});

DataNodeGroupSorter.prototype.applySorts = function() {
    (console.warn || console.log).call(console, 'applySorts deprecated; use apply');
    this.apply();
};

module.exports = DataNodeGroupSorter;

},{"./Base":28,"./util/stableSort":47}],32:[function(require,module,exports){
'use strict';

var DataNodeBase = require('./DataNodeBase');

/**
 * @constructor
 * @extends DataNodeBase
 */
var DataNodeLeaf = DataNodeBase.extend('DataNodeLeaf', {

    /**
     * @memberOf DataNodeLeaf.prototype
     * @param {string} key
     */
    initialize: function(key) {
        this.hasChildren = false;
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @param depth
     */
    toArray: function(depth) {
        this.depth = depth;
        this.data[0] = this.computeDepthString();
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @returns {numer[]}
     */
    getIndex: function() {
        return this.index;
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @param drillDown
     */
    buildView: function(drillDown) {
        drillDown.addView(this);
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @param aggregator
     */
    getRowData: function(drillDown) {
        var index = this.getIndex();

        if (index.length) {
            var groupsOffset = Number(drillDown.hasGroups()),
                data = this.data,
                dataLen = drillDown.getColumnCount() + groupsOffset,
                i = 0,
                sorter = drillDown.sorterInstance;

            sorter.index = index;

            for (i; i < dataLen; i++) {
                data[groupsOffset + i] = sorter.getValue(i, 0);
            }
        }
    },

    /**
     * @memberOf DataNodeLeaf.prototype
     * @returns {number}
     */
    computeHeight: function() {
        return 1;
    },

    sortWith: function(sorter) {
      // do nothing we have no children to sort
    },

    clearGroupSorts: function() {
      // do nothing we have no children to sort
    }

});

module.exports = DataNodeLeaf;

},{"./DataNodeBase":29}],33:[function(require,module,exports){
'use strict';

var DataNodeGroup = require('./DataNodeGroup');

/**
 * See {@link DataNodeGroup#initialize|initialize()} method for parameters.
 * @constructor
 * @extends DataNodeGroup
 */
var DataNodeTree = DataNodeGroup.extend('DataNodeTree', {

    /**
     * @memberOf DataNodeGroup.prototype
     * @param {string} key
     */
    initialize: function(key) {
        this.height = 0;
        this.expanded = true;
    },

    /**
     * @memberOf DataNodeGroup.prototype
     */
    toArray: function() {
        this.children = this.children.values;
        this.children.forEach(function(child) {
            child.toArray(0);
        });
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @param drillDown
     */
    buildView: function(drillDown) {
        this.children.forEach(function(child) {
            child.buildView(drillDown);
        });
    },

    /**
     * @memberOf DataNodeGroup.prototype
     * @returns {number}
     */
    computeHeight: function() {
        var height = 1;

        this.children.forEach(function(child) {
            height = height + child.computeHeight();
        });

        return (this.height = height);
    }

});

module.exports = DataNodeTree;

},{"./DataNodeGroup":30}],34:[function(require,module,exports){
'use strict';

var Base = require('./Base');
var headerify = require('./util/headerify');

/**
 * @constructor
 * @param {object[]} data
 * @param {string[]} fields
 */
var DataSource = Base.extend('DataSource', {
    initialize: function(data, fields, calculators) {
        /**
         * @type {string[]}
         */
        this.fields = fields || computeFieldNames(data[0]);

        this.calculators = calculators || Array(this.fields.length);

        /**
         * @type {object[]}
         */
        this.data = data;
    },

    isNullObject: false,

    getDataIndex: function(y) {
        return y;
    },

    /**
     * @memberOf DataSource.prototype
     * @param y
     * @returns {object[]}
     */
    getRow: function(y) {
        return this.data[y];
    },

    findRow: function(columnName, value) {
        var result;
        if (value != null) {
            result = this.data.find(function(row) { return row[columnName] === value; });
        }
        return result;
    },

    /**
     * @memberOf DataSource.prototype
     * @param x
     * @param y
     * @returns {*}
     */
    getValue: function(x, y) {
        var row = this.getRow(y);
        if (!row) {
            return null;
        }
        return row[this.fields[x]];
    },

    /**
     * @memberOf DataSource.prototype
     * @param {number} x
     * @param {number} y
     * @param value
     */
    setValue: function(x, y, value) {
        this.getRow(y)[this.fields[x]] = value;
    },

    /**
     * @memberOf DataSource.prototype
     * @returns {number}
     */
    getRowCount: function() {
        return this.data.length;
    },

    /**
     * @memberOf DataSource.prototype
     * @returns {number}
     */
    getColumnCount: function() {
        return this.getFields().length;
    },

    /**
     * @memberOf DataSource.prototype
     * @returns {number[]}
     */
    getFields: function() {
        return this.fields;
    },

    /**
     * @memberOf DataSource.prototype
     * @returns {string[]}
     */
    getHeaders: function() {
        return (
            this.headers = this.headers || this.getDefaultHeaders().map(function(each) {
                return headerify.transform(each);
            })
        );
    },

    getCalculators: function() {
        return this.calculators;
    },

    /**
     * @memberOf DataSource.prototype
     * @returns {string[]}
     */
    getDefaultHeaders: function() {
        return this.getFields();
    },

    /**
     * @memberOf DataSource.prototype
     * @param {string[]} fields
     */
    setFields: function(fields) {
        this.fields = fields;
    },

    /**
     * @memberOf DataSource.prototype
     * @param {string[]} headers
     */
    setHeaders: function(headers) {
        if (!(headers instanceof Array)) {
            error('setHeaders', 'param #1 `headers` not array');
        }
        this.headers = headers;
    },

    /**
     * @memberOf DataSource.prototype
     */
    getGrandTotals: function() {
        //nothing here
    },

    /**
     * @memberOf DataSource.prototype
     * @param arrayOfUniformObjects
     */
    setData: function(arrayOfUniformObjects) {
        this.data = arrayOfUniformObjects;
    }
});

function error(methodName, message) {
    throw new Error('DataSource.' + methodName + ': ' + message);
}

/**
 * @private
 * @param {object} object
 * @returns {string[]}
 */
function computeFieldNames(object) {
    if (!object) {
        return [];
    }
    return Object.getOwnPropertyNames(object || []).filter(function(e) {
        return e.substr(0, 2) !== '__';
    });
}

module.exports = DataSource;

},{"./Base":28,"./util/headerify":46}],35:[function(require,module,exports){
'use strict';

var Base = require('./Base');
var DataSourceSorter = require('./DataSourceSorter');
var DataNodeTree = require('./AggregatorNodeTree');
var DataNodeGroup = require('./AggregatorNodeGroup');
var DataNodeLeaf = require('./AggregatorNodeLeaf');
var headerify = require('./util/headerify');

/**
 * @constructor
 * @param {DataSource} dataSource
 */
var DataSourceAggregator = Base.extend('DataSourceAggregator', {
    initialize: function(dataSource) {

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {DataSource}
         */
        this.dataSource = dataSource;

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {DataSource}
         */
        this.treeColumnIndex = 0;

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {DataNodeTree}
         */
        this.tree = new DataNodeTree('Totals');

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {number[]}
         * @default []
         */
        this.index = [];

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {Array}
         * @default []
         */
        this.aggregates = [];

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {Array}
         * @default []
         */
        this.groupBys = [];

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {Array}
         * @default []
         */
        this.view = [];

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {object}
         * @default {}
         */
        this.sorterInstance = {};

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {boolean}
         * @default true
         */
        this.presortGroups = true;

        /**
         * @memberOf DataSourceAggregator.prototype
         * @type {object}
         * @default {}
         */
        this.lastAggregate = {};

        this.setAggregates({});
    },

    isNullObject: false,


    /**
     * @memberOf DataSourceAggregator.prototype
     * @param aggregations, groups
     */
    setAggregateGroups: function(aggregations, groups) {
        this.setGroupBys(groups);
        this.setAggregates(aggregations);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param aggregations
     */
    setAggregates: function(aggregations) {
        this.lastAggregate = aggregations;
        this.clearAggregations();

        for (var key in aggregations) {
            this.addAggregate(key, aggregations[key]);
        }

    },

    getFields: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getFields();
        }
        var fields = this.getHeaders().map(function(e) {
            return e.toLowerCase().split(' ').join('_');
        });
        return fields;
    },

    getHeaders: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getHeaders();
        }
        var headers = this.aggregates.map(function(e) {
            return e.header;
        });
        if (this.hasGroups()) {
            headers.unshift('Tree');
        }
        return headers;
    },
    /**
     * @memberOf DataSourceAggregator.prototype
     * @param label
     * @param func
     */
    addAggregate: function(label, func) {
        func.header = headerify.transform(label);
        this.aggregates.push(func);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param columnIndexArray
     */
    setGroupBys: function(columnIndexArray) {
        var groupBys = this.groupBys;
        groupBys.length = 0;
        columnIndexArray.forEach(function(columnIndex) {
            groupBys.push(columnIndex);
        });
        this.setAggregates(this.lastAggregate);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param index
     */
    addGroupBy: function(index) {
        this.groupBys.push(index);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @returns {boolean}
     */
    hasGroups: function() {
        return !!this.groupBys.length;
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @returns {boolean}
     */
    hasAggregates: function() {
        return !!this.aggregates.length;
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @params [options]
     */
    apply: function(options) {
        options  = options || {};
        if (!options.rowClick && !options.columnSort){
            this.buildGroupTree();
        }
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     */
    clearGroups: function() {
        this.groupBys.length = 0;
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     */
    clearAggregations: function() {
        this.aggregates.length = 0;
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     */
    buildGroupTree: function() {
        var reversedGroupBys = this.groupBys.slice(0).reverse(),
            leafDepth = this.groupBys.length - 1,
            source = this.dataSource,
            rowCount = source.getRowCount(),
            tree = this.tree = new DataNodeTree('Totals');

        // first sort data
        if (this.presortGroups) {
            reversedGroupBys.forEach(function(groupBy) {
                source = new DataSourceSorter(source);
                source.sortOn(groupBy);
            });
        }

        for (var r = 0; r < rowCount; r++) {
            var path = tree;

            this.groupBys.forEach(function(g, c) { // eslint-disable-line no-loop-func
                var key = source.getValue(g, r),
                    factoryDataNode = (c === leafDepth) ? factoryDataNodeLeaf : factoryDataNodeGroup;
                path = path.children.getIfUndefined(key, factoryDataNode);
            });

            path.index.push(r);
        }

        this.sorterInstance = new DataSourceSorter(source);
        tree.toArray();
        tree.getRowData(this);
        this.buildView();
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param dataNode
     */
    addView: function(dataNode) {
        this.view.push(dataNode);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     */
    buildView: function() {
        this.view.length = 0;
        this.tree.computeHeight();
        this.tree.buildView(this);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @returns {*|boolean}
     */
    viewMakesSense: function() {
        return this.hasAggregates() && this.hasGroups();
    },

    getDataIndex: function(y) {
        return this.viewMakesSense() ? y : this.dataSource.getDataIndex(y);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param x
     * @param y
     * @returns {*}
     */
    getValue: function(x, y) {
        if (!this.viewMakesSense()) {
            return this.dataSource.getValue(x, y);
        }
        var row = this.view[y];
        return row ? row.getValue(x) : null;
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param x
     * @param y
     * @param value
     * @returns {*}
     */
    setValue: function(x, y, value) {
        if (!this.viewMakesSense()) {
            return this.dataSource.setValue(x, y, value);
        }
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @returns {*}
     */
    getColumnCount: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getColumnCount();
        }
        return this.getHeaders().length;
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @returns {*}
     */
    getRowCount: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getRowCount();
        }
        return this.view.length; //header column
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param y
     * @param {boolean} [expand] - One of:
     * * `true` - Expand all rows that are currently collapsed.
     * * `false` - Collapse all rows that are currently expanded.
     * * `undefined` (or omitted) - Expand all currently collapsed rows; collapse all currently expanded rows.
     * @param {number} [depth=Infinity] - One of:
     * * number > 0 - Apply only if row depth is above the given depth.
     * * number <= 0 - Apply only if row depth is below the given depth.
     * @returns {undefined|boolean} One of:
     * * `undefined` - row was not expandable
     * * `true` - row was expandable _and_ state changed
     * * `false` - row was expandable _but_ state did _not_ change
     */
    click: function(y, expand, depth) {
        if (!this.viewMakesSense()) {
            return this.dataSource.click.apply(this.dataSource, arguments);
        }
        var group = this.view[y], expandable, changed;
        if (
            group && (
                depth === undefined ||
                depth > 0 && group.depth < depth ||
                depth <= 0 && group.depth >= -depth
            )
        ) {
            changed = group.toggleExpansionState(this, expand);
            if ((expandable = group.children)) {
                this.buildView();
            }
        }

        return expandable ? changed : undefined;
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param headers
     */
    setHeaders: function(headers) {
        this.dataSource.setHeaders(headers);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param fields
     * @returns {*}
     */
    setFields: function(fields) {
        return this.dataSource.setFields(fields);
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @returns {object[]}
     */
    getGrandTotals: function() {
        var view = this.tree;
        return [view.data];
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param y
     * @returns {*}
     */
    getRow: function(y) {
        if (!this.viewMakesSense()) {
            return this.dataSource.getRow(y);
        }

        var rollups = this.view[y];

        return rollups ? rollups : this.tree;
    },

    /**
     * @memberOf DataSourceAggregator.prototype
     * @param arrayOfUniformObjects
     */
    setData: function(arrayOfUniformObjects) {
        this.dataSource.setData(arrayOfUniformObjects);
        this.apply();
    },

    sortGroups: function(groupSorter) {
        this.tree.clearGroupSorts();
        this.tree.sortWith(groupSorter);
        this.buildView();
    }
});

function factoryDataNodeLeaf(key) {
    return new DataNodeLeaf(key);
}

function factoryDataNodeGroup(key) {
    return new DataNodeGroup(key);
}

module.exports = DataSourceAggregator;

},{"./AggregatorNodeGroup":25,"./AggregatorNodeLeaf":26,"./AggregatorNodeTree":27,"./Base":28,"./DataSourceSorter":40,"./util/headerify":46}],36:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');
var stableSort = require('./util/stableSort');

/**
 * Used by `DataSourceTreeviewSorter`.
 * One of these data sources should be created for each sort depth, starting with the maximum sort depth, and then one for each sort depth through the top (0) sort depth.
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceDepthSorter = DataSourceIndexed.extend('DataSourceDepthSorter', {
    initialize: function(dataSource, idColumn, parentIdColumn) {
        this.idColumn = idColumn;
        this.parentIdColumn = parentIdColumn;
    },

    /**
     * @param {number} columnIndex
     * @param {number} [direction=1]
     * @param {number} sortDepth - If greater than row depth, sorts on _edge value_ value; otherwise sorts on value of ancestor of this depth. "Edge" means a value that lexically comes before all others (ascending sort) or after all others (descending sort).
     * @memberOf DataSourceDepthSorter.prototype
     */
    sortOn: function(columnIndex, direction, sortDepth) {
        var columnName = this.dataSource.getFields()[columnIndex],
            calculator = this.dataSource.getCalculators()[columnIndex],
            self = this, // used in getValue
            depth = 0,
            numeric, edge;

        switch (direction) {
            case 0:
                this.clearIndex();
                break;

            case undefined:
            case 1:
            case -1:
                if (this.dataSource.getRowCount()) {
                    this.buildIndex();
                    numeric = typeof getValue(0) !== 'string'; // works with date objects as well as numbers
                    edge = direction === -1 // used in getValue
                        ? (numeric ? +Infinity : '\uffff')
                        : (numeric ? -Infinity : '');
                    depth = sortDepth;
                    stableSort.sort(this.index, getValue, direction);
                }
                break;
        }

        function getValue(rowIdx) {
            var dataRow = self.dataSource.getRow(rowIdx);

            if (dataRow.__DEPTH < depth) {
                return edge;
            } else {
                while (dataRow.__DEPTH > depth) {
                    dataRow = self.findRow(self.idColumn.name, dataRow[self.parentIdColumn.name]);
                }
            }

            return DataSourceIndexed.valOrFunc(dataRow, columnName, calculator);
        }
    }
});

module.exports = DataSourceDepthSorter;

},{"./DataSourceIndexed":39,"./util/stableSort":47}],37:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');

/**
 * @typedef {function} filterFunction
 * @param cellValue
 * @param {object} rowObject - Reference to `this.dataSource.data[r]`.
 * @param {number} r - Row number (index within `this.dataSource.data`).
 */

/**
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceGlobalFilter = DataSourceIndexed.extend('DataSourceGlobalFilter', {

    /**
     *
     * @memberOf DataSourceGlobalFilter.prototype
     * @param {object} [filter] - If undefined, deletes filter.
     */
    set: function(filter) {
        if (filter) {
            /**
             * @type {filterFunction}
             * @memberOf DataSourceGlobalFilter.prototype
             */
            this.filter = filter;
        } else {
            delete this.filter;
        }
    },

    get: function(filter) {
        return this.filter;
    },

    /**
     *
     * @memberOf DataSourceGlobalFilter.prototype
     */
    apply: function() {
        if (!this.filter) {
            this.clearIndex();
        } else {
            this.buildIndex(function applyFilter(r, rowObject) {
                return this.filter.test(rowObject);
            });
        }
    },

    /**
     *
     * @memberOf DataSourceGlobalFilter.prototype
     * @returns {number}
     */
    getRowCount: function() {
        return this.filter ? this.index.length : this.dataSource.getRowCount();
    }
});

module.exports = DataSourceGlobalFilter;

},{"./DataSourceIndexed":39}],38:[function(require,module,exports){
'use strict';

var Base = require('./Base');
var DataSourceSorter = require('./DataSourceSorter');
var DataNodeTree = require('./DataNodeTree');
var DataNodeGroup = require('./DataNodeGroup');
var DataNodeLeaf = require('./DataNodeLeaf');

/**
 * @constructor
 * @param {DataSource} dataSource
 */
var DataSourceGroupView = Base.extend('DataSourceGroupView', {
    initialize: function(dataSource) {

        /**
         * @memberOf DataSourceGroupView.prototype
         * @type {DataSource}
         */
        this.dataSource = dataSource;

        /**
         * @memberOf DataSourceGroupView.prototype
         * @type {DataNodeTree}
         */
        this.tree = new DataNodeTree('Group');

        /**
         * @memberOf DataSourceGroupView.prototype
         * @type {number[]}
         * @default []
         */
        this.index = [];

        /**
         * @memberOf DataSourceGroupView.prototype
         * @type {Array}
         * @default []
         */
        this.groupBys = [];

        /**
         * @memberOf DataSourceGroupView.prototype
         * @type {Array}
         * @default []
         */
        this.view = [];

        /**
         * @memberOf DataSourceGroupView.prototype
         * @type {object}
         * @default {}
         */
        this.treeColumnIndex = 0;

        /**
         * @memberOf DataSourceGroupView.prototype
         * @type {object}
         * @default {}
         */
        this.sorterInstance = {};

        /**
         * @memberOf DataSourceGroupView.prototype
         * @type {boolean}
         * @default true
         */
        this.presortGroups = true;

    },

    isNullObject: false,

    getFields: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getFields();
        }
        var fields = this.getHeaders().map(function(e) {
            return e.toLowerCase().split(' ').join('_');
        });
        return fields;
    },

    getHeaders: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getHeaders();
        }
        var headers = this.dataSource.getHeaders().slice(0);

        if (this.hasGroups()) {
            headers.unshift('Tree');
        }
        return headers;
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param columnIndexArray
     */
    setGroupBys: function(columnIndexArray) {
        var groupBys = this.groupBys;
        groupBys.length = 0;
        columnIndexArray.forEach(function(columnIndex) {
            groupBys.push(columnIndex);
        });
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param index
     */
    addGroupBy: function(index) {
        this.groupBys.push(index);
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @returns {boolean}
     */
    hasGroups: function() {
        return !!this.groupBys.length;
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @params [options]
     */
    apply: function(options) {
        options  = options || {};
        if (!options.rowClick && !options.columnSort){
            this.buildGroupTree();
        }
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     */
    clearGroups: function() {
        this.groupBys.length = 0;
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     */
    buildGroupTree: function() {
        var reversedGroupBys = this.groupBys.slice(0).reverse(),
            leafDepth = this.groupBys.length - 1,
            source = this.dataSource,
            rowCount = source.getRowCount(),
            tree = this.tree = new DataNodeTree('Group');

        // first sort data
        if (this.presortGroups) {
            reversedGroupBys.forEach(function(groupBy) {
                source = new DataSourceSorter(source);
                source.sortOn(groupBy);
            });
        }

        for (var r = 0; r < rowCount; r++) {
            var path = tree;

            this.groupBys.forEach(function(g, c) { // eslint-disable-line no-loop-func
                var key = source.getValue(g, r),
                    factoryDataNode = (c === leafDepth) ? factoryDataNodeLeaf : factoryDataNodeGroup;
                path = path.children.getIfUndefined(key, factoryDataNode);
            });

            path.index.push(r);
        }

        this.sorterInstance = new DataSourceSorter(source);
        tree.toArray();
        tree.getRowData(this);
        this.buildView();
        //this.dump();
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param dataNode
     */
    addView: function(dataNode) {
        this.view.push(dataNode);
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     */
    buildView: function() {
        this.view.length = 0;
        this.tree.computeHeight();
        this.tree.buildView(this);
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @returns {*|boolean}
     */
    viewMakesSense: function() {
        return this.hasGroups();
    },

    getDataIndex: function(y) {
        return this.viewMakesSense() ? y : this.dataSource.getDataIndex(y);
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param x
     * @param y
     * @returns {*}
     */
    getValue: function(x, y) {
        if (!this.viewMakesSense()) {
            return this.dataSource.getValue(x, y);
        }
        var row = this.view[y];
        return row ? row.getValue(x) : null;
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param x
     * @param y
     * @param value
     * @returns {*}
     */
    setValue: function(x, y, value) {
        if (!this.viewMakesSense()) {
            return this.dataSource.setValue(x, y, value);
        }
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @returns {*}
     */
    getColumnCount: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getColumnCount();
        }
        return this.getHeaders().length;
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @returns {*}
     */
    getRowCount: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getRowCount();
        }
        return this.view.length; //header column
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param y
     * @param {boolean} [expand] - One of:
     * * `true` - Expand all rows that are currently collapsed.
     * * `false` - Collapse all rows that are currently expanded.
     * * `undefined` (or omitted) - Expand all currently collapsed rows; collapse all currently expanded rows.
     * @param {number} [depth=Infinity] - One of:
     * * number > 0 - Apply only if row depth is above the given depth.
     * * number <= 0 - Apply only if row depth is below the given depth.
     * @returns {undefined|boolean} One of:
     * * `undefined` - row was not expandable
     * * `true` - row was expandable _and_ state changed
     * * `false` - row was expandable _but_ state did _not_ change
     */
    click: function(y, expand, depth) {
        if (!this.viewMakesSense()) {
            return this.dataSource.click.apply(this.dataSource, arguments);
        }
        var group = this.view[y], expandable, changed;
        if (
            group && (
                depth === undefined ||
                depth > 0 && group.depth < depth ||
                depth <= 0 && group.depth >= -depth
            )
        ) {
            changed = group.toggleExpansionState(this, expand);
            if ((expandable = group.children)) {
                this.buildView();
            }
        }

        return expandable ? changed : undefined;
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param headers
     */
    setHeaders: function(headers) {
        this.dataSource.setHeaders(headers);
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param fields
     * @returns {*}
     */
    setFields: function(fields) {
        return this.dataSource.setFields(fields);
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param y
     * @returns {*}
     */
    getRow: function(y) {
        if (!this.viewMakesSense()) {
            return this.dataSource.getRow(y);
        }

        var groups = this.view[y];

        return groups ? groups : this.tree;
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     * @param arrayOfUniformObjects
     */
    setData: function(arrayOfUniformObjects) {
        this.dataSource.setData(arrayOfUniformObjects);
        this.apply();
    },

    /**
     * @memberOf DataSourceGroupView.prototype
     */
    getGrandTotals: function (){

    },

    sortGroups: function(groupSorter) {
        this.tree.clearGroupSorts();
        this.tree.sortWith(groupSorter);
        this.buildView();
    }
});

function factoryDataNodeLeaf(key) {
    return new DataNodeLeaf(key);
}

function factoryDataNodeGroup(key) {
    return new DataNodeGroup(key);
}

module.exports = DataSourceGroupView;

},{"./Base":28,"./DataNodeGroup":30,"./DataNodeLeaf":32,"./DataNodeTree":33,"./DataSourceSorter":40}],39:[function(require,module,exports){
'use strict';

var Base = require('./Base');

/**
 * @constructor
 */
var DataSourceIndexed = Base.extend('DataSourceIndexed', {

    /**
     *
     */
    isNullObject: false,

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param dataSource
     */
    initialize: function(dataSource) {
        this.dataSource = dataSource;
        this.index = [];
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param y
     * @returns {*}
     */
    transposeY: function(y) {
        return this.index.length ? this.index[y] : y;
    },

    getDataIndex: function(y) {
        return this.dataSource.getDataIndex(this.transposeY(y));
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param y
     * @returns {object}
     */
    getRow: function(y) {
        return this.dataSource.getRow(this.transposeY(y));
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param x
     * @param y
     * @returns {*|Mixed}
     */
    getValue: function(x, y) {
        return this.dataSource.getValue(x, this.transposeY(y));
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param {number} x
     * @param {number} y
     * @param {*} value
     */
    setValue: function(x, y, value) {
        this.dataSource.setValue(x, this.transposeY(y), value);
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @returns {Number|*}
     */
    getRowCount: function() {
        return this.index.length || this.dataSource.getRowCount();
    },

    /**
     *
     * @returns {*}
     */
    getColumnCount: function() {
        return this.dataSource.getColumnCount();
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @returns {*}
     */
    getFields: function() {
        return this.dataSource.getFields();
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param fields
     * @returns {*}
     */
    setFields: function(fields) {
        return this.dataSource.setFields(fields);
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param {string[]} headers
     * @returns {string[]}
     */
    setHeaders: function(headers) {
        return this.dataSource.setHeaders(headers);
    },

    /**
     *
     * @returns {string[]}
     */
    getHeaders: function() {
        return this.dataSource.getHeaders();
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @returns {*}
     */
    getGrandTotals: function() {
        return this.dataSource.getGrandTotals();
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param {object[]} arrayOfUniformObjects
     * @returns {object[]}
     */
    setData: function(arrayOfUniformObjects) {
        return this.dataSource.setData(arrayOfUniformObjects);
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     */
    clearIndex: function() {
        this.index.length = 0;
    },

    /**
     * @memberOf DataSourceIndexed.prototype
     * @param {filterPredicate} predicate
     * @returns {number[]}
     */
    buildIndex: function(predicate) {
        var rowCount = this.dataSource.getRowCount(),
            index = this.index;

        this.clearIndex();

        for (var r = 0; r < rowCount; r++) {
            if (!predicate || predicate.call(this, r, this.dataSource.getRow(r))) {
                index.push(r);
            }
        }

        return index;
    }
});

/** @typedef {function} filterPredicate
 * @summary Applies filter to given row.
 * @param {nubmer} r - Row index of row data within rows array `this.dataSource.data[]`.
 * @param {object} rowObject - Row data; element of `this.dataSource.data[]`.
 * @returns {boolean} Row qualifies (passes through filter).
 */

/**
 * Used by the sorters (`DataSourceSorter` and `DataSourceTreeviewSorter`).
 * @param {object} dataRow
 * @param {string} columnName
 * @returns {*}
 */
DataSourceIndexed.valOrFunc = function(dataRow, columnName, calculator) {
    var result = dataRow[columnName];
    calculator = (typeof result)[0] === 'f' && result || calculator;
    if (calculator) {
        result = calculator(dataRow, columnName);
    }
    return result;
};

module.exports = DataSourceIndexed;

},{"./Base":28}],40:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');
var stableSort = require('./util/stableSort');

/**
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceSorter = DataSourceIndexed.extend('DataSourceSorter', {
    /**
     * @memberOf DataSourceSorter.prototype
     * @param {number} columnIndex
     * @param {number} [direction=1]
     */
    sortOn: function(columnIndex, direction) {
        var dataSource = this.dataSource,
            columnName = dataSource.getFields()[columnIndex],
            calculator = dataSource.getCalculators()[columnIndex];

        switch (direction) {
            case 0:
                this.clearIndex();
                break;

            case undefined:
            case 1:
            case -1:
                stableSort.sort(this.buildIndex(), getValue, direction);
                break;
        }

        function getValue(rowIdx) {
            var dataRow = dataSource.getRow(rowIdx);
            return DataSourceIndexed.valOrFunc(dataRow, columnName, calculator);
        }
    }
});

module.exports = DataSourceSorter;

},{"./DataSourceIndexed":39,"./util/stableSort":47}],41:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');
var DataSourceSorter = require('./DataSourceSorter');

/**
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceSorterComposite = DataSourceIndexed.extend('DataSourceSorterComposite', {

    /**
     * @memberOf DataSourceSorterComposite.prototype
     */
    initialize: function() {
        /**
         * Caveats:
         *
         * 1. Columns should be uniquely represented (i.e., no repeats with same columnIndex)
         * 2. Columns should be added low- to high-order (i.e., most grouped columns come last)
         *
         * @type {number[]}
         * @memberOf DataSourceSorterComposite.prototype
         */
        this.sorts = [];

        /**
         * @type {DataSource}
         * @memberOf DataSourceSorterComposite.prototype
         */
        this.last = this.dataSource;
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     * @param {number} y
     * @returns {Object}
     */
    getRow: function(y) {
        return this.last.getRow(y);
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     * @param columnIndex
     * @param direction
     */
    sortOn: function(columnIndex, direction) {
        this.sorts.push({ columnIndex: columnIndex, direction: direction });
    },

    set: function(sorts) {
        this.sorts = sorts || [];
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     */
    apply: function() {
        var each = this.dataSource;

        this.sorts.forEach(function(sortSpec) {
            each = new DataSourceSorter(each);
            each.sortOn(sortSpec.columnIndex, sortSpec.direction);
        });

        this.last = each;
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     */
    clearSorts: function() {
        this.sorts.length = 0;
        this.last = this.dataSource;
    },

    getDataIndex: function(y) {
        return this.last.getDataIndex(y);
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     * @param {number} x
     * @param {number} y
     * @returns {*}
     */
    getValue: function(x, y) {
        return this.last.getValue(x, y);
    },

    /**
     * @memberOf DataSourceSorterComposite.prototype
     * @param {number} x
     * @param {number} y
     * @param {*} value
     */
    setValue: function(x, y, value) {
        this.last.setValue(x, y, value);
    }
});

DataSourceSorterComposite.prototype.applySorts = function() {
    (console.warn || console.log).call(console, 'applySorts deprecated; use apply');
    this.apply();
};

module.exports = DataSourceSorterComposite;

},{"./DataSourceIndexed":39,"./DataSourceSorter":40}],42:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');

var expandedMap = {
    true: '\u25bc ', // BLACK DOWN-POINTING TRIANGLE aka '▼'
    false: '\u25b6 ', // BLACK RIGHT-POINTING TRIANGLE aka '▶'
    undefined: '  ' // for leaf rows
};

/**
 * For proper sorting, include `DataSourceTreeviewSorter` in your pipeline, _ahead of_ (closer to the data than) this data source.
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceTreeview = DataSourceIndexed.extend('DataSourceTreeview', {
    /**
     * @summary Toggle the tree-view.
     * @desc Calculates or recalculates nesting depth of each row and marks it as expandable if it has children.
     *
     * If resetting previously set data, the state of expansion of all rows that still have children is retained.
     *
     * All three named columns must exist.
     *
     * @param {boolean|object} [options] - Turn tree-view **ON**. If falsy (or omitted), turn it **OFF**.
     * @param {number|string} [options.idColumn='ID'] - Column name of the primary key column.
     * @param {number|string} [options.parentIdColumn='parentID'] - Column name of the foreign key column for grouping.
     * @param {number|string} [options.treeColumn='name'] - Column name of the drill-down column to decorate.
     * @returns {boolean} Joined state.
     * @memberOf DataSourceTreeview.prototype
     */
    setRelation: function(options) {
        var idColumn, parentIdColumn,
            r, parentID, depth, leafRow, row, ID;

        // successful join requires that options object be given and that all three columns exist
        this.joined = !!(
            options &&
            (this.idColumn = this.getColumnInfo(options.idColumn, 'ID')) &&
            (this.parentIdColumn = this.getColumnInfo(options.parentIdColumn, 'parentID')) &&
            (this.treeColumn = this.getColumnInfo(options.treeColumn, 'name'))
        );

        this.buildIndex(); // make all rows visible to getRow()

        r = this.getRowCount();
        if (this.joined) {
            // treeviewSorter needs to know following for access by each DataSourceSorter it creates:
            this.dataSource.idColumn = this.idColumn;
            this.dataSource.parentIdColumn = this.parentIdColumn;

            // mutate data row with __DEPTH (all rows) and __EXPANDED (all "parent" rows)
            var idColumnName = this.idColumn.name,
                parentIdColumnName = this.parentIdColumn.name;
            while (r--) {
                depth = 0;
                leafRow = this.getRow(r);
                row = leafRow;
                ID = row[idColumnName];

                while ((parentID = row[parentIdColumnName]) != undefined) { // eslint-disable-line eqeqeq
                    row = this.findRow(idColumnName, parentID);
                    ++depth;
                }

                leafRow.__DEPTH = depth;

                if (!this.findRow(parentIdColumnName, ID)) {
                    delete leafRow.__EXPANDED; // no longer expandable
                } else if (leafRow.__EXPANDED === undefined) { // retain previous setting for old rows
                    leafRow.__EXPANDED = false; // default for new row is unexpanded
                }
            }
        } else {
            // flatten the tree so group sorter sees it as a single group
            while (r--) {
                this.getRow(r).__DEPTH = 0;
            }
        }

        return this.joined;
    },

    /**
     * @memberOf DataSourceTreeview.prototype
     */
    apply: function() {
        if (this.viewMakesSense()) {
            this.buildIndex(this.joined && rowIsRevealed);
        }
    },

    /**
     * @param x
     * @param y
     * @returns {*}
     * @memberOf DataSourceTreeview.prototype
     */
    getValue: function(x, y) {
        var value = DataSourceIndexed.prototype.getValue.call(this, x, y);

        if (this.viewMakesSense() && x === this.treeColumn.index) {
            var row = this.getRow(y);

            if (!(value === '' && row.__EXPANDED === undefined)) {
                value = Array(row.__DEPTH + 1).join('   ') + expandedMap[row.__EXPANDED] + value;
            }
        }

        return value;
    },

    viewMakesSense: function() {
        return this.joined;
    },

    /**
     * @desc Operates only on the following rows:
     * * Expandable rows - Rows with a drill-down control.
     * * Revealed rows - Rows not hidden inside of collapsed drill-downs.
     * @param y - Revealed row number. (This is not the row ID.)
     * @param {boolean} [expand] - One of:
     * * `true` - Expand all rows that are currently collapsed.
     * * `false` - Collapse all rows that are currently expanded.
     * * `undefined` (or omitted) - Expand all currently collapsed rows; collapse all currently expanded rows.
     * @param {number} [depth=Infinity] - One of:
     * * number > 0 - Apply only if row depth is above the given depth.
     * * number <= 0 - Apply only if row depth is below the given depth.
     * @returns {undefined|boolean} One of:
     * * `undefined` - Row was not expandable.
     * * `true` - Row had drill-down _and_ state changed.
     * * `false` - Row had drill-down _but_ state did _not_ change.
     * @memberOf DataSourceTreeview.prototype
     */
    click: function(y, expand, depth) {
        if (!this.viewMakesSense()) {
            return this.dataSource.click.apply(this.dataSource, arguments);
        }

        var changed, row = this.getRow(y);
        if (row && row.__EXPANDED !== undefined) {
            if (depth !== undefined && (
                depth > 0 && row.__DEPTH >= depth ||
                depth <= 0 && row.__DEPTH < -depth
            )) {
                changed = false;
            } else {
                if (expand === undefined) {
                    expand = !row.__EXPANDED;
                }
                changed = row.__EXPANDED && !expand || !row.__EXPANDED && expand;
                row.__EXPANDED = expand;
            }
        }
        return changed;
    },

    /**
     * @summary Expand nested drill-downs containing this row.
     * @param ID - The unique row ID.
     * @returns {boolean} If any rows expanded.
     */
    revealRow: function(ID) {
        if (!this.viewMakesSense()) {
            return this.dataSource.revealRow.apply(this.dataSource, arguments);
        }

        var row, parent, changed = false;
        while ((row = this.findRow(this.idColumn.name, ID))) {
            if (parent && row.__EXPANDED === false) {
                row.__EXPANDED = changed = true;
            }
            parent = true;
            ID = row[this.parentIdColumn.name];
        }
        return changed;
    }
});

function rowIsRevealed(r, row) {
    var parentID;

    // are any of the row's ancestors collapsed?
    while ((parentID = row[this.parentIdColumn.name]) != undefined) { // eslint-disable-line eqeqeq
        // walk up through each parent...
        row = this.findRow(this.idColumn.name, parentID);
        if (row.__EXPANDED === false) { // an ancestor is collapsed
            return false; // exclude row from build
        }
    }

    // no ancestors were collapsed
    return true; // include row in build
}

module.exports = DataSourceTreeview;

},{"./DataSourceIndexed":39}],43:[function(require,module,exports){
'use strict';

var DataSourceSorterComposite = require('./DataSourceSorterComposite');
var DataSourceDepthSorter = require('./DataSourceDepthSorter');

/**
 * This data source should be positioned _ahead of_ (closer to the data than) `DataSourceTreeview`.
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceTreeviewSorter = DataSourceSorterComposite.extend('DataSourceTreeviewSorter', {

    apply: function() {
        if (this.sorts.length) {
            var self = this,
                each = this.dataSource;

            for (var deepest = 0, rowIdx = this.getColumnCount() - 1; rowIdx >= 0; --rowIdx) {
                var depth = this.getRow(rowIdx).__DEPTH;
                if (depth > deepest) {
                    deepest = depth;
                }
            }

            this.sorts.forEach(function(sortSpec) {
                for (depth = deepest; depth >= 0; --depth) {
                    each = new DataSourceDepthSorter(each, self.idColumn, self.parentIdColumn);
                    each.sortOn(sortSpec.columnIndex, sortSpec.direction, depth);
                }
            });

            this.last = each;
        } else {
            this.clearSorts();
        }
    }

});

module.exports = DataSourceTreeviewSorter;

},{"./DataSourceDepthSorter":36,"./DataSourceSorterComposite":41}],44:[function(require,module,exports){
'use strict';

/**
 * @constructor
 */
function Mappy() {
    this.keys = [];
    this.data = {};
    this.values = [];
}

Mappy.prototype = {

    constructor: Mappy.prototype.constructor, // preserve constructor

    /**
     * @memberOf Mappy.prototype
     * @param key
     * @param value
     */
    set: function(key, value) {
        var hashCode = hash(key);
        if (!(hashCode in this.data)) {
            this.keys.push(key);
            this.values.push(value);
        }
        this.data[hashCode] = value;
    },

    /**
     * @memberOf Mappy.prototype
     * @param key
     * @returns {*}
     */
    get: function(key) {
        var hashCode = hash(key);
        return this.data[hashCode];
    },

    /**
     *
     * @memberOf Mappy.prototype
     * @param key
     * @param {function} ifUndefinedFunc - Value getter when value is otherwise undefined.
     * @returns {*}
     */
    getIfUndefined: function(key, ifUndefinedFunc) {
        var value = this.get(key);
        if (value === undefined) {
            value = ifUndefinedFunc(key);
            this.set(key, value);
        }
        return value;
    },

    size: function() {
        return this.keys.length;
    },

    /**
     * @memberOf Mappy.prototype
     */
    clear: function() {
        this.keys.length = 0;
        this.values.length = 0;
        this.data = {};
    },

    /**
     * @memberOf Mappy.prototype
     * @param key
     */
    delete: function(key) {
        var hashCode = hash(key);
        if (this.data[hashCode] !== undefined) {
            var index = betterIndexOf(this.keys, key);
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
            delete this.data[hashCode];
        }
    },

    /**
     * @memberOf Mappy.prototype
     * @param {function} iteratee
     */
    forEach: function(iteratee) {
        if (typeof iteratee === 'function') {
            var keys = this.keys,
                self = this;
            keys.forEach(function(key) {
                var value = self.get(key);
                iteratee(value, key, self);
            });
        }
    },

    /**
     * @memberOf Mappy.prototype
     * @param {function} iteratee
     * @returns {Mappy}
     */
    map: function(iteratee) {
        var keys = this.keys,
            newMap = new Mappy(),
            self = this;

        if (!(typeof iteratee === 'function')) {
            iteratee = reflection;
        }

        keys.forEach(function(key) {
            var value = self.get(key),
                transformed = iteratee(value, key, self);
            newMap.set(key, transformed);
        });
        return newMap;
    },

    /**
     * @memberOf Mappy.prototype
     * @returns {Mappy}
     */
    copy: function() {
        var keys = this.keys,
            newMap = new Mappy(),
            self = this;
        keys.forEach(function(key) {
            var value = self.get(key);
            newMap.set(key, value);
        });
        return newMap;
    }

};

var OID_PREFIX = '.~.#%_'; //this should be something we never will see at the beginning of a string
var counter = 0;

function hash(key) {
    var typeOf = typeof key;

    switch (typeOf) {
        case 'number':
        case 'string':
        case 'boolean':
        case 'symbol':
            return OID_PREFIX + typeOf + '_' + key;

        case 'undefined':
            return 'UNDEFINED';

        case 'object':
            if (key === null) {
                return 'NULL';
            }
            // fall through when not null:
        case 'function':
            return (key.___finhash = key.___finhash || OID_PREFIX + counter++);
    }
}

// Object.is polyfill, courtesy of @WebReflection
var is = Object.is || function(a, b) {
    return a === b ? a !== 0 || 1 / a == 1 / b : a != a && b != b; // eslint-disable-line eqeqeq
};

function reflection(val) {
    return val;
}

// More reliable indexOf, courtesy of @WebReflection
function betterIndexOf(arr, value) {
    if (value != value || value === 0) { // eslint-disable-line eqeqeq
        var i = arr.length;
        while (i-- && !is(arr[i], value)) {
            // eslint-disable-line no-empty
        }
    } else {
        i = [].indexOf.call(arr, value);
    }
    return i;
}

module.exports = Mappy;

},{}],45:[function(require,module,exports){
'use strict';

/**
 * @module aggregations
 */

/**
 * @typedef {function} aggregationFunction
 * @summary A bound function.
 * @desc An aggregation function bound to the `columnIndex` value supplied to one of the above factory functions.
 * @param {object} group
 * @returns {*} Aggregated value.
 */

module.exports = {
    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    count: function(columnIndex) {
        return count;
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    sum: function(columnIndex) {
        return sum.bind(this, columnIndex);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    min: function(columnIndex) {
        return minmax.bind(this, columnIndex, Math.min, Infinity);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    max: function(columnIndex) {
        return minmax.bind(this, columnIndex, Math.max, -Infinity);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    avg: function(columnIndex) {
        return avg.bind(this, columnIndex);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    first: function(columnIndex) {
        return first.bind(this, columnIndex);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    last: function(columnIndex) {
        return last.bind(this, columnIndex);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    stddev: function(columnIndex) {
        return stddev.bind(this, columnIndex);
    }
};

function count(group) {
    return group.getRowCount();
}

function sum(columnIndex, group) {
    var r = group.getRowCount(),
        n = 0;

    while (r--) {
        n += group.getValue(columnIndex, r);
    }

    return n;
}

function minmax(columnIndex, method, n, group) {
    var r = group.getRowCount();

    while (r--) {
        n = method(n, group.getValue(columnIndex, r));
    }

    return n;
}

function avg(columnIndex, group) {
    return sum(columnIndex, group) / group.getRowCount();
}

function first(columnIndex, group) {
    return group.getValue(columnIndex, 0);
}

function last(columnIndex, group) {
    return group.getValue(columnIndex, group.getRowCount() - 1);
}

function stddev(columnIndex, group) {
    var rows = group.getRowCount(),
        mean = avg(columnIndex, group);

    for (var dev, r = rows, variance = 0; r--; variance += dev * dev) {
        dev = group.getValue(columnIndex, r) - mean;
    }

    return Math.sqrt(variance / rows);
}

},{}],46:[function(require,module,exports){
'use strict';

// NOTE: For backwards compatibility, `capitalize` is still a function, doubling now as the API.

function capitalize(string) {
    return (/[a-z]/.test(string) ? string : string.toLowerCase())
        .replace(/[\s\-_]*([^\s\-_])([^\s\-_]+)/g, replacer)
        .replace(/[A-Z]/g, ' $&')
        .trim();
}

function replacer(a, b, c) {
    return b.toUpperCase() + c;
}

function set(methodName) {
    capitalize.transform = capitalize[methodName];
}

function passthrough(string) {
    return string;
}

capitalize.transform = passthrough;
capitalize.set = set;
capitalize.passthrough = passthrough;
capitalize.capitalize = capitalize;

module.exports = capitalize;

},{}],47:[function(require,module,exports){
'use strict';

/**
 * Note that {@link module:stableSort#sort|sort()} is the only exposed method.
 * @module stableSort
 */

/**
 * @private
 * @instance
 * @param {function} comparator
 * @param {boolean} descending
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {function}
 */
function stabilize(comparator, descending, arr1, arr2) { // eslint-disable-line no-shadow
    var x = arr1[0];
    var y = arr2[0];

    if (x === y) {
        x = descending ? arr2[1] : arr1[1];
        y = descending ? arr1[1] : arr2[1];
    } else {
        if (y === null) {
            return -1;
        }
        if (x === null) {
            return 1;
        }
    }

    return comparator(x, y);
}

/**
 * @private
 * @instance
 * @param x
 * @param y
 * @returns {number}
 */
function ascendingNumbers(x, y) {
    return x - y;
}

/**
 * @private
 * @instance
 * @param x
 * @param y
 * @returns {number}
 */
function descendingNumbers(x, y) {
    return y - x;
}

/**
 * @private
 * @instance
 * @param x
 * @param y
 * @returns {number}
 */
function ascendingAllOthers(x, y) {
    return x < y ? -1 : 1;
}

/**
 * @private
 * @instance
 * @param x
 * @param y
 * @returns {number}
 */
function descendingAllOthers(x, y) {
    return y < x ? -1 : 1;
}

/**
 * @private
 * @instance
 * @param typeOfData
 * @returns {function(this:ascending)}
 */
function ascending(typeOfData) {
    return stabilize.bind(this, typeOfData === 'number' ? ascendingNumbers : ascendingAllOthers, false);
}

/**
 * @private
 * @instance
 * @param typeOfData
 * @returns {function(this:descending)}
 */
function descending(typeOfData) {
    return stabilize.bind(this, typeOfData === 'number' ? descendingNumbers : descendingAllOthers, true);
}

/**
 * @instance
 * @param {number} index
 * @param {function} getValue
 * @param {number} [direction=1]
 */
function sort(index, getValue, direction) {

    var compare, i;

    // apply defaults
    if (direction === undefined) {
        direction = 1;
    }

    if (index.length) { // something to do
        switch (direction) {
            case 0:
                return; // bail: nothing to sort

            case undefined: // eslint-disable-line no-fallthrough
                direction = 1;
            case 1:  // eslint-disable-line no-fallthrough
                compare = ascending(typeof getValue(0));
                break;

            case -1:
                compare = descending(typeof getValue(0));
                break;
        }

        // set up the sort.....
        var tmp = new Array(index.length);

        // add the index for "stability"
        for (i = 0; i < index.length; i++) {
            tmp[i] = [getValue(i), i];
        }

        // do the actual sort
        tmp.sort(compare);

        // copy the sorted values into our index vector
        for (i = 0; i < index.length; i++) {
            index[i] = tmp[i][1];
        }
    }

}

exports.sort = sort;

},{}],48:[function(require,module,exports){
// list-dragon node module
// https://github.com/joneit/list-dragon

/* eslint-env node, browser */

'use strict';

var cssInjector = require('css-injector');
var format = require('templex');

var REVERT_TO_STYLESHEET_VALUE = null;  // null removes the style

var transform, timer, scrollVelocity, cssListDragon;

/* inject:css */
cssListDragon = 'div.dragon-list{position:relative;background-color:#fff}div.dragon-list>div,div.dragon-list>ul{position:absolute;left:0;right:0}div.dragon-list>div{text-align:center;background-color:#00796b;color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);overflow:hidden;white-space:nowrap}div.dragon-list>ul{overflow-y:auto;bottom:0;margin:0;padding:0;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}div.dragon-list>ul>li,li.dragon-pop{white-space:nowrap;list-style-type:none;border:0 solid #f4f4f4;border-bottom:1px solid #e0e0e0;cursor:move;transition:border-top-width .2s}div.dragon-list>ul>li:last-child{height:0;border-bottom:none}li.dragon-pop{position:fixed;background-color:#fff;border:1px solid #e0e0e0;left:0;top:0;overflow-x:hidden;box-shadow:rgba(0,0,0,.188235) 0 10px 20px,rgba(0,0,0,.227451) 0 6px 6px}';
/* endinject */

/**
 * @constructor ListDragon
 *
 * @desc This object services a set of item lists that allow dragging and dropping items within and between lists in a set.
 *
 * Two strategies are supported:
 *
 * 1. Supply your own HTML markup and let the API build the item models for you.
 *    To use this strategy, script your HTML and provide one of these:
 *    * an array of all the list item (`<li>`) tags
 *    * a CSS selector that points to all the list item tags
 * 2. Supply your own item models and let the API build the HTML markup for you.
 *    To use this strategy, provide an array of model lists.
 *
 * The new ListDragon object's `modelLists` property references the array of model lists the API constructed for you in strategy #1 or the array of model lists you supplied for strategy #2.
 *
 * After the user performs a successful drag-and-drop operation, the position of the model references within the `modelLists` array is rearranged. (The models themselves are the original objects as supplied in the model lists; they are not rebuilt or altered in any way. Just the references to them are moved around.)
 *
 * @param {string|Element[]|modelListType[]} selectorOrModelLists - You must supply one of the items in **bold** below:
 *
 * 1. _For strategy #1 above (API creates models from supplied elements):_ All the list item (`<li>`) DOM elements of all the lists you want the new object to manage, as either:
 *    1. **A CSS selector;** _or_
 *    2. **An array of DOM elements**
 * 2. _For strategy #2 above (API creates elements from supplied models):_ **An array of model lists,** each of which is in one of the following forms:
 *    1. An array of item models (with various option properties hanging off of it); _and/or_
 *    2. A {@link modelListType} object with those same various option properties including the required `models` property containing that same array of item models.
 *
 * In either case (2.1 or 2.2), each element of such arrays of item models may take the form of:
 * * A string primitive; _or_
 * * A {@link itemModelType} object with a various option properties including the required `label` property containing a string primitive.
 *
 * Regarding these string primitives, each is either:
 * * A string to be displayed in the list item; _or_
 * * A format string with other property values merged in, the result of which is to be displayed in the list item.
 *
 * @param {object} [options={}] - You may supply "global" template variables here, representing the "outer scope," after first searching each model and then each model list.
 * @param {undefined|null|Element|string} [cssStylesheetReferenceElement] - Determines where to insert the stylesheet. (This is the only formal option.) Passed to css-injector, the overloads are (from css-injector docs):
 * * `undefined` type (or omitted): injects stylesheet at top of `<head>...</head>` element
 * * `null` value: injects stylesheet at bottom of `<head>...</head>` element
 * * `Element` type: injects stylesheet immediately before given element, wherever it is found.
 * * `string` type: injects stylesheet immediately before given first element found that matches the given css selector.
 */
function ListDragon(selectorOrModelLists, options) {

    if (!(this instanceof ListDragon)) {
        throw error('Not called with "new" keyword.');
    }

    var self = this, modelLists, items;

    options = options || {};

    if (typeof selectorOrModelLists === 'string') {
        items = toArray(document.querySelectorAll(selectorOrModelLists));
        modelLists = createModelListsFromListElements(items);
    } else if (selectorOrModelLists[0] instanceof Element) {
        items = toArray(selectorOrModelLists);
        modelLists = createModelListsFromListElements(items);
    } else {
        // param is array of model lists
        // build new <ul> element(s) for each list and put in `.modelLists`;
        // fill `.items` array with <li> elements from these new <ul> elements
        items = [];
        modelLists = createListElementsFromModelLists(selectorOrModelLists, options);
        modelLists.forEach(function (list) {
            items = items.concat(toArray(list.element.querySelectorAll('li')));
        });
    }

    // grab wheel events and don't let 'em bubble
    modelLists.forEach(function (modelList) {
        modelList.element.addEventListener('wheel', captureEvent);
    });

    items.forEach(function (itemElement, index) {
        var item = (itemElement !== itemElement.parentElement.lastElementChild)
            ? self.addEvt(itemElement, 'mousedown', itemElement, true)
            : { element: itemElement };

        /* `item.model` not currently needed so commented out here.
         * (Originally used for rebuilding modelLists for final
         * reporting, modelLists are now spliced on every successful
         * drag-and-drop operation so they're always up to date.)

         var origin = this.itemCoordinates(itemElement);
         item.model = this.modelLists[origin.list].models[origin.item];

         */

        items[index] = item;
    });

    transform = 'transform' in items[0].element.style
        ? 'transform' // Chrome 45 and Firefox 40
        : '-webkit-transform'; // Safari 8

    // set up the new object
    this.modelLists = modelLists;
    this.items = items;
    this.bindings = {};
    this.callback = {};

    cssInjector(cssListDragon, 'list-dragon-base', options.cssStylesheetReferenceElement);

}

ListDragon.prototype = {

    addEvt: function (target, type, listener, doNotBind) {
        var binding = {
            handler: handlers[type].bind(target, this),
            element: listener || window
        };

        if (!doNotBind) {
            this.bindings[type] = binding;
        }

        binding.element.addEventListener(type, binding.handler);

        return binding;
    },

    removeEvt: function (type) {
        var binding = this.bindings[type];
        delete this.bindings[type];
        binding.element.removeEventListener(type, binding.handler);
    },

    removeAllEventListeners: function () {
        // remove drag & drop events (mousemove, mouseup, and transitionend)
        for (var type in this.bindings) {
            var binding = this.bindings[type];
            binding.element.removeEventListener(type, binding.handler);
        }
        // remove the mousedown events from all list items
        this.items.forEach(function (item) {
            if (item.handler) {
                item.element.removeEventListener('mousedown', item.handler);
            }
        });
        // wheel events on the list elements
        this.modelLists.forEach(function (modelList) {
            modelList.element.removeEventListener('wheel', captureEvent);
        });
    },

    pointInListRects: function (point) {
        return this.modelLists.find(function (modelList) {
            var rect = modelList.element.getBoundingClientRect();

            rect = {
                left:   window.scrollX + rect.left,
                top:    window.scrollY + rect.top,
                right:  window.scrollX + rect.right,
                bottom: window.scrollY + rect.bottom,
                width:  rect.width,
                height: rect.height
            };

            modelList.rect = rect;

            if (pointInRect(point, rect)) {
                modelList.rect = rect;
                return true; // found
            } else {
                return false;
            }
        });
    },

    pointInItemRects: function (point, except1, except2) {
        return this.items.find(function (item) {
            var element = item.element;
            return (
                element !== except1 &&
                element !== except2 &&
                pointInRect(point, item.rect)
            );
        });
    },

    // get positions of all list items in page coords (normalized for window and list scrolling)
    getAllItemBoundingRects: function () {
        var modelLists = this.modelLists, height;
        this.items.forEach(function (item) {
            var itemElement = item.element,
                listElement = itemElement.parentElement,
                list = modelLists.find(function (list) { return list.element === listElement; });

            if (
                // omitted: default to true
                list.isDropTarget === undefined ||

                // function: use return value
                typeof list.isDropTarget === 'function' && list.isDropTarget() ||

                // otherwise: use truthiness of given value
                list.isDropTarget
            ) {
                var rect = itemElement.getBoundingClientRect(),
                    bottom = rect.bottom;

                if (itemElement === listElement.lastElementChild) {
                    bottom = listElement.getBoundingClientRect().bottom;
                    if (bottom < rect.top) {
                        bottom = rect.top + (height || 50);
                    }
                } else {
                    height = rect.height;
                }

                rect = {
                    left:   window.scrollX + rect.left,
                    right:  window.scrollX + rect.right,
                    top:    window.scrollY + rect.top    + listElement.scrollTop,
                    bottom: window.scrollY + bottom + listElement.scrollTop
                };

                item.rect = rect;
            }
        });
    },

    reinsert: function (target) {
        var style = target.style;
        style.width = style[transform] = style.transition = REVERT_TO_STYLESHEET_VALUE;

        target.classList.remove('dragon-pop');

        this.drop.style.transitionDuration = '0s';
        this.drop.style.borderTopWidth = REVERT_TO_STYLESHEET_VALUE;
        this.drop.parentElement.insertBefore(target, this.drop);

        delete this.drop;
    },

    // return an object { item: <item index within list>, list: <list index within list of lists> }
    itemCoordinates: function (item) {
        var listElement = item.parentElement,
            coords = { item: 0 };

        while ((item = item.previousElementSibling)) {
            ++coords.item;
        }

        this.modelLists.find(function (list, index) {
            coords.list = index;
            return list.element === listElement; // stop when we find the one we belong to
        });

        return coords;
    }

};

var handlers = {
    mousedown: function (dragon, evt) {

        evt.stopPropagation();
        evt.preventDefault();  //prevents user selection of rendered nodes during drag

        if (dragon.drop) {
            return;
        }

        var rect = this.getBoundingClientRect();

        dragon.rect = rect = {
            left:   Math.round(rect.left - 1),
            top:    Math.round(rect.top - 1),
            right:  Math.round(rect.right),
            bottom: Math.round(rect.bottom),
            width:  Math.round(rect.width),
            height: Math.round(rect.height)
        };

        dragon.pin = {
            x: window.scrollX + evt.clientX,
            y: window.scrollY + evt.clientY
        };

        dragon.origin = dragon.itemCoordinates(this);

        if (dragon.callback.grabbed) {
            dragon.callback.grabbed.call(this, dragon);
        }

        dragon.getAllItemBoundingRects();

        dragon.drop = this.nextElementSibling;
        dragon.drop.style.transitionDuration = '0s';
        dragon.drop.style.borderTopWidth = rect.height + 'px';

        this.style.width = rect.width + 'px';
        this.style.transitionDuration = '0s';
        this.style[transform] = translate(
            rect.left - window.scrollX,
            rect.top  - window.scrollY
        );
        this.classList.add('dragon-pop');
        this.style.zIndex = window.getComputedStyle(dragon.modelLists[0].container.parentElement).zIndex;

        if (!dragon.container) {
            // walk back to closest shadow root OR body tag OR root tag
            var container = this;
            while (container.parentNode) {
                container = container.parentNode;
                if (
                    typeof ShadowRoot !== 'undefined' && container instanceof ShadowRoot ||
                    container.tagName === 'BODY'
                ){
                    break;
                }
            }
            dragon.container = container;
        }

        dragon.container.appendChild(this);

        rect.left   += window.scrollX;
        rect.top    += window.scrollY;
        rect.right  += window.scrollX;
        rect.bottom += window.scrollY;

        dragon.addEvt(this, 'mousemove');
        dragon.addEvt(this, 'mouseup');
    },

    mousemove: function (dragon, evt) {
        dragon.drop.style.transition = REVERT_TO_STYLESHEET_VALUE;

        var hoverList = dragon.pointInListRects({ x: evt.clientX, y: evt.clientY }) || dragon.mostRecentHoverList;

        if (hoverList) {
            var dx = evt.clientX - dragon.pin.x,
                dy = evt.clientY - dragon.pin.y;

            dragon.mostRecentHoverList = hoverList;

            var maxScrollY = hoverList.element.scrollHeight - hoverList.rect.height,
                y = evt.clientY + window.scrollY,
                magnitude;

            if (maxScrollY > 0) {
                // list is scrollable (is taller than rect)
                if (hoverList.element.scrollTop > 0 && (magnitude = y - (hoverList.rect.top + 5)) < 0) {
                    // mouse near or above top and list is not scrolled to top yet
                    resetAutoScrollTimer(magnitude, 0, hoverList.element);
                } else if (hoverList.element.scrollTop < maxScrollY && (magnitude = y - (hoverList.rect.bottom - 1 - 5)) > 0) {
                    // mouse near or below bottom and list not scrolled to bottom yet
                    resetAutoScrollTimer(magnitude, maxScrollY, hoverList.element);
                } else {
                    // mouse inside
                    resetAutoScrollTimer();
                }
            }

            var other = dragon.pointInItemRects({
                x: evt.clientX,
                y: dragon.rect.bottom + window.scrollY + dy + hoverList.element.scrollTop
            }, this, dragon.drop);

            this.style[transform] = translate(
                dragon.rect.left - window.scrollX + dx,
                dragon.rect.top - window.scrollY + dy
            );

            if (other) {
                var element = other.element;
                element.style.transition = REVERT_TO_STYLESHEET_VALUE;
                element.style.borderTopWidth = dragon.drop.style.borderTopWidth;
                dragon.drop.style.borderTopWidth = null;
                dragon.drop = element;
            }
        }
    },

    mouseup: function (dragon, evt) {
        resetAutoScrollTimer();
        dragon.removeEvt('mousemove');
        dragon.removeEvt('mouseup');

        evt.stopPropagation();

        var newRect = this.getBoundingClientRect();

        if (
            window.scrollX + newRect.left === dragon.rect.left &&
            window.scrollY + newRect.top === dragon.rect.top
        ) {
            dragon.reinsert(this);
        } else {
            var dropRect = dragon.drop.getBoundingClientRect();

            dragon.addEvt(this, 'transitionend', this);
            this.style.transitionDuration = REVERT_TO_STYLESHEET_VALUE; //reverts to 200ms
            this.style.transitionProperty = transform;
            this.style[transform] = translate(
                dropRect.left - window.scrollX,
                dropRect.top - window.scrollY
            );
        }
    },

    transitionend: function (dragon, evt) {
        if (evt.propertyName === transform) {
            dragon.removeEvt('transitionend');
            dragon.reinsert(this);

            this.style.transitionProperty = REVERT_TO_STYLESHEET_VALUE; //reverts to border-top-width

            var originList = dragon.modelLists[dragon.origin.list];
            var model = originList.splice(dragon.origin.item, 1)[0];
            var destination = dragon.itemCoordinates(this);
            var destinationList = dragon.modelLists[destination.list];
            var interListDrop = originList !== destinationList;
            var listChanged = interListDrop || dragon.origin.item !== destination.item;
            destinationList.splice(destination.item, 0, model);

            if (listChanged) {
                originList.element.dispatchEvent(new CustomEvent('listchanged'));
                if (interListDrop) {
                    destinationList.element.dispatchEvent(new CustomEvent('listchanged'));
                }
            }

            if (dragon.callback.dropped) {
                dragon.callback.dropped.call(this, dragon);
            }
        }
    }
};

function resetAutoScrollTimer(magnitude, limit, element) {
    if (!magnitude) {
        clearInterval(timer);
        scrollVelocity = 0;
    } else {
        var changeDirection =
            scrollVelocity  <  0 && magnitude  >= 0 ||
            scrollVelocity === 0 && magnitude !== 0 ||
            scrollVelocity  >  0 && magnitude  <= 0;
        scrollVelocity = magnitude > 0 ? Math.min(50, magnitude) : Math.max(-50, magnitude);
        if (changeDirection) {
            clearInterval(timer);
            timer = setInterval(function (limit) {
                var scrollTop = element.scrollTop + scrollVelocity;
                if (scrollVelocity < 0 && scrollTop < limit || scrollVelocity > 0 && scrollTop > limit) {
                    element.scrollTop = limit;
                    clearInterval(timer);
                } else {
                    element.scrollTop = scrollTop;
                }
            }, 125);
        }
    }
}

function toArray(arrayLikeObject) {
    return Array.prototype.slice.call(arrayLikeObject);
}

function pointInRect(point, rect) {
    return rect.top <= point.y && point.y <= rect.bottom
        && rect.left <= point.x && point.x <= rect.right;
}

function translate(left, top) {
    return 'translate('
        + Math.floor(left + window.scrollX) + 'px,'
        + Math.floor(top + window.scrollY) + 'px)';
}

function htmlEncode(string) {
    var textNode = document.createTextNode(string);

    return document
        .createElement('a')
        .appendChild(textNode)
        .parentNode
        .innerHTML;
}

/**
 * Creates `<ul>...</ul>` elements and inserts them into an `element` property on each model.
 * @param {object} modelLists
 * @returns `modelLists`
 */
function createListElementsFromModelLists(modelLists, options) {
    var templateLabel = options.label || '{label}';

    modelLists.forEach(function (modelList, listIndex) {
        var listLabel = modelList.label || templateLabel,
            listHtmlEncode = modelList.htmlEncode !== undefined && modelList.htmlEncode || options.htmlEncode,
            container = document.createElement('div'),
            listElement = document.createElement('ul');

        if (modelList.models) {
            Object.keys(modelList).forEach(function (key) {
                if (key !== 'models') {
                    modelList.models[key] = modelList[key];
                }
            });
            modelLists[listIndex] = modelList = modelList.models;
        } else if (modelList instanceof Array) {
            modelList.models = modelList; // point to self
        } else {
            throw error('List [{1}] not an array of models (with or without additional properties) OR ' +
                'an object (with a `models` property containing an array of models).', listIndex);
        }

        modelList.forEach(function (model) {
            var modelLabel = model.label || listLabel,
                modelHtmlEncode = model.htmlEncode !== undefined && model.htmlEncode || listHtmlEncode,
                modelObject = typeof model === 'object' ? model : { label: model},
                label = format.call([modelObject, modelList, options], modelLabel),
                itemElement = document.createElement('li');

            itemElement.innerHTML = modelHtmlEncode ? htmlEncode(label) : label;

            listElement.appendChild(itemElement);
        });

        // append the final "fencepost" item -- drop target at bottom of list after all items
        var itemElement = document.createElement('li');
        itemElement.innerHTML = '&nbsp;';
        listElement.appendChild(itemElement);

        // append header to container
        if (modelList.title) {
            var header = document.createElement('div');
            header.innerHTML = listHtmlEncode ? htmlEncode(modelList.title) : modelList.title;
            container.appendChild(header);
        }

        container.appendChild(listElement);
        container.className = modelList.cssClassNames || options.cssClassNames || 'dragon-list';
        modelList.element = listElement;
        modelList.container = container;
    });

    return modelLists;
}

/**
 * Create a `.modelLists` array with these <li> elements' parent <ul> elements
 * @param {Element[]} listItemElements
 * @returns {Array}
 */
function createModelListsFromListElements(listItemElements) {
    var modelLists = [];

    listItemElements.forEach(function (itemElement) {
        var listElement = itemElement.parentElement,
            container = listElement.parentElement,
            models = [];
        if (!modelLists.find(function (list) { return list.element === listElement; })) {
            toArray(listElement.querySelectorAll('li')).forEach(function (itemElement) {
                if (itemElement !== listElement.lastElementChild) {
                    models.push(itemElement.innerHTML);
                }
            });
            models.element = listElement;
            models.container = container;
            modelLists.push(models);
        }
    });

    return modelLists;
}

function captureEvent(evt) {
    evt.stopPropagation();
}

function error() {
    return 'list-dragon: ' + format.apply(this, Array.prototype.slice.call(arguments));
}

// this interface consists solely of the prototypal object constructor
module.exports = ListDragon;

},{"css-injector":6,"templex":57}],49:[function(require,module,exports){
;(function () { // closure for web browsers

if (typeof module === 'object' && module.exports) {
  module.exports = LRUCache
} else {
  // just set the global for non-node platforms.
  this.LRUCache = LRUCache
}

function hOP (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function naiveLength () { return 1 }

function LRUCache (options) {
  if (!(this instanceof LRUCache))
    return new LRUCache(options)

  if (typeof options === 'number')
    options = { max: options }

  if (!options)
    options = {}

  this._max = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!this._max || !(typeof this._max === "number") || this._max <= 0 )
    this._max = Infinity

  this._lengthCalculator = options.length || naiveLength
  if (typeof this._lengthCalculator !== "function")
    this._lengthCalculator = naiveLength

  this._allowStale = options.stale || false
  this._maxAge = options.maxAge || null
  this._dispose = options.dispose
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, "max",
  { set : function (mL) {
      if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
      this._max = mL
      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._max }
  , enumerable : true
  })

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, "lengthCalculator",
  { set : function (lC) {
      if (typeof lC !== "function") {
        this._lengthCalculator = naiveLength
        this._length = this._itemCount
        for (var key in this._cache) {
          this._cache[key].length = 1
        }
      } else {
        this._lengthCalculator = lC
        this._length = 0
        for (var key in this._cache) {
          this._cache[key].length = this._lengthCalculator(this._cache[key].value)
          this._length += this._cache[key].length
        }
      }

      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._lengthCalculator }
  , enumerable : true
  })

Object.defineProperty(LRUCache.prototype, "length",
  { get : function () { return this._length }
  , enumerable : true
  })


Object.defineProperty(LRUCache.prototype, "itemCount",
  { get : function () { return this._itemCount }
  , enumerable : true
  })

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  var i = 0
  var itemCount = this._itemCount

  for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {
    i++
    var hit = this._lruList[k]
    if (isStale(this, hit)) {
      del(this, hit)
      if (!this._allowStale) hit = undefined
    }
    if (hit) {
      fn.call(thisp, hit.value, hit.key, this)
    }
  }
}

LRUCache.prototype.keys = function () {
  var keys = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    keys[i++] = hit.key
  }
  return keys
}

LRUCache.prototype.values = function () {
  var values = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    values[i++] = hit.value
  }
  return values
}

LRUCache.prototype.reset = function () {
  if (this._dispose && this._cache) {
    for (var k in this._cache) {
      this._dispose(k, this._cache[k].value)
    }
  }

  this._cache = Object.create(null) // hash of items by key
  this._lruList = Object.create(null) // list of items in order of use recency
  this._mru = 0 // most recently used
  this._lru = 0 // least recently used
  this._length = 0 // number of items in the list
  this._itemCount = 0
}

LRUCache.prototype.dump = function () {
  var arr = []
  var i = 0

  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    if (!isStale(this, hit)) {
      //Do not store staled hits
      ++i
      arr.push({
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      });
    }
  }
  //arr has the most read first
  return arr
}

LRUCache.prototype.dumpLru = function () {
  return this._lruList
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this._maxAge
  var now = maxAge ? Date.now() : 0
  var len = this._lengthCalculator(value)

  if (hOP(this._cache, key)) {
    if (len > this._max) {
      del(this, this._cache[key])
      return false
    }
    // dispose of the old one before overwriting
    if (this._dispose)
      this._dispose(key, this._cache[key].value)

    this._cache[key].now = now
    this._cache[key].maxAge = maxAge
    this._cache[key].value = value
    this._length += (len - this._cache[key].length)
    this._cache[key].length = len
    this.get(key)

    if (this._length > this._max)
      trim(this)

    return true
  }

  var hit = new Entry(key, value, this._mru++, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this._max) {
    if (this._dispose) this._dispose(key, value)
    return false
  }

  this._length += hit.length
  this._lruList[hit.lu] = this._cache[key] = hit
  this._itemCount ++

  if (this._length > this._max)
    trim(this)

  return true
}

LRUCache.prototype.has = function (key) {
  if (!hOP(this._cache, key)) return false
  var hit = this._cache[key]
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var hit = this._lruList[this._lru]
  del(this, hit)
  return hit || null
}

LRUCache.prototype.del = function (key) {
  del(this, this._cache[key])
}

LRUCache.prototype.load = function (arr) {
  //reset the cache
  this.reset();

  var now = Date.now()
  //A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l-- ) {
    var hit = arr[l]
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      //the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      //dont add already expired items
      if (maxAge > 0) this.set(hit.k, hit.v, maxAge)
    }
  }
}

function get (self, key, doUse) {
  var hit = self._cache[key]
  if (hit) {
    if (isStale(self, hit)) {
      del(self, hit)
      if (!self._allowStale) hit = undefined
    } else {
      if (doUse) use(self, hit)
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale(self, hit) {
  if (!hit || (!hit.maxAge && !self._maxAge)) return false
  var stale = false;
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self._maxAge && (diff > self._maxAge)
  }
  return stale;
}

function use (self, hit) {
  shiftLU(self, hit)
  hit.lu = self._mru ++
  self._lruList[hit.lu] = hit
}

function trim (self) {
  while (self._lru < self._mru && self._length > self._max)
    del(self, self._lruList[self._lru])
}

function shiftLU (self, hit) {
  delete self._lruList[ hit.lu ]
  while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
}

function del (self, hit) {
  if (hit) {
    if (self._dispose) self._dispose(hit.key, hit.value)
    self._length -= hit.length
    self._itemCount --
    delete self._cache[ hit.key ]
    shiftLU(self, hit)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, lu, length, now, maxAge) {
  this.key = key
  this.value = value
  this.lu = lu
  this.length = length
  this.now = now
  if (maxAge) this.maxAge = maxAge
}

})()

},{}],50:[function(require,module,exports){
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.2.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));

},{}],51:[function(require,module,exports){
/* object-iterators.js - Mini Underscore library
 * by Jonathan Eiten
 *
 * The methods below operate on objects (but not arrays) similarly
 * to Underscore (http://underscorejs.org/#collections).
 *
 * For more information:
 * https://github.com/joneit/object-iterators
 */

'use strict';

/**
 * @constructor
 * @summary Wrap an object for one method call.
 * @Desc Note that the `new` keyword is not necessary.
 * @param {object|null|undefined} object - `null` or `undefined` is treated as an empty plain object.
 * @return {Wrapper} The wrapped object.
 */
function Wrapper(object) {
    if (object instanceof Wrapper) {
        return object;
    }
    if (!(this instanceof Wrapper)) {
        return new Wrapper(object);
    }
    this.originalValue = object;
    this.o = object || {};
}

/**
 * @name Wrapper.chain
 * @summary Wrap an object for a chain of method calls.
 * @Desc Calls the constructor `Wrapper()` and modifies the wrapper for chaining.
 * @param {object} object
 * @return {Wrapper} The wrapped object.
 */
Wrapper.chain = function (object) {
    var wrapped = Wrapper(object); // eslint-disable-line new-cap
    wrapped.chaining = true;
    return wrapped;
};

Wrapper.prototype = {
    /**
     * Unwrap an object wrapped with {@link Wrapper.chain|Wrapper.chain()}.
     * @return {object|null|undefined} The value originally wrapped by the constructor.
     * @memberOf Wrapper.prototype
     */
    value: function () {
        return this.originalValue;
    },

    /**
     * @desc Mimics Underscore's [each](http://underscorejs.org/#each) method: Iterate over the members of the wrapped object, calling `iteratee()` with each.
     * @param {function} iteratee - For each member of the wrapped object, this function is called with three arguments: `(value, key, object)`. The return value of this function is undefined; an `.each` loop cannot be broken out of (use {@link Wrapper#find|.find} instead).
     * @param {object} [context] - If given, `iteratee` is bound to this object. In other words, this object becomes the `this` value in the calls to `iteratee`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {Wrapper} The wrapped object for chaining.
     * @memberOf Wrapper.prototype
     */
    each: function (iteratee, context) {
        var o = this.o;
        Object.keys(o).forEach(function (key) {
            iteratee.call(this, o[key], key, o);
        }, context || o);
        return this;
    },

    /**
     * @desc Mimics Underscore's [find](http://underscorejs.org/#find) method: Look through each member of the wrapped object, returning the first one that passes a truth test (`predicate`), or `undefined` if no value passes the test. The function returns the value of the first acceptable member, and doesn't necessarily traverse the entire object.
     * @param {function} predicate - For each member of the wrapped object, this function is called with three arguments: `(value, key, object)`. The return value of this function should be truthy if the member passes the test and falsy otherwise.
     * @param {object} [context] - If given, `predicate` is bound to this object. In other words, this object becomes the `this` value in the calls to `predicate`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {*} The found property's value, or undefined if not found.
     * @memberOf Wrapper.prototype
     */
    find: function (predicate, context) {
        var o = this.o;
        var result;
        if (o) {
            result = Object.keys(o).find(function (key) {
                return predicate.call(this, o[key], key, o);
            }, context || o);
            if (result !== undefined) {
                result = o[result];
            }
        }
        return result;
    },

    /**
     * @desc Mimics Underscore's [filter](http://underscorejs.org/#filter) method: Look through each member of the wrapped object, returning the values of all members that pass a truth test (`predicate`), or empty array if no value passes the test. The function always traverses the entire object.
     * @param {function} predicate - For each member of the wrapped object, this function is called with three arguments: `(value, key, object)`. The return value of this function should be truthy if the member passes the test and falsy otherwise.
     * @param {object} [context] - If given, `predicate` is bound to this object. In other words, this object becomes the `this` value in the calls to `predicate`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {*} An array containing the filtered values.
     * @memberOf Wrapper.prototype
     */
    filter: function (predicate, context) {
        var o = this.o;
        var result = [];
        if (o) {
            Object.keys(o).forEach(function (key) {
                if (predicate.call(this, o[key], key, o)) {
                    result.push(o[key]);
                }
            }, context || o);
        }
        return result;
    },

    /**
     * @desc Mimics Underscore's [map](http://underscorejs.org/#map) method: Produces a new array of values by mapping each value in list through a transformation function (`iteratee`). The function always traverses the entire object.
     * @param {function} iteratee - For each member of the wrapped object, this function is called with three arguments: `(value, key, object)`. The return value of this function is concatenated to the end of the new array.
     * @param {object} [context] - If given, `iteratee` is bound to this object. In other words, this object becomes the `this` value in the calls to `predicate`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {*} An array containing the filtered values.
     * @memberOf Wrapper.prototype
     */
    map: function (iteratee, context) {
        var o = this.o;
        var result = [];
        if (o) {
            Object.keys(o).forEach(function (key) {
                result.push(iteratee.call(this, o[key], key, o));
            }, context || o);
        }
        return result;
    },

    /**
     * @desc Mimics Underscore's [reduce](http://underscorejs.org/#reduce) method: Boil down the values of all the members of the wrapped object into a single value. `memo` is the initial state of the reduction, and each successive step of it should be returned by `iteratee()`.
     * @param {function} iteratee - For each member of the wrapped object, this function is called with four arguments: `(memo, value, key, object)`. The return value of this function becomes the new value of `memo` for the next iteration.
     * @param {*} [memo] - If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
     * @param {object} [context] - If given, `iteratee` is bound to this object. In other words, this object becomes the `this` value in the calls to `iteratee`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {*} The value of `memo` "reduced" as per `iteratee`.
     * @memberOf Wrapper.prototype
     */
    reduce: function (iteratee, memo, context) {
        var o = this.o;
        if (o) {
            Object.keys(o).forEach(function (key, idx) {
                memo = (!idx && memo === undefined) ? o[key] : iteratee(memo, o[key], key, o);
            }, context || o);
        }
        return memo;
    },

    /**
     * @desc Mimics Underscore's [extend](http://underscorejs.org/#extend) method: Copy all of the properties in each of the `source` object parameter(s) over to the (wrapped) destination object (thus mutating it). It's in-order, so the properties of the last `source` object will override properties with the same name in previous arguments or in the destination object.
     * > This method copies own members as well as members inherited from prototype chain.
     * @param {...object|null|undefined} source - Values of `null` or `undefined` are treated as empty plain objects.
     * @return {Wrapper|object} The wrapped destination object if chaining is in effect; otherwise the unwrapped destination object.
     * @memberOf Wrapper.prototype
     */
    extend: function (source) {
        var o = this.o;
        Array.prototype.slice.call(arguments).forEach(function (object) {
            if (object) {
                for (var key in object) {
                    o[key] = object[key];
                }
            }
        });
        return this.chaining ? this : o;
    },

    /**
     * @desc Mimics Underscore's [extendOwn](http://underscorejs.org/#extendOwn) method: Like {@link Wrapper#extend|extend}, but only copies its "own" properties over to the destination object.
     * @param {...object|null|undefined} source - Values of `null` or `undefined` are treated as empty plain objects.
     * @return {Wrapper|object} The wrapped destination object if chaining is in effect; otherwise the unwrapped destination object.
     * @memberOf Wrapper.prototype
     */
    extendOwn: function (source) {
        var o = this.o;
        Array.prototype.slice.call(arguments).forEach(function (object) {
            Wrapper(object).each(function (val, key) { // eslint-disable-line new-cap
                o[key] = val;
            });
        });
        return this.chaining ? this : o;
    }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) { // eslint-disable-line no-extend-native
        if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

module.exports = Wrapper;

},{}],52:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var REGEXP_INDIRECTION = /^(\w+)\((\w+)\)$/;  // finds complete pattern a(b) where both a and b are regex "words"

/** @typedef {object} valueItem
 * You should supply both `name` and `alias` but you could omit one or the other and whichever you provide will be used for both.
 * > If you only give the `name` property, you might as well just give a string for {@link menuItem} rather than this object.
 * @property {string} [name=alias] - Value of `value` attribute of `<option>...</option>` element.
 * @property {string} [alias=name] - Text of `<option>...</option>` element.
 * @property {string} [type] One of the keys of `this.converters`. If not one of these (including `undefined`), field values will be tested with a string comparison.
 * @property {boolean} [hidden=false]
 */

/** @typedef {object|menuItem[]} submenuItem
 * @summary Hierarchical array of select list items.
 * @desc Data structure representing the list of `<option>...</option>` and `<optgroup>...</optgroup>` elements that make up a `<select>...</select>` element.
 *
 * > Alternate form: Instead of an object with a `menu` property containing an array, may itself be that array. Both forms have the optional `label` property.
 * @property {string} [label] - Defaults to a generated string of the form "Group n[.m]..." where each decimal position represents a level of the optgroup hierarchy.
 * @property {menuItem[]} submenu
 */

/** @typedef {string|valueItem|submenuItem} menuItem
 * May be one of three possible types that specify either an `<option>....</option>` element or an `<optgroup>....</optgroup>` element as follows:
 * * If a `string`, specifies the text of an `<option>....</option>` element with no `value` attribute. (In the absence of a `value` attribute, the `value` property of the element defaults to the text.)
 * * If shaped like a {@link valueItem} object, specifies both the text and value of an `<option....</option>` element.
 * * If shaped like a {@link submenuItem} object (or its alternate array form), specifies an `<optgroup>....</optgroup>` element.
 */

/**
 * @summary Builds a new menu pre-populated with items and groups.
 * @desc This function creates a new pop-up menu (a.k.a. "drop-down"). This is a `<select>...</select>` element, pre-populated with items (`<option>...</option>` elements) and groups (`<optgroup>...</optgroup>` elements).
 * > Bonus: This function also builds `input type=text` elements.
 * > NOTE: This function generates OPTGROUP elements for subtrees. However, note that HTML5 specifies that OPTGROUP elemnents made not nest! This function generates the markup for them but they are not rendered by most browsers, or not completely. Therefore, for now, do not specify more than one level subtrees. Future versions of HTML may support it. I also plan to add here options to avoid OPTGROUPS entirely either by indenting option text, or by creating alternate DOM nodes using `<li>` instead of `<select>`, or both.
 * @memberOf popMenu
 *
 * @param {Element|string} el - Must be one of (case-sensitive):
 * * text box - an `HTMLInputElement` to use an existing element or `'INPUT'` to create a new one
 * * drop-down - an `HTMLSelectElement` to use an existing element or `'SELECT'` to create a new one
 * * submenu - an `HTMLOptGroupElement` to use an existing element or `'OPTGROUP'` to create a new one (meant for internal use only)
 *
 * @param {menuItem[]} [menu] - Hierarchical list of strings to add as `<option>...</option>` or `<optgroup>....</optgroup>` elements. Omitting creates a text box.
 *
 * @param {null|string} [options.prompt=''] - Adds an initial `<option>...</option>` element to the drop-down with this value in parentheses as its `text`; and empty string as its `value`. Default is empty string, which creates a blank prompt; `null` suppresses prompt altogether.
 *
 * @param {boolean} [options.sort] - Whether to alpha sort or not. If truthy, sorts each optgroup on its `label`; and each select option on its text (its `alias` if given; or its `name` if not).
 *
 * @param {string[]} [options.blacklist] - Optional list of menu item names to be ignored.
 *
 * @param {number[]} [options.breadcrumbs] - List of option group section numbers (root is section 0). (For internal use.)
 *
 * @param {boolean} [options.append=false] - When `el` is an existing `<select>` Element, giving truthy value adds the new children without first removing existing children.
 *
 * @returns {Element} Either a `<select>` or `<optgroup>` element.
 */
function build(el, menu, options) {
    options = options || {};

    var prompt = options.prompt,
        blacklist = options.blacklist,
        sort = options.sort,
        breadcrumbs = options.breadcrumbs || [],
        path = breadcrumbs.length ? breadcrumbs.join('.') + '.' : '',
        subtreeName = popMenu.subtree,
        groupIndex = 0,
        tagName;

    if (el instanceof Element) {
        tagName = el.tagName;
        if (!options.append) {
            el.innerHTML = ''; // remove all <option> and <optgroup> elements
        }
    } else {
        tagName = el;
        el = document.createElement(tagName);
    }

    if (menu) {
        var add, newOption;
        if (tagName === 'SELECT') {
            add = el.add;
            if (prompt) {
                newOption = new Option(prompt, '');
                newOption.innerHTML += '&hellip;';
                el.add(newOption);
            } else if (prompt !== null) {
                el.add(new Option());
            }
        } else {
            add = el.appendChild;
            el.label = prompt;
        }

        if (sort) {
            menu = menu.slice().sort(itemComparator); // sorted clone
        }

        menu.forEach(function(item) {
            // if item is of form a(b) and there is an function a in options, then item = options.a(b)
            if (options && typeof item === 'string') {
                var indirection = item.match(REGEXP_INDIRECTION);
                if (indirection) {
                    var a = indirection[1],
                        b = indirection[2],
                        f = options[a];
                    if (typeof f === 'function') {
                        item = f(b);
                    } else {
                        throw 'build: Expected options.' + a + ' to be a function.';
                    }
                }
            }

            var subtree = item[subtreeName] || item;
            if (subtree instanceof Array) {

                var groupOptions = {
                    breadcrumbs: breadcrumbs.concat(++groupIndex),
                    prompt: item.label || 'Group ' + path + groupIndex,
                    options: sort,
                    blacklist: blacklist
                };

                var optgroup = build('OPTGROUP', subtree, groupOptions);

                if (optgroup.childElementCount) {
                    el.appendChild(optgroup);
                }

            } else if (typeof item !== 'object') {

                if (!(blacklist && blacklist.indexOf(item) >= 0)) {
                    add.call(el, new Option(item));
                }

            } else if (!item.hidden) {

                var name = item.name || item.alias;
                if (!(blacklist && blacklist.indexOf(name) >= 0)) {
                    add.call(el, new Option(
                        item.alias || item.name,
                        name
                    ));
                }

            }
        });
    } else {
        el.type = 'text';
    }

    return el;
}

function itemComparator(a, b) {
    a = a.alias || a.name || a.label || a;
    b = b.alias || b.name || b.label || b;
    return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * @summary Recursively searches the context array of `menuItem`s for a named `item`.
 * @memberOf popMenu
 * @this Array
 * @param {object} [options]
 * @param {string} [options.keys=[popMenu.defaultKey]] - Properties to search each menuItem when it is an object.
 * @param {boolean} [options.caseSensitive=false] - Ignore case while searching.
 * @param {string} value - Value to search for.
 * @returns {undefined|menuItem} The found item or `undefined` if not found.
 */
function lookup(options, value) {
    if (arguments.length === 1) {
        value = options;
        options = undefined;
    }

    var shallow, deep, item, prop,
        keys = options && options.keys || [popMenu.defaultKey],
        caseSensitive = options && options.caseSensitive;

    value = toString(value, caseSensitive);

    shallow = this.find(function(item) {
        var subtree = item[popMenu.subtree] || item;

        if (subtree instanceof Array) {
            return (deep = lookup.call(subtree, options, value));
        }

        if (typeof item !== 'object') {
            return toString(item, caseSensitive) === value;
        } else {
            for (var i = 0; i < keys.length; ++i) {
                prop = item[keys[i]];
                if (prop && toString(prop, caseSensitive) === value) {
                    return true;
                }
            }
        }
    });

    item = deep || shallow;

    return item && (item.name ? item : { name: item });
}

function toString(s, caseSensitive) {
    var result = '';
    if (s) {
        result += s; // convert s to string
        if (!caseSensitive) {
            result = result.toUpperCase();
        }
    }
    return result;
}

/**
 * @summary Recursively walks the context array of `menuItem`s and calls `iteratee` on each item therein.
 * @desc `iteratee` is called with each item (terminal node) in the menu tree and a flat 0-based index. Recurses on member with name of `popMenu.subtree`.
 *
 * The node will always be a {@link valueItem} object; when a `string`, it is boxed for you.
 *
 * @memberOf popMenu
 *
 * @this Array
 *
 * @param {function} iteratee - For each item in the menu, `iteratee` is called with:
 * * the `valueItem` (if the item is a primative string, it is wrapped up for you)
 * * a 0-based `ordinal`
 *
 * The `iteratee` return value can be used to replace the item, as follows:
 * * `undefined` - do nothing
 * * `null` - splice out the item; resulting empty submenus are also spliced out (see note)
 * * anything else - replace the item with this value; if value is a subtree (i.e., an array) `iteratee` will then be called to walk it as well (see note)
 *
 * > Note: Returning anything (other than `undefined`) from `iteratee` will (deeply) mutate the original `menu` so you may want to copy it first (deeply, including all levels of array nesting but not the terminal node objects).
 *
 * @returns {number} Number of items (terminal nodes) in the menu tree.
 */
function walk(iteratee) {
    var menu = this,
        ordinal = 0,
        subtreeName = popMenu.subtree,
        i, item, subtree, newVal;

    for (i = menu.length - 1; i >= 0; --i) {
        item = menu[i];
        subtree = item[subtreeName] || item;

        if (!(subtree instanceof Array)) {
            subtree = undefined;
        }

        if (!subtree) {
            newVal = iteratee(item.name ? item : { name: item }, ordinal);
            ordinal += 1;

            if (newVal !== undefined) {
                if (newVal === null) {
                    menu.splice(i, 1);
                    ordinal -= 1;
                } else {
                    menu[i] = item = newVal;
                    subtree = item[subtreeName] || item;
                    if (!(subtree instanceof Array)) {
                        subtree = undefined;
                    }
                }
            }
        }

        if (subtree) {
            ordinal += walk.call(subtree, iteratee);
            if (subtree.length === 0) {
                menu.splice(i, 1);
                ordinal -= 1;
            }
        }
    }

    return ordinal;
}

/**
 * @summary Format item name with it's alias when available.
 * @memberOf popMenu
 * @param {string|valueItem} item
 * @returns {string} The formatted name and alias.
 */
function formatItem(item) {
    var result = item.name || item;
    if (item.alias) {
        result = '"' + item.alias + '" (' + result + ')';
    }
    return result;
}


function isGroupProxy(s) {
    return REGEXP_INDIRECTION.test(s);
}

/**
 * @namespace
 */
var popMenu = {
    build: build,
    walk: walk,
    lookup: lookup,
    formatItem: formatItem,
    isGroupProxy: isGroupProxy,
    subtree: 'submenu',
    defaultKey: 'name'
};

module.exports = popMenu;

},{}],53:[function(require,module,exports){
'use strict';

/* eslint-env node, browser */

/**
 * Creates a new read-only property and attaches it to the provided context.
 * @private
 * @param {string} name - Name for new property.
 * @param {*} [value] - Value of new property.
 */
function addReadOnlyProperty(name, value) {
    Object.defineProperty(this, name, {
        value: value,
        writable: false,
        enumerable: true,
        configurable: false
    });
}

/**
 * @constructor Point
 *
 * @desc This object represents a single point in an abstract 2-dimensional matrix.
 *
 * The unit of measure is typically pixels.
 * (If used to model computer graphics, vertical coordinates are typically measured downwards
 * from the top of the window. This convention however is not inherent in this object.)
 *
 * Note: This object should be instantiated with the `new` keyword.
 *
 * @param {number} x - the new point's `x` property
 * @param {number} y - the new point's `y` property
 */
function Point(x, y) {

    /**
     * @name x
     * @type {number}
     * @summary This point's horizontal coordinate.
     * @desc Created upon instantiation by the {@link Point|constructor}.
     * @memberOf Point.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'x', Number(x) || 0);

    /**
     * @name y
     * @type {number}
     * @summary This point's vertical coordinate.
     * @desc Created upon instantiation by the {@link Point|constructor}.
     * @memberOf Point.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'y', Number(y) || 0);

}

Point.prototype = {

    /**
     * @returns {Point} A new point which is this point's position increased by coordinates of given `offset`.
     * @param {Point} offset - Horizontal and vertical values to add to this point's coordinates.
     * @memberOf Point.prototype
     */
    plus: function(offset) {
        return new Point(
            this.x + offset.x,
            this.y + offset.y
        );
    },

    /**
     * @returns {Point} A new point which is this point's position increased by given offsets.
     * @param {number} [offsetX=0] - Value to add to this point's horizontal coordinate.
     * @param {number} [offsetY=0] - Value to add to this point's horizontal coordinate.
     * @memberOf Point.prototype
     */
    plusXY: function(offsetX, offsetY) {
        return new Point(
            this.x + (offsetX || 0),
            this.y + (offsetY || 0)
        );
    },

    /**
     * @returns {Point} A new point which is this point's position decreased by coordinates of given `offset`.
     * @param {Point} offset - Horizontal and vertical values to subtract from this point's coordinates.
     * @memberOf Point.prototype
     */
    minus: function(offset) {
        return new Point(
            this.x - offset.x,
            this.y - offset.y
        );
    },

    /**
     * @returns {Point} A new `Point` positioned to least x and least y of this point and given `offset`.
     * @param {Point} point - A point to compare to this point.
     * @memberOf Point.prototype
     */
    min: function(point) {
        return new Point(
            Math.min(this.x, point.x),
            Math.min(this.y, point.y)
        );
    },

    /**
     * @returns {Point} A new `Point` positioned to greatest x and greatest y of this point and given `point`.
     * @param {Point} point - A point to compare to this point.
     * @memberOf Point.prototype
     */
    max: function(point) {
        return new Point(
            Math.max(this.x, point.x),
            Math.max(this.y, point.y)
        );
    },

    /**
     * @returns {number} Distance between given `point` and this point using Pythagorean Theorem formula.
     * @param {Point} point - A point from which to compute the distance to this point.
     * @memberOf Point.prototype
     */
    distance: function(point) {
        var deltaX = point.x - this.x,
            deltaY = point.y - this.y;

        return Math.sqrt(
            deltaX * deltaX +
            deltaY * deltaY
        );
    },

    /**
     * _(Formerly: `equal`.)_
     * @returns {boolean} `true` iff _both_ coordinates of this point are exactly equal to those of given `point`.
     * @param {Point} point - A point to compare to this point.
     * @memberOf Point.prototype
     */
    equals: function(point) {
        var result = false;

        if (point) {
            result =
                this.x === point.x &&
                this.y === point.y;
        }

        return result;
    },

    /**
     * @returns {boolean} `true` iff _both_ coordinates of this point are greater than those of given `point`.
     * @param {Point} point - A point to compare to this point
     * @memberOf Point.prototype
     */
    greaterThan: function(point) {
        return (
            this.x > point.x &&
            this.y > point.y
        );
    },

    /**
     * @returns {boolean} `true` iff _both_ coordinates of this point are less than those of given `point`.
     * @param {Point} point - A point to compare to this point
     * @memberOf Point.prototype
     */
    lessThan: function(point) {
        return (
            this.x < point.x &&
            this.y < point.y
        );
    },

    /**
     * _(Formerly `greaterThanEqualTo`.)_
     * @returns {boolean} `true` iff _both_ coordinates of this point are greater than or equal to those of given `point`.
     * @param {Point} point - A point to compare to this point
     * @memberOf Point.prototype
     */
    greaterThanOrEqualTo: function(point) {
        return (
            this.x >= point.x &&
            this.y >= point.y
        );
    },

    /**
     * _(Formerly `lessThanEqualTo`.)_
     * @returns {boolean} `true` iff _both_ coordinates of this point are less than or equal to those of given `point`.
     * @param {Point} point - A point to compare to this point.
     * @memberOf Point.prototype
     */
    lessThanOrEqualTo: function(point) {
        return (
            this.x <= point.x &&
            this.y <= point.y
        );
    },

    /**
     * _(Formerly `isContainedWithinRectangle`.)_
     * @param rect {Rectangle} - Rectangle to test this point against.
     * @returns {boolean} `true` iff this point is within given `rect`.
     * @memberOf Point.prototype
     */
    within: function(rect) {
        var minX = rect.origin.x,
            maxX = minX + rect.extent.x;
        var minY = rect.origin.y,
            maxY = minY + rect.extent.y;

        if (rect.extent.x < 0) {
            minX = maxX;
            maxX = rect.origin.x;
        }

        if (rect.extent.y < 0) {
            minY = maxY;
            maxY = rect.origin.y;
        }

        return (
            minX <= this.x && this.x < maxX &&
            minY <= this.y && this.y < maxY
        );
    }
};

Point.prototype.EQ = Point.prototype.equals;
Point.prototype.GT = Point.prototype.greaterThan;
Point.prototype.LT = Point.prototype.lessThan;
Point.prototype.GE = Point.prototype.greaterThanOrEqualTo;
Point.prototype.LE = Point.prototype.lessThanOrEqualTo;


/**
 * @constructor Rectangle
 *
 * @desc This object represents a rectangular area within an abstract 2-dimensional matrix.
 *
 * The unit of measure is typically pixels.
 * (If used to model computer graphics, vertical coordinates are typically measured downwards
 * from the top of the window. This convention however is not inherent in this object.)
 *
 * Normally, the `x` and `y` parameters to the constructor describe the upper left corner of the rect.
 * However, negative values of `width` and `height` will be added to the given `x` and `y`. That is,
 * a negative value of the `width` parameter will extend the rect to the left of the given `x` and
 * a negative value of the `height` parameter will extend the rect above the given `y`.
 * In any case, after instantiation the following are guaranteed to always be true:
 * * The `extent`, `width`, and `height` properties _always_ give positive values.
 * * The `origin`, `top`, and `left` properties _always_ reflect the upper left corner.
 * * The `corner`, `bottom`, and `right` properties _always_ reflect the lower right corner.
 *
 * Note: This object should be instantiated with the `new` keyword.
 *
 * @param {number} [x=0] - Horizontal coordinate of some corner of the rect.
 * @param {number} [y=0] - Vertical coordinate of some corner of the rect.
 * @param {number} [width=0] - Width of the new rect. May be negative (see above).
 * @param {number} [height=0] - Height of the new rect. May be negative (see above).
 */
function Rectangle(x, y, width, height) {

    x = Number(x) || 0;
    y = Number(y) || 0;
    width = Number(width) || 0;
    height = Number(height) || 0;

    if (width < 0) {
        x += width;
        width = -width;
    }

    if (height < 0) {
        y += height;
        height = -height;
    }

    /**
     * @name origin
     * @type {Point}
     * @summary Upper left corner of this rect.
     * @desc Created upon instantiation by the {@linkplain Rectangle|constructor}.
     * @memberOf Rectangle.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'origin', new Point(x, y));

    /**
     * @name extent
     * @type {Point}
     * @summary this rect's width and height.
     * @desc Unlike the other `Point` properties, `extent` is not a global coordinate pair; rather it consists of a _width_ (`x`, always positive) and a _height_ (`y`, always positive).
     *
     * This object might be more legitimately typed as something like `Area` with properties `width` and `height`; however we wanted it to be able to use it efficiently with a point's `plus` and `minus` methods (that is, without those methods having to check and branch on the type of its parameter).
     *
     * Created upon instantiation by the {@linkplain Rectangle|constructor}.
     * @see The {@link Rectangle#corner|corner} method.
     * @memberOf Rectangle.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'extent', new Point(width, height));

    /**
     * @name corner
     * @type {Point}
     * @summary Lower right corner of this rect.
     * @desc This is a calculated value created upon instantiation by the {@linkplain Rectangle|constructor}. It is `origin` offset by `extent`.
     *
     * **Note:** These coordinates actually point to the pixel one below and one to the right of the rect's actual lower right pixel.
     * @memberOf Rectangle.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'corner', new Point(x + width, y + height));

    /**
     * @name center
     * @type {Point}
     * @summary Center of this rect.
     * @desc Created upon instantiation by the {@linkplain Rectangle|constructor}.
     * @memberOf Rectangle.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'center', new Point(x + (width / 2), y + (height / 2)));

}

Rectangle.prototype = {

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Minimum vertical coordinate of this rect.
     * @memberOf Rectangle.prototype
     */
    get top() {
        return this.origin.y;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Minimum horizontal coordinate of this rect.
     * @memberOf Rectangle.prototype
     */
    get left() {
        return this.origin.x;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Maximum vertical coordinate of this rect + 1.
     * @memberOf Rectangle.prototype
     */
    get bottom() {
        return this.corner.y;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Maximum horizontal coordinate of this rect + 1.
     * @memberOf Rectangle.prototype
     */
    get right() {
        return this.corner.x;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Width of this rect (always positive).
     * @memberOf Rectangle.prototype
     */
    get width() {
        return this.extent.x;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Height of this rect (always positive).
     * @memberOf Rectangle.prototype
     */
    get height() {
        return this.extent.y;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Area of this rect.
     * @memberOf Rectangle.prototype
     */
    get area() {
        return this.width * this.height;
    },

    /**
     * @returns {Rectangle} A copy of this rect but with horizontal position reset to given `x` and no width.
     * @param {number} x - Horizontal coordinate of the new rect.
     * @memberOf Rectangle.prototype
     */
    flattenXAt: function(x) {
        return new Rectangle(x, this.origin.y, 0, this.extent.y);
    },

    /**
     * @returns {Rectangle} A copy of this rect but with vertical position reset to given `y` and no height.
     * @param {number} y - Vertical coordinate of the new rect.
     * @memberOf Rectangle.prototype
     */
    flattenYAt: function(y) {
        return new Rectangle(this.origin.x, y, this.extent.x, 0);
    },

    /**
     * @returns {boolean} `true` iff given `point` entirely contained within this rect.
     * @param {Point} pointOrRect - The point or rect to test for containment.
     * @memberOf Rectangle.prototype
     */
    contains: function(pointOrRect) {
        return pointOrRect.within(this);
    },

    /**
     * _(Formerly `isContainedWithinRectangle`.)_
     * @returns {boolean} `true` iff `this` rect is entirely contained within given `rect`.
     * @param {Rectangle} rect - Rectangle to test against this rect.
     * @memberOf Rectangle.prototype
     */
    within: function(rect) {
        return (
            rect.origin.lessThanOrEqualTo(this.origin) &&
            rect.corner.greaterThanOrEqualTo(this.corner)
        );
    },

    /**
     * _(Formerly: `insetBy`.)_
     * @returns {Rectangle} That is enlarged/shrunk by given `padding`.
     * @param {number} padding - Amount by which to increase (+) or decrease (-) this rect
     * @see The {@link Rectangle#shrinkBy|shrinkBy} method.
     * @memberOf Rectangle.prototype
     */
    growBy: function(padding) {
        return new Rectangle(
            this.origin.x + padding,
            this.origin.y + padding,
            this.extent.x - padding - padding,
            this.extent.y - padding - padding);
    },

    /**
     * @returns {Rectangle} That is enlarged/shrunk by given `padding`.
     * @param {number} padding - Amount by which to decrease (+) or increase (-) this rect.
     * @see The {@link Rectangle#growBy|growBy} method.
     * @memberOf Rectangle.prototype
     */
    shrinkBy: function(padding) {
        return this.growBy(-padding);
    },

    /**
     * @returns {Rectangle} Bounding rect that contains both this rect and the given `rect`.
     * @param {Rectangle} rect - The rectangle to union with this rect.
     * @memberOf Rectangle.prototype
     */
    union: function(rect) {
        var origin = this.origin.min(rect.origin),
            corner = this.corner.max(rect.corner),
            extent = corner.minus(origin);

        return new Rectangle(
            origin.x, origin.y,
            extent.x, extent.y
        );
    },

    /**
     * iterate over all points within this rect, invoking `iteratee` for each.
     * @param {function(number,number)} iteratee - Function to call for each point.
     * Bound to `context` when given; otherwise it is bound to this rect.
     * Each invocation of `iteratee` is called with two arguments:
     * the horizontal and vertical coordinates of the point.
     * @param {object} [context=this] - Context to bind to `iteratee` (when not `this`).
     * @memberOf Rectangle.prototype
     */
    forEach: function(iteratee, context) {
        context = context || this;
        for (var x = this.origin.x, x2 = this.corner.x; x < x2; x++) {
            for (var y = this.origin.y, y2 = this.corner.y; y < y2; y++) {
                iteratee.call(context, x, y);
            }
        }
    },

    /**
     * @returns {Rectangle} One of:
     * * _If this rect intersects with the given `rect`:_
     *      a new rect representing that intersection.
     * * _If it doesn't intersect and `ifNoneAction` defined:_
     *      result of calling `ifNoneAction`.
     * * _If it doesn't intersect and `ifNoneAction` undefined:_
     *      `null`.
     * @param {Rectangle} rect - The rectangle to intersect with this rect.
     * @param {function(Rectangle)} [ifNoneAction] - When no intersection, invoke and return result.
     * Bound to `context` when given; otherwise bound to this rect.
     * Invoked with `rect` as sole parameter.
     * @param {object} [context=this] - Context to bind to `ifNoneAction` (when not `this`).
     * @memberOf Rectangle.prototype
     */
    intersect: function(rect, ifNoneAction, context) {
        var result = null,
            origin = this.origin.max(rect.origin),
            corner = this.corner.min(rect.corner),
            extent = corner.minus(origin);

        if (extent.x > 0 && extent.y > 0) {
            result = new Rectangle(
                origin.x, origin.y,
                extent.x, extent.y
            );
        } else if (typeof ifNoneAction === 'function') {
            result = ifNoneAction.call(context || this, rect);
        }

        return result;
    },

    /**
     * @returns {boolean} `true` iff this rect overlaps with given `rect`.
     * @param {Rectangle} rect - The rectangle to intersect with this rect.
     * @memberOf Rectangle.prototype
     */
    intersects: function(rect) {
        return (
            rect.corner.x > this.origin.x &&
            rect.corner.y > this.origin.y &&
            rect.origin.x < this.corner.x &&
            rect.origin.y < this.corner.y
        );
    }
};

// Interface
exports.Point = Point;
exports.Rectangle = Rectangle;

},{}],54:[function(require,module,exports){
'use strict';

var // a regex search pattern that matches all the reserved chars of a regex search pattern
    reserved = /([\.\\\+\*\?\^\$\(\)\{\}\=\!\<\>\|\:\[\]])/g,

    // regex wildcard search patterns
    REGEXP_WILDCARD = '.*',
    REGEXP_WILDCHAR = '.',
    REGEXP_WILDCARD_MATCHER = '(' + REGEXP_WILDCARD + ')',

    // LIKE search patterns
    LIKE_WILDCHAR = '_',
    LIKE_WILDCARD = '%',

    // regex search patterns that match LIKE search patterns
    REGEXP_LIKE_PATTERN_MATCHER = new RegExp('(' + [
        LIKE_WILDCHAR,
        LIKE_WILDCARD,
        '\\[\\^?[^-\\]]+]', // matches a LIKE set (same syntax as a RegExp set)
        '\\[\\^?[^-\\]]\\-[^\\]]]' // matches a LIKE range (same syntax as a RegExp range)
    ].join('|') + ')', 'g');

function regExpLIKE(pattern, ignoreCase) {
    var i, parts;

    // Find all LIKE patterns
    parts = pattern.match(REGEXP_LIKE_PATTERN_MATCHER);

    if (parts) {
        // Translate found LIKE patterns to regex patterns, escaped intervening non-patterns, and interleave the two

        for (i = 0; i < parts.length; ++i) {
            // Escape left brackets (unpaired right brackets are OK)
            if (parts[i][0] === '[') {
                parts[i] = regExpLIKE.reserve(parts[i]);
            }

            // Make each found pattern matchable by enclosing in parentheses
            parts[i] = '(' + parts[i] + ')';
        }

        // Match these precise patterns again with their intervening non-patterns (i.e., text)
        parts = pattern.match(new RegExp(
            REGEXP_WILDCARD_MATCHER +
            parts.join(REGEXP_WILDCARD_MATCHER)  +
            REGEXP_WILDCARD_MATCHER
        ));

        // Discard first match of non-global search (which is the whole string)
        parts.shift();

        // For each re-found pattern part, translate % and _ to regex equivalent
        for (i = 1; i < parts.length; i += 2) {
            var part = parts[i];
            switch (part) {
                case LIKE_WILDCARD: part = REGEXP_WILDCARD; break;
                case LIKE_WILDCHAR: part = REGEXP_WILDCHAR; break;
                default:
                    var j = part[1] === '^' ? 2 : 1;
                    part = '[' + regExpLIKE.reserve(part.substr(j, part.length - (j + 1))) + ']';
            }
            parts[i] = part;
        }
    } else {
        parts = [pattern];
    }

    // For each surrounding text part, escape reserved regex chars
    for (i = 0; i < parts.length; i += 2) {
        parts[i] = regExpLIKE.reserve(parts[i]);
    }

    // Join all the interleaved parts
    parts = parts.join('');

    // Optimize or anchor the pattern at each end as needed
    if (parts.substr(0, 2) === REGEXP_WILDCARD) { parts = parts.substr(2); } else { parts = '^' + parts; }
    if (parts.substr(-2, 2) === REGEXP_WILDCARD) { parts = parts.substr(0, parts.length - 2); } else { parts += '$'; }

    // Return the new regex
    return new RegExp(parts, ignoreCase ? 'i' : undefined);
}

regExpLIKE.reserve = function (s) {
    return s.replace(reserved, '\\$1');
};

var cache, size;

/**
 * @summary Delete a pattern from the cache; or clear the whole cache.
 * @param {string} [pattern] - The LIKE pattern to remove from the cache. Fails silently if not found in the cache. If pattern omitted, clears whole cache.
 */
(regExpLIKE.clearCache = function (pattern) {
    if (!pattern) {
        cache = {};
        size = 0;
    } else if (cache[pattern]) {
        delete cache[pattern];
        size--;
    }
    return size;
})(); // init the cache

regExpLIKE.getCacheSize = function () { return size; };

/**
 * @summary Cached version of `regExpLIKE()`.
 * @desc Cached entries are subject to garbage collection if `keep` is `undefined` or `false` on insertion or `false` on most recent reference. Garbage collection will occur iff `regExpLIKE.cacheMax` is defined and it equals the number of cached patterns. The garbage collector sorts the patterns based on most recent reference; the oldest 10% of the entries are deleted. Alternatively, you can manage the cache yourself to a limited extent (see {@link regeExpLIKE.clearCache|clearCache}).
 * @param pattern - the LIKE pattern (to be) converted to a RegExp
 * @param [keep] - If given, changes the keep status for this pattern as follows:
 * * `true` permanently caches the pattern (not subject to garbage collection) until `false` is given on a subsequent call
 * * `false` allows garbage collection on the cached pattern
 * * `undefined` no change to keep status
 * @returns {RegExp}
 */
regExpLIKE.cached = function (keep, pattern, ignoreCase) {
    if (typeof keep === 'string') {
        ignoreCase = pattern;
        pattern = keep;
        keep = false;
    }
    var patternAndCase = pattern + (ignoreCase ? 'i' : 'c'),
        item = cache[patternAndCase];
    if (item) {
        item.when = new Date().getTime();
        if (keep !== undefined) {
            item.keep = keep;
        }
    } else {
        if (size === regExpLIKE.cacheMax) {
            var age = [], ages = 0, key, i;
            for (key in cache) {
                item = cache[key];
                if (!item.keep) {
                    for (i = 0; i < ages; ++i) {
                        if (item.when < age[i].item.when) {
                            break;
                        }
                    }
                    age.splice(i, 0, { key: key, item: item });
                    ages++;
                }
            }
            if (!age.length) {
                return regExpLIKE(pattern, ignoreCase); // cache is full!
            }
            i = Math.ceil(age.length / 10); // will always be at least 1
            size -= i;
            while (i--) {
                delete cache[age[i].key];
            }
        }
        item = cache[patternAndCase] = {
            regex: regExpLIKE(pattern, ignoreCase),
            keep: keep,
            when: new Date().getTime()
        };
        size++;
    }
    return item.regex;
};

module.exports = regExpLIKE;

},{}],55:[function(require,module,exports){
'use strict';

/* eslint-env node, browser */

(function (module) {  // eslint-disable-line no-unused-expressions

    // This closure supports NodeJS-less client side includes with <script> tags. See https://github.com/joneit/mnm.

    /**
     * @constructor RangeSelectionModel
     *
     * @desc This object models selection of "cells" within an abstract single-dimensional matrix.
     *
     * Disjoint selections can be built with calls to the following methods:
     * * {@link RangeSelectionModel#select|select(start, stop)} - Add a range to the matrix.
     * * {@link RangeSelectionModel#deselect|deselect(start, stop)} - Remove a range from the matrix.
     *
     * Two more methods are available:
     * * Test a cell to see if it {@link RangeSelectionModel#isSelected|isSelected(cell)}
     * * {@link RangeSelectionModel#clear|clear()} the matrix
     *
     * Internally, the selection is run-length-encoded. It is therefore a "sparse" matrix
     * with undefined bounds. A single data property called `selection` is an array that
     * contains all the "runs" (ranges) of selected cells albeit in no particular order.
     * This property should not normally need to be accessed directly.
     *
     * Note: This object should be instantiated with the `new` keyword.
     *
     * @returns {RangeSelectionModel} Self (i.e., `this` object).
     */
    function RangeSelectionModel() {
        /**
         * @name selection
         * @type {Array.Array.number}
         * @summary Unordered list of runs.
         * @desc A "run" is defined as an Array(2) where:
         * * element [0] is the beginning of the run
         * * element [1] is the end of the run (inclusive) and is always >= element [0]
         * The order of the runs within is undefined.
         * @memberOf RangeSelectionModel.prototype
         * @abstract
         */
        this.selection = [];

        //we need to be able to go back in time
        //the states field
        this.states = [];

        //clone and store my current state
        //so we can unwind changes if need be
        this.storeState = function () {
            var sels = this.selection;
            var state = [];
            var copy;
            for (var i = 0; i < sels.length; i++) {
                copy = [].concat(sels[i]);
                state.push(copy);
            }
            this.states.push(state);
        };
    }

    RangeSelectionModel.prototype = {

        /**
         * @summary Add a contiguous run of points to the selection.
         * @desc Insert a new run into `this.selection`.
         * The new run will be merged with overlapping and adjacent runs.
         *
         * The two parameters may be given in either order.
         * The start and stop elements in the resulting run will however always be ordered.
         * (However, note that the order of the runs within `this.selection` is itself always unordered.)
         *
         * Note that `this.selection` is updated in place, preserving validity of any external references.
         * @param {number} start - Start of run. May be greater than `stop`.
         * @param {number} [stop=stop] - End of run (inclusive). May be less than `start`.
         * @returns {RangeSelectionModel} Self (i.e., `this`), for chaining.
         * @memberOf RangeSelectionModel.prototype
         */
        select: function (start, stop) {
            this.storeState();
            var run = makeRun(start, stop);
            var splicer = [0, 1];
            this.selection.forEach(function (each) {
                if (overlaps(each, run) || abuts(each, run)) {
                    run = merge(each, run);
                } else {
                    splicer.push(each);
                }
            });
            splicer.push(run);
            splicer[1] = this.selection.length;
            this.selection.splice.apply(this.selection, splicer); // update in place to preserve external references
            return this;
        },

        /**
         * @summary Remove a contiguous run of points from the selection.
         * @desc Truncate and/or remove run(s) from `this.selection`.
         * Removing part of existing runs will (correctly) shorten them or break them into two fragments.
         *
         * The two parameters may be given in either order.
         *
         * Note that `this.selection` is updated in place, preserving validity of any external references.
         * @param {number} start - Start of run. May be greater than `stop`.
         * @param {number} [stop=stop] - End of run (inclusive). May be less than `start`.
         * @returns {RangeSelectionModel} Self (i.e., `this`), for chaining.
         * @memberOf RangeSelectionModel.prototype
         */
        deselect: function (start, stop) {
            var run = makeRun(start, stop);
            var splicer = [0, 0];
            this.selection.forEach(function (each) {
                if (overlaps(each, run)) {
                    var pieces = subtract(each, run);
                    splicer = splicer.concat(pieces);
                } else {
                    splicer.push(each);
                }
            });
            splicer[1] = this.selection.length;
            this.selection.splice.apply(this.selection, splicer); // update in place to preserve external references
            return this;
        },

        /**
         * @summary Empties `this.selection`, effectively removing all runs.
         * @returns {RangeSelectionModel} Self (i.e., `this`), for chaining.
         * @memberOf RangeSelectionModel.prototype
         */
        clear: function () {
            this.states.length = 0;
            this.selection.length = 0;
            return this;
        },

        clearMostRecentSelection: function () {
            if (this.states.length === 0) {
                return;
            }
            this.selection = this.states.pop();
        },

        /**
         * @summary Determines if the given `cell` is selected.
         * @returns {boolean} `true` iff given `cell` is within any of the runs in `this.selection`.
         * @param {number} cell - The cell to test for inclusion in the selection.
         * @memberOf RangeSelectionModel.prototype
         */
        isSelected: function (cell) {
            return this.selection.some(function (each) {
                return each[0] <= cell && cell <= each[1];
            });
        },

        isEmpty: function (){
            return this.selection.length === 0;
        },

        /**
         * @summary Return the indexes that are selected.
         * @desc Return the indexes that are selected.
         * @returns {Array.Array.number}
         * @memberOf RangeSelectionModel.prototype
         */
        getSelections: function (){
            var result = [];
            this.selection.forEach(function (each) {
                for (var i = each[0]; i <= each[1]; i++) {
                    result.push(i);
                }
            });
            result.sort(function (a, b){
                return a - b;
            });
            return result;
        }

    };

    /**
     * @private
     * @summary Preps `start` and `stop` params into order array
     * @function makeRun
     * @desc Utility function called by both `select()` and `deselect()`.
     * @param {number|number[]} start - Start of run. if array, `start` and `stop` are taken from first two elements.
     * @param {number} [stop=start] - End of run (inclusive).
     */
    function makeRun(start, stop) {
        return (
            start instanceof Array
                ? makeRun.apply(this, start) // extract params from given array
                : stop === undefined
                ? [ start, start ] // single param is a run that stops where it starts
                : start <= stop
                ? [ start, stop ]
                : [ stop, start ] // reverse descending params into ascending order
        );
    }

    /**
     * @private
     * @function overlaps
     * @returns {boolean} `true` iff `run1` overlaps `run2`
     * @summary Comparison operator that determines if given runs overlap with one another.
     * @desc Both parameters are assumed to be _ordered_ arrays.
     *
     * Overlap is defined to include the case where one run completely contains the other.
     *
     * Note: This operator is commutative.
     * @param {number[]} run1 - first run
     * @param {number[]} run2 - second run
     */
    function overlaps(run1, run2) {
        return (
            run1[0] <= run2[0] && run2[0] <= run1[1] || // run2's start is within run1 OR...
            run1[0] <= run2[1] && run2[1] <= run1[1] || // run2's stop is within run1 OR...
            run2[0] <  run1[0] && run1[1] <  run2[1]    // run2 completely contains run1
        );
    }

    /**
     * @private
     * @function abuts
     * @summary Comparison operator that determines if given runs are consecutive with one another.
     * @returns {boolean} `true` iff `run1` is consecutive with `run2`
     * @desc Both parameters are assumed to be _ordered_ arrays.
     *
     * Note: This operator is commutative.
     * @param {number[]} run1 - first run
     * @param {number[]} run2 - second run
     */
    function abuts(run1, run2) {
        return (
            run1[1] === run2[0] - 1 || // run1's top immediately precedes run2's start OR...
            run2[1] === run1[0] - 1    // run2's top immediately precedes run1's start
        );
    }

    /**
     * @private
     * @function subtract
     * @summary Operator that subtracts one run from another.
     * @returns {Array.Array.number} The remaining pieces of `minuend` after removing `subtrahend`.
     * @desc Both parameters are assumed to be _ordered_ arrays.
     *
     * This function _does not assumes_ that `overlap()` has already been called with the same runs and has returned `true`.
     *
     * Returned array contains 0, 1, or 2 runs which are the portion(s) of `minuend` that do _not_ include `subtrahend`.
     *
     * Caveat: This operator is *not* commutative.
     * @param {number[]} minuend - a run from which to "subtract" `subtrahend`
     * @param {number[]} subtrahend - a run to "subtracted" from `minuend`
     */
    function subtract(minuend, subtrahend) {
        var m0 = minuend[0];
        var m1 = minuend[1];
        var s0 = subtrahend[0];
        var s1 = subtrahend[1];
        var result = [];

        if (s0 <= m0 && s1 < m1) {
            //subtrahend extends before minuend: return remaining piece of `minuend`
            result.push([s1 + 1, m1]);
        } else if (s0 > m0 && s1 >= m1) {
            //subtrahend extends after minuend: return remaining piece of `minuend`
            result.push([m0, s0 - 1]);
        } else if (m0 < s0 && s1 < m1) {
            //completely inside: return 2 smaller pieces resulting from the hole
            result.push([m0, s0 - 1]);
            result.push([s1 + 1, m1]);
        } else if (s1 < m0 || s0 > m1) {
            // completely outside: return `minuend` untouched
            result.push(minuend);
        }

        //else subtrahend must completely overlap minuend so return no pieces

        return result;
    }


    // Local utility functions

    /**
     * @private
     * @function merge
     * @summary Operator that merges given runs.
     * @returns {number[]} A single merged run.
     * @desc Both parameters are assumed to be _ordered_ arrays.
     *
     * The runs are assumed to be overlapping or adjacent to one another.
     *
     * Note: This operator is commutative.
     * @param {number[]} run1 - a run to merge with `run2`
     * @param {number[]} run2 - a run to merge with `run1`
     */
    function merge(run1, run2) {
        var min = Math.min(Math.min.apply(Math, run1), Math.min.apply(Math, run2));
        var max = Math.max(Math.max.apply(Math, run1), Math.max.apply(Math, run2));
        return [min, max];
    }

    // Interface
    module.exports = RangeSelectionModel;
})(
    typeof module === 'object' && module || (window.RangeSelectionModel = {}),
    typeof module === 'object' && module.exports || (window.RangeSelectionModel.exports = {})
) || (
    typeof module === 'object' || (window.RangeSelectionModel = window.RangeSelectionModel.exports)
);

/* About the above IIFE:
 * This file is a "modified node module." It functions as usual in Node.js *and* is also usable directly in the browser.
 * 1. Node.js: The IIFE is superfluous but innocuous.
 * 2. In the browser: The IIFE closure serves to keep internal declarations private.
 * 2.a. In the browser as a global: The logic in the actual parameter expressions + the post-invocation expression
 * will put your API in `window.RangeSelectionModel`.
 * 2.b. In the browser as a module: If you predefine a `window.module` object, the results will be in `module.exports`.
 * The bower component `mnm` makes this easy and also provides a global `require()` function for referencing your module
 * from other closures. In either case, this works with both NodeJs-style export mechanisms -- a single API assignment,
 * `module.exports = yourAPI` *or* a series of individual property assignments, `module.exports.property = property`.
 *
 * Before the IIFE runs, the actual parameter expressions are executed:
 * 1. If `window` object undefined, we're in NodeJs so assume there is a `module` object with an `exports` property
 * 2. If `window` object defined, we're in browser
 * 2.a. If `module` object predefined, use it
 * 2.b. If `module` object undefined, create a `RangeSelectionModel` object
 *
 * After the IIFE returns:
 * Because it always returns undefined, the expression after the || will execute:
 * 1. If `window` object undefined, then we're in NodeJs so we're done
 * 2. If `window` object defined, then we're in browser
 * 2.a. If `module` object predefined, we're done; results are in `moudule.exports`
 * 2.b. If `module` object undefined, redefine`RangeSelectionModel` to be the `RangeSelectionModel.exports` object
 */

},{}],56:[function(require,module,exports){
// tabz node module
// https://github.com/joneit/tabz

/* eslint-env node, browser */

'use strict';

var cssInjector = require('css-injector');

/**
 * Register/deregister click handler on all tab collections.
 * @param {Element} [options.root=document] - Where to look for tab panels (`.tabz` elements) containing tabs and folders.
 * @param {boolean} [options.unhook=false] - Remove event listener from tab panels (`.tabz` elements).
 * @param {Element} [options.referenceElement] - Passed to cssInjector's insertBefore() call.
 * @param {string} [options.defaultTabSelector='.default-tab'] - .classname or #id of the tab to select by default
 * @param {object} [options.onEnable] - Handler implementation. See {@link Tabz#onEnable|onEnable}.
 * @param {object} [options.onDisable] - Handler implementation. See {@link Tabz#onDisable|onEnable}.
 * @param {object} [options.onEnabled] - Handler implementation. See {@link Tabz#onEnabled|onEnable}.
 * @param {object} [options.onDisabled] - Handler implementation. See {@link Tabz#onDisabled|onEnable}.
 * @constructor
 */
function Tabz(options) {
    var i, el;

    options = options || {};
    var root = options.root || document,
        unhook = options.unhook,
        referenceElement = options.referenceElement,
        defaultTabSelector = options.defaultTabSelector || '.default-tab';

    if (!unhook) {
        var css;
        /* inject:css */
        css = '.tabz{position:relative;visibility:hidden;height:100%}.tabz>header{position:relative;display:inline-block;background-color:#fff;margin-left:1em;padding:5px .6em;border:1px solid #666;border-bottom-color:transparent;border-radius:6px 6px 0 0;cursor:default;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.tabz>header+section{position:absolute;display:none;background-color:#fff;margin-top:-1px;padding:8px;border:1px solid #666;border-radius:6px;left:0;right:0;bottom:0;top:0;z-index:0}.tabz>header+section.tabz-enable{z-index:1}.tabz>header.tabz-enable{z-index:2}.tabz-bg0{background-color:#eee!important}.tabz-bg1{background-color:#eef!important}.tabz-bg2{background-color:#efe!important}.tabz-bg3{background-color:#eff!important}.tabz-bg4{background-color:#fee!important}.tabz-bg5{background-color:#fef!important}.tabz-bg6{background-color:#ffe!important}';
        /* endinject */

        if (!referenceElement) {
            // find first <link> or <style> in <head>
            var headStuff = document.querySelector('head').children;
            for (i = 0; !referenceElement && i < headStuff.length; ++i) {
                el = headStuff[i];
                if (el.tagName === 'STYLE' || el.tagName === 'LINK' && el.rel === 'stylesheet') {
                    referenceElement = el;
                }
            }
        }
        cssInjector(css, 'tabz-css-base', referenceElement);

        for (var key in options) {
            if (this[key] === noop) {
                this[key] = options[key];
            }
        }

        /**
         * @summary The context of this tab object.
         * @desc The context may encompass any number of tab panels (`.tabz` elements).
         * @type {HTMLDocumen|HTMLElement}
         */
        this.root = root;

        // enable first tab on each tab panel (`.tabz` element)
        forEachEl('.tabz>header:first-of-type,.tabz>section:first-of-type', function(el) {
            el.classList.add('tabz-enable');
        }, root);

        // enable default tab and all its parents (must be a tab)
        this.tabTo(root.querySelector('.tabz > header' + defaultTabSelector));

        setTimeout(function() {
            forEachEl('.tabz > section', function(el) {

                // Step 1: A bug in older versions of Chrome (like v40) that inserted a break at mark-up location of an absolute positioned block. The work-around is to hide those blocks until after first render; then show them. I don't know why this works but it does. Seems to be durable.
                el.style.display = 'block';

                // Step 2: Adjust absolute top of each rendered folder to the bottom of its tab
                el.style.top = el.previousElementSibling.getBoundingClientRect().bottom - el.parentElement.getBoundingClientRect().top + 'px';

            }, root);
        }, 0);
    }

    var method = unhook ? 'removeEventListener' : 'addEventListener';
    var boundClickHandler = onclick.bind(this);
    forEachEl('.tabz', function(tabBar) {
        tabBar.style.visibility = 'visible';
        tabBar[method]('click', boundClickHandler);
    }, root);
}

function onclick(evt) {
    click.call(this, evt.currentTarget, evt.target);
}

/**
 * @summary Selects the given tab.
 * @desc If it is a nested tab, also reveals all its ancestor tabs.
 * @param {string|HTMLElement} [el] - May be one of:
 * * `HTMLElement`
 *   * `<header>` - tab element
 *   * `<section>` - folder element
 * * `string` - CSS selector to one of the above
 * * falsy - fails silently
 * @memberOf Tabz.prototype
 */
Tabz.prototype.tabTo = function(el) {
    while ((el = this.tab(el))) {
        click.call(this, el.parentElement, el);
        el = el.parentElement.parentElement; // loop to click on each containing tab...
    }
};

/**
 * Current selected tab.
 * @param {HTMLElement|number} el - An element that is (or is within) the tab panel (`.tabz` element) to look in.
 * @returns {undefined|HTMLElement} Returns tab (`<header>`) element.  Returns `undefined` if `el` is neither of the above or an out of range index.
 */
Tabz.prototype.enabledTab = function(el) {
    el = this.panel(el);
    return el && el.querySelector(':scope>header.tabz-enable');
};

/**
 * @summary Get tab element.
 * @desc Get tab element if given tab or folder element; or an element within such; or find tab.
 * @param {string|Element} [el] - May be one of:
 * * a tab (a `<header>` element)
 * * a folder (a `<section>` element)
 * * an element within one of the above
 * * `string` - CSS selector to one of the above, searching within the root or document
 * @returns {null|Element} tab (`<header>...</header>`) element or `null` if not found
 * @memberOf Tabz.prototype
 */
Tabz.prototype.tab = function(el) {
    el = lookForEl.call(this, el);
    return !(el instanceof HTMLElement) ? null : el.tagName === 'HEADER' ? el : el.tagName === 'SECTION' ? el.previousElementSibling : null;
};

/**
 * @summary Get folder element.
 * @desc Get folder element if given tab or folder element; or an element within such; or find folder.
 * @param {string|Element} [el] - May be one of:
 * * a tab (a `<header>` element)
 * * a folder (a `<section>` element)
 * * an element within one of the above
 * * `string` - CSS selector to one of the above, searching within the root or document
 * @returns {null|Element} tab (`<header>...</header>`) element or `null` if not found
 * @memberOf Tabz.prototype
 */
Tabz.prototype.folder = function(el) {
    el = lookForEl.call(this, el);
    return !(el instanceof HTMLElement) ? null : el.tagName === 'SECTION' ? el : el.tagName === 'HEADER' ? el.nextElementSibling : null;
};

/**
 * @summary Get tab panel element.
 * @desc Get panel element if given tab panel element; or an element within a tab panel; or find tab panel.
 * @param {string|Element} [el] - May be one of:
 * * a tab panel (an `HTMLElement` with class `tabz`)
 * * an element within a tab panel
 * * `string` - CSS selector to one a tab panel, searching within the root or document
 * @returns {null|Element} tab panel element or `null` if not found
 * @memberOf Tabz.prototype
 */
Tabz.prototype.panel = function(el) {
    while (el && !el.classList.contains('tabz')) {
        el = el.parentElement;
    }
    return !(el instanceof HTMLElement) ? null : el.classList.contains('tabz') ? el : null;
};

function lookForEl(el) {
    if (el instanceof Element) {
        while (el && el.tagName !== 'HEADER' && el.tagName !== 'SECTION') {
            el = el.parentElement;
        }
    } else {
        el = this.root.querySelector(el);
    }
    return el;
}

/** Enables the tab/folder pair of the clicked tab.
 * Disables all the other pairs in this scope which will include the previously enabled pair.
 * @private
 * @this Tabz
 * @param {Element} div - The tab panel (`.tabz` element) that's handling the click event.
 * @param {Element} target - The element that received the click.
 * @returns {undefined|Element} The `<header>` element (tab) the was clicked; or `undefined` when click was not within a tab.
 */
function click(div, target) {
    var newTab, oldTab;

    forEachEl(':scope>header:not(.tabz-enable)', function(tab) { // todo: use a .find() polyfill here
        if (tab.contains(target)) {
            newTab = tab;
        }
    }, div);

    if (newTab) {
        oldTab = this.enabledTab(div);
        toggleTab.call(this, oldTab, false);
        toggleTab.call(this, newTab, true);
    }

    return newTab;
}

/**
 * @private
 * @this Tabz
 * @param {Element} tab - The `<header>` element of the tab to enable or disable.
 * @param {boolean} enable - Enable (vs. disable) the tab.
 */
function toggleTab(tab, enable) {
    if (tab) {
        var folder = this.folder(tab),
            method = enable ? 'onEnable' : 'onDisable';

        this[method].call(this, tab, folder);

        tab.classList.toggle('tabz-enable', enable);
        folder.classList.toggle('tabz-enable', enable);

        method += 'd';
        this[method].call(this, tab, folder);
    }
}

/**
 * @typedef tabEvent
 * @type {function}
 * @param {tabEventObject}
 */

/**
 * @typedef tabEventObject
 * @property {Tabz} tabz - The tab object issuing the callback.
 * @property {Element} target - The tab (`<header>` element).
 */

/**
 * Called before a previously disabled tab is enabled.
 * @type {tabEvent}
 * @abstract
 * @memberOf Tabz.prototype
 */
Tabz.prototype.onEnable = noop;

/**
 * Called before a previously enabled tab is disabled by another tab being enabled.
 * @type {tabEvent}
 * @abstract
 * @memberOf Tabz.prototype
 */
Tabz.prototype.onDisable = noop;

/**
 * Called after a previously disabled tab is enabled.
 * @type {tabEvent}
 * @abstract
 * @memberOf Tabz.prototype
 */
Tabz.prototype.onEnabled = noop;

/**
 * Called after a previously enabled tab is disabled by another tab being enabled.
 * @type {tabEvent}
 * @abstract
 * @memberOf Tabz.prototype
 */
Tabz.prototype.onDisabled = noop;

function noop() {} // null pattern

function forEachEl(selector, iteratee, context) {
    return Array.prototype.forEach.call((context || document).querySelectorAll(selector), iteratee);
}


module.exports = Tabz;

},{"css-injector":6}],57:[function(require,module,exports){
// templex node module
// https://github.com/joneit/templex

/* eslint-env node */

/**
 * Merges values of execution context properties named in template by {prop1},
 * {prop2}, etc., or any javascript expression incorporating such prop names.
 * The context always includes the global object. In addition you can specify a single
 * context or an array of contexts to search (in the order given) before finally
 * searching the global context.
 *
 * Merge expressions consisting of simple numeric terms, such as {0}, {1}, etc., deref
 * the first context given, which is assumed to be an array. As a convenience feature,
 * if additional args are given after `template`, `arguments` is unshifted onto the context
 * array, thus making first additional arg available as {1}, second as {2}, etc., as in
 * `templex('Hello, {1}!', 'World')`. ({0} is the template so consider this to be 1-based.)
 *
 * If you prefer something other than braces, redefine `templex.regexp`.
 *
 * See tests for examples.
 *
 * @param {string} template
 * @param {...string} [args]
 */
function templex(template) {
    var contexts = this instanceof Array ? this : [this];
    if (arguments.length > 1) { contexts.unshift(arguments); }
    return template.replace(templex.regexp, templex.merger.bind(contexts));
}

templex.regexp = /\{(.*?)\}/g;

templex.with = function (i, s) {
    return 'with(this[' + i + ']){' + s + '}';
};

templex.cache = [];

templex.deref = function (key) {
    if (!(this.length in templex.cache)) {
        var code = 'return eval(expr)';

        for (var i = 0; i < this.length; ++i) {
            code = templex.with(i, code);
        }

        templex.cache[this.length] = eval('(function(expr){' + code + '})'); // eslint-disable-line no-eval
    }
    return templex.cache[this.length].call(this, key);
};

templex.merger = function (match, key) {
    // Advanced features: Context can be a list of contexts which are searched in order.
    var replacement;

    try {
        replacement = isNaN(key) ? templex.deref.call(this, key) : this[0][key];
    } catch (e) {
        replacement = '{' + key + '}';
    }

    return replacement;
};

// this interface consists solely of the templex function (and it's properties)
module.exports = templex;

},{}],58:[function(require,module,exports){
// Created by Jonathan Eiten on 1/7/16.

'use strict';

/**
 * Very fast array test.
 * For cross-frame scripting; use `crossFramesIsArray` instead.
 * @param {*} arr - The object to test.
 * @returns {boolean}
 */
unstrungify.isArray = function(arr) { return arr.constructor === Array; };

/**
 * @summary Walk a hierarchical object as JSON.stringify does but without serializing.
 *
 * @desc Usage:
 * * var myDistilledObject = unstrungify.call(myObject);
 * * var myDistilledObject = myApi.getState(); // where myApi.prototype.getState = unstrungify
 *
 * Result equivalent to `JSON.parse(JSON.stringify(this))`.
 *
 * > Do not use this function to get a JSON string; use `JSON.stringify(this)` instead.
 *
 * @this {*|object|*[]} - Object to walk; typically an object or array.
 *
 * @param {boolean} [options.nullElements==false] - Preserve undefined array elements as `null`s.
 * Use this when precise index matters (not merely the order of the elements).
 *
 * @param {boolean} [options.nullProperties==false] - Preserve undefined object properties as `null`s.
 *
 * @returns {object} - Distilled object.
 */
function unstrungify(options) {
    var clone, preserve,
        object = (typeof this.toJSON === 'function') ? this.toJSON() : this;

    if (unstrungify.isArray(object)) {
        clone = [];
        preserve = options && options.nullElements;
        object.forEach(function(obj) {
            var value = unstrungify.call(obj);
            if (value !== undefined) {
                clone.push(value);
            } else if (preserve) {
                clone.push(null); // undefined not a valid JSON value
            }
        });
    } else  if (typeof object === 'object') {
        clone = {};
        preserve = options && options.nullProperties;
        Object.keys(object).forEach(function(key) {
            var value = object[key];
            if (value !== undefined) {
                value = unstrungify.call(object[key]);
            }
            if (value !== undefined) {
                clone[key] = value;
            } else if (preserve) {
                clone[key] = null; // undefined not a valid JSON value
            }
        });
    } else {
        clone = object;
    }

    return clone;
}

/**
 * Very slow array test. Suitable for cross-frame scripting.
 *
 * Suggestion: If you need this and have jQuery loaded, use `jQuery.isArray` instead which is reasonably fast.
 *
 * @param {*} arr - The object to test.
 * @returns {boolean}
 */
unstrungify.crossFramesIsArray = function(arr) { return toString.call(arr) === arrString; }; // eslint-disable-line no-unused-vars

var toString = Object.prototype.toString, arrString = '[object Array]';

module.exports = unstrungify;

},{}],59:[function(require,module,exports){
/* eslint-env browser */

'use strict';

require('./lib/polyfills'); // Installs misc. polyfills into global objects, as needed

var FinBar = require('finbars');
var Canvas = require('fincanvas');
var Point = require('rectangular').Point;
var Rectangle = require('rectangular').Rectangle;
var _ = require('object-iterators'); // fyi: installs the Array.prototype.find polyfill, as needed

var deprecated = require('./lib/deprecated');
var defaults = require('./defaults');
var Renderer = require('./lib/Renderer');
var SelectionModel = require('./lib/SelectionModel');
var stylesheet = require('./lib/stylesheet');
var Localization = require('./lib/Localization');
var behaviors = require('./behaviors');
var CellRenderers = require('./cellRenderers');
var CellEditors = require('./cellEditors');

var themeInitialized = false,
    polymerTheme = Object.create(defaults),
    globalProperties = Object.create(polymerTheme);

/**s
 * @constructor
 * @param {string|Element} div - CSS selector or Element
 * @param {object} [options]
 * @param {function} [options.Behavior=behaviors.JSON] - A behavior constructor.
 * @param {function|object[]} [options.data] - Passed to behavior constructor. May be:
 * * An array of congruent raw data objects
 * * A function returning same
 * @param {function|menuItem[]} [options.schema=derivedSchema] - Passed to behavior constructor. May be:
 * * A schema array
 * * A function returning a schema array. Called at filter reset time with behavior as context.
 * * Omit to generate a basic schema from `this.behavior.columns`.
 * @param {Behavior} [options.Behavior=JSON] - A grid behavior (descendant of Behavior "class"). Will be used if `getBehavior` omitted, in which case `options.data` (which has no default) *must* also be provided.
 * @param {string} [options.localization=Hypergrid.localization]
 * @param {string|string[]} [options.localization.locale=Hypergrid.localization.locale] - The default locale to use when an explicit `locale` is omitted from localizer constructor calls. Passed to Intl.NumberFomrat` and `Intl.DateFomrat`. See {@ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|Locale identification and negotiation} for more information.
 * @param {string} [options.localization.numberOptions=Hypergrid.localization.numberOptions] - Options passed to `Intl.NumberFomrat` for creating the basic "number" localizer.
 * @param {string} [options.localization.dateOptions=Hypergrid.localization.dateOptions] - Options passed to `Intl.DateFomrat` for creating the basic "date" localizer.
 * @param {object} [options.margin] - optional canvas margins
 * @param {string} [options.margin.top=0]
 * @param {string} [options.margin.right='-200px']
 * @param {string} [options.margin.bottom=0]
 * @param {string} [options.margin.left=0]
 */
function Hypergrid(div, options) {
    var self = this;

    this.div = (typeof div === 'string') ? document.querySelector(div) : div;

    stylesheet.inject('grid');

    this.lastEdgeSelection = [0, 0];

    this.lnfProperties = Object.create(globalProperties);

    this.isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1;
    this.selectionModel = new SelectionModel(this);
    this.renderOverridesCache = {};

    options = options || {};
    var Behavior = options.Behavior || behaviors.JSON;
    this.behavior = new Behavior(this, options.data, options);

    var loc = options.localization || {};
    this.localization = new Localization(
        loc.locale || Hypergrid.localization.locale,
        loc.numberOptions || Hypergrid.localization.numberOptions,
        loc.dateOptions || Hypergrid.localization.dateOptions
    );

    //prevent the default context menu for appearing
    this.div.oncontextmenu = function(event) {
        event.preventDefault();
        return false;
    };

    this.clearMouseDown();
    this.dragExtent = new Point(0, 0);
    this.numRows = 0;
    this.numColumns = 0;

    //install any plugins
    this.pluginsDo(function(each) {
        if (each.installOn) {
            each.installOn(self);
        }
    });

    var margin = options.margin || {};
    margin.top = margin.top || 0;
    margin.right = margin.right === undefined ? '-200px' : 0;
    margin.bottom = margin.bottom || 0;
    margin.left = margin.left || 0;

    /**
     * @type {CellRenderers}
     * @memberOf Hypergrid.prototype
     */
    this.cellRenderers = new CellRenderers();

    /**
     * @type {CellEditors}
     * @memberOf Hypergrid.prototype
     */
    this.cellEditors = new CellEditors(this);

    this.allowEventHandlers = true;

    //initialize our various pieces
    if (!themeInitialized) {
        themeInitialized = true;
        buildPolymerTheme();
    }
    this.initRenderer();
    this.initCanvas(margin);
    this.initScrollbars();

    //Register a listener for the copy event so we can copy our selected region to the pastebuffer if conditions are right.
    document.body.addEventListener('copy', function(evt) {
        self.checkClipboardCopy(evt);
    });
    this.getCanvas().resize();
}

Hypergrid.prototype = {
    constructor: Hypergrid.prototype.constructor,

    deprecated: deprecated,
    registerCellEditor: function(Constructor, name) {
        return this.deprecated('registerCellEditor(Constructor, name)', 'cellEditors.add(name, Constructor)', '1.0.6', arguments);
    },
    createCellEditor: function(name) {
        return this.deprecated('createCellEditor(name)', 'cellEditors.create(name)', '1.0.6', arguments);
    },
    getCellProvider: function(name) {
        return this.deprecated('getCellProvider()', 'cellRenderers', '1.0.6', arguments);
    },
    registerLocalizer: function(name, localizer, baseClassName, newClassName) {
        return this.deprecated('registerLocalizer(name, localizer, baseClassName, newClassName)', 'localization.add(name, localizer)', '1.0.6', arguments,
            'STRUCTURAL CHANGE: No longer supports deriving and registering a new cell editor class. Use .cellEditors.get(baseClassName).extend(newClassName || name, {...}) for that.');
    },

    /**
     *
     * A null object behavior serves as a place holder.
     * @type {object}
     * @memberOf Hypergrid.prototype
     */
    behavior: null,

    /**
     * Cached resulan}
     * @memberOf Hypergrid.prototype
     */
    isWebkit: true,

    /**
     * The pixel location of an initial mousedown click, either for editing a cell or for dragging a selection.
     * @type {Point}
     * @memberOf Hypergrid.prototype
     */
    mouseDown: [],

    /**
     * The extent from the mousedown point during a drag operation.
     * @type {Point}
     * @memberOf Hypergrid.prototype
     */

    dragExtent: null,

    /**
     * A float value between 0.0 - 1.0 of the vertical scroll position.
     * @type {number}
     * @memberOf Hypergrid.prototype
     */
    vScrollValue: 0,

    /**
     * A float value between 0.0 - 1.0 of the horizontal scroll position.
     * @type {number}
     * @memberOf Hypergrid.prototype
     */
    hScrollValue: 0,

    /**
     * @property {fin-hypergrid-selection-model} selectionModel - A [fin-hypergrid-selection-model](module-._selection-model.html) instance.
     * @memberOf Hypergrid.prototype
     */
    selectionModel: null,

    /**
     * @property {fin-hypergrid-cell-editor} cellEditor - The current instance of [fin-hypergrid-cell-editor](module-cell-editors_base.html).
     * @memberOf Hypergrid.prototype
     */
    cellEditor: null,

    /**
     * @property {fin-vampire-bar} sbHScroller - An instance of {@link https://github.com/openfin/finbars|FinBar}.
     * @memberOf Hypergrid.prototype
     */
    sbHScroller: null,

    /**
     * @property {fin-vampire-bar} sbVScroller - An instance of {@link https://github.com/openfin/finbars|FinBar}.
     * @memberOf Hypergrid.prototype
     */
    sbVScroller: null,

    /**
     * The previous value of sbVScrollVal.
     * @type {number}
     * @memberOf Hypergrid.prototype
     */
    sbPrevVScrollValue: null,

    /**
     * The previous value of sbHScrollValue.
     * @type {number}
     * @memberOf Hypergrid.prototype
     */
    sbPrevHScrollValue: null,

    /**
     * is the short term memory of what column I might be dragging around
     * @type {object}
     * @memberOf Hypergrid.prototype
     */

    renderOverridesCache: {},

    /**
     * The pixel location of the current hovered cell.
     * @type {Point}
     * @memberOf Hypergrid.prototype
     */
    hoverCell: null,

    scrollingNow: false,

    lastEdgeSelection: null,

    /**
     * @memberOf Hypergrid.prototype
    clear out the LRU cache of text widths
     */
    setAttribute: function(attribute, value) {
        this.div.setAttribute(attribute, value);
    },

    /**
     * @memberOf Hypergrid.prototype
    clear out all state and data of the grid
     */
    reset: function() {
        this.lastEdgeSelection = [0, 0];
        this.lnfProperties = Object.create(globalProperties);
        this.selectionModel = new SelectionModel(this);
        this.renderOverridesCache = {};
        this.clearMouseDown();
        this.dragExtent = new Point(0, 0);

        this.numRows = 0;
        this.numColumns = 0;

        this.vScrollValue = 0;
        this.hScrollValue = 0;

        this.cellEditor = null;

        this.sbPrevVScrollValue = null;
        this.sbPrevHScrollValue = null;

        this.hoverCell = null;
        this.scrollingNow = false;
        this.lastEdgeSelection = [0, 0];

        this.behavior.reset();
        this.getRenderer().reset();
        this.getCanvas().resize();
        this.behaviorChanged();
    },

    //resetTextWidthCache: function() {
    //    textWidthCache = new LRUCache(2000);
    //},

    getProperties: function() {
        return this.getPrivateState();
    },

    _getProperties: function() {
        return this.lnfProperties;
    },

    computeCellsBounds: function() {
        var renderer = this.getRenderer();
        if (renderer) {
            renderer.computeCellsBounds();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The pointer is over the given cell.
     * @param {number} x - The x cell coordinate.
     * @param {number} y - The y cell coordinate.
     */
    isHovered: function(x, y) {
        var p = this.getHoverCell();
        return p && p.x === x && p.y === y;
    },

    getFormatter: function(localizerName) {
        return this.localization.get(localizerName).format;
    },

    formatValue: function(localizerName, value) {
        var formatter = this.getFormatter(localizerName);
        return formatter(value);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns boolean} The pointer is hovering over the given column.
     * @param {number} x - The horizontal cell coordinate.
     */
    isColumnHovered: function(x) {
        var p = this.getHoverCell();
        return p && p.x === x;
    },

    isRowResizeable: function() {
        return this.resolveProperty('rowResize');
    },

    isCheckboxOnlyRowSelections: function() {
        return this.resolveProperty('checkboxOnlyRowSelections');
    },

    /**
     *
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The pointer is hovering over the row `y`.
     * @param {number} y - The vertical cell coordinate.
     */
    isRowHovered: function(y) {
        var p = this.getHoverCell();
        return p && p.y === y;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Point} The cell over which the cursor is hovering.
     */
    getHoverCell: function() {
        return this.hoverCell;
    },


    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the cell under the cursor.
     * @param {Point} point
     */
    setHoverCell: function(point) {
        var me = this.hoverCell;
        var newPoint = new Point(point.x, point.y);
        if (me && me.equals(newPoint)) {
            return;
        }
        this.hoverCell = newPoint;
        this.fireSyntheticOnCellEnterEvent(newPoint);
        this.repaint();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Ammend properties for all hypergrids in this process.
     * @param {object} properties - A simple properties hash.
     */
    addGlobalProperties: function(properties) {
        //we check for existence to avoid race condition in initialization
        if (!globalProperties) {
            var self = this;
            setTimeout(function() {
                self.addGlobalProperties(properties);
            }, 10);
        } else {
            this._addGlobalProperties(properties);
        }

    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Ammend properties for all hypergrids in this process.
     * @param {object} properties - A simple properties hash.
     * @private
     */
    _addGlobalProperties: function(properties) {
        _(properties).each(function(property, key) {
            globalProperties[key] = property;
        });
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Utility function to push out properties if we change them.
     * @param {object} properties - An object of various key value pairs.
     */

    refreshProperties: function() {
        // this.canvas = this.shadowRoot.querySelector('fin-canvas');
        //this.canvas = new Canvas(this.divCanvas, this.renderer); //TODO: Do we really need to be recreating it here?
        this.renderer.computeCellsBounds();
        this.checkScrollbarVisibility();
        this.behavior.defaultRowHeight = null;
        if (this.isColumnAutosizing()) {
            this.behavior.autosizeAllColumns();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Ammend properties for this hypergrid only.
     * @param {object} moreProperties - A simple properties hash.
     */
    addProperties: function(moreProperties) {
        var properties = this.getProperties();
        addDeepProperties(properties, moreProperties);
        this.refreshProperties();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {object} The state object for remembering our state.
     * @see [Memento pattern](http://en.wikipedia.org/wiki/Memento_pattern)
     */
    getPrivateState: function() {
        return this.behavior.getPrivateState();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the state object to return to the given user configuration.
     * @param {object} state - A memento object.
     * @see [Memento pattern](http://en.wikipedia.org/wiki/Memento_pattern)
     */
    setState: function(state) {
        var self = this;
        this.behavior.setState(state);
        setTimeout(function() {
            self.behaviorChanged();
            self.synchronizeScrollingBoundries();
        }, 100);
    },

    getState: function() {
        return this.behavior.getState();
    },
    /**
     * @memberOf Hypergrid.prototype
     * @returns {object} The initial mouse position on a mouse down event for cell editing or a drag operation.
     * @memberOf Hypergrid.prototype
     */
    getMouseDown: function() {
        var last = this.mouseDown.length - 1;
        if (last < 0) {
            return null;
        }
        return this.mouseDown[last];
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Remove the last item from the mouse down stack.
     */
    popMouseDown: function() {
        if (this.mouseDown.length !== 0) {
            this.mouseDown.length = this.mouseDown.length - 1;
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Empty out the mouse down stack.
     */
    clearMouseDown: function() {
        this.mouseDown = [new Point(-1, -1)];
        this.dragExtent = null;
    },

    /**
     * Set the mouse point that initiated a cell edit or drag operation.
     * @param {Point} point
     * @memberOf Hypergrid.prototype
     */
    setMouseDown: function(point) {
        this.mouseDown.push(point);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Point} The extent point of the current drag selection rectangle.
     */
    getDragExtent: function() {
        return this.dragExtent;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Set the extent point of the current drag selection operation.
     * @param {Point} point
     */
    setDragExtent: function(point) {
        this.dragExtent = point;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Iterate over the plugins invoking the given function with each.
     * @todo We need a new plugin mechanism!
     * @param {function} func - The function to invoke on all the plugins.
     */
    pluginsDo: function(func) {
        //TODO: We need a new plugin mechanism!
        //var userPlugins = this.children.array();
        //var pluginsTag = this.shadowRoot.querySelector('fin-plugins');
        //
        //var plugins = userPlugins;
        //if (pluginsTag) {
        //    var systemPlugins = pluginsTag.children.array();
        //    plugins = systemPlugins.concat(plugins);
        //}
        //
        //plugins.forEach(function(plugin) {
        //    func(plugin);
        //});
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc This function is a callback from the HypergridRenderer sub-component. It is called after each paint of the canvas.
     */
    gridRenderedNotification: function() {
        this.updateRenderedSizes();
        if (this.cellEditor) {
            this.cellEditor.gridRenderedNotification();
        }
        this.checkColumnAutosizing();
        this.fireSyntheticGridRenderedEvent();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc The grid has just been rendered, make sure the column widths are optimal.
     */
    checkColumnAutosizing: function() {
        var behavior = this.behavior;
        behavior.autoSizeRowNumberColumn();
        if (this.isColumnAutosizing()) {
            behavior.checkColumnAutosizing(false);
        }
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Notify the GridBehavior how many rows and columns we just rendered.
     */
    updateRenderedSizes: function() {
        //add one to each of these values as we want also to include
        //the columns and rows that are partially visible
        this.behavior.setRenderedColumnCount(this.getVisibleColumns() + 1);
        this.behavior.setRenderedRowCount(this.getVisibleRows() + 1);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Conditionally copy to clipboard.
     * @desc If we have focus, copy our current selection data to the system clipboard.
     * @param {event} event - The copy system event.
     */
    checkClipboardCopy: function(event) {
        if (this.hasFocus()) {
            event.preventDefault();
            var csvData = this.getSelectionAsTSV();
            event.clipboardData.setData('text/plain', csvData);
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} We have any selections.
     */
    hasSelections: function() {
        if (!this.getSelectionModel) {
            return; // were not fully initialized yet
        }
        return this.selectionModel.hasSelections();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {string} Tab separated value string from the selection and our data.
     */
    getSelectionAsTSV: function() {
        var sm = this.selectionModel;
        if (sm.hasSelections()) {
            var selections = this.getSelectionMatrix();
            selections = selections[selections.length - 1];
            return this.getMatrixSelectionAsTSV(selections);
        } else if (sm.hasRowSelections()) {
            return this.getMatrixSelectionAsTSV(this.getRowSelectionMatrix());
        } else if (sm.hasColumnSelections()) {
            return this.getMatrixSelectionAsTSV(this.getColumnSelectionMatrix());
        }
    },

    getMatrixSelectionAsTSV: function(selections) {
        var result = '';

        //only use the data from the last selection
        if (selections.length) {
            var width = selections.length,
                height = selections[0].length,
                area = width * height,
                lastCol = width - 1,
                //Whitespace will only be added on non-singular rows, selections
                whiteSpaceDelimiterForRow = (height > 1 ? '\n' : '');

            //disallow if selection is too big
            if (area > 20000) {
                alert('selection size is too big to copy to the paste buffer'); // eslint-disable-line no-alert
                return '';
            }

            for (var h = 0; h < height; h++) {
                for (var w = 0; w < width; w++) {
                    result += selections[w][h] + (w < lastCol ? '\t' : whiteSpaceDelimiterForRow);
                }
            }
        }

        return result;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} We have focus.
     */
    hasFocus: function() {
        return this.getCanvas().hasFocus();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear all the selections.
     */
    clearSelections: function() {
        var dontClearRows = this.isCheckboxOnlyRowSelections();
        this.selectionModel.clear(dontClearRows);
        this.clearMouseDown();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear the most recent selection.
     */
    clearMostRecentSelection: function() {
        var dontClearRows = this.isCheckboxOnlyRowSelections();
        this.selectionModel.clearMostRecentSelection(dontClearRows);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear the most recent column selection.
     */
    clearMostRecentColumnSelection: function() {
        this.selectionModel.clearMostRecentColumnSelection();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear the most recent row selection.
     */
    clearMostRecentRowSelection: function() {
        //this.selectionModel.clearMostRecentRowSelection(); // commented off as per GRID-112
    },

    clearRowSelection: function() {
        this.selectionModel.clearRowSelection();
        this.behavior.dataModel.clearSelectedData();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Select given region.
     * @param {number} ox - origin x
     * @param {number} oy - origin y
     * @param {number} ex - extent x
     * @param {number} ex - extent y
     */
    select: function(ox, oy, ex, ey) {
        if (ox < 0 || oy < 0) {
            //we don't select negative area
            //also this means there is no origin mouse down for a selection rect
            return;
        }
        this.selectionModel.select(ox, oy, ex, ey);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} Given point is selected.
     * @param {number} x - The horizontal coordinate.
     * @param {number} y - The vertical coordinate.
     */
    isSelected: function(x, y) {
        return this.selectionModel.isSelected(x, y);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The given column is selected anywhere in the entire table.
     * @param {number} col - The column index.
     */
    isCellSelectedInRow: function(col) {
        var selectionModel = this.selectionModel;
        var isSelected = selectionModel.isCellSelectedInRow(col);
        return isSelected;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The given row is selected anywhere in the entire table.
     * @param {number} row - The row index.
     */
    isCellSelectedInColumn: function(row) {
        var selectionModel = this.selectionModel;
        var isSelected = selectionModel.isCellSelectedInColumn(row);
        return isSelected;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Set the Behavior (model) object for this grid control.
     * @desc This can be done dynamically.
     * @param {Behavior} behavior - The behavior (model).
     */
    setBehavior: function(behavior) {
        behavior.changed = this.behaviorChanged.bind(this);
        behavior.shapeChanged = this.behaviorShapeChanged.bind(this);
        behavior.stateChanged = this.behaviorStateChanged.bind(this);
        this.behavior = behavior;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc I've been notified that the behavior has changed.
     */
    behaviorChanged: function() {
        if (this.numColumns !== this.getColumnCount() || this.numRows !== this.getRowCount()) {
            this.numColumns = this.getColumnCount();
            this.numRows = this.getRowCount();
            this.behaviorShapeChanged();
        }
        this.computeCellsBounds();
        this.repaint();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Rectangle} My bounds.
     */
    getBounds: function() {
        var renderer = this.getRenderer();
        return renderer && renderer.getBounds();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {string} The value of a lnf property.
     * @param {string} key - A look-and-feel key.
     */
    resolveProperty: function(key) {
        var keys = key.split('.');
        var prop = this.getProperties();
        while (keys.length) { prop = prop[keys.shift()]; }
        return prop;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc The dimensions of the grid data have changed. You've been notified.
     */
    behaviorShapeChanged: function() {
        this.synchronizeScrollingBoundries();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc The dimensions of the grid data have changed. You've been notified.
     */
    behaviorStateChanged: function() {
        this.getRenderer().computeCellsBounds();
        this.repaint();
    },

    repaint: function() {
        var now = this.resolveProperty('repaintImmediately');
        var canvas = this.getCanvas();
        if (canvas) {
            if (now === true) {
                canvas.paintNow();
            } else {
                canvas.repaint();
            }
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Paint immediately in this microtask.
     */
    paintNow: function() {
        var canvas = this.getCanvas();
        canvas.paintNow();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} In HiDPI mode (has an attribute as such).
     */
    useHiDPI: function() {
        return this.resolveProperty('useHiDPI') !== false;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Initialize drawing surface.
     * @private
     */
    initCanvas: function(margin) {

        var self = this;

        var divCanvas = this.divCanvas = document.createElement('div');
        this.div.appendChild(divCanvas);
        this.canvas = new Canvas(divCanvas, this.renderer);
        this.canvas.canvas.classList.add('hypergrid');

        var style = divCanvas.style;
        style.position = 'absolute';
        style.top = margin.top;
        style.right = margin.right;
        style.bottom = margin.bottom;
        style.left = margin.left;

        this.canvas.resizeNotification = function() {
            self.resized();
        };

        this.addEventListener('fin-canvas-mousemove', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.primitiveEvent = e;
            self.delegateMouseMove(mouseEvent);
        });

        this.addEventListener('fin-canvas-mousedown', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            //self.stopEditing();
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.keys = e.detail.keys;
            mouseEvent.primitiveEvent = e;
            self.mouseDownState = mouseEvent;
            self.delegateMouseDown(mouseEvent);
            self.fireSyntheticMouseDownEvent(mouseEvent);
            self.repaint();
        });

        this.addEventListener('fin-canvas-click', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            //self.stopEditing();
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.primitiveEvent = e;
            mouseEvent.keys = e.detail.keys; // todo: this was in fin-tap but wasn't here
            self.fireSyntheticClickEvent(mouseEvent);
            self.delegateClick(mouseEvent);
        });

        this.addEventListener('fin-canvas-mouseup', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            self.dragging = false;
            if (self.isScrollingNow()) {
                self.setScrollingNow(false);
            }
            if (self.columnDragAutoScrolling) {
                self.columnDragAutoScrolling = false;
            }
            //self.stopEditing();
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.primitiveEvent = e;
            self.delegateMouseUp(mouseEvent);
            if (self.mouseDownState) {
                self.fireSyntheticButtonPressedEvent(self.mouseDownState);
            }
            self.mouseDownState = null;
            self.fireSyntheticMouseUpEvent(mouseEvent);
        });

        this.addEventListener('fin-canvas-dblclick', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.primitiveEvent = e;
            self.fireSyntheticDoubleClickEvent(mouseEvent, e);
            self.delegateDoubleClick(mouseEvent);
        });

        this.addEventListener('fin-canvas-drag', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            self.dragging = true;
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.primitiveEvent = e;
            self.delegateMouseDrag(mouseEvent);
        });

        this.addEventListener('fin-canvas-keydown', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            self.fireSyntheticKeydownEvent(e);
            self.delegateKeyDown(e);
        });

        this.addEventListener('fin-canvas-keyup', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            self.fireSyntheticKeyupEvent(e);
            self.delegateKeyUp(e);
        });

        this.addEventListener('fin-canvas-wheelmoved', function(e) {
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.primitiveEvent = e.detail.primitiveEvent;
            self.delegateWheelMoved(mouseEvent);
        });

        this.addEventListener('fin-canvas-mouseout', function(e) {
            if (self.resolveProperty('readOnly')) {
                return;
            }
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.primitiveEvent = e.detail.primitiveEvent;
            self.delegateMouseExit(mouseEvent);
        });

        this.addEventListener('fin-canvas-context-menu', function(e) {
            var mouse = e.detail.mouse;
            var mouseEvent = self.getGridCellFromMousePoint(mouse);
            mouseEvent.primitiveEvent = e.detail.primitiveEvent;
            self.delegateContextMenu(mouseEvent);
        });

        this.div.removeAttribute('tabindex');

    },

    convertViewPointToDataPoint: function(viewPoint) {
        return this.behavior.convertViewPointToDataPoint(viewPoint);
    },

    convertDataPointToViewPoint: function(dataPoint) {
        return this.behavior.convertDataPointToViewPoint(dataPoint);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Add an event listener to me.
     * @param {string} eventName - The type of event we are interested in.
     * @param {function} callback - The event handler.
     */
    addEventListener: function(eventName, callback) {
        var self = this;
        var decorator = function(e) {
            if (self.allowEventHandlers){
                callback(e);
            }
        };
        this.canvas.addEventListener(eventName, decorator);
    },

    allowEvents: function(allow){
        if ((this.allowEventHandlers = !!allow)){
            this.behavior.featureChain.attachChain();
        } else {
            this.behavior.featureChain.detachChain();
        }

        this.behavior.changed();
    },

    addFinEventListener: function(eventName, callback) {
        console.warn('.addFinEventListener() method is deprecated as of v0.2. Use .addEventListener() instead. (Will be removed in a future release.)');
        this.addEventListener(eventName, callback);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Set for `scrollingNow` field.
     * @param {boolean} isItNow - The type of event we are interested in.
     */
    setScrollingNow: function(isItNow) {
        this.scrollingNow = isItNow;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The `scrollingNow` field.
     */
    isScrollingNow: function() {
        return this.scrollingNow;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The index of the column divider under the mouse coordinates.
     * @param {MouseEvent} mouseEvent - The event to interogate.
     */
    overColumnDivider: function(mouseEvent) {
        var x = mouseEvent.primitiveEvent.detail.mouse.x;
        var whichCol = this.getRenderer().overColumnDivider(x);
        return whichCol;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The index of the row divider under the mouse coordinates.
     * @param {MouseEvent} mouseEvent - The event to interogate.
     */
    overRowDivider: function(mouseEvent) {
        var y = mouseEvent.primitiveEvent.detail.mouse.y;
        var which = this.getRenderer().overRowDivider(y);
        return which;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Switch the cursor for the grid.
     * @param {string} cursorName - A well know cursor name.
     * @see [cursor names](http://www.javascripter.net/faq/stylesc.htm)
     */
    beCursor: function(cursorName) {
        if (!cursorName) {
            cursorName = 'default';
        }
        this.div.style.cursor = cursorName;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate the wheel moved event to the behavior.
     * @param {Event} event - The pertinent event.
     */
    delegateWheelMoved: function(event) {
        this.behavior.onWheelMoved(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate MouseExit to the behavior (model).
     * @param {Event} event - The pertinent event.
     */
    delegateMouseExit: function(event) {
        this.behavior.handleMouseExit(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate MouseExit to the behavior (model).
     * @param {Event} event - The pertinent event.
     */
    delegateContextMenu: function(event) {
       this. behavior.onContextMenu(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate MouseMove to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateMouseMove: function(mouseDetails) {
        this.behavior.onMouseMove(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate mousedown to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateMouseDown: function(mouseDetails) {
        this.behavior.handleMouseDown(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate mouseup to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateMouseUp: function(mouseDetails) {
        this.behavior.onMouseUp(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate click to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateClick: function(mouseDetails) {
        this.behavior.onClick(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate mouseDrag to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateMouseDrag: function(mouseDetails) {
        this.behavior.onMouseDrag(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc We've been doubleclicked on. Delegate through the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateDoubleClick: function(mouseDetails) {
        this.behavior.onDoubleClick(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Generate a function name and call it on self.
     * @desc This should also be delegated through Behavior keeping the default implementation here though.
     * @param {event} event - The pertinent event.
     */
    delegateKeyDown: function(event) {
        this.behavior.onKeyDown(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Generate a function name and call it on self.
     * @desc This should also be delegated through Behavior keeping the default implementation here though.
     * @param {event} event - The pertinent event.
     */
    delegateKeyUp: function(event) {
        this.behavior.onKeyUp(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Shut down the current cell editor and save the edited value.
     * @returns {boolean} `true` if we were editing; `false` if we were not.
     */
    stopEditing: function() {
        var wasEditing = !!this.cellEditor;
        if (wasEditing) {
            this.cellEditor.stopEditing();
        }
        return wasEditing;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Shut down the current cell editor without saving the edited value.
     * @returns {boolean} `true` if we were editing; `false` if we were not.
     */
    cancelEditing: function() {
        var wasEditing = !!this.cellEditor;
        if (wasEditing) {
            this.cellEditor.cancelEditing();
        }
        return wasEditing;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Rectangle} The pixel coordinates of just the center 'main" data area.
     */
    getDataBounds: function() {
        var colDNDHackWidth = 200; //this was a hack to help with column dnd, need to factor this into a shared variable
        var b = this.canvas.bounds;

        //var x = this.getRowNumbersWidth();
        // var y = behavior.getFixedRowsHeight() + 2;

        var result = new Rectangle(0, 0, b.origin.x + b.extent.x - colDNDHackWidth, b.origin.y + b.extent.y);
        return result;
    },

    getRowNumbersWidth: function() {
        if (this.isShowRowNumbers()) {
            return this.getRenderer().getRowNumbersWidth();
        } else {
            return 0;
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Canvas} Our fin-canvas instance.
     */
    getCanvas: function() {
        return this.canvas;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Open the cell-editor at the provided model coordinates.
     * @param {Point} editPoint - The model coordinates of the cell to edit. This is the grid coordinates regardless of scroll position.
     * @return {undefined|CellEditor} The cellEditor determined from the cell's render properties, which may be modified by logic added by overriding {@link DataModel#getCellEditorAt|getCellEditorAt}.
     */
    editAt: function(editPoint) {
        var cellEditor;

        if (arguments.length === 2) {
            return this.deprecated('editAt(cellEditor, editPoint)', 'editAt(editPoint)', '1.0.6', arguments);
        }

        this.stopEditing(); //other editor is open, close it first

        if (editPoint.x >= 0 && editPoint.y >= 0) {
            var column = this.behavior.getActiveColumn(editPoint.x),
                editable = column && column.getProperties().editable;

            if (editable || this.isFilterRow(editPoint.y)) {
                this.setMouseDown(editPoint);
                this.setDragExtent(new Point(0, 0));
                cellEditor = this.getCellEditorAt(editPoint);
                if (cellEditor) {
                    cellEditor.beginEditing();
                }
            }
        }

        return cellEditor;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The given column is fully visible.
     * @param {number} columnIndex - The column index in question.
     * @return {boolan} Visible.
     */
    isColumnVisible: function(columnIndex) {
        return this.getRenderer().isColumnVisible(columnIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The given row is fully visible.
     * @param {number} rowIndex - The row index in question.
     * @return {boolan} Visible.
     */
    isDataRowVisible: function(rowIndex) {
        return this.getRenderer().isRowVisible(rowIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The given cell is fully is visible.
     * @param {number} columnIndex - The column index in question.
     * @param {number} rowIndex - The row index in question.
     * @return {boolean} Data is visible.
     */
    isDataVisible: function(columnIndex, rowIndex) {
        return this.isDataRowVisible(rowIndex) && this.isColumnVisible(columnIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll in the `offsetX` direction if column index `colIndex` is not visible.
     * @param {number} colIndex - The column index in question.
     * @param {number} offsetX - The direction and magnitude to scroll if we need to.
     * @return {boolean} Column is visible.
     */
    insureModelColIsVisible: function(colIndex, offsetX) {
        var maxCols = this.getColumnCount() - 1, // -1 excludes partially visible columns
            indexToCheck = colIndex + (offsetX > 0),
            visible = !this.isColumnVisible(indexToCheck) || colIndex === maxCols;

        if (visible) {
            //the scroll position is the leftmost column
            this.scrollBy(offsetX, 0);
        }

        return visible;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll in the `offsetY` direction if column index c is not visible.
     * @param {number} rowIndex - The column index in question.
     * @param {number} offsetX - The direction and magnitude to scroll if we need to.
     * @return {boolean} Row is visible.
     */
    insureModelRowIsVisible: function(rowIndex, offsetY) {
        var maxRows = this.getRowCount() - 1, // -1 excludes partially visible rows
            indexToCheck = rowIndex + (offsetY > 0),
            visible = !this.isDataRowVisible(indexToCheck) || rowIndex === maxRows;

        if (visible) {
            //the scroll position is the topmost row
            this.scrollBy(0, offsetY);
        }

        return visible;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll horizontal and vertically by the provided offsets.
     * @param {number} offsetX - Scroll in the x direction this much.
     * @param {number} offsetY - Scroll in the y direction this much.
     */
    scrollBy: function(offsetX, offsetY) {
        this.scrollHBy(offsetX);
        this.scrollVBy(offsetY);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll vertically by the provided offset.
     * @param {number} offsetY - Scroll in the y direction this much.
     */
    scrollVBy: function(offsetY) {
        var max = this.sbVScroller.range.max;
        var oldValue = this.getVScrollValue();
        var newValue = Math.min(max, Math.max(0, oldValue + offsetY));
        if (newValue !== oldValue) {
            this.setVScrollValue(newValue);
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll horizontally by the provided offset.
     * @param {number} offsetX - Scroll in the x direction this much.
     */
    scrollHBy: function(offsetX) {
        var max = this.sbHScroller.range.max;
        var oldValue = this.getHScrollValue();
        var newValue = Math.min(max, Math.max(0, oldValue + offsetX));
        if (newValue !== oldValue) {
            this.setHScrollValue(newValue);
        }
    },

    scrollToMakeVisible: function(c, r) {
        var leftColumn = this.renderer.getScrollLeft(),
            topRow = this.renderer.getScrollTop(),
            delta,
            numOfGridCtrlCols = 2, //TODO: Get rid of ALL magic and hardcoded numbers.
            numofGridCtrlRows = 3,
            adjustmentForPartiallyVisCols = -1;

        if (
            // target is off to left; negative delta scrolls left
            (delta = c - (leftColumn + this.renderer.getFixedColumnCount())) < 0 ||

            // target is off to right; positive delta scrolls right
            (delta = c - (leftColumn + this.getVisibleColumnsCount() - numOfGridCtrlCols + adjustmentForPartiallyVisCols)) > 0
        ) {
            this.sbHScroller.index += delta;
        }

        if (
            // target is above top; negative delta scrolls up
            (delta = r - (topRow + this.renderer.getFixedRowCount())) < 0 ||

            // target is below bottom; positive delta scrolls down
            (delta = r - (topRow + this.renderer.rowEdges.length - numofGridCtrlRows)) > 0
        ) {
            this.sbVScroller.index += delta;
        }
    },

    selectCellAndScrollToMakeVisible: function(c, r) {
        this.selectCell(c, r, true);
        this.scrollToMakeVisible(c, r);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Answer which data cell is under a pixel value mouse point.
     * @param {mousePoint} mouse - The mouse point to interrogate.
     */

    getGridCellFromMousePoint: function(mouse) {
        var cell = this.getRenderer().getGridCellFromMousePoint(mouse);
        return cell;
    },

    /**
     * @returns {Rectangle} The pixel based bounds rectangle given a data cell point.
     * @param {Point} cell - The pixel location of the mouse.
     * @memberOf Hypergrid.prototype
     */
    getBoundsOfCell: function(cell) {
        var b = this.getRenderer().getBoundsOfCell(cell);

        //we need to convert this to a proper rectangle
        var newBounds = new Rectangle(b.x, b.y, b.width, b.height);
        return newBounds;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc This is called by the fin-canvas when a resize occurs.
     */
    resized: function() {
        this.synchronizeScrollingBoundries();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary A click event occurred.
     * @desc Determine the cell and delegate to the behavior (model).
     * @param {MouseEvent} event - The mouse event to interrogate.
     * @returns {boolean} Click was consumed.
     */
    cellClicked: function(event) {
        var result = false,
            cell = event.gridCell;

        //click occurred in background area
        if (
            cell.x <= this.getColumnCount() &&
            cell.y <= this.getRowCount()
        ) {
            var hovered = this.getHoverCell(),
                x = hovered.x,
                y = hovered.y;

            // if (x >= 0) {
            //     x = behavior.translateColumnIndex(x + this.getHScrollValue());
            // }

            if (y >= 0) {
                y += this.getVScrollValue();
            }

            result = this.behavior.cellClicked(new Point(x, y), event);
        }
        return result;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @param {number} x - column index
     * @param {number} y - totals row index local to the totals area
     * @param value
     * @param {string[]} [areas=['top', 'bottom']] - may include `'top'` and/or `'bottom'`
     */
    setTotalsValueNotification: function(x, y, value, areas) {
        this.fireSyntheticSetTotalsValue(x, y, value, areas);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @param {number} x - column index
     * @param {number} y - totals row index local to the totals area
     * @param value
     * @param {string[]} [areas=['top', 'bottom']] - may include `'top'` and/or `'bottom'`
     */
    fireSyntheticSetTotalsValue: function(x, y, value, areas) {
        var clickEvent = new CustomEvent('fin-set-totals-value', {
            detail: {
                x: x,
                y: y,
                value: value,
                areas: areas
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticEditorKeyUpEvent: function(inputControl, keyEvent) {
        var clickEvent = new CustomEvent('fin-editor-keyup', {
            detail: {
                input: inputControl,
                keyEvent: keyEvent,
                char: this.canvas.getCharMap()[keyEvent.keyCode][keyEvent.shiftKey ? 1 : 0]
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticEditorKeyDownEvent: function(inputControl, keyEvent) {
        var clickEvent = new CustomEvent('fin-editor-keydown', {
            detail: {
                input: inputControl,
                keyEvent: keyEvent,
                char: this.canvas.getCharMap()[keyEvent.keyCode][keyEvent.shiftKey ? 1 : 0]
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticEditorKeyPressEvent: function(inputControl, keyEvent) {
        var clickEvent = new CustomEvent('fin-editor-keypress', {
            detail: {
                input: inputControl,
                keyEvent: keyEvent,
                char: this.canvas.getCharMap()[keyEvent.keyCode][keyEvent.shiftKey ? 1 : 0]
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticEditorDataChangeEvent: function(inputControl, oldValue, newValue) {
        var clickEvent = new CustomEvent('fin-editor-data-change', {
            detail: {
                input: inputControl,
                oldValue: oldValue,
                newValue: newValue
            },
            cancelable: true
        });
        return this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-row-selection-changed` event.
     */
    fireSyntheticRowSelectionChangedEvent: function() {
        var selectionEvent = new CustomEvent('fin-row-selection-changed', {
            detail: {
                rows: this.getSelectedRows(),
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections(),
            }
        });
        this.canvas.dispatchEvent(selectionEvent);
    },

    fireSyntheticColumnSelectionChangedEvent: function() {
        var selectionEvent = new CustomEvent('fin-column-selection-changed', {
            detail: {
                rows: this.getSelectedRows(),
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections()
            }
        });
        this.canvas.dispatchEvent(selectionEvent);
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and dispatch a `fin-selection-changed` event.
     */
    selectionChanged: function() {
        var selectedRows = this.getSelectedRows();
        var selectionEvent = new CustomEvent('fin-selection-changed', {
            detail: {
                rows: selectedRows,
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections(),
            }
        });
        this.canvas.dispatchEvent(selectionEvent);
    },

    getRowSelection: function(includeHiddenColumns) {
        var column, rows, getColumn,
            self = this,
            selectedRowIndexes = this.selectionModel.getSelectedRows(),
            numColumns = this.getColumnCount(),
            result = {};

        if (includeHiddenColumns) {
            numColumns += this.getHiddenColumns().length;
            getColumn = this.behavior.getColumn;
        } else {
            getColumn = this.behavior.getActiveColumn;
        }
        getColumn = getColumn.bind(this.behavior);

        for (var c = 0; c < numColumns; c++) {
            column = getColumn(c);
            rows = result[column.name] = new Array(selectedRowIndexes.length);
            selectedRowIndexes.forEach(getValue);
        }

        function getValue(selectedRowIndex, j) {
            var dataRow = self.getRow(selectedRowIndex);
            rows[j] = valOrFunc(dataRow, column);
        }

        return result;
    },

    getHiddenColumns: function(){
        //A non in-memory behavior will be more troublesome
      return this.behavior.getHiddenColumns();
    },

    getRowSelectionMatrix: function() {
        var self = this,
            selectedRowIndexes = this.selectionModel.getSelectedRows(),
            numCols = this.getColumnCount(),
            result = new Array(numCols);

        for (var c = 0; c < numCols; c++) {
            var column = this.behavior.getActiveColumn(c);
            result[c] = new Array(selectedRowIndexes.length);
            selectedRowIndexes.forEach(getValue);
        }

        function getValue(selectedRowIndex, r) {
            var dataRow = self.getRow(selectedRowIndex);
            result[c][r] = valOrFunc(dataRow, column);
        }

        return result;
    },

    getColumnSelectionMatrix: function() {
        var dataRow,
            self = this,
            headerRowCount = this.getHeaderRowCount(),
            selectedColumnIndexes = this.getSelectedColumns(),
            numRows = this.getRowCount(),
            result = new Array(selectedColumnIndexes.length);

        selectedColumnIndexes.forEach(function(selectedColumnIndex, c) {
            var column = self.behavior.getActiveColumn(selectedColumnIndex),
                values = result[c] = new Array(numRows);

            for (var r = headerRowCount; r < numRows; r++) {
                dataRow = self.getRow(r);
                values[r] = valOrFunc(dataRow, column);
            }
        });

        return result;
    },

    getColumnSelection: function() {
        var dataRow,
            self = this,
            headerRowCount = this.getHeaderRowCount(),
            selectedColumnIndexes = this.getSelectedColumns(),
            result = {},
            rowCount = this.getRowCount();

        selectedColumnIndexes.forEach(function(selectedColumnIndex) {
            var column = self.behavior.getActiveColumn(selectedColumnIndex),
                values = result[column.name] = new Array(rowCount);

            for (var r = headerRowCount; r < rowCount; r++) {
                dataRow = self.getRow(r);
                values[r] = valOrFunc(dataRow, column);
            }
        });

        return result;
    },

    getSelection: function() {
        var dataRow,
            self = this,
            selections = this.getSelections(),
            rects = new Array(selections.length);

        selections.forEach(getRect);

        function getRect(selectionRect, i) {
            var rect = normalizeRect(selectionRect),
                colCount = rect.extent.x + 1,
                rowCount = rect.extent.y + 1,
                columns = {};

            for (var c = 0, x = rect.origin.x; c < colCount; c++, x++) {
                var column = self.behavior.getActiveColumn(x),
                    values = columns[column.name] = new Array(rowCount);

                for (var r = 0, y = rect.origin.y; r < rowCount; r++, y++) {
                    dataRow = self.getRow(y);
                    values[r] = valOrFunc(dataRow, column);
                }
            }

            rects[i] = columns;
        }

        return rects;
    },

    getSelectionMatrix: function() {
        var dataRow,
            self = this,
            selections = this.getSelections(),
            rects = new Array(selections.length);

        selections.forEach(getRect);

        function getRect(selectionRect, i) {
            var rect = normalizeRect(selectionRect),
                colCount = rect.extent.x + 1,
                rowCount = rect.extent.y + 1,
                rows = [];

            for (var c = 0, x = rect.origin.x; c < colCount; c++, x++) {
                var values = rows[c] = new Array(rowCount),
                    column = self.behavior.getActiveColumn(x);

                for (var r = 0, y = rect.origin.y; r < rowCount; r++, y++) {
                    dataRow = self.getRow(y);
                    values[r] = valOrFunc(dataRow, column);
                }
            }

            rects[i] = rows;
        }

        return rects;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-context-menu` event
     * @param {keyEvent} event - The canvas event.
     */
    fireSyntheticContextMenuEvent: function(e) {
        e.gridCell = this.convertViewPointToDataPoint(e.gridCell);
        var event = new CustomEvent('fin-context-menu', {
            detail: {
                gridCell: e.gridCell,
                mousePoint: e.mousePoint,
                viewPoint: e.viewPoint,
                primitiveEvent: e.primitiveEvent,
                rows: this.getSelectedRows(),
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections()
            }
        });
        this.canvas.dispatchEvent(event);
    },

    fireSyntheticMouseUpEvent: function(e) {
        var event = new CustomEvent('fin-mouseup', {
            detail: {
                gridCell: e.gridCell,
                mousePoint: e.mousePoint,
                viewPoint: e.viewPoint,
                primitiveEvent: e.primitiveEvent,
                rows: this.getSelectedRows(),
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections()
            }
        });
        this.canvas.dispatchEvent(event);
    },

    fireSyntheticMouseDownEvent: function(e) {
        this.stopEditing();
        var event = new CustomEvent('fin-mousedown', {
            detail: {
                gridCell: e.gridCell,
                mousePoint: e.mousePoint,
                viewPoint: e.viewPoint,
                primitiveEvent: e.primitiveEvent,
                rows: this.getSelectedRows(),
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections()
            }
        });
        this.canvas.dispatchEvent(event);
    },

    isViewableButton: function(c, r) {
        return this.getRenderer().isViewableButton(c, r);
    },

    fireSyntheticButtonPressedEvent: function(evt) {
        var dataCell = evt.dataCell;
        var gridCell = evt.gridCell;
        if (this.isViewableButton(dataCell.x, dataCell.y)) {
            var event = new CustomEvent('fin-button-pressed', {
                detail: {
                    gridCell: gridCell
                }
            });
            this.canvas.dispatchEvent(event);
        }
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-column-drag-start` event.
     */
    fireSyntheticOnColumnsChangedEvent: function() {
        var detail = {
            time: Date.now(),
            grid: this
        };
        var cEvent = new CustomEvent('fin-column-changed-event', {
            detail: detail
        });
        console.log('column changed');
        this.canvas.dispatchEvent(cEvent);
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-keydown` event.
     * @param {keyEvent} event - The canvas event.
     */
    fireSyntheticKeydownEvent: function(keyEvent) {
        var clickEvent = new CustomEvent('fin-keydown', {
            detail: keyEvent.detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-keyup` event.
     * @param {keyEvent} event - The canvas event.
     */
    fireSyntheticKeyupEvent: function(keyEvent) {
        var clickEvent = new CustomEvent('fin-keyup', {
            detail: keyEvent.detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticFilterAppliedEvent: function() {
        var filterEvent = new CustomEvent('fin-filter-applied');
        this.canvas.dispatchEvent(filterEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-cell-enter` event
     * @param {Point} cell - The pixel location of the cell in which the click event occurred.
     * @param {MouseEvent} event - The system mouse event.
     */
    fireSyntheticOnCellEnterEvent: function(cell) {
        var detail = {
            gridCell: cell,
            time: Date.now(),
            grid: this
        };
        var clickEvent = new CustomEvent('fin-cell-enter', {
            detail: detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-cell-exit` event.
     * @param {Point} cell - The pixel location of the cell in which the click event occured.
     * @param {MouseEvent} event - The system mouse event.
     */
    fireSyntheticOnCellExitEvent: function(cell) {
        var detail = {
            gridCell: cell,
            time: Date.now(),
            grid: this
        };
        var clickEvent = new CustomEvent('fin-cell-exit', {
            detail: detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-cell-click` event.
     * @param {Point} cell - The pixel location of the cell in which the click event occured.
     * @param {MouseEvent} event - The system mouse event.
     */
    fireSyntheticClickEvent: function(mouseEvent) {
        var cell = mouseEvent.gridCell;
        var detail = {
            gridCell: cell,
            mousePoint: mouseEvent.mousePoint,
            keys: mouseEvent.keys,
            primitiveEvent: mouseEvent,
            time: Date.now(),
            grid: this
        };
        this.behavior.enhanceDoubleClickEvent(detail);
        var clickEvent = new CustomEvent('fin-click', {
            detail: detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-double-click` event.
     * @param {MouseEvent} event - The system mouse event.
     */
    fireSyntheticDoubleClickEvent: function(mouseEvent) {
        this.stopEditing();
        var cell = mouseEvent.gridCell;
        var detail = {
            gridCell: cell,
            mousePoint: mouseEvent.mousePoint,
            time: Date.now(),
            grid: this
        };
        this.behavior.enhanceDoubleClickEvent(mouseEvent);
        var clickEvent = new CustomEvent('fin-double-click', {
            detail: detail
        });
        this.behavior.cellDoubleClicked(cell, mouseEvent);
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a rendered event.
     */
    fireSyntheticGridRenderedEvent: function() {
        var event = new CustomEvent('fin-grid-rendered', {
            detail: {
                source: this,
                time: Date.now()
            }
        });
        if (this.canvas) {
            this.canvas.dispatchEvent(event);
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a scroll event.
     * @param {string} type - Should be either `fin-scroll-x` or `fin-scroll-y`.
     * @param {number} oldValue - The old scroll value.
     * @param {number} newValue - The new scroll value.
     */
    fireScrollEvent: function(type, oldValue, newValue) {
        var event = new CustomEvent(type, {
            detail: {
                oldValue: oldValue,
                value: newValue,
                time: Date.now()
            }
        });
        this.canvas.dispatchEvent(event);

    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the vertical scroll value.
     * @param {number} newValue - The new scroll value.
     */
    setVScrollValue: function(y) {
        var self = this;
        y = Math.min(this.sbVScroller.range.max, Math.max(0, Math.round(y)));
        if (y !== this.vScrollValue) {
            this.behavior._setScrollPositionY(y);
            var oldY = this.vScrollValue;
            this.vScrollValue = y;
            this.scrollValueChangedNotification();
            setTimeout(function() {
                // self.sbVRangeAdapter.subjectChanged();
                self.fireScrollEvent('fin-scroll-y', oldY, y);
            });
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @return {number} The vertical scroll value.
     */
    getVScrollValue: function() {
        return this.vScrollValue;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the horizontal scroll value.
     * @param {number} newValue - The new scroll value.
     */
    setHScrollValue: function(x) {
        var self = this;
        x = Math.min(this.sbHScroller.range.max, Math.max(0, Math.round(x)));
        if (x !== this.hScrollValue) {
            this.behavior._setScrollPositionX(x);
            var oldX = this.hScrollValue;
            this.hScrollValue = x;
            this.scrollValueChangedNotification();
            setTimeout(function() {
                //self.sbHRangeAdapter.subjectChanged();
                self.fireScrollEvent('fin-scroll-x', oldX, x);
                //self.synchronizeScrollingBoundries(); // todo: Commented off to prevent the grid from bouncing back, but there may be repurcussions...
            });
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns The vertical scroll value.
     */
    getHScrollValue: function() {
        return this.hScrollValue;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Request input focus.
     */
    takeFocus: function() {
        if (!this.stopEditing()) {
            this.getCanvas().takeFocus();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Request focus for our cell editor.
     */
    editorTakeFocus: function() {
        if (this.cellEditor) {
            return this.cellEditor.takeFocus();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Initialize the scroll bars.
     */
    initScrollbars: function() {

        var self = this;

        var horzBar = new FinBar({
            orientation: 'horizontal',
            onchange: self.setHScrollValue.bind(self),
            cssStylesheetReferenceElement: this.div
        });

        var vertBar = new FinBar({
            orientation: 'vertical',
            onchange: self.setVScrollValue.bind(self),
            paging: {
                up: self.pageUp.bind(self),
                down: self.pageDown.bind(self)
            }
        });

        this.sbHScroller = horzBar;
        this.sbVScroller = vertBar;

        var hPrefix = this.resolveProperty('hScrollbarClassPrefix');
        var vPrefix = this.resolveProperty('vScrollbarClassPrefix');

        if (hPrefix && hPrefix !== '') {
            this.sbHScroller.classPrefix = hPrefix;
        }

        if (vPrefix && vPrefix !== '') {
            this.sbVScroller.classPrefix = vPrefix;
        }

        this.div.appendChild(horzBar.bar);
        this.div.appendChild(vertBar.bar);

        this.resizeScrollbars();

    },

    resizeScrollbars: function() {
        this.sbHScroller.shortenBy(this.sbVScroller).resize();
        //this.sbVScroller.shortenBy(this.sbHScroller);
        this.sbVScroller.resize();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Scroll values have changed, we've been notified.
     */
    setVScrollbarValues: function(max) {
        this.sbVScroller.range = {
            min: 0,
            max: max
        };
    },

    setHScrollbarValues: function(max) {
        this.sbHScroller.range = {
            min: 0,
            max: max
        };
    },

    scrollValueChangedNotification: function() {

        if (this.hScrollValue === this.sbPrevHScrollValue && this.vScrollValue === this.sbPrevVScrollValue) {
            return;
        }

        this.sbPrevHScrollValue = this.hScrollValue;
        this.sbPrevVScrollValue = this.vScrollValue;

        if (this.cellEditor) {
            this.cellEditor.scrollValueChangedNotification();
        }

        this.computeCellsBounds();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Get data value at given cell.
     * @desc Delegates to the behavior.
     * @param {number} x - The horizontal coordinate.
     * @param {number} y - The vertical coordinate.
     * @param {*} value
     */
    getValue: function(x, y) {
        return this.behavior.getValue(x, y);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set a data value into the behavior (model) at the given point
     * @param {number} x - The horizontal coordinate.
     * @param {number} y - The vertical coordinate.
     */
    setValue: function(x, y, value) {
        this.behavior.setValue(x, y, value);
    },

    getColumnAlignment: function(c) {
        return this.behavior.getColumnAlignment(c);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc The data dimensions have changed, or our pixel boundries have changed.
     * Adjust the scrollbar properties as necessary.
     */
    synchronizeScrollingBoundries: function() {
        var numFixedColumns = this.getFixedColumnCount();
        var numFixedRows = this.getFixedRowCount();

        var numColumns = this.getColumnCount();
        var numRows = this.getRowCount();

        var bounds = this.getBounds();
        if (!bounds) {
            return;
        }
        var scrollableHeight = bounds.height - this.behavior.getFixedRowsMaxHeight() - 15; //5px padding at bottom and right side
        var scrollableWidth = (bounds.width - 200) - this.behavior.getFixedColumnsMaxWidth() - 15;

        var lastPageColumnCount = 0;
        var columnsWidth = 0;
        for (; lastPageColumnCount < numColumns; lastPageColumnCount++) {
            var eachWidth = this.getColumnWidth(numColumns - lastPageColumnCount - 1);
            columnsWidth += eachWidth;
            if (columnsWidth > scrollableWidth) {
                break;
            }
        }

        var lastPageRowCount = 0;
        var rowsHeight = 0;
        for (; lastPageRowCount < numRows; lastPageRowCount++) {
            var eachHeight = this.getRowHeight(numRows - lastPageRowCount - 1);
            rowsHeight += eachHeight;
            if (rowsHeight > scrollableHeight) {
                break;
            }
        }

        var hMax = Math.max(0, numColumns - numFixedColumns - lastPageColumnCount);
        this.setHScrollbarValues(hMax);

        var vMax = 1 + Math.max(0, numRows - numFixedRows - lastPageRowCount);
        this.setVScrollbarValues(vMax);

        this.setHScrollValue(Math.min(this.getHScrollValue(), hMax));
        this.setVScrollValue(Math.min(this.getVScrollValue(), vMax));

        //this.getCanvas().resize();
        this.computeCellsBounds();
        this.repaint();

        this.resizeScrollbars();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Note that "viewable rows" includes any partially viewable rows.
     * @returns {number} The number of viewable rows.
     */
    getVisibleRows: function() {
        return this.getRenderer().getVisibleRows();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Note that "viewable columns" includes any partially viewable columns.
     * @returns {number} The number of viewable columns.
     */
    getVisibleColumns: function() {
        return this.getRenderer().getVisibleColumns();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Initialize the renderer sub-component.
     */
    initRenderer: function() {
        this.renderer = new Renderer(this);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Renderer} sub-component
     */
    getRenderer: function() {
        return this.renderer;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The width of the given column.
     * @param {number} columnIndex - The untranslated column index.
     */
    getColumnWidth: function(columnIndex) {
        return this.behavior.getColumnWidth(columnIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the width of the given column.
     * @param {number} columnIndex - The untranslated column index.
     * @param {number} columnWidth - The width in pixels.
     */
    setColumnWidth: function(columnIndex, columnWidth) {
        this.stopEditing();
        this.behavior.setColumnWidth(columnIndex, columnWidth);
    },

    getColumnEdge: function(c) {
        return this.behavior.getColumnEdge(c, this.getRenderer());
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The total width of all the fixed columns.
     */
    getFixedColumnsWidth: function() {
        return this.behavior.getFixedColumnsWidth();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The height of the given row
     * @param {number} rowIndex - The untranslated fixed column index.
     */
    getRowHeight: function(rowIndex) {
        return this.behavior.getRowHeight(rowIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the height of the given row.
     * @param {number} rowIndex - The row index.
     * @param {number} rowHeight - The width in pixels.
     */
    setRowHeight: function(rowIndex, rowHeight) {
        this.stopEditing();
        this.behavior.setRowHeight(rowIndex, rowHeight);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The total fixed rows height
     */
    getFixedRowsHeight: function() {
        return this.behavior.getFixedRowsHeight();
    },

    /**
     * Number of _visible_ columns.
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of columns.
     */
    getColumnCount: function() {
        return this.behavior.getActiveColumnCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of fixed rows.
     */
    getRowCount: function() {
        return this.behavior.getRowCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of unfiltered rows.
     */
    getUnfilteredRowCount: function() {
        return this.behavior.getUnfilteredRowCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of fixed columns.
     */
    getFixedColumnCount: function() {
        return this.behavior.getFixedColumnCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns The number of fixed rows.
     */
    getFixedRowCount: function() {
        return this.behavior.getFixedRowCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary The top left area has been clicked on
     * @desc Delegates to the behavior.
     * @param {event} event - The event details.
     */
    topLeftClicked: function(mouse) {
        this.behavior.topLeftClicked(this, mouse);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary A fixed row has been clicked.
     * @desc Delegates to the behavior.
     * @param {event} event - The event details.
     */
    rowHeaderClicked: function(mouse) {
        this.behavior.rowHeaderClicked(this, mouse);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary A fixed column has been clicked.
     * @desc Delegates to the behavior.
     * @param {event} event - The event details.
     */
    columnHeaderClicked: function(mouse) {
        this.behavior.columnHeaderClicked(this, mouse);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc An edit event has occurred. Activate the editor at the given coordinates.
     * @param {number} event.gridCell.x - The horizontal coordinate.
     * @param {number} event.gridCell.y - The vertical coordinate.
     * @param {boolean} [event.primitiveEvent.type]
     * @returns {undefined|CellEditor} The editor object or `undefined` if no editor or editor already open.
     */
    onEditorActivate: function(event) {
        var point = event.gridCell;
        return this.editAt(point);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Get the cell editor.
     * @desc Delegates to the behavior.
     * @returns The cell editor at the given coordinates.
     * @param {Point} editPoint - The grid cell coordinates.
     */
    getCellEditorAt: function(editPoint) {
        return this.behavior.getCellEditorAt(editPoint);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Toggle HiDPI support.
     * @desc HiDPI support is now *on* by default.
     * > There used to be a bug in Chrome that caused severe slow down on bit blit of large images, so this HiDPI needed to be optional.
     */
    toggleHiDPI: function() {
        if (this.useHiDPI()) {
            this.removeAttribute('hidpi');
        } else {
            this.setAttribute('hidpi', null);
        }
        this.canvas.resize();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} Te HiDPI ratio.
     */
    getHiDPI: function(ctx) {
        if (window.devicePixelRatio && this.useHiDPI()) {
            var devicePixelRatio = window.devicePixelRatio || 1;
            var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;

            var ratio = devicePixelRatio / backingStoreRatio;
            return ratio;
        } else {
            return 1;
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The width of the given (recently rendered) column.
     * @param {number} colIndex - The column index.
     */
    getRenderedWidth: function(colIndex) {
        return this.renderer.getRenderedWidth(colIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The height of the given (recently rendered) row.
     * @param {number} rowIndex - Tthe row index.
     */
    getRenderedHeight: function(rowIndex) {
        return this.renderer.getRenderedHeight(rowIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Update the cursor under the hover cell.
     */
    updateCursor: function() {
        var cursor = this.behavior.getCursorAt(-1, -1);
        var hoverCell = this.getHoverCell();
        if (
            hoverCell &&
            hoverCell.x > -1 &&
            hoverCell.y > -1
        ) {
            var x = hoverCell.x + this.getHScrollValue();
            cursor = this.behavior.getCursorAt(x, hoverCell.y + this.getVScrollValue());
        }
        this.beCursor(cursor);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Repaint the given cell.
     * @param {x} x - The horizontal coordinate.
     * @param {y} y - The vertical coordinate.
     */
    repaintCell: function(x, y) {
        this.getRenderer().repaintCell(x, y);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The user is currently dragging a column to reorder it.
     */
    isDraggingColumn: function() {
        return !!this.renderOverridesCache.dragger;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Scroll up one full page.
     * @returns {number}
     */
    pageUp: function() {
        var rowNum = this.getRenderer().getPageUpRow();
        this.setVScrollValue(rowNum);
        return rowNum;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Scroll down one full page.
     * @returns {number}
     */
    pageDown: function() {
        var rowNum = this.getRenderer().getPageDownRow();
        this.setVScrollValue(rowNum);
        return rowNum;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Not yet implemented.
     */
    pageLeft: function() {
        console.log('page left');
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Not yet implemented.
     */
    pageRight: function() {
        console.log('page right');
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {object[]} Objects with the values that were just rendered.
     */
    getRenderedData: function() {
        // assumes one row of headers
        var behavior = this.behavior,
            renderer = this.getRenderer(),
            colCount = this.getColumnCount(),
            rowCount = renderer.getVisibleRows(),
            headers = new Array(colCount),
            results = new Array(rowCount),
            row;

        headers.forEach(function(header, c) {
            headers[c] = behavior.getActiveColumn(c).header;
        });

        results.forEach(function(result, r) {
            row = results[r] = {
                hierarchy: behavior.getFixedColumnValue(0, r)
            };
            headers.forEach(function(field, c) {
                row[field] = behavior.getValue(c, r);
            });
        });

        return results;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {object} An object that represents the currently selection row.
     */
    getSelectedRow: function() {
        var sels = this.selectionModel.getSelections();
        if (sels.length) {
            var behavior = this.behavior,
                colCount = this.getColumnCount(),
                topRow = sels[0].origin.y,
                row = {
                    //hierarchy: behavior.getFixedColumnValue(0, topRow)
                };

            for (var c = 0; c < colCount; c++) {
                row[behavior.getActiveColumn(c).header] = behavior.getValue(c, topRow);
            }

            return row;
        }
    },

    fireRequestCellEdit: function(cell, value) {
        var clickEvent = new CustomEvent('fin-request-cell-edit', {
            cancelable: true,
            detail: {
                value: value,
                gridCell: cell,
                time: Date.now()
            }
        });
        return this.canvas.dispatchEvent(clickEvent); //I wasn't cancelled
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a fin-before-cell-edit event.
     * @param {Point} cell - The x,y coordinates.
     * @param {Object} value - The current value.
     */
    fireBeforeCellEdit: function(cell, oldValue, newValue, control) {
        var clickEvent = new CustomEvent('fin-before-cell-edit', {
            cancelable: true,
            detail: {
                oldValue: oldValue,
                newValue: newValue,
                gridCell: cell,
                time: Date.now(),
                input: control,
                row: this.getRow(cell.y)
            }
        });
        var proceed = this.canvas.dispatchEvent(clickEvent);
        return proceed; //I wasn't cancelled
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Renderer} sub-component
     * @param {Point} cell - The x,y coordinates.
     * @param {Object} oldValue - The old value.
     * @param {Object} newValue - The new value.
     */
    fireAfterCellEdit: function(cell, oldValue, newValue, control) {
        var clickEvent = new CustomEvent('fin-after-cell-edit', {
            detail: {
                newValue: newValue,
                oldValue: oldValue,
                gridCell: cell,
                time: Date.now(),
                input: control,
                row: this.getRow(cell.y)
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Autosize the column at colIndex for best fit.
     * @param {number} colIndex - The column index to modify at
     */
    autosizeColumn: function(activeColumnIndex) {
        var column = this.behavior.getActiveColumn(activeColumnIndex);
        column.checkColumnAutosizing(true);
        this.computeCellsBounds();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Enable/disable if this component can receive the focus.
     * @param {boolean} - canReceiveFocus
     */
    setFocusable: function(canReceiveFocus) {
        this.getCanvas().setFocusable(canReceiveFocus);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of columns that were just rendered
     */
    getVisibleColumnsCount: function() {
        return this.getRenderer().getVisibleColumnsCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of rows that were just rendered
     */
    getVisibleRowsCount: function() {
        return this.getRenderer().getVisibleRowsCount();
    },

    /**
     * @memberOf Hypergrid.prototype
    update the size of the grid
     *
     * #### returns: integer
     */
    updateSize: function() {
        this.canvas.checksize();
    },


    /**
     * @memberOf Hypergrid.prototype
     * @desc Stop the global repainting flag thread.
     */
    stopPaintThread: function() {
        this.canvas.stopPaintThread();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Stop the global resize check flag thread.
     */
    stopResizeThread: function() {
        this.canvas.stopResizeThread();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Restart the global resize check flag thread.
     */
    restartResizeThread: function() {
        this.canvas.restartResizeThread();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Restart the global repainting check flag thread.
     */
    restartPaintThread: function() {
        this.canvas.restartPaintThread();
    },

    swapColumns: function(source, target) {
        //Turns out this is called during dragged 'i.e' when the floater column is reshuffled
        //by the currently dragged column. The column positions are constantly reshuffled
        this.behavior.swapColumns(source, target);
    },

    endDragColumnNotification: function() {
        this.behavior.endDragColumnNotification();
    },

    getFixedColumnsMaxWidth: function() {
        return this.behavior.getFixedColumnsMaxWidth();
    },

    isMouseDownInHeaderArea: function() {
        var headerColumnCount = this.getHeaderColumnCount();
        var headerRowCount = this.getHeaderRowCount();
        var mouseDown = this.getMouseDown();
        return mouseDown.x < headerColumnCount || mouseDown.y < headerRowCount;
    },

    isHeaderWrapping: function() {
        return this.resolveProperty('headerTextWrapping');
    },

    _getBoundsOfCell: function(x, y) {
        return this.getRenderer()._getBoundsOfCell(x, y);
    },

    getColumnProperties: function(columnIndex) {
        return this.behavior.getColumnProperties(columnIndex);
    },

    setColumnProperties: function(columnIndex, properties) {
        this.behavior.setColumnProperties(columnIndex, properties);
    },

    moveSingleSelect: function(x, y) {
        this.behavior.moveSingleSelect(this, x, y);
    },

    selectCell: function(x, y, silent) {
        var dontClearRows = this.isCheckboxOnlyRowSelections();
        this.selectionModel.clear(dontClearRows);
        this.selectionModel.select(x, y, 0, 0, silent);
    },

    getHeaderColumnCount: function() {
        return this.behavior.getHeaderColumnCount();
    },

    toggleSort: function(x, keys) {
        this.stopEditing();
        var behavior = this.behavior;
        var self = this;
        behavior.toggleSort(x, keys);

        setTimeout(function() {
            self.synchronizeScrollingBoundries();
            //self.behaviorChanged();
            if (self.isColumnAutosizing()) {
                behavior.autosizeAllColumns();
            }
            self.repaint();
        }, 10);
    },

    toggleSelectColumn: function(x, keys) {
        keys = keys || [];
        var model = this.selectionModel;
        var alreadySelected = model.isColumnSelected(x);
        var hasCTRL = keys.indexOf('CTRL') > -1;
        var hasSHIFT = keys.indexOf('SHIFT') > -1;
        if (!hasCTRL && !hasSHIFT) {
            model.clear();
            if (!alreadySelected) {
                model.selectColumn(x);
            }
        } else {
            if (hasCTRL) {
                if (alreadySelected) {
                    model.deselectColumn(x);
                } else {
                    model.selectColumn(x);
                }
            }
            if (hasSHIFT) {
                model.clear();
                model.selectColumn(this.lastEdgeSelection[0], x);
            }
        }
        if (!alreadySelected && !hasSHIFT) {
            this.lastEdgeSelection[0] = x;
        }
        this.repaint();
        this.fireSyntheticColumnSelectionChangedEvent();
    },

    toggleSelectRow: function(y, keys) {
        //we can select the totals rows if they exist, but not rows above that
        if (y > this.getFilterRowIndex()) {
            keys = keys || [];

            var sm = this.selectionModel;
            var alreadySelected = sm.isRowSelected(y);
            var hasSHIFT = keys.indexOf('SHIFT') >= 0;

            if (alreadySelected) {
                sm.deselectRow(y);
            } else {
                this.singleSelect();
                sm.selectRow(y);
            }

            if (hasSHIFT) {
                sm.clear();
                sm.selectRow(this.lastEdgeSelection[1], y);
            }

            if (!alreadySelected && !hasSHIFT) {
                this.lastEdgeSelection[1] = y;
            }
            this.repaint();
        }
    },

    singleSelect: function() {
        var isCheckboxOnlyRowSelections = this.isCheckboxOnlyRowSelections(),
            isSingleRowSelectionMode = this.isSingleRowSelectionMode(),
            hasCTRL = false,
            result;

        if (this.mouseDownState){
            //triggered programmatically
            hasCTRL = this.mouseDownState.primitiveEvent.detail.primitiveEvent.ctrlKey;
        }

        result = (
            isCheckboxOnlyRowSelections && isSingleRowSelectionMode ||
            !isCheckboxOnlyRowSelections && (!hasCTRL || isSingleRowSelectionMode)
        );

        if (result) {
            this.selectionModel.clearRowSelection();
        }

        return result;
    },

    selectViewportCell: function(x, y) {
        var headerRowCount = this.getHeaderRowCount();
        var renderer = this.getRenderer();
        var realX = renderer.getVisibleColumns()[x];
        var realY = renderer.getVisibleRows()[y];
        this.clearSelections();
        this.select(realX, realY + headerRowCount, 0, 0);
        this.setMouseDown(this.newPoint(realX, realY + headerRowCount));
        this.setDragExtent(this.newPoint(0, 0));
        this.repaint();
    },

    selectToViewportCell: function(x, y) {
        var selections = this.getSelections();
        if (selections && selections.length) {
            var headerRowCount = this.getHeaderRowCount();
            var renderer = this.getRenderer();
            var realX = renderer.getVisibleColumns()[x];
            var realY = renderer.getVisibleRows()[y] + headerRowCount;
            var selection = selections[0];
            var origin = selection.origin;
            this.setDragExtent(this.newPoint(realX - origin.x, realY - origin.y));
            this.select(origin.x, origin.y, realX - origin.x, realY - origin.y);
            this.repaint();
        }
    },

    selectFinalCellOfCurrentRow: function() {
        var x = this.getColumnCount() - 1;
        var y = this.getSelectedRows()[0];
        var headerRowCount = this.getHeaderRowCount();
        this.clearSelections();
        this.scrollBy(this.getColumnCount(), 0);
        this.select(x, y + headerRowCount, 0, 0);
        this.setMouseDown(this.newPoint(x, y + headerRowCount));
        this.setDragExtent(this.newPoint(0, 0));
        this.repaint();
    },

    selectToFinalCellOfCurrentRow: function() {
        var selections = this.getSelections();
        if (selections && selections.length) {
            var selection = selections[0];
            var origin = selection.origin;
            var extent = selection.extent;
            var columnCount = this.getColumnCount();
            this.scrollBy(columnCount, 0);

            this.clearSelections();
            this.select(origin.x, origin.y, columnCount - origin.x - 1, extent.y);

            this.repaint();
        }
    },

    selectFirstCellOfCurrentRow: function() {
        var x = 0;
        var y = this.getSelectedRows()[0];
        var headerRowCount = this.getHeaderRowCount();
        this.clearSelections();
        this.setHScrollValue(0);
        this.select(x, y + headerRowCount, 0, 0);
        this.setMouseDown(this.newPoint(x, y + headerRowCount));
        this.setDragExtent(this.newPoint(0, 0));
        this.repaint();
    },

    selectToFirstCellOfCurrentRow: function() {
        var selections = this.getSelections();
        if (selections && selections.length) {
            var selection = selections[0];
            var origin = selection.origin;
            var extent = selection.extent;
            this.clearSelections();
            this.select(origin.x, origin.y, -origin.x, extent.y);
            this.setHScrollValue(0);
            this.repaint();
        }
    },

    selectFinalCell: function() {
        this.selectCell(this.getColumnCount() - 1, this.getRowCount() - 1);
        this.scrollBy(this.getColumnCount(), this.getRowCount());
        this.repaint();
    },

    selectToFinalCell: function() {
        var selections = this.getSelections();
        if (selections && selections.length) {
            var selection = selections[0];
            var origin = selection.origin;
            var columnCount = this.getColumnCount();
            var rowCount = this.getRowCount();

            this.clearSelections();
            this.select(origin.x, origin.y, columnCount - origin.x - 1, rowCount - origin.y - 1);
            this.scrollBy(columnCount, rowCount);
            this.repaint();
        }
    },

    isShowRowNumbers: function() {
        return this.resolveProperty('showRowNumbers');
    },
    isEditable: function() {
        return this.resolveProperty('editable') === true;
    },
    isShowFilterRow: function() {
        return this.resolveProperty('showFilterRow');
    },
    isShowHeaderRow: function() {
        return this.resolveProperty('showHeaderRow');
    },
    getHeaderRowCount: function() {
        return this.behavior.getHeaderRowCount();
    },
    isFilterRow: function(y) {
        return y === this.getFilterRowIndex();
    },
    getFilterRowIndex: function() {
        return !this.isShowFilterRow() ? -1 : this.isShowHeaderRow() ? 1 : 0;
    },
    hasHierarchyColumn: function() {
        return this.behavior.hasHierarchyColumn();
    },
    isHierarchyColumn: function(x) {
        return this.hasHierarchyColumn() && x === 0;
    },
    checkScrollbarVisibility: function() {
        // var hoverClassOver = this.resolveProperty('scrollbarHoverOver');
        // var hoverClassOff = this.resolveProperty('scrollbarHoverOff');

        // if (hoverClassOff === 'visible') {
        //     this.sbHScroller.classList.remove(hoverClassOver);
        //     this.sbVScroller.classList.remove(hoverClassOff);
        //     this.sbHScroller.classList.add('visible');
        //     this.sbVScroller.classList.add('visible');
        // }
    },
    isColumnOrRowSelected: function() {
        return this.selectionModel.isColumnOrRowSelected();
    },
    selectColumn: function(x1, x2) {
        this.selectionModel.selectColumn(x1, x2);
    },
    selectRow: function(y1, y2) {
        var sm = this.selectionModel;
        var selectionEdge = this.getFilterRowIndex() + 1;

        if (this.singleSelect()) {
            y1 = y2;
        } else {
            // multiple row selection
            y2 = y2 || y1;
        }
        var min = Math.min(y1, y2);
        if (min >= selectionEdge) {
            var max = Math.max(y1, y2);
            sm.selectRow(min, max);
        }
    },
    isRowNumberAutosizing: function() {
        return this.resolveProperty('rowNumberAutosizing');
    },
    isRowSelected: function(r) {
        return this.selectionModel.isRowSelected(r);
    },
    isColumnSelected: function(c) {
        return this.selectionModel.isColumnSelected(c);
    },
    lookupFeature: function(key) {
        return this.behavior.lookupFeature(key);
    },
    getRow: function(y) {
        return this.behavior.getRow(y);
    },
    isCellSelection: function() {
        return this.resolveProperty('cellSelection') === true;
    },
    isRowSelection: function() {
        return this.resolveProperty('rowSelection') === true;
    },
    isColumnSelection: function() {
        return this.resolveProperty('columnSelection') === true;
    },
    getComputedRow: function(y) {
        return this.behavior.getComputedRow(y);
    },
    isColumnAutosizing: function() {
        return this.resolveProperty('columnAutosizing') === true;
    },

    /**
     * @summary Get a reference to the filter attached to the Hypergrid.
     * @returns {FilterTree}
     * @memberOf Hypergrid.prototype
     */
    getGlobalFilter: function() {
        return this.behavior.getGlobalFilter();
    },

    /**
     * @summary Attach/detach a filter to a Hypergrid.
     * @param {FilterTree} [filter] - The filter object. If undefined, any attached filter is removed.
     * @memberOf Hypergrid.prototype
     */
    setGlobalFilter: function(filter) {
        this.behavior.setGlobalFilter(filter);
        this.behaviorChanged();
    },

    /**
     * @summary Set the case sensitivity of filter tests against data.
     * @desc Case sensitivity pertains to string compares only. This includes untyped columns, columns typed as strings, typed columns containing data that cannot be coerced to type or when the filter expression operand cannot be coerced.
     *
     * NOTE: This is a shared property and affects all grid managed by this instance of the app.
     * @param {boolean} isSensitive
     * @memberOf Hypergrid.prototype
     */
    setGlobalFilterCaseSensitivity: function(isSensitive) {
        // this setting affects all grids
        this.behavior.setGlobalFilterCaseSensitivity(isSensitive);
        this.computeCellsBounds();
        this.behaviorChanged();
    },

    /**
     * @param {number|string} columnIndexOrName - The _column filter_ to set.
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @param {boolean} [options.syntax='CQL'] - The syntax to use to describe the filter state. Note that `getFilter`'s default syntax, `'CQL'`, differs from the other get state methods.
     * @returns {FilterTreeStateObject}
     * @memberOf Hypergrid.prototype
     */
    getFilter: function(columnIndexOrName, options) {
        return this.behavior.getFilter(columnIndexOrName, options);
    },

    /**
     * @summary Set a particular column filter's state.
     * @desc After setting the new filter state:
     * * Reapplies the filter to the data source.
     * * Calls `behaviorChanged()` to update the grid canvas.
     * @param {number|string} columnIndexOrName - The _column filter_ to set.
     * @param {string|object} [state] - A filter tree object or a JSON, SQL, or CQL subexpression string that describes the a new state for the named column filter. The existing column filter subexpression is replaced with a new node based on this state. If it does not exist, the new subexpression is added to the column filters subtree (`filter.columnFilters`).
     *
     * If undefined, removes the entire column filter subexpression from the column filters subtree.
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @param {string} [options.syntax='CQL'] - The syntax to use to describe the filter state. Note that `setFilter`'s default syntax, `'CQL'`, differs from the other get state methods.
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf Hypergrid.prototype
     */
    setFilter: function(columnIndexOrName, state, options) {
        if (this.cellEditor) {
            this.cellEditor.hideEditor();
        }
        this.behavior.setFilter(columnIndexOrName, state, options);
        this.behaviorChanged();
    },

    /**
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @returns {FilterTreeStateObject}
     * @memberOf Hypergrid.prototype
     */
    getFilters: function(options) {
        return this.behavior.getFilters(options);
    },

    /**
     * @param {FilterTreeStateObject} state
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf Hypergrid.prototype
     */
    setFilters: function(state, options) {
        if (this.cellEditor) {
            this.cellEditor.hideEditor();
        }
        this.behavior.setFilters(state, options);
        this.behaviorChanged();
    },

    /**
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @returns {FilterTreeStateObject}
     * @memberOf Hypergrid.prototype
     */
    getTableFilter: function(options) {
        return this.behavior.getTableFilter(options);
    },

    /**
     * @param {FilterTreeStateObject} state
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf Hypergrid.prototype
     */
    setTableFilter: function(state, options) {
        this.behavior.setTableFilter(state, options);
        this.behaviorChanged();
    },

    selectRowsFromCells: function() {
        if (!this.isCheckboxOnlyRowSelections()) {
            var last,
                hasCTRL = this.mouseDownState.primitiveEvent.detail.primitiveEvent.ctrlKey;

            if (hasCTRL && !this.isSingleRowSelectionMode()) {
                this.selectionModel.selectRowsFromCells(0, hasCTRL);
            } else if ((last = this.selectionModel.getLastSelection())) {
                this.selectRow(null, last.corner.y);
            } else {
                this.clearRowSelection();
            }
        }
    },
    selectColumnsFromCells: function() {
        this.selectionModel.selectColumnsFromCells();
    },
    getSelectedRows: function() {
        return this.behavior.getSelectedRows();
    },
    getSelectedColumns: function() {
        return this.behavior.getSelectedColumns();
    },
    getSelections: function() {
        return this.behavior.getSelections();
    },
    getLastSelectionType: function() {
        return this.selectionModel.getLastSelectionType();
    },
    isCellSelected: function(x, y) {
        return this.selectionModel.isCellSelected(x, y);
    },
    isInCurrentSelectionRectangle: function(x, y) {
        return this.selectionModel.isInCurrentSelectionRectangle(x, y);
    },
    selectAllRows: function() {
        this.selectionModel.selectAllRows();
    },
    areAllRowsSelected: function() {
        return this.selectionModel.areAllRowsSelected();
    },
    toggleSelectAllRows: function() {
        if (this.areAllRowsSelected()) {
            this.selectionModel.clear();
        } else {
            this.selectAllRows();
        }
        this.repaint();
    },
    isSingleRowSelectionMode: function() {
        return this.resolveProperty('singleRowSelectionMode');
    },
    newPoint: function(x, y) {
        return new Point(x, y);
    },
    newRectangle: function(x, y, width, height) {
        return new Rectangle(x, y, width, height);
    },
    getFormattedValue: function(x, y) {
        return this.formatValue(
            this.getColumnProperties(x).format,
            this.getValue(x, y + this.getHeaderRowCount())
        );
    },

    /**
     * @summary Sticky hash of dialog options objects.
     * @desc Each key is a dialog name; the value is the options object for that dialog.
     * The default dialog options object has the key `'undefined'`, which is undefined by default; it is set by calling `setDialogOptions` with no `dialogName` parameter.
     * @private
     */
    dialogOptions: {},

    /**
     * @summary Set and/or return a specific dialog options object *or* a default dialog options object.
     *
     * @desc If `options` defined:
     * * If `dialogName` defined: Save the specific dialog's options object.
     * * If `dialogName` undefined: Save the default dialog options object.
     *
     * If `options` is _not_ defined, no new dialog options object will be saved; but a previously saved preset will be returned (after mixing in the default preset if there is one).
     *
     * The default dialog options object is used in two ways:
     * * when a dialog has no options object
     * * as a mix-in base when a dialog does have an options object
     *
     * @param {string} [dialogName] If undefined, `options` defines the default dialog options object.
     *
     * @param {object} [options] If defined, preset the named dialog options object or the default dialog options object if name is undefined.
     *
     * @returns {object} One of:
     * * When `options` undefined, first of:
     *   * previous preset
     *   * default preset
     *   * empty object
     * * When `options` defined, first of:
     *   * mix-in: default preset members + `options` members
     *   * `options` verbatim when default preset undefined
     */
    setDialogOptions: function(dialogName, options) {
        if (typeof dialogName === 'object') {
            options = dialogName;
            dialogName = undefined;
        }
        var defaultOptions = this.dialogOptions.undefined;
        options = options || dialogName && this.dialogOptions[dialogName];
        if (options) {
            this.dialogOptions[dialogName] = options;
            if (defaultOptions) {
                options = _({}).extend(defaultOptions, options); // make a mix-in
            }
        } else {
            options = defaultOptions || {};
        }
        return options;
    },

    /**
     * Options objects are remembered for subsequent use. Alternatively, they can be preset by calling {@link Hypergrid#setDialogOptions|setDialogOptions}.
     * @param {string} dialogName
     * @param {object} [options] - If omitted, use the options object previously given here (or to {@link Hypergrid#setDialogOptions|setDialogOptions}), if any. In any case, the resultant options object, if any, is mixed into the default options object, if there is one.
     */
    openDialog: function(dialogName, options) {
        this.stopEditing();
        options = this.setDialogOptions(dialogName, options);
        options.terminate = function() { // when about-to-be-opened dialog is eventually closed
            delete this.dialog;
        }.bind(this);
        this.dialog = this.behavior.openDialog(dialogName, options);
    },

    // although you can have multiple dialogs open at the same time, the following enforces one at a time (for now)
    toggleDialog: function(newDialogName, options) {
        var dialog = this.dialog,
            oldDialogName = dialog && dialog.$$CLASS_NAME;
        if (!dialog || !this.dialog.close() && oldDialogName !== newDialogName) {
            if (!dialog) {
                // open new dialog now
                this.openDialog(newDialogName, options);
            } else {
                // open new dialog when already-opened dialog finishes closing due to .closeDialog() above
                dialog.terminate = this.openDialog.bind(this, newDialogName, options);
            }
        }
    },

    /**
     * @returns {string} One of:
     * * `'active'` - There is at least one defined filter (leaf node) in the filter tree.
     * * `'inactive'` - There are no defined filters (no leaf nodes) in the filter tree.
     * * `'error'` - There is at least one partially defined filter.
     */
    getFilterStatus: function() {
        var filter = this.getGlobalFilter(),
            result;

        if (filter) {
            if (filter.invalid()) {
                result = 'error';
            } else if (filter.filterCount()) {
                result = 'active';
            } else {
                result = 'inactive';
            }
        }

        return result;
    },
};

/**
 * @summary Update deep properties with new values.
 * @desc This function is a recursive property setter which updates a deep property in a destination object with the value of a congruent property in a source object.
 *
 * > Terminology: A deep property is a "terminal node" (primitive value) nested at some depth (i.e., depth > 1) inside a complex object (an object containing nested objects). A congruent property is a property in another object with the same name and at the same level of nesting.
 *
 * This function is simple and elegant. I recommend you study the code, which nonetheless implies all of the following:
 *
 * * If the deep property is _not_ found in `destination`, it will be created.
 * * If the deep property is found in `destination` _and_ is a primitive type, it will be modified (overwritten with the value from `source`).
 * * If the deep property is found in `destination` _but_ is not a primitive type (i.e., is a nested object), it will _also_ be overwritten with the (primitive) value from `source`.
 * * If the nested object the deep property inhabits in `source` is not found in `destination`, it will be created.
 * * If the nested object the deep property inhabits in `source` is found in `destination` but is not in fact an object (i.e., it is a primitive value), it will be overwritten with a reference to that object.
 * * If the primitive value is `undefined`, the destination property is deleted.
 * * `source` may contain multiple properties to update.
 *
 * That one rule is simply this: If both the source _and_ the destination properties are objects, then recurse; else overwrite the destination property with the source property.
 *
 * > Caveat: This is _not_ equivalent to a deep extend function. While both a deep extend and this function will recurse over a complex object, they are fundamentally different: A deep extend clones the nested objects as it finds them; this function merely updates them (or creates them where they don't exist).
 *
 * @param {object} destination - An object to update with new or modified property values
 * @param {object} source - A congruent object continaly (only) the new or modified property values.
 * @returns {object} Always returns `destination`.
 */
function addDeepProperties(destination, source) {
    _(source).each(function(property, key) {
        if (typeof destination[key] === 'object' && typeof property === 'object') {
            addDeepProperties(destination[key], property);
        } else if (property === undefined) {
            delete destination[key];
        } else {
            destination[key] = property;
        }
    });
    return destination;
}

function normalizeRect(rect) {
    var o = rect.origin;
    var c = rect.corner;

    var ox = Math.min(o.x, c.x);
    var oy = Math.min(o.y, c.y);

    var cx = Math.max(o.x, c.x);
    var cy = Math.max(o.y, c.y);

    var result = new Rectangle(ox, oy, cx - ox, cy - oy);

    return result;
}

function buildPolymerTheme() {
    clearObjectProperties(polymerTheme);
    var pb = document.createElement('paper-button');

    pb.style.display = 'none';
    pb.setAttribute('disabled', true);
    document.body.appendChild(pb);
    var p = window.getComputedStyle(pb);

    var section = document.createElement('section');
    section.style.display = 'none';
    section.setAttribute('hero', true);
    document.body.appendChild(section);

    var h = window.getComputedStyle(document.querySelector('html'));
    var hb = window.getComputedStyle(document.querySelector('html, body'));
    var s = window.getComputedStyle(section);

    polymerTheme.columnHeaderBackgroundColor = p.color;
    polymerTheme.rowHeaderBackgroundColor = p.color;
    polymerTheme.topLeftBackgroundColor = p.color;
    polymerTheme.lineColor = p.backgroundColor;

    polymerTheme.backgroundColor2 = hb.backgroundColor;

    polymerTheme.color = h.color;
    polymerTheme.fontFamily = h.fontFamily;
    polymerTheme.backgroundColor = s.backgroundColor;

    pb.setAttribute('disabled', false);
    pb.setAttribute('secondary', true);
    pb.setAttribute('raised', true);
    p = window.getComputedStyle(pb);

    polymerTheme.columnHeaderColor = p.color;
    polymerTheme.rowHeaderColor = p.color;
    polymerTheme.topLeftColor = p.color;


    polymerTheme.backgroundSelectionColor = p.backgroundColor;
    polymerTheme.foregroundSelectionColor = p.color;

    pb.setAttribute('secondary', false);
    pb.setAttribute('warning', true);

    polymerTheme.columnHeaderForegroundSelectionColor = p.color;
    polymerTheme.columnHeaderBackgroundSelectionColor = p.backgroundColor;
    polymerTheme.rowHeaderForegroundSelectionColor = p.color;
    polymerTheme.fixedColumnBackgroundSelectionColor = p.backgroundColor;

    //check if there is actually a theme loaded if not, clear out all bogus values
    //from my cache
    if (polymerTheme.columnHeaderBackgroundSelectionColor === 'rgba(0, 0, 0, 0)' ||
        polymerTheme.lineColor === 'transparent') {
        clearObjectProperties(polymerTheme);
    }

    document.body.removeChild(pb);
    document.body.removeChild(section);
}

function clearObjectProperties(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            delete obj[prop];
        }
    }
}

function valOrFunc(dataRow, column) {
    var result = dataRow[column.name],
        calculator = (typeof result)[0] === 'f' && result || column.calculator;
        if (calculator) {
            result = calculator(dataRow, column.name);
        }
    return result || result === 0 || result === false ? result : '';
}

/**
 * @summary Shared localization defaults for all grid instances.
 * @desc These property values are overridden by those supplied in the `Hypergrid` constructor's `options.localization`.
 * @property {string|string[]} [options.localization.defaultLocale] - The default locale to use when an explicit `locale` is omitted from localizer constructor calls. Passed to Intl.NumberFormat` and `Intl.DateFormat`. See {@ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|Locale identification and negotiation} for more information. Omitting will use the runtime's local language and region.
 * @property {object} [options.localization.numberOptions] - Options passed to `Intl.NumberFormat` for creating the basic "number" localizer.
 * @property {object} [options.localization.dateOptions] - Options passed to `Intl.DateFormat` for creating the basic "date" localizer.
 */

Hypergrid.localization = {
    locale: 'en-US',
    numberOptions: { maximumFractionDigits: 0 }
};

module.exports = Hypergrid;

},{"./behaviors":66,"./cellEditors":76,"./cellRenderers":86,"./defaults":92,"./lib/Localization":119,"./lib/Renderer":120,"./lib/SelectionModel":121,"./lib/deprecated":123,"./lib/polyfills":127,"./lib/stylesheet":129,"finbars":19,"fincanvas":20,"object-iterators":51,"rectangular":53}],60:[function(require,module,exports){
/* eslint-env browser */

'use strict';

// Only 1 choice from each block below should be exposed (uncommented):

module.exports = {

	analytics: require('hyper-analytics'), // npm
    //analytics: require('../../hyper-analytics'), // developers

    FilterTree: require('filter-tree'), // npm
    //FilterTree: require('../../filter-tree'), // developers

};

},{"filter-tree":9,"hyper-analytics":23}],61:[function(require,module,exports){
/* eslint-env browser */
'use strict';

var _ = require('object-iterators');
var Base = require('../lib/Base');

var Column = require('./Column');
var dialogs = require('../dialogs');
var DefaultFilter = require('../filter/DefaultFilter');

var noExportProperties = [
    'columnHeader',
    'columnHeaderColumnSelection',
    'filterProperties',
    'rowHeader',
    'rowHeaderRowSelection',
    'rowNumbersProperties',
    'treeColumnProperties',
    'treeColumnPropertiesColumnSelection',
];

var isNull = {
    isNull: true
};

/**
 * @constructor
 * @abstract
 * @desc A sort of "model++." It contains all code/data that's necessary for easily implementing a virtual data source and its manipulation/analytics.
 *
 */
var Behavior = Base.extend('Behavior', {

    /**
     * @desc this is the callback for the plugin pattern of nested tags
     * @param {Hypergrid} grid
     * @param {object} [options] - _(See {@link behaviors.JSON#setData}.)_
     * @memberOf Behavior.prototype
     */
    initialize: function(grid, dataRows, options) {
        /**
         * @type {Hypergrid}
         * @memberOf Behavior.prototype
         */
        this.grid = grid;

        /**
         * @type {DataModel}
         * @memberOf Behavior.prototype
         */
        this.dataModel = this.getNewDataModel();

        grid.setBehavior(this);

        this.reset();

        this.initializeFeatureChain(grid);
    },

    /**
     * @desc create the feature chain - this is the [chain of responsibility](http://c2.com/cgi/wiki?ChainOfResponsibilityPattern) pattern.
     * @param {Hypergrid} grid
     * @memberOf Behavior.prototype
     */
    initializeFeatureChain: function(grid) {
        var self = this;

        /**
         * @summary Hash of feature class names.
         * @desc Built here but otherwise not in use.
         * @type {object}
         * @memberOf Behavior.prototype
         */
        this.featureMap = {};

        this.features.forEach(function(FeatureConstructor) {
            var newFeature = new FeatureConstructor;
            self.featureMap[newFeature.$$CLASS_NAME] = newFeature;
            if (self.featureChain) {
                self.featureChain.setNext(newFeature);
            } else {
                /**
                 * @summary Controller chain of command.
                 * @desc Each feature is linked to the next feature.
                 * @type {Feature}
                 * @memberOf Behavior.prototype
                 */
                self.featureChain = newFeature;
            }
        });
        if (this.featureChain) {
            this.featureChain.initializeOn(grid);
        }
    },

    features: [], // override in implementing class unless no features

    reset: function() {
        this.renderedColumnCount = 30;
        this.renderedRowCount = 60;
        this.dataUpdates = {}; //for overriding with edit values;
        this.scrollPositionX = this.scrollPositionY = 0;
        this.clearColumns();
        this.clearState();
        this.dataModel.reset();
        this.createColumns();
    },

    clearColumns: function() {
        /**
         * @type {Column[]}
         * @memberOf Behavior.prototype
         */
        this.columns = [];

        /**
         * @type {Column[]}
         * @memberOf Behavior.prototype
         */
        this.allColumns = [];

        this.allColumns[-1] = this.columns[-1] = this.newColumn(-1);
        this.allColumns[-2] = this.columns[-2] = this.newColumn(-2);

        this.columnEnum = {};
    },

    getActiveColumn: function(x) {
        return this.columns[x];
    },

    /**
     * The "grid index" given a "data index" (or column object)
     * @param {Column|number} columnOrIndex
     * @returns {undefined|number} The grid index of the column or undefined if column not in grid.
     */
    getActiveColumnIndex: function(columnOrIndex) {
        var index = columnOrIndex instanceof Column ? columnOrIndex.index : columnOrIndex;
        for (var i = 0; i < this.columns.length; ++i) {
            if (this.columns[i].index === index) {
                return i;
            }
        }
    },

    getVisibleColumn: function() {
        return this.deprecated('getVisibleColumn(x)', 'getActiveColumn(x)', '1.0.6', arguments);
    },
    getVisibleColumnName: function() {
        return this.deprecated('getVisibleColumnName(x)', 'getActiveColumn(x).name', '1.0.6', arguments);
    },
    getColumnId: function() {
        return this.deprecated('getColumnId(x)', 'getActiveColumn(x).header', '1.0.6', arguments);
    },
    getHeader: function() {
        return this.deprecated('getHeader(x)', 'getActiveColumn(x).header', '1.0.6', arguments);
    },

    getColumn: function(x) {
        return this.allColumns[x];
    },

    newColumn: function(options) {
        var column = new Column(this, options);
        this.getPrivateState().columnProperties[column.index] = this.createColumnProperties();
        return column;
    },

    addColumn: function(options) {
        var column = this.newColumn(options);
        this.columns.push(column);
        this.allColumns.push(column);
        return column;
    },

    createColumns: function() {
        //concrete implementation here
    },

    createColumnProperties: function() {
        var tableState = this.getPrivateState();
        var properties = Object.create(tableState);

        properties.rowNumbersProperties = Object.create(properties, {
            foregroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.columnHeaderForegroundSelectionColor;
                },
                set: function(value) {
                    this.columnHeaderForegroundSelectionColor = value;
                }
            },
            backgroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.columnHeaderBackgroundSelectionColor;
                },
                set: function(value) {
                    this.columnHeaderBackgroundSelectionColor = value;
                }
            }
        });

        properties.rowHeader = Object.create(properties, {
            font: {
                configurable: true,
                get: function() {
                    return this.rowHeaderFont;
                },
                set: function(value) {
                    this.rowHeaderFont = value;
                }
            },
            color: {
                configurable: true,
                get: function() {
                    return this.rowHeaderColor;
                },
                set: function(value) {
                    this.rowHeaderColor = value;
                }
            },
            backgroundColor: {
                configurable: true,
                get: function() {
                    return this.rowHeaderBackgroundColor;
                },
                set: function(value) {
                    this.rowHeaderBackgroundColor = value;
                }
            },
            foregroundSelectionFont: {
                configurable: true,
                get: function() {
                    return this.rowHeaderForegroundSelectionFont;
                },
                set: function(value) {
                    this.rowHeaderForegroundSelectionFont = value;
                }
            },
            foregroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.rowHeaderForegroundSelectionColor;
                },
                set: function(value) {
                    this.rowHeaderForegroundSelectionColor = value;
                }
            },
            backgroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.rowHeaderBackgroundSelectionColor;
                },
                set: function(value) {
                    this.rowHeaderBackgroundSelectionColor = value;
                }
            }
        });

        properties.columnHeader = Object.create(properties, {
            font: {
                configurable: true,
                get: function() {
                    return this.columnHeaderFont;
                },
                set: function(value) {
                    this.columnHeaderFont = value;
                }
            },
            color: {
                configurable: true,
                get: function() {
                    return this.columnHeaderColor;
                },
                set: function(value) {
                    this.columnHeaderColor = value;
                }
            },
            backgroundColor: {
                configurable: true,
                get: function() {
                    return this.columnHeaderBackgroundColor;
                },
                set: function(value) {
                    this.columnHeaderBackgroundColor = value;
                }
            },
            foregroundSelectionFont: {
                configurable: true,
                get: function() {
                    return this.columnHeaderForegroundSelectionFont;
                },
                set: function(value) {
                    this.columnHeaderForegroundSelectionFont = value;
                }
            },
            foregroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.columnHeaderForegroundSelectionColor;
                },
                set: function(value) {
                    this.columnHeaderForegroundSelectionColor = value;
                }
            },
            backgroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.columnHeaderBackgroundSelectionColor;
                },
                set: function(value) {
                    this.columnHeaderBackgroundSelectionColor = value;
                }
            }
        });

        properties.columnHeaderColumnSelection = Object.create(properties.columnHeader, {
            foregroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.columnHeaderForegroundColumnSelectionColor;
                },
                set: function(value) {
                    this.columnHeaderForegroundColumnSelectionColor = value;
                }
            },
            backgroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.columnHeaderBackgroundColumnSelectionColor;
                },
                set: function(value) {
                    this.columnHeaderBackgroundColumnSelectionColor = value;
                }
            }
        });

        properties.rowHeaderRowSelection = Object.create(properties.rowHeader, {
            foregroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.rowHeaderForegroundRowSelectionColor;
                },
                set: function(value) {
                    this.rowHeaderForegroundRowSelectionColor = value;
                }
            },
            backgroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.rowHeaderBackgroundRowSelectionColor;
                },
                set: function(value) {
                    this.rowHeaderBackgroundRowSelectionColor = value;
                }
            }
        });

        properties.filterProperties = Object.create(properties, {
            font: {
                configurable: true,
                get: function() {
                    return this.filterFont;
                },
                set: function(value) {
                    this.filterFont = value;
                }
            },
            color: {
                configurable: true,
                get: function() {
                    return this.filterColor;
                },
                set: function(value) {
                    this.filterColor = value;
                }
            },
            backgroundColor: {
                configurable: true,
                get: function() {
                    return this.filterBackgroundColor;
                },
                set: function(value) {
                    this.filterBackgroundColor = value;
                }
            },
            foregroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.filterForegroundSelectionColor;
                },
                set: function(value) {
                    this.filterForegroundSelectionColor = value;
                }
            },
            backgroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.filterBackgroundSelectionColor;
                },
                set: function(value) {
                    this.filterBackgroundSelectionColor = value;
                }
            },
            cellBorderStyle: {
                configurable: true,
                get: function() {
                    return this.filterCellBorderStyle;
                },
                set: function(value) {
                    this.filterCellBorderStyle = value;
                }
            },
            cellBorderThickness: {
                configurable: true,
                get: function() {
                    return this.filterCellBorderThickness;
                },
                set: function(value) {
                    this.filterCellBorderThickness = value;
                }
            }
        });

        properties.treeColumnProperties = Object.create(properties, {
            font: {
                configurable: true,
                get: function() {
                    return this.treeColumnFont;
                },
                set: function(value) {
                    this.treeColumnFont = value;
                }
            },
            color: {
                configurable: true,
                get: function() {
                    return this.treeColumnColor;
                },
                set: function(value) {
                    this.treeColumnColor = value;
                }
            },
            backgroundColor: {
                configurable: true,
                get: function() {
                    return this.treeColumnBackgroundColor;
                },
                set: function(value) {
                    this.treeColumnBackgroundColor = value;
                }
            },
            foregroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.treeColumnForegroundSelectionColor;
                },
                set: function(value) {
                    this.treeColumnForegroundSelectionColor = value;
                }
            },
            backgroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.treeColumnBackgroundSelectionColor;
                },
                set: function(value) {
                    this.treeColumnBackgroundSelectionColor = value;
                }
            }
        });

        properties.treeColumnPropertiesColumnSelection = Object.create(properties.treeColumnProperties, {
            foregroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.treeColumnForegroundColumnSelectionColor;
                },
                set: function(value) {
                    this.treeColumnForegroundColumnSelectionColor = value;
                }
            },
            backgroundSelectionColor: {
                configurable: true,
                get: function() {
                    return this.treeColumnBackgroundColumnSelectionColor;
                },
                set: function(value) {
                    this.treeColumnBackgroundColumnSelectionColor = value;
                }
            }
        });

        return properties;
    },

    getColumnWidth: function(x) {
        var column = this.getActiveColumn(x);
        if (!column) {
            return this.resolveProperty('defaultColumnWidth');
        }
        var width = column.getWidth();
        return width;
    },

    setColumnWidth: function(x, width) {
        this.getActiveColumn(x).setWidth(width);
        this.stateChanged();
    },

    getCellRenderer: function(config, x, y) {
        return this.getActiveColumn(x).getCellRenderer(config, x, y);
    },
    getCellProvider: function(name) {
        return this.deprecated('getCellProvider()', 'grid.cellRenderers', '1.0.6', arguments);
    },
    createCellProvider: function(name) {
        console.error('getCellProvider() is deprecated as of v1.0.6. No replacement; do not call. Previously called by `Behavior` constructor; `new CellRenderers()` is now called by `Hypergrid` constructor instead.', arguments);
    },

    applyAnalytics: function() {
        this.dataModel.applyAnalytics();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc utility function to empty an object of its members
     * @param {object} obj - the object to empty
     * @param {boolean} [exportProps]
     * * `undefined` (omitted) - delete *all* properties
     * * **falsy** - delete *only* the export properties
     * * **truthy** - delete all properties *except* the export properties
     */
    clearObjectProperties: function(obj, exportProps) {
        for (var key in obj) {
            if (
                obj.hasOwnProperty(key) && (
                    exportProps === undefined ||
                    !exportProps && noExportProperties.indexOf(key) >= 0 ||
                    exportProps && noExportProperties.indexOf(key) < 0
                )
            ) {
                delete obj[key];
            }
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc getter for a [Memento](http://c2.com/cgi/wiki?MementoPattern) Object
     * @returns {object}
     */
    getPrivateState: function() {
        if (!this.tableState) {
            this.tableState = this.getDefaultState();
        }
        return this.tableState;
    },

    //this is effectively a clone, with certain things removed....
    getState: function() {
        var copy = JSON.parse(JSON.stringify(this.getPrivateState()));
        this.clearObjectProperties(copy.columnProperties, false);
        return copy;
    },
    /**
     * @memberOf Behavior.prototype
     * @desc clear all table state
     */
    clearState: function() {
        /**
         * memento for the user configured visual properties of the table
         * @type {object}
         * @memberOf Behavior.prototype
         */
        this.tableState = null;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {object} Newly created default empty tablestate.
     */
    getDefaultState: function() {
        var tableProperties = this.grid._getProperties();
        var state = Object.create(tableProperties);

        _(state).extendOwn({
            rowHeights: {},
            columnProperties: []
        });

        return state;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Restore this table to a previous state.
     * See the [memento pattern](http://c2.com/cgi/wiki?MementoPattern).
     * @param {Object} memento - an encapsulated representation of table state
     */
    setState: function(memento) {

        //we don't want to clobber the column properties completely
        if (!memento.columnIndexes) {
            var fields = this.dataModel.getFields();
            memento.columnIndexes = [];
            for (var i = 0; i < fields.length; i++) {
                memento.columnIndexes[i] = i;
            }
        }
        var colProperties = memento.columnProperties;
        delete memento.columnProperties;
        this.tableState = null;
        var state = this.getPrivateState();
        this.createColumns();
        this._setColumnOrder(memento.columnIndexes);
        _(state).extendOwn(memento);
        this.setAllColumnProperties(colProperties);
        memento.columnProperties = colProperties;

        //just to be close/ it's easier on the eyes
        this.setColumnWidth(-1, 24.193359375);
        this.dataModel.applyState();
    },

    setAllColumnProperties: function(properties) {
        properties = properties || [];
        for (var i = 0; i < properties.length; i++) {
            var current = this.getPrivateState().columnProperties[i];
            this.clearObjectProperties(current, false);
            _(current).extendOwn(properties[i]);
        }
    },

    _setColumnOrder: function(indexes) {
        if (!Array.isArray(indexes)){
            return;
        }
        if (!indexes) {
            this.columns.length = 0;
            return;
        }
        this.columns.length = indexes.length;
        for (var i = 0; i < indexes.length; i++) {
            this.columns[i] = this.allColumns[indexes[i]];
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc fetch the value for a property key
     * @returns {*} The value of the given property.
     * @param {string} key - a property name
     */
    resolveProperty: function(key) {
        return this.grid.resolveProperty(key);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc A specific cell was clicked; you've been notified.
     * @param {Point} cell - point of cell coordinates
     * @param {Object} event - all event information
     * @return {boolean} Clicked in a drill-down column.
     */
    cellClicked: function(cell, event) {
        return this.dataModel.cellClicked(cell, event);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc A specific cell was le double-clicked; you've been notified.
     * @param {Point} cell - point of cell coordinates
     * @param {Object} event - all event information
     */
    cellDoubleClicked: function(cell, event) {

    },

    lookupFeature: function(key) {
        return this.featureMap[key];
    },

    /**
     * @memberOf Behavior.prototype
     * @desc setter for the hypergrid
     * @param {Hypergrid} grid
     */
    setGrid: function(grid) {
    },

    /**
     * @memberOf Behavior.prototype
     * @desc First check to see if something was overridden.
     * @return {*} The value at `x,y` for the top left section of the hypergrid.
     * @param {number} x - x coordinate
     * @param {number} y - y coordinate
     */
    getValue: function(x, y) {
        var column = this.getActiveColumn(x);
        return column && column.getValue(y);
    },

    getUnfilteredValue: function(x, y) {
        var column = this.getActiveColumn(x);
        return column && column.getUnfilteredValue(y);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc update the data at point x, y with value
     * @return The data.
     * @param {number} x - x coordinate
     * @param {number} y - y coordinate
     * @param {Object} value - the value to use
     */
    setValue: function(x, y, value) {
        var column = this.getActiveColumn(x);
        return column && column.setValue(y, value);
    },

    getDataValue: function(x, y) {
        return this.dataModel.getValue(x, y);
    },

    setDataValue: function(x, y, value) {
        this.dataModel.setValue(x, y, value);
    },
    /**
     * @memberOf Behavior.prototype
     * @desc First checks to see if something was overridden.
     * @return {*} The value at x,y for the top left section of the hypergrid.
     * @param {number} x - x coordinate
     * @param {number} y - y coordinate
     */
    getCellProperties: function(x, y) {
        var column = this.allColumns[x];
        return column && column.getCellProperties(y);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc update the data at point x, y with value
     * @param {number} x - x coordinate
     * @param {number} y - y coordinate
     * @param {Object} value - the value to use
     */
    setCellProperties: function(x, y, value) {
        var column = this.allColumns[x];
        if (column) {
            column.setCellProperties(y, value);
        }
    },
    /**
     * @memberOf Behavior.prototype
     * @return {number} The number of rows in the hypergrid.
     */
    getRowCount: function() {
        return this.dataModel.getRowCount();
    },

    getUnfilteredRowCount: function() {
        return this.dataModel.getUnfilteredRowCount();
    },
    /**
     * @memberOf Behavior.prototype
     * @return {number} The height in pixels of the fixed rows area  of the hypergrid.
     */
    getFixedRowsHeight: function() {
        var count = this.getFixedRowCount();
        var total = 0;
        for (var i = 0; i < count; i++) {
            total = total + this.getRowHeight(i);
        }
        //var footerHeight = this.getDefaultRowHeight();
        //total = total + (footerHeight * this.getFooterRowCount());
        return total;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {number} The height in pixels of a specific row in the hypergrid.
     * @param {number} rowNum - row index of interest
     */
    getRowHeight: function(rowNum) {
        var rowHeights = this.getPrivateState().rowHeights;
        return rowHeights && rowHeights[rowNum] || this.getDefaultRowHeight();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc The value is lazily initialized and comes from the properties mechanism for '`defaultRowHeight`', which should be ~20px.
     * @returns {number} The row height in pixels.
     */
    getDefaultRowHeight: function() {
        if (!this.defaultRowHeight) {
            this.defaultRowHeight = this.resolveProperty('defaultRowHeight');
        }
        return this.defaultRowHeight;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc set the pixel height of a specific row
     * @param {number} rowNum - the row index of interest
     * @param {number} height - pixel height
     */
    setRowHeight: function(rowNum, height) {
        var tableState = this.getPrivateState();
        tableState.rowHeights[rowNum] = Math.max(5, height);
        this.stateChanged();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc This will allow 'floating' fixed rows.
     * @return {number} The maximum height of the fixed rows area in the hypergrid.
     */
    getFixedRowsMaxHeight: function() {
        return this.getFixedRowsHeight();
    },

    /**
     * @memberOf Behavior.prototype
     * @return {number} The width of the fixed column area in the hypergrid.
     */
    getFixedColumnsWidth: function() {
        var count = this.getFixedColumnCount();
        var total = 0;
        if (this.grid.isShowRowNumbers()) {
            total = this.getColumnWidth(-1);
        }
        for (var i = 0; i < count; i++) {
            total = total + this.getColumnWidth(i);
        }
        return total;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc This exists to support "floating" columns.
     * @return {number} The total width of the fixed columns area.
     */
    getFixedColumnsMaxWidth: function() {
        return this.getFixedColumnsWidth();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Set the scroll position in vertical dimension and notify listeners.
     * @param {number} y - the new y value
     */
    _setScrollPositionY: function(y) {
        this.setScrollPositionY(y);
        this.changed();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Set the scroll position in horizontal dimension and notify listeners.
     * @param {number} x - the new x value
     */
    _setScrollPositionX: function(x) {
        this.setScrollPositionX(x);
        this.changed();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Set the number of columns just rendered, including partially rendered columns.
     * @param {number} count - how many columns were just rendered
     */
    setRenderedColumnCount: function(count) {
        this.renderedColumnCount = count;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Set the number of rows just rendered, including partially rendered rows.
     * @param {number} count - how many rows were just rendered
     */
    setRenderedRowCount: function(count) {
        this.renderedRowCount = count;
    },


    /**
     * @memberOf Behavior.prototype
     * @desc The fixed row area has been clicked, massage the details and call the real function.
     * @param {Hypergrid} grid
     * @param {Object} mouse - event details
     */
    _fixedRowClicked: function(grid, mouse) {
        var x = this.translateColumnIndex(this.getScrollPositionX() + mouse.gridCell.x - this.getFixedColumnCount());
        var translatedPoint = this.grid.newPoint(x, mouse.gridCell.y);
        mouse.gridCell = translatedPoint;
        this.fixedRowClicked(grid, mouse);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc The fixed column area has been clicked, massage the details and call the real function.
     * @param {Hypergrid} grid
     * @param {Object} mouse - event details
     */
    _fixedColumnClicked: function(grid, mouse) {
        var translatedPoint = this.grid.newPoint(mouse.gridCell.x, this.getScrollPositionY() + mouse.gridCell.y - this.getFixedRowCount());
        mouse.gridCell = translatedPoint;
        this.fixedColumnClicked(grid, mouse);
    },

    moveSingleSelect: function(grid, x, y) {
        if (this.featureChain) {
            this.featureChain.moveSingleSelect(grid, x, y);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate setting the cursor up the feature chain of responsibility
     * @param {Hypergrid} grid
     */
    setCursor: function(grid) {
        grid.updateCursor();
        this.featureChain.setCursor(grid);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse move to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onMouseMove: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseMove(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling tap to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onClick: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleClick(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling tap to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onContextMenu: function(grid, event) {
        var proceed = grid.fireSyntheticContextMenuEvent(event);
        if (proceed && this.featureChain) {
            this.featureChain.handleContextMenu(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling wheel moved to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onWheelMoved: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleWheelMoved(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse up to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onMouseUp: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseUp(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse drag to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onMouseDrag: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseDrag(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling key down to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onKeyDown: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleKeyDown(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling key up to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onKeyUp: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleKeyUp(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling double click to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onDoubleClick: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleDoubleClick(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling double click to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {string[]} [options] - Forwarded to dialog constructor.
     */
    openDialog: function(dialogName, options) {
        return new dialogs[dialogName](this.grid, options);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse down to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseDown(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse exit to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseExit: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseExit(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is replaced by the grid on initialization and serves as the callback
     */
    changed: function() {},

    /**
     * @memberOf Behavior.prototype
     * @desc this function is replaced by the grid on initialization and serves as the callback
     */
    shapeChanged: function() {},

    /**
     * @memberOf Behavior.prototype
     * @return {boolean} Can re-order columns.
     */
    isColumnReorderable: function() {
        return true;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {Object} The properties for a specific column. These are used if no cell properties are specified.
     * @param {index} columnIndex - the column index of interest
     */
    getColumnProperties: function(columnIndex) {
        var column = this.columns[columnIndex];
        if (!column) {
            return isNull;
        }
        var properties = column.getProperties(); //TODO: returns `null` on Hypergrid.prototype.reset();
        if (!properties) {
            return isNull;
        }
        return properties;
    },

    setColumnProperties: function(columnIndex, properties) {
        var column = this.allColumns[columnIndex];
        var columnProperties = column.getProperties();
        _(columnProperties).extendOwn(properties);
        this.changed();
    },

    /**
     * Clears all cell properties of given column or of all columns.
     * @param {number} [columnIndex] - Omit for all columns.
     */
    clearAllCellProperties: function(columnIndex) {
        if (columnIndex === undefined) {
            for (var i = this.allColumns.length - 1; i >= 0; --i) {
                this.allColumns[i].clearAllCellProperties();
            }
        } else {
            var column = this.allColumns[i];
            if (column) {
                column.clearAllCellProperties();
            }
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Rebuild the column order indexes
     * @param {Array} columnIndexes - list of column indexes
     * @param {Boolean} [silent=false] - whether to trigger column changed event
     */
    setColumnIndexes: function(columnIndexes, silent) {
        var tableState = this.getPrivateState();
        this._setColumnOrder(columnIndexes);
        tableState.columnIndexes = columnIndexes;
        this.changed();
        if (!silent) {
            this.grid.fireSyntheticOnColumnsChangedEvent();
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @return {string[]} All the currently hidden column header labels.
     */
    getHiddenColumnDescriptors: function() {
        var tableState = this.getPrivateState();
        var indexes = tableState.columnIndexes;
        var labels = [];
        var columnCount = this.getActiveColumnCount();
        for (var i = 0; i < columnCount; i++) {
            if (indexes.indexOf(i) === -1) {
                var column = this.getActiveColumn(i);
                labels.push({
                    id: i,
                    header: column.header,
                    field: column.name
                });
            }
        }
        return labels;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc hide columns that are specified by their indexes
     * @param {Array} arrayOfIndexes - an array of column indexes to hide
     */
    hideColumns: function(arrayOfIndexes) {
        var tableState = this.getPrivateState();
        var order = tableState.columnIndexes;
        for (var i = 0; i < arrayOfIndexes.length; i++) {
            var each = arrayOfIndexes[i];
            if (order.indexOf(each) !== -1) {
                order.splice(order.indexOf(each), 1);
            }
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @return {integer} The number of fixed columns.
     */
    getFixedColumnCount: function() {
        return this.getPrivateState().fixedColumnCount || 0;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc set the number of fixed columns
     * @param {number} n - the integer count of how many columns to be fixed
     */
    setFixedColumnCount: function(n) {
        this.getPrivateState().fixedColumnCount = n;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {integer} The number of fixed rows.
     */
    getFixedRowCount: function() {
        if (!this.tableState) {
            return 0;
        }
        var headers = this.grid.getHeaderRowCount();
        var usersSize = this.tableState.fixedRowCount || 0;
        return headers + usersSize;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Set the number of fixed rows, which includes (top to bottom order):
     * 1. The header rows
     *    1. The header labels row (optional)
     *    2. The filter row (optional)
     *    3. The top total rows (0 or more)
     * 2. The non-scrolling rows (externally called "the fixed rows")
     *
     * @returns {number} Sum of the above or 0 if none of the above are in use.
     *
     * @param {number} n - The number of rows.
     */
    setFixedRowCount: function(n) {
        this.tableState.fixedRowCount = n;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {number} The number of header rows.
     * A portion of the number returned by {@link Behavior#getFixedRowCount()|getFixedRowCount()}.
     * (The remaining _fixed rows_ are the _top totals_ rows.)
     */
    getHeaderRowCount: function() {
        var header = this.grid.isShowHeaderRow() ? 1 : 0;
        var filter = this.grid.isShowFilterRow() ? 1 : 0;
        var totals = this.getTopTotals().length;
        return header + filter + totals;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {number} The number of footer rows, consisting entirely of 0 or more _bottom totals_ rows.
     */
    getFooterRowCount: function() {
        return this.getBottomTotals().length;
    },

    getTopTotals: function() {
        return this.dataModel.getTopTotals();
    },
    /**
     * @memberOf Behavior.prototype
     * @summary Set the number of header rows.
     * @param {number} n - The number of _fixed rows_ to reserve as header rows.
     * (The remaining _fixed rows_ are the _top totals_ rows.)
     */
    setHeaderRowCount: function(n) {
        this.tableState.headerRowCount = n;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {number} The number of fixed rows.
     */
    getHeaderColumnCount: function() {
        return this.grid.resolveProperty('headerColumnCount');
    },

    /**
     * @memberOf Behavior.prototype
     * @param {number} The number of fixed rows.
     */
    setHeaderColumnCount: function(numberOfHeaderColumns) {
        this.tableState.headerColumnCount = numberOfHeaderColumns;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc a dnd column has just been dropped, we've been notified
     */
    endDragColumnNotification: function() {},

    /**
     * @memberOf Behavior.prototype
     * @return {null} the cursor at a specific x,y coordinate
     * @param {number} x - the x coordinate
     * @param {number} y - the y coordinate
     */
    getCursorAt: function(x, y) {
        return null;
    },

    /**
     * Number of _visible_ columns.
     * @memberOf Behavior.prototype
     * @return {number} The total number of columns.
     */
    getActiveColumnCount: function() {
        return this.columns.length;
    },
    getColumnCount: function() {
        return this.deprecated('getColumnCount()', 'getActiveColumnCount()', '1.0.6', arguments);
    },

    /**
     * @memberOf Behavior.prototype
     * @return {string} The column alignment at column `x`: `'left'`, `'center'` , or `'right'`
     * @param {number} x - The column index of interest.
     */
    getColumnAlignment: function(x) {
        return 'center';
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Quietly set the horizontal scroll position.
     * @param {number} x - The new position in pixels.
     */
    setScrollPositionX: function(x) {
        /**
         * @memberOf Behavior.prototype
         * @type {number}
         */
        this.scrollPositionX = x;
    },

    getScrollPositionX: function() {
        return this.scrollPositionX;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Quietly set the vertical scroll position.
     * @param {number} y - The new position in pixels.
     */
    setScrollPositionY: function(y) {
        /**
         * @memberOf Behavior.prototype
         * @type {number}
         */
        this.scrollPositionY = y;
    },

    getScrollPositionY: function() {
        return this.scrollPositionY;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {cellEditor} The cell editor for the cell at the given coordinates.
     * @param {Point} editPoint - The grid cell coordinates.
     */
    getCellEditorAt: function(editPoint) {
        var cellEditor, options,
            column = this.getActiveColumn(editPoint.x);

        if (column) {
            options = {
                column: column,
                editPoint: editPoint
            };

            cellEditor = this.grid.isFilterRow(editPoint.y)
                ? this.grid.cellEditors.create('filterbox', options)
                : column.getCellEditorAt(editPoint.y, options);
        }

        return cellEditor;
    },

    /**
     * @memberOf Behavior.prototype
     * @param {number} x - The column index.
     * @param {string[]} keys
     */
    toggleSort: function(x, keys) {
        var column = this.getActiveColumn(x);
        if (column) {
            column.toggleSort(keys);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @return {boolean} `true` if we should highlight on hover
     * @param {boolean} isColumnHovered - the column is hovered or not
     * @param {boolean} isRowHovered - the row is hovered or not
     */
    highlightCellOnHover: function(isColumnHovered, isRowHovered) {
        return isColumnHovered && isRowHovered;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is a hook and is called just before the painting of a cell occurs
     * @param {window.fin.rectangular.Point} cell
     */
    cellPropertiesPrePaintNotification: function(cell) {

    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is a hook and is called just before the painting of a fixed row cell occurs
     * @param {window.fin.rectangular.Point} cell
     */
    cellFixedRowPrePaintNotification: function(cell) {

    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is a hook and is called just before the painting of a fixed column cell occurs
     * @param {window.fin.rectangular.Point} cell
     */
    cellFixedColumnPrePaintNotification: function(cell) {

    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is a hook and is called just before the painting of a top left cell occurs
     * @param {window.fin.rectangular.Point} cell
     */
    cellTopLeftPrePaintNotification: function(cell) {

    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function enhance the double click event just before it's broadcast to listeners
     * @param {Object} event - event to enhance
     */
    enhanceDoubleClickEvent: function(event) {},

    /**
     * @memberOf Behavior.prototype
     * @desc swap src and tar columns
     * @param {number} src - column index
     * @param {number} tar - column index
     */
    swapColumns: function(source, target) {
        var columns = this.columns;
        var tmp = columns[source];
        columns[source] = columns[target];
        columns[target] = tmp;
        this.changed();
    },

    getColumnEdge: function(c, renderer) {
        return this.dataModel.getColumnEdge(c, renderer);
    },

    /**
     * @memberOf Behavior.prototype
     * @param {number} x - column index
     * @param {number} y - totals row index local to the totals area
     * @param value
     * @param {string[]} [areas=['top', 'bottom']] - may include `'top'` and/or `'bottom'`
     */
    setTotalsValue: function(x, y, value, areas) {
        this.grid.setTotalsValueNotification(x, y, value, areas);
    },

    /**
     * @memberOf Behavior.prototype
     * @return {object} The object at y index.
     * @param {number} y - the row index of interest
     */
    getRow: function(y) {
        return this.dataModel.getRow(y);
    },

    convertViewPointToDataPoint: function(viewPoint) {
        var newX = this.getActiveColumn(viewPoint.x).index;
        var newPoint = this.grid.newPoint(newX, viewPoint.y);
        return newPoint;
    },
    hasHierarchyColumn: function() {
        return false;
    },

    getRowContextFunction: function(selectedRows) {
        return function() {
            return null;
        };
    },

    getSelectionMatrixFunction: function(selectedRows) {
        return function() {
            return null;
        };
    },

    getComputedRow: function(y) {
        return this.dataModel.getComputedRow(y);
    },

    autosizeAllColumns: function() {
        this.checkColumnAutosizing(true);
        this.changed();
    },

    checkColumnAutosizing: function(force) {
        force = force === true;
        this.autoSizeRowNumberColumn();
        this.allColumns[-2].checkColumnAutosizing(force);
        this.allColumns.forEach(function(column) {
            column.checkColumnAutosizing(force);
        });
    },

    autoSizeRowNumberColumn: function() {
        if (this.grid.isRowNumberAutosizing()) {
            this.allColumns[-1].checkColumnAutosizing(true);
        }
    },

    getNewFilter: function() {
        var newFilter = new DefaultFilter({
            schema: typeof this.schema === 'function' ? this.schema(this.columns) : this.schema,
            caseSensitiveColumnNames: this.grid.resolveProperty('filterCaseSensitiveColumnNames'),
            resolveAliases: this.grid.resolveProperty('filterResolveAliases'),
            defaultColumnFilterOperator: this.grid.resolveProperty('filterDefaultColumnFilterOperator')
        });
        newFilter.loadColumnPropertiesFromSchema(this.columns);
        return newFilter;
    },

    /**
     * @summary Get a reference to the filter attached to the Hypergrid.
     * @returns {FilterTree}
     * @memberOf Behavior.prototype
     */
    getGlobalFilter: function() {
        return this.dataModel.getGlobalFilter();
    },

    /**
     * @summary Attach/detach a filter to a Hypergrid.
     * @param {FilterTree} [filter] - The filter object. If undefined, any attached filter is removed, turning filtering OFF.
     * @memberOf Behavior.prototype
     */
    setGlobalFilter: function(filter) {
        this.dataModel.setGlobalFilter(filter);
    },

    /**
     * @summary Set the case sensitivity of filter tests against data.
     * @desc Case sensitivity pertains to string compares only. This includes untyped columns, columns typed as strings, typed columns containing data that cannot be coerced to type or when the filter expression operand cannot be coerced.
     *
     * NOTE: This is a shared property and affects all grid managed by this instance of the app.
     * @param {boolean} isSensitive
     * @memberOf Behavior.prototype
     */
    setGlobalFilterCaseSensitivity: function(isSensitive) {
        this.dataModel.setGlobalFilterCaseSensitivity(isSensitive);
    },

    /**
     * @param {number|string} columnIndexOrName - The _column filter_ to set.
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @param {boolean} [options.syntax='CQL'] - The syntax to use to describe the filter state. Note that `getFilter`'s default syntax, `'CQL'`, differs from the other get state methods.
     * @returns {FilterTreeStateObject}
     * @memberOf Behavior.prototype
     */
    getFilter: function(columnIndexOrName, options) {
        return this.dataModel.getFilter(columnIndexOrName, options);
    },

    /**
     * @summary Set a particular column filter's state.
     * @desc After setting the new filter state, reapplies the filter to the data source.
     * @param {number|string} columnIndexOrName - The _column filter_ to set.
     * @param {string|object} [state] - A filter tree object or a JSON, SQL, or CQL subexpression string that describes the a new state for the named column filter. The existing column filter subexpression is replaced with a new node based on this state. If it does not exist, the new subexpression is added to the column filters subtree (`filter.columnFilters`).
     *
     * If undefined, removes the entire column filter subexpression from the column filters subtree.
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @param {string} [options.syntax='CQL'] - The syntax to use to describe the filter state. Note that `setFilter`'s default syntax, `'CQL'`, differs from the other get state methods.
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf Behavior.prototype
     */
    setFilter: function(columnIndexOrName, state, options) {
        this.dataModel.setFilter(columnIndexOrName, state, options);
    },

    /**
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @returns {FilterTreeStateObject}
     * @memberOf Behavior.prototype
     */
    getFilters: function(options) {
        return this.dataModel.getFilters(options);
    },

    /**
     * @param {FilterTreeStateObject} state
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf Behavior.prototype
     */
    setFilters: function(state, options) {
        this.dataModel.setFilters(state, options);
    },

    /**
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @returns {FilterTreeStateObject}
     * @memberOf Behavior.prototype
     */
    getTableFilter: function(options) {
        return this.dataModel.getTableFilter(options);
    },

    /**
     * @param {FilterTreeStateObject} state
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf Behavior.prototype
     */
    setTableFilter: function(state, options) {
        this.dataModel.setTableFilter(state, options);
    },

    getSelectedRows: function() {
        return this.grid.selectionModel.getSelectedRows();
    },

    getSelectedColumns: function() {
        return this.grid.selectionModel.getSelectedColumns();
    },

    getSelections: function() {
        return this.grid.selectionModel.getSelections();
    },

    getData: function() {
        return this.dataModel.getData();
    },

    getFilteredData: function() {
        return this.dataModel.getFilteredData();
    },
});

module.exports = Behavior;

},{"../dialogs":96,"../filter/DefaultFilter":116,"../lib/Base":118,"./Column":62,"object-iterators":51}],62:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var _ = require('object-iterators');

var propertyNames = [
    'index',
    'name',
    'header',
    'calculator',
    'type'
];

/** @summary Create a new `Column` object.
 * @constructor
 * @param behavior
 * @param {number|object} indexOrOptions - If a number, shorthand for `options.index`.
 *
 * For positive values of `options.index`, see {@link Column#initialize|initialize}. Note that for new columns, you must supply either `index` or `name`. If you supply both, they must match the definitiion in data model's `fields` list.
 *
 * Negative values are special cases:
 * `index` | Meaning
 * :-----: | --------
 *    -1   | Row header column
 *    -2   | Tree (drill-down) column
 *
 *
 */
function Column(behavior, indexOrOptions) {
    this.behavior = behavior;
    this.dataModel = behavior.dataModel;
    this.cellProperties = [];

    var options = typeof indexOrOptions === 'object' ? indexOrOptions : { index: indexOrOptions },
        index = options.index;

    switch (index) {

        case -1:
            this.index = index;
            this.name = '';
            this.header = '';
            break;

        case -2:
            this.index = index;
            this.name = 'tree';
            this.header = 'Tree';
            break;

        default:
            if (index < 0) {
                throw '`index` out of range';
            } else {
                this.set(options);
            }

    }
}

Column.prototype = {
    constructor: Column.prototype.constructor,

    /** @summary Set or reset the properties of a column object.
     * @desc When (re)setting a column object, the object must end up with fully defined `index` and `name` properties. If one is missing it will be derived from the data model's `fields` list.
     * Note: These properties of the column object should not be confused with the members of the columnProperties object which supports grid render and is something else entirely.
     * @param {object} options - Required because you must supply at least `index` or `name`.
     * @param {object} [options.index]
     * @param {object} [options.name]
     * @param {object} [options.header]
     * @param {object} [options.type]
     */
    set: function(options) {
        var fields = this.dataModel.getFields();
        var column = this;
        propertyNames.forEach(function(option) {
            if (option in options) {
                column[option] = options[option];
            }

            if (option === 'name') {
                if (column.name === undefined) {
                    column.name = fields[column.index];
                } else if (column.index === undefined) {
                    column.index = fields.indexOf(column.name);
                }

                if (column.index === undefined || column.name === undefined) {
                    throw 'Expected column name or index.';
                } else if (fields[column.index] !== column.name) {
                    throw 'Expected to find `column.name` in position `column.index` in data model\'s fields list.';
                }
            }
        });
    },

    /**
     * @summary Get or set the text of the column's header.
     * @desc The _header_ is the label at the top of the column.
     *
     * Setting the value here updates the header in both this column object as well as the `fields` (aka, header) array in the underlying data source.
     *
     * The new text will appear on the next repaint.
     * @type {string}
     */
    set header(headerText) {
        this.dataModel.getHeaders()[this.index] = this._header = headerText;
    },
    get header() {
        return this._header;
    },

    set calculator(calculator) {
        var name = this.name,
            filter = this.behavior.grid.getGlobalFilter();

        if (filter && filter.schema) {
            // Note that calculators are not applied to column schema that are simple string primitives.
            var columnSchema = filter.schema.find(function(item) {
                return item.name === name;
            });
            if (columnSchema) {
                if (calculator) {
                    columnSchema.calculator = calculator;
                } else if (columnSchema.calculator) {
                    delete columnSchema.calculator;
                }
            }
        }

        this.dataModel.getCalculators()[this.index] = this._calculator = calculator;
    },
    get calculator() {
        return this._calculator;
    },

    getUnfilteredValue: function(y) {
        return this.dataModel.getUnfilteredValue(this.index, y);
    },

    getValue: function(y) {
        return this.dataModel.getValue(this.index, y);
    },

    setValue: function(y, value) {
        return this.dataModel.setValue(this.index, y, value);
    },

    getWidth: function() {
        var properties = this.getProperties();
        return properties && properties.width || this.behavior.resolveProperty('defaultColumnWidth');
    },

    setWidth: function(width) {
        this.getProperties().width = Math.max(5, width);
    },

    getCellRenderer: function(config, x, y) {
        config.untranslatedX = x;
        config.y = y;

        config.x = this.index;
        config.normalizedY = y - this.behavior.getHeaderRowCount();

        // Legacy config.x and config.y were confusing because the x was translated while the y was not.
        // These have been deprecated and are currently implemented as getters with deprecation warnings.
        // Rather than defining these getters here on every cell render, they are defined once in Behavior.prototype.getDefaultState.
        //config.x = this.index;
        //config.y = y;

        var declaredRendererName =
            this.getCellProperties(y).renderer ||
            this.getProperties().renderer;

        var renderer = this.dataModel.getCell(config, declaredRendererName);
        renderer.config = config;
        return renderer;
    },

    getCellProperties: function(y) {
        y = this.dataModel.getDataIndex(y);
        return this.cellProperties[y] || {};
    },

    setCellProperties: function(y, value) {
        this.cellProperties[y] = value;
    },

    clearAllCellProperties: function() {
        this.cellProperties.length = 0;
    },

    checkColumnAutosizing: function(force) {
        var properties = this.getProperties();
        var a, b, d;
        if (properties) {
            a = properties.width;
            b = properties.preferredWidth || a;
            d = properties.columnAutosized && !force;
            if (a !== b || !d) {
                properties.width = !d ? b : Math.max(a, b);
                properties.columnAutosized = !isNaN(properties.width);
            }
        }
    },

    getCellType: function(y) {
        var value = this.getValue(y);
        var type = this.typeOf(value);
        return type;
    },

    getType: function() {
        var props = this.getProperties();
        var type = props.type;
        if (!type) {
            type = this.computeColumnType();
            if (type !== 'unknown') {
                props.type = type;
            }
        }
        return type;
    },

    computeColumnType: function() {
        var headerRowCount = this.behavior.getHeaderRowCount();
        var height = this.behavior.getRowCount();
        var value = this.getValue(headerRowCount);
        var eachType = this.typeOf(value);
        if (!eachType) {
            return 'unknown';
        }
        var type = this.typeOf(value);
        var isNumber = ((typeof value) === 'number');
        for (var y = headerRowCount; y < height; y++) {
            value = this.getValue(y);
            eachType = this.typeOf(value);
            if (type !== eachType) {
                if (isNumber && (typeof value === 'number')) {
                    type = 'float';
                } else {
                    return 'mixed';
                }
            }
        }
        return type;
    },

    typeOf: function(something) {
        if (something == null) {
            return null;
        }
        var typeOf = typeof something;
        switch (typeOf) {
            case 'object':
                return something.constructor.name.toLowerCase();
            case 'number':
                return parseInt(something) === something ? 'int' : 'float';
            default:
                return typeOf;
        }
    },

    getProperties: function() {
        return this.behavior.getPrivateState().columnProperties[this.index];
    },

    setProperties: function(properties) {
        var current = this.getProperties();
        this.clearObjectProperties(current, false);
        _(current).extendOwn(properties);
    },

    toggleSort: function(keys) {
        this.dataModel.toggleSort(this.index, keys);
    },

    unSort: function(deferred) {
        this.dataModel.unSortColumn(this.index, deferred);
    },

    /**
     * This method determines the proposed cell editor name from the render properties. The algorithm is:
     * 1. `editor` render property (cell editor name)
     * 2. `format` render property (localizer name)
     * 3. `type` column property (type name)
     *
     * Note that "render property" means in each case the first defined property found on the cell, column, or grid.
     *
     * @param {number} y - The original untranslated row index.
     * @param {object} options - Will be decorated with `format` and `column`.
     * @param {Point} options.editPoint
     * @returns {undefined|CellEditor} Falsy value means either no declared cell editor _or_ instantiation aborted by falsy return return from fireRequestCellEdit.
     */
    getCellEditorAt: function(y, options) {
        var cellEditor,
            cellProps = this.getCellProperties(y),
            columnProps = this.getProperties(),
            editorName = cellProps.editor || columnProps.editor;

        options.format = cellProps.format || columnProps.format;

        cellEditor = this.dataModel.getCellEditorAt(this.index, y, editorName, options);

        if (cellEditor && !cellEditor.grid) {
            // cell editor returned but not fully instantiated (aborted by falsy return from fireRequestCellEdit)
            cellEditor = undefined;
        }

        return cellEditor;
    },

    getFormatter: function() {
        var localizerName = this.getProperties().format;
        return this.behavior.grid.localization.get(localizerName).format;
    }
};

module.exports = Column;

},{"object-iterators":51}],63:[function(require,module,exports){
'use strict';

var Local = require('./Local');
var DataModelJSON = require('../dataModels/JSON');
var ColumnSchemaFactory = require('../filter/ColumnSchemaFactory');
var features = require('../features');

/**
 * @name behaviors.JSON
 * @desc > Same parameters as {@link behaviors.Behavior#initialize|initialize}, which is called by this constructor.
 * @constructor
 * @extends Behavior
 */
var JSON = Local.extend('behaviors.JSON', {

    /**
     * @summary Constructor logic, called _after_{@link Behavior#initialize|Behavior.initialize()}.
     * @desc This method will be called upon instantiation of this class or of any class that extends from this class.
     * > All `initialize()` methods in the inheritance chain are called, in turn, each with the same parameters that were passed to the constructor, beginning with that of the most "senior" class through that of the class of the new instance.
     *
     * @param grid - the hypergrid
     * @param {undefined|function|menuItem[]} options.schema - Already consumed by Behavior's {@link Behavior#initialize|initialize}.
     * @param {object[]} dataRows - May be:
     * * An array of congruent raw data objects
     * * A function returning same
     * @param {object} [options] - _(See {@link behaviors.JSON#setData}.)_
     * @memberOf behaviors.JSON.prototype
     */
    initialize: function(grid, dataRows, options) {
        this.setData(dataRows, options);
    },

    features: [
        features.CellSelection,
        features.KeyPaging,
        features.ColumnPicker,
        features.ColumnResizing,
        features.RowResizing,
        features.Filters,
        features.RowSelection,
        features.ColumnSelection,
        features.ColumnMoving,
        features.ColumnSorting,
        features.CellClick,
        features.CellEditing,
        features.OnHover
    ],

    createColumns: function() {
        var dataModel = this.dataModel;
        var columnCount = dataModel.getColumnCount();
        var headers = dataModel.getHeaders();
        var fields = dataModel.getFields();
        var calculators = dataModel.getCalculators();
        var REGEX_CAMEL_CASE = /([^_A-Z])([A-Z]+)/g;
        this.clearColumns();
        for (var index = 0; index < columnCount; index++) {
            var header = headers[index];
            var calculator = calculators[index];
            var column = this.addColumn({
                index: index,
                header: header,
                calculator: calculator
            });
            this.columnEnum[column.name.replace(REGEX_CAMEL_CASE, '$1_$2').toUpperCase()] = index;
            var properties = column.getProperties();
            properties.field = fields[index];
            properties.header = header;
            properties.complexFilter = null;
            if (calculator) {
                properties.calculator = calculator;
            }
        }
    },

    getNewDataModel: function() {
        return new DataModelJSON(this.grid);
    },

    applyAnalytics: function() {
        this.dataModel.applyAnalytics();
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Set the header labels.
     * @param {string[]|object} headers - The header labels. One of:
     * * _If an array:_ Must contain all headers in column order.
     * * _If a hash:_ May contain any headers, keyed by field name, in any order (of course).
     */
    setHeaders: function(headers) {
        if (headers instanceof Array) {
            // Reset all headers
            var allColumns = this.allColumns;
            headers.forEach(function(header, index) {
                allColumns[index].header = header; // setter updates header in both column and data source objects
            });
        } else if (typeof headers === 'object') {
            // Adjust just the headers in the hash
            this.allColumns.forEach(function(column) {
                if (headers[column.name]) {
                    column.header = headers[column.name];
                }
            });
        }
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Set the fields array.
     * @param {string[]} fieldNames - The field names.
     */
    setFields: function(fieldNames) {
        //were defining the columns based on field names....
        //we must rebuild the column definitions
        this.dataModel.setFields(fieldNames);
        this.createColumns();
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Set the data field.
     * @param {function|object[]} [dataRows] - Array of uniform objects containing the grid data. If omitted, the previous data source will be re-used.
     * @param {object} [options]
     * @param {function|object} [options.fields] - Array of field names. Passed as 2nd param to `this.dataModel.setData`. If omitted (along with `dataSource`), the previous fields array will be re-used.
     * @param {function|object} [options.schema=deriveSchema] - Used in filter instantiation.
     */
    setData: function(dataRows, options) {
        var self = this,
            grid = this.grid,
            fields = options && options.fields,
            calculators = options && options.calculators;

        fields = typeof fields === 'function' ? fields() : fields;
        calculators = typeof calculators === 'function' ? calculators() : calculators;
        dataRows = typeof dataRows === 'function' ? dataRows() : dataRows;

        this.dataModel.setData(dataRows, fields, calculators);
        this.createColumns();

        this.schema = options && options.schema || deriveSchema;
        this.setGlobalFilter(this.getNewFilter());

        if (grid.cellEditor) {
            grid.cellEditor.cancelEditing();
        }

        dataRows = dataRows || this.dataModel.source.data;

        if (grid.isColumnAutosizing()) {
            setTimeout(function() {
                self.autosizeAllColumns();
            }, 100);
            grid.allowEvents(dataRows.length);
        } else {
            setTimeout(function() {
                self.getColumn(-1).checkColumnAutosizing(true);
                grid.allowEvents(dataRows.length);
            });
        }
    },

    /**
     * @summary Set the top totals.
     * @memberOf behaviors.JSON.p rototype
     * @param {Array<Array>} totalRows - array of rows (arrays) of totals
     */
    setTopTotals: function(totalRows) {
        this.dataModel.setTopTotals(totalRows);
    },

    /**
     * @summary Get the top totals.
     * @memberOf behaviors.JSON.prototype
     * @returns {Array<Array>}
     */
    getTopTotals: function() {
        return this.dataModel.getTopTotals();
    },

    /**
     * @summary Set the bottom totals.
     * @memberOf behaviors.JSON.prototype
     * @param {Array<Array>} totalRows - array of rows (arrays) of totals
     */
    setBottomTotals: function(totalRows) {
        this.dataModel.setBottomTotals(totalRows);
    },

    /**
     * @summary Get the bottom totals.
     * @memberOf behaviors.JSON.prototype
     * @returns {Array<Array>}
     */
    getBottomTotals: function() {
        return this.dataModel.getBottomTotals();
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Build the fields and headers from the supplied column definitions.
     * ```javascript
     * myJsonBehavior.setColumns([
     *     { header: 'Stock Name', name: 'short_description' },
     *     { header: 'Status', name: 'trading_phase' },
     *     { header: 'Reference Price', name: 'reference_price' }
     * ]);
     * ```
     * @param {Array} columnDefinitions - an array of objects with fields 'title', and 'field'
     */
    setColumns: function(columnDefinitions) {
        this.dataModel.setColumns(columnDefinitions); // TODO: this method is missing
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Enhance the double-click event just before it's broadcast to listeners.
     * @param {Point} event
     */
    enhanceDoubleClickEvent: function(event) {
        event.row = this.getRow(event.gridCell.y);
    },

    setDataProvider: function(dataProvider) {
        this.dataModel.setDataProvider(dataProvider);
    },

    hasHierarchyColumn: function() {
        return this.dataModel.hasHierarchyColumn();
    },

    getColumnAlignment: function(x) {
        if (x === 0 && this.hasHierarchyColumn()) {
            return 'left';
        } else {
            return 'center';
        }
    },
    getHiddenColumns: function() {
        return this.dataModel.getHiddenColumns();
    },

    getActiveColumns: function() {
        return this.dataModel.getActiveColumns();
    },
    getVisibleColumns: function() {
        return this.deprecated('getVisibleColumns()', 'getActiveColumns()', '1.0.6', arguments);
    },

    getSelectedRows: function() {
        var offset = -this.grid.getHeaderRowCount();
        var selections = this.grid.selectionModel.getSelectedRows();
        var result = selections.map(function(each) {
            return each + offset;
        });
        return result;
    },

    getSelectedColumns: function() {
        return this.grid.selectionModel.getSelectedColumns();
    },

    getSelections: function() {
        return this.grid.selectionModel.getSelections();
    },

    getSortedColumnIndexes: function(){
      return this.dataModel.getSortedColumnIndexes();
    },

    sortChanged: function(hiddenColumns){
        var dirty = removeHiddenColumns(
            this.getSortedColumnIndexes(),
            (hiddenColumns || this.getHiddenColumns())
        );
        if (dirty){
            this.applyAnalytics();
        }
    }

});


function deriveSchema() {
    return new ColumnSchemaFactory(this.columns).schema;
}


//Logic to moved to adapter layer outside of Hypergrid Core
function removeHiddenColumns(oldSorted, hiddenColumns){
    var dirty = false;
    oldSorted.forEach(function(i) {
        var j = 0,
            colIndex;
        while (j < hiddenColumns.length) {
            colIndex = hiddenColumns[j].index + 1; //hack to get around 0 index
            if (colIndex === i) {
                hiddenColumns[j].unSort();
                dirty = true;
                break;
            }
            j++;
        }
    });
    return dirty;
}

module.exports = JSON;

},{"../dataModels/JSON":90,"../features":114,"../filter/ColumnSchemaFactory":115,"./Local":64}],64:[function(require,module,exports){
'use strict';

var Behavior = require('./Behavior');

/**
 * @name behaviors.Local
 * @desc > Same parameters as {@link behaviors.Behavior#initialize|initialize}, which is called by this constructor.
 * @constructor
 * @extends Behavior
 */
var Local = Behavior.extend('Local', {

});

module.exports = Local;

},{"./Behavior":61}],65:[function(require,module,exports){
'use strict';

var Behavior = require('./Behavior');

var noop = function() {},
    n00p = function() { return 0; };

/**
 * @constructor
 * @extends Behavior
 */
var Null = Behavior.extend('Null', {

    //initalize: function(grid, component) {},

    setScrollPositionY: noop,
    setScrollPositionX: noop,
    getActiveColumnCount: n00p,
    getFixedColumnCount: n00p,
    getFixedColumnsWidth: n00p,
    getFixedColumnsMaxWidth: n00p,
    setRenderedWidth: n00p,
    getRowCount: n00p,
    getFixedRowCount: n00p,
    getFixedRowsHeight: n00p,
    getFixedRowsMaxHeight: n00p,
    setRenderedHeight: n00p,
    getCellProvider: noop,
    click: noop,
    doubleClick: noop
});

module.exports = Null;

},{"./Behavior":61}],66:[function(require,module,exports){
'use strict';

module.exports = {
    Behavior: require('./Behavior'), // abstract base class
    JSON: require('./JSON'),
    Null: require('./Null')
};
},{"./Behavior":61,"./JSON":63,"./Null":65}],67:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var mustache = require('mustache');
var _ = require('object-iterators');

var Base = require('../lib/Base');
var effects = require('../lib/effects');
var Localization = require('../lib/Localization');

/**
 * @constructor
 */
var CellEditor = Base.extend('CellEditor', {

    /**
     * @param grid
     * @param {string} options - Properties listed below + arbitrary mustache "variables" for merging into template.
     * @param {Point} options.editPoint
     * @param {string} [options.format] - Name of a localizer with which to override prototype's `localizer` property.
     */
    initialize: function(grid, options) {

        // Establish `this.editPoint` and possibly `this.format`; plus other arbitrary properties for mustache use.
        for (var key in options) {
            if (options.hasOwnProperty(key) && this[key] !== null) {
                this[key] = options[key];
            }
        }

        var value = grid.behavior.getValue(this.editPoint.x, this.editPoint.y);
        if (value instanceof Array) {
            value = value[1]; //it's a nested object
        }

        /**
         * my instance of hypergrid
         * @type {Hypergrid}
         * @memberOf CellEditor.prototype
         */
        this.grid = grid;

        this.grid.cellEditor = this;

        this.locale = grid.localization.locale; // for template's `lang` attribute

        // override native localizer with localizer named in format if defined (from instantiation options)
        if (this.format) {
            this.localizer = this.grid.localization.get(this.format);
        }

        this.initialValue = value;

        var container = document.createElement('DIV');
        container.innerHTML = mustache.render(this.template, this);

        /**
         * This object's input control, one of:
         * * *input element* - an `HTMLElement` that has a `value` attribute, such as `HTMLInputElement`, `HTMLButtonElement`, etc.
         * * *container element* - an `HTMLElement` containing one or more input elements, only one of which contains the editor value.
         *
         * For access to the input control itself (which may or may not be the same as `this.el`), see `this.input`.
         *
         * @type {HTMLElement}
         * @default null
         * @memberOf CellEditor.prototype
         */
        this.el = container.firstChild;

        this.input = this.el;

        this.errors = 0;

        var self = this;
        this.el.addEventListener('keyup', this.keyup.bind(this));
        this.el.addEventListener('keydown', function(e) {
            grid.fireSyntheticEditorKeyDownEvent(self, e);
        });
        this.el.addEventListener('keypress', function(e) {
            grid.fireSyntheticEditorKeyPressEvent(self, e);
        });
        this.el.onblur = function(e) {
            self.cancelEditing();
        };
    },

    localizer: Localization.prototype.null,

    specialKeyups: {
        //0x08: 'clearStopEditing', // backspace
        0x09: 'stopEditing', // tab
        0x0d: 'stopEditing', // return/enter
        0x1b: 'cancelEditing' // escape
    },

    keyup: function(e) {
        if (e) {
            var specialKeyup = this.specialKeyups[e.keyCode];

            if (specialKeyup) {
                e.preventDefault();
                if (this[specialKeyup](3)) {
                    this.grid.repaint();
                    this.grid.takeFocus();
                }
            }

            this.grid.fireSyntheticEditorKeyUpEvent(this, e);
        }
    },

    /**
     * if true, check that the editor is in the right location
     * @type {boolean}
     * @default false
     * @memberOf CellEditor.prototype
     */
    checkEditorPositionFlag: false,

    /**
     * @memberOf CellEditor.prototype
     * @desc This function is a callback from the fin-hypergrid.   It is called after each paint of the canvas.
     */
    gridRenderedNotification: function() {
        this.checkEditor();
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc scroll values have changed, we've been notified
     */
    scrollValueChangedNotification: function() {
        this.checkEditorPositionFlag = true;
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc move the editor to the current editor point
     */
    moveEditor: function() {
        var cellBounds = this.grid._getBoundsOfCell(this.editPoint.x, this.editPoint.y);

        //hack to accommodate bootstrap margin issues...
        var xOffset =
            this.grid.div.getBoundingClientRect().left -
            this.grid.divCanvas.getBoundingClientRect().left;

        cellBounds.x -= xOffset;

        this.setBounds(cellBounds);
    },

    beginEditing: function() {
        if (this.grid.fireRequestCellEdit(this.editPoint, this.initialValue)) {
            this.checkEditorPositionFlag = true;
            this.checkEditor();
        }
    },
    beginEditAt: function(Constructor, name) {
        return this.deprecated('beginEditAt(point)', 'beginEditing()', '1.0.6');
    },

    /**
     * @summary Put the value into our editor.
     * @desc Formats the value and displays it.
     * The localizer's {@link localizerInterface#format|format} method will be called.
     *
     * Override this method if your editor has additional or alternative GUI elements.
     *
     * @param {object} value - The raw unformatted value from the data source that we want to edit.
     * @memberOf CellEditor.prototype
     */
    setEditorValue: function(value) {
        this.input.value = this.localizer.format(value);
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc display the editor
     */
    showEditor: function() {
        this.el.style.display = 'inline';
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc hide the editor
     */
    hideEditor: function() {
        this.el.style.display = 'none';
    },

    /** @summary Stops editing.
     * @desc Before saving, validates the edited value in two phases as follows:
     * 1. Call `validateEditorValue`. (Calls the localizer's `invalid()` function, if available.)
     * 2. Catch any errors thrown by the {@link CellEditor#getEditorValue|getEditorValue} method.
     *
     * **If the edited value passes both phases of the validation:**
     * Saves the edited value by calling the {@link CellEditor#saveEditorValue|saveEditorValue} method.
     *
     * **On validation failure:**
     * 1. If `feedback` was omitted, cancels editing, discarding the edited value.
     * 2. If `feedback` was provided, gives the user some feedback (see `feedback`, below).
     *
     * @param {number} [feedback] What to do on validation failure:
     * * If omitted, simply cancels editing without saving edited value.
     * * If 0, shows the error feedback effect (see the {@link CellEditor#errorEffect|errorEffect} property).
     * * If > 0, shows the error feedback effect _and_ calls the {@link CellEditor#errorEffectEnd|errorEffectEnd} method) every `feedback` call(s) to `stopEditing`.
     * @returns {boolean} Truthy means successful stop. Falsy means syntax error prevented stop. Note that editing is canceled when no feedback requested and successful stop includes (successful) cancel.
     * @memberOf CellEditor.prototype
     */
    stopEditing: function(feedback) {
        /**
         * @type {boolean|string|Error}
         */
        var error = this.validateEditorValue();

        if (!error) {
            try {
                var value = this.getEditorValue();
            } catch (err) {
                error = err;
            }
        }

        if (!error && this.grid.fireSyntheticEditorDataChangeEvent(this, this.initialValue, value)) {
            try {
                this.saveEditorValue(value);
            } catch (err) {
                error = err;
            }
        }

        if (!error) {
            this.hideEditor();
            this.grid.cellEditor = null;
            this.el.remove();
        } else if (feedback >= 0) { // never true when `feedback` undefined
            var point = this.editPoint;
            this.grid.selectViewportCell(point.x, point.y - this.grid.getHeaderRowCount());
            this.errorEffectBegin(++this.errors % feedback === 0 && error);
        } else { // invalid but no feedback
            return this.cancelEditing();
        }

        return !error;
    },

    /** @summary Cancels editing.
     * @returns {boolean} Successful. (Cancel is always successful.)
     */
    cancelEditing: function() {
        if (this.grid.cellEditor) { // because stopEditing's .remove triggers blur which comes here
            this.setEditorValue(this.initialValue);
            this.hideEditor();
            this.grid.cellEditor = null;
            this.el.remove();
        }
        return true;
    },

    /**
     * Calls the effect function indicated in the {@link CellEditor#errorEffect|errorEffect} property which triggers a series of CSS transitions.
     * @param {boolean|string|Error} [error] - If defined, call the {@link CellEditor#errorEffectEnd|errorEffectEnd} method at the end of the last effect transition with this error.
     * @memberOf CellEditor.prototype
     */
    errorEffectBegin: function(error) {
        var options = { callback: error && this.errorEffectEnd.bind(this, error) },
            effect = this.errorEffect;

        if (typeof effect === 'string') {
            effect = this.errorEffects[effect];
        }

        if (typeof effect === 'object') {
            _(options).extendOwn(effect.options);
            effect = effect.effector;
        }

        if (typeof effect === 'function') {
            effect.call(this, options);
        } else {
            throw 'Expected `this.errorEffect` to resolve to an error effect function.';
        }
    },

    /**
     * This function expects to be passed an error. There is no point in calling this function if there is no error. Nevertheless, if called with a falsy `error`, returns without doing anything.
     * @this {CellEditor}
     * @param {boolean|string|Error} [error]
     */
    errorEffectEnd: function(error) {
        if (error) {
            var msg =
                'Invalid value. To resolve, do one of the following:\n\n' +
                '   * Correct the error and try again.\n' +
                '         - or -\n' +
                '   * Cancel editing by pressing the "esc" (escape) key.';

            error = error.message || error;

            if (typeof error !== 'string') {
                error = '';
            }

            if (this.localizer.expectation) {
                error = error ? error + '\n' + this.localizer.expectation : this.localizer.expectation;
            }

            if (error) {
                if (/[\n\r]/.test(error)) {
                    error = '\n' + error;
                    error = error.replace(/[\n\r]+/g, '\n\n   * ');
                }
                msg += '\n\nAdditional information about this error: ' + error;
            }

            alert(msg); // eslint-disable-line no-alert
        }
    },

    /** @typedef effectObject
     * @property {effectFunction} effector
     * @property {object} [options] - An options object with which to call the function.
     */
    /**
     * May be one of:
     * * **string** - Name of registered error effect.
     * * **effectFunction** - Reference to an effect function.
     * * **effectObject** - Reference to an effectObject containing an {@link effectFunction} and an `options` object with which to call the function.
     * @type {string|effectFunction|effectObject}
     * @memberOf CellEditor.prototype
     */
    errorEffect: 'shaker',

    /**
     * Hash of registered {@link effectFunction}s or {@link effectObject}s.
     * @memberOf CellEditor.prototype
     */
    errorEffects: {
        shaker: effects.shaker,
        glower: effects.glower
    },

    /**
     * @desc save the new value into the behavior (model)
     * @memberOf CellEditor.prototype
     */
    saveEditorValue: function(value) {
        var point = this.editPoint;

        if (
            !(value && value === this.initialValue) && // data changed
            this.grid.fireBeforeCellEdit(point, this.initialValue, value, this) // not aborting
        ) {
            this.grid.behavior.setValue(point.x, point.y, value);
            this.grid.fireAfterCellEdit(point, this.initialValue, value, this);
        }
    },

    /**
     * @summary Extract the edited value from the editor.
     * @desc De-format the edited string back into a primitive value.
     *
     * The localizer's {@link localizerInterface#parse|parse} method will be called on the text box contents.
     *
     * Override this method if your editor has additional or alternative GUI elements. The GUI elements will influence the primitive value, either by altering the edited string before it is parsed, or by transforming the parsed value before returning it.
     * @returns {object} the current editor's value
     * @memberOf CellEditor.prototype
     */
    getEditorValue: function() {
        return this.localizer.parse(this.input.value);
    },

    /**
     * If there is no validator on the localizer, returns falsy (not invalid; possibly valid).
     * @returns {boolean|string} Truthy value means invalid. If a string, this will be an error message. If not a string, it merely indicates a generic invalid result.
     */
    validateEditorValue: function() {
        return this.localizer.invalid && this.localizer.invalid(this.input.value);
    },

    /**
     * @summary Request focus for my input control.
     * @desc See GRID-95 "Scrollbar moves inward" for issue and work-around explanation.
     * @memberOf CellEditor.prototype
     */
    takeFocus: function() {
        var el = this.el,
            leftWas = el.style.left,
            topWas = el.style.top;

        el.style.left = el.style.top = 0; // work-around: move to upper left

        this.input.focus();
        this.selectAll();

        el.style.left = leftWas;
        el.style.top = topWas;
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc select everything
     */
    selectAll: nullPattern,

    /**
     * @memberOf CellEditor.prototype
     * @desc set the bounds of my input control
     * @param {rectangle} rectangle - the bounds to move to
     */
    setBounds: function(cellBounds) {
        var input = this.el;

        input.style.position = 'absolute';
        input.style.left = px(cellBounds.x - 1);
        input.style.top = px(cellBounds.y - 1);
        input.style.width = px(cellBounds.width + 2);
        input.style.height = px(cellBounds.height + 2);
    },

    /**
     * @desc check that the editor is in the correct location, and is showing/hidden appropriately
     * @memberOf CellEditor.prototype
     */
    checkEditor: function() {
        if (this.checkEditorPositionFlag) {
            this.checkEditorPositionFlag = false;
            if (this.grid.isDataVisible(this.editPoint.x, this.editPoint.y)) {
                this.setEditorValue(this.initialValue);
                this.attachEditor();
                this.moveEditor();
                this.showEditor();
                this.takeFocus();
            } else {
                this.hideEditor();
            }
        }
    },

    attachEditor: function() {
        var input = this.el,
            div = this.grid.div,
            referenceNode = div.querySelectorAll('.finbar-horizontal, .finbar-vertical');

        div.insertBefore(input, referenceNode.length ? referenceNode[0] : null);
    },

    template: ''

});

function nullPattern() {}
function px(n) { return n + 'px'; }


CellEditor.abstract = true; // don't instantiate directly


module.exports = CellEditor;

},{"../lib/Base":118,"../lib/Localization":119,"../lib/effects":124,"mustache":50,"object-iterators":51}],68:[function(require,module,exports){
'use strict';

var CellEditor = require('./CellEditor');

/**
 * As of spring 2016:
 * Functions well in Chrome and Firefox; unimplemented in Safari.
 * @constructor
 * @extends CellEditor
 */
var Color = CellEditor.extend('Color', {

    template: '<input type="color" lang="{{locale}}" style="{{style}}">'

});

module.exports = Color;

},{"./CellEditor":67}],69:[function(require,module,exports){
// ComboBox.js - A combo-box is a combination of a text-box and a drop-down.
// User may type into it and/or select an item from the drop-down (by clicking on the triangle at the right).
// The drop-down has sections which are toggled from a control area between the text-box and the drop-down.

/* eslint-env browser */

'use strict';

var Textfield = require('./Textfield');
var prototype = require('./CellEditor').prototype;
var Queueless = require('../lib/queueless');
var elfor = require('../lib/elfor');

/*********************************/
/* eslint-disable no-unused-vars */
/*********************************/

var TOGGLE_MODE_PREFIX = 'toggle-mode-';

var stateToActionMap = {
    hidden: slideDown,
    visible: slideUp
};

/**
 * A combo box is a text box that also has a drop-down containing options. The drop-down consists of an actual drop-down list (a `<select>` list) plus a _control area_ above it containing toggles. The toggles control the visibility of the various "mode lists."
 *
 * Functions well in Chrome, Safari, Firefox, and Internet Explorer.
 * @constructor
 * @extends Textfield
 */
var ComboBox = Textfield.extend('ComboBox', {

    initialize: function() {
        var el = this.el;

        this.input = el.querySelector('input');
        this.dropper = el.querySelector('span');
        this.options = el.querySelector('div');
        this.controls = this.options.querySelector('div');
        this.dropdown = this.options.querySelector('select');

        this.controllable = this.modes.length > 1;

        // set up a transition end controller
        this.optionsTransition = new Queueless(this.options, this);

        this.menuModesSource = this.column.menuModes || { distinctValues: true };

        // wire-ups
        this.dropper.addEventListener('mousedown', this.toggleDropDown.bind(this));
        this.dropdown.addEventListener('mousewheel', function(e) { e.stopPropagation(); });
        this.dropdown.addEventListener('change', this.insertText.bind(this));
        el.onblur = null; // void this one, set by super's initialize
    },

    template: [
'<div class="hypergrid-input" title="">',
'    <input type="text" lang="{{locale}}" style="{{style}}">',
'    <span title="Click for options"></span>',
'    <div>',
'        <div></div>',
'        <select size="12" lang="{{locale}}"></select>',
'    </div>',
'</div>'
    ].join('\n'),

    modes: [
        {
            name: 'distinctValues',
            appendOptions: function(optgroup) {
                // get the distinct column values and sort them
                var distinct = {},
                    d = [],
                    columnName = this.column.name,
                    formatter = this.column.getFormatter();

                this.grid.behavior.getData().forEach(function(dataRow) {
                    var val = formatter(dataRow[columnName]);
                    distinct[val] = (distinct[val] || 0) + 1;
                });

                for (var key in distinct) {
                    d.push(key);
                }

                while (optgroup.firstElementChild) {
                    optgroup.firstElementChild.remove();
                }

                d.sort().forEach(function(val) {
                    var option = new Option(val + ' (' + distinct[val] + ')', val);
                    optgroup.appendChild(option);
                });

                return d.length;
            }
        }
    ],

    showEditor: function() {
        var menuModesSource = this.menuModesSource,
            menuModes = this.menuModes = {};

        // build the proxy
        this.modes.forEach(function(mode) {
            var modeName = mode.name;
            if (modeName in menuModesSource) {
                menuModes[modeName] = menuModesSource[modeName];
            }
        });

        // wire-ups
        if (this.controllable) {
            this.controls.addEventListener('click', onModeIconClick.bind(this));
        }

        // set the initial state of the mode toggles
        this.modes.forEach(function(mode) {
            // create a toggle
            var toggle = document.createElement('span');
            if (this.controllable) {
                toggle.className = TOGGLE_MODE_PREFIX + mode.name;
                toggle.title = 'Toggle ' + (mode.label || mode.name).toLowerCase();
                toggle.textContent = mode.symbol;
            }
            this.controls.appendChild(toggle);

            // create and label a new optgroup
            if (mode.selector) {
                var optgroup = document.createElement('optgroup');
                optgroup.label = mode.label;
                optgroup.className = 'submenu-' + mode.name;
                optgroup.style.backgroundColor = mode.backgroundColor;
                this.dropdown.add(optgroup);
            }

            setModeIconAndOptgroup.call(this, toggle, mode.name, menuModes[mode.name]);
        }.bind(this));

        prototype.showEditor.call(this);
    },

    hideEditor: function() {
        // this is where you would persist this.menuModes
        prototype.hideEditor.call(this);
    },

    toggleDropDown: function() {
        if (!this.optionsTransition.transitioning) {
            var state = window.getComputedStyle(this.dropdown).visibility;
            stateToActionMap[state].call(this);
        }
    },

    insertText: function(e) {
        // replace the input text with the drop-down text
        this.input.focus();
        this.input.value = this.dropdown.value;
        this.input.setSelectionRange(0, this.input.value.length);

        // close the drop-down
        this.toggleDropDown();
    }
});

function onModeIconClick(e) {
    var ctrl = e.target;

    if (ctrl.tagName === 'SPAN') {
        // extra ct the mode name from the toggle control's class name
        var modeClassName = Array.prototype.find.call(ctrl.classList, function(className) {
                return className.indexOf(TOGGLE_MODE_PREFIX) === 0;
            }),
            modeName = modeClassName.substr(TOGGLE_MODE_PREFIX.length);

        // toggle mode in the filter
        var modeState = this.menuModes[modeName] ^= 1;

        setModeIconAndOptgroup.call(this, ctrl, modeName, modeState);
    }
}

function setModeIconAndOptgroup(ctrl, name, state) {
    var style, optgroup, sum, display,
        mode = this.modes.find(function(mode) { return mode.name === name; }); // eslint-disable-line no-shadow

    // set icon state (color)
    ctrl.classList.toggle('active', !!state);

    // empty the optgroup if hiding; rebuild it if showing
    if (state) { // rebuild it
        // show progress cursor for (at least) 1/3 second
        style = this.el.style;
        style.cursor = 'progress';
        setTimeout(function() { style.cursor = null; }, 333);

        if (mode.selector) {
            optgroup = this.dropdown.querySelector(mode.selector);
            sum = mode.appendOptions.call(this, optgroup);

            // update sum
            optgroup.label = optgroup.label.replace(/ \(\d+\)$/, ''); // remove old sum
            optgroup.label += ' (' + sum + ')';
        } else {
            sum = mode.appendOptions.call(this, this.dropdown);
            if (!this.controllable) {
                ctrl.textContent = sum + ' values';
            }
        }

        display = null;
    } else {
        display = 'none';
    }

    // hide/show the group
    elfor.each(
        mode.selector || ':scope>option,:scope>optgroup:not([class])',
        function iteratee(el) { el.style.display = display; },
        this.dropdown
    );

    // TODO: Reset the width of this.options to the natural width of this.dropdown. To do this, we need to remove the latter's "width: 100%" from the CSS and then set an explicit this.options.style.width based on the computed width of this.dropdown. This is complicated by the fact that it cannot be done before it is in the DOM.
}

function slideDown() {
    // preserve the text box's current text selection, which is about to be lost
    this.selectionStart = this.input.selectionStart;
    this.selectionEnd = this.input.selectionEnd;

    // clean up the select list from last usage
    this.dropdown.selectedIndex = -1; // be kind (remove previous selection)
    this.dropdown.style.scrollTop = 0; // rewind

    // show the drop-down slide down effect
    this.options.style.visibility = 'visible';
    var dropDownHeight = this.dropdown.size * 15;
    this.options.style.height = 2 + 15 + dropDownHeight + 2 + 'px'; // starts the slide down effect

    // while in drop-down, listen for clicks in text box which means abprt
    this.input.addEventListener('mousedown', this.slideUpBound = slideUp.bind(this));

    // wait for transition to end
    this.optionsTransition.begin();
}

function slideUp() {
    // stop listening to input clicks
    this.input.removeEventListener('mousedown', this.slideUpBound);

    // start the slide up effect
    this.options.style.height = 0;

    // schedule the hide to occur after the slide up effect
    this.optionsTransition.begin(function(event) {
        this.style.visibility = 'hidden';
    });
}


module.exports = ComboBox;

},{"../lib/elfor":125,"../lib/queueless":128,"./CellEditor":67,"./Textfield":75}],70:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var CellEditor = require('./CellEditor');

var isChromium = window.chrome,
    winNav = window.navigator,
    vendorName = winNav.vendor,
    isOpera = winNav.userAgent.indexOf('OPR') > -1,
    isIEedge = winNav.userAgent.indexOf('Edge') > -1,
    isIOSChrome = winNav.userAgent.match('CriOS'),
    isChrome = !isIOSChrome &&
        isChromium !== null &&
        isChromium !== undefined &&
        vendorName === 'Google Inc.' &&
        isOpera == false && isIEedge == false; // eslint-disable-line eqeqeq

/**
 * As of spring 2016:
 * Functions well in Chrome except no localization (day, month names; date format).
 * Unimplemented in Safari, Firefox, Internet Explorer.
 * This is a "snmart" control. It detects Chrome:
 * * If Chrome, uses chromeDate overrides format to that required by the value attribute, yyyy-mm-dd. (Note that this is not the format displayed in the control, which is always mm/dd/yyyy.)
 * * Otherwise uses localized date format _but_ falls back to a regular text box.
 * @constructor
 * @extends CellEditor
 */
var Date = CellEditor.extend('Date', {

    initialize: function(grid) {

        var localizerName,
            usesDateInputControl = isChrome;

        if (usesDateInputControl) {
            localizerName = 'chromeDate';
            this.template = '<input type="date">';
        } else {
            localizerName = 'date';
            this.template = '<input type="text">';

            this.selectAll = function() {
                var lastCharPlusOne = this.getEditorValue().length;
                this.input.setSelectionRange(0, lastCharPlusOne);
            };
        }

        this.localizer = grid.localization.get(localizerName);
    }
});


module.exports = Date;

},{"./CellEditor":67}],71:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var popMenu = require('pop-menu');
var Conditionals = require('../Shared').FilterTree.Conditionals;

var ComboBox = require('./ComboBox');
var prototype = require('./CellEditor').prototype;


/**
 * The select list consists of the following sets of drop-down items:
 * * `operators` (icon *&lt;*) The particular selection of operators for this column. Comes from the filter tree.
 * * `distinctValues` (icon *#*) List of distinct column values. Calculated from inspection of column values on _and_ on icon click.
 * * `columnNames` (icon *T*) List other column names. Calculated from inspection of column values on _and_ on icon click.
 *
 * The control area reflects the `this.modes` array (above). It is modeled by a 'menuModes` object, a hash with boolean properties representing the state of each of the sets of menu items outlined above. Missing properties are falsy by implication. The state semantics are:
 *   * `1` or `true` means adds CSS class `active` to icon _and_ shows set's items in drop-down.
 *   * `0` or `false` means removes (CSS class `active` from icon _and_ hides set's items in drop-down.
 *
 * *Persisting changes:* The only change this UI supports (besides the filter text itself) is the menu mode states, which are expected to be "sticky." That is, they are "persisted" (written back) to the filter. However, there is a problem: When the column filter is blank it doesn't actually exist yet in the filter, so there is nowhere to save it. The solution is to read the `menuModes` hash _from_ the filter tree but don't modify it until end of editing. Reading it from the filter tree picks up previous setting if there was an extant column filter or the default if there was not. But then, rather than modifying this structure (because it might be the default and we don't want to overwrite that), we hang a proxy copy off the behavior's column object for this column. This will persist it for the duration of the app session. At end of editing, if and only if there is now a column filter (text is not blank), we copy it to the column filter's subtree node in the filter tree.
 *
 * @constructor
 * @extends ComboBox
 */
var FilterBox = ComboBox.extend('FilterBox', {

    initialize: function() {

        // look in the filter, under column filters, for a column filter for this column
        var root = this.grid.getGlobalFilter(),
            columnName = this.column.name,
            columnFilters = root.columnFilters,
            columnFilterSubtree = root.getColumnFilter(columnName) || {},
            columnSchema = root.schema.lookup(columnName) || {};


        // get the operator list from the node, schema, typeOpMap, or root:
        // (This mimics the code in FilterLeaf.js's `getOpMenu` function becauase the node may not exist yet.)
        this.opMenu =

            // pull operator list from column schema if available
            columnSchema.opMenu ||

            // operator list for the column's type if available
            root.typeOpMap && root.typeOpMap[columnSchema.type || columnFilterSubtree.type] ||

            // default operator list (which itself defaults to `Conditionals.defaultOpMenu`)
            root.opMenu;


        // get the column filter's `menuModes` object -- contains the states of the drop-down option icons:
        this.menuModesSource =

            // first try proxy from last time (because editing may have ended without a column filter to put in the filter tree)
            this.column.menuModes ||

            // ELSE try column filter's `menuModes` WHEN available
            columnFilterSubtree.menuModes ||
            columnFilterSubtree.menuModes ||

            // try use column schema's `menuModes` when defined
            columnSchema.menuModes ||

            // ELSE try the filter default (which itself defaults to operators ON, others OFF; see definition at top of DefaultFilter.js)
            columnFilters.menuModes;

    },


    /**
     * When there's only one mode defined here, the control area portion of the UI is hidden.
     */
    modes: [
        {
            name: 'operators',
            symbol: '<',
            appendOptions: function(dropdown) {
                if (!dropdown.length) {
                    // Various  operator options and/or optgroups vary per column based on `opMenu`.
                    popMenu.build(dropdown, this.opMenu, {
                        group: function(groupName) {
                            return Conditionals.groups[groupName];
                        },
                        prompt: null
                    });
                    // This list of conjunctions is an extra and is for all columns. All operator optgroups are classless.
                    var optgroup = document.createElement('optgroup');
                    optgroup.label = 'Conjunctions';
                    optgroup.appendChild(new Option('and', ' and '));
                    optgroup.appendChild(new Option('or', ' or '));
                    optgroup.appendChild(new Option('nor', ' nor '));
                }
            }
        }, {
            name: 'columnNames',
            label: 'Column Names',
            selector: 'optgroup.submenu-columnNames',
            symbol: 'A',
            backgroundColor: '#eff',
            appendOptions: function(optgroup) {
                var columns = this.grid.behavior.columns,
                    x = this.editPoint.x;

                while (optgroup.firstElementChild) {
                    optgroup.firstElementChild.remove();
                }

                columns.forEach(function(column, index) {
                    if (index !== x) {
                        var name = column.name,
                            option = new Option(name);
                        option.title = '[' + name + ']\r"' + column.header + '"';
                        optgroup.appendChild(option);
                    }
                });
                return columns.length;
            }
        }, {
            name: 'distinctValues',
            label: 'Distinct Values',
            selector: 'optgroup.submenu-distinctValues',
            symbol: '#',
            backgroundColor: '#fef',
            appendOptions: ComboBox.prototype.modes[0].appendOptions
        }
    ],

    /**
     * Write the `menuModes` proxy to the filter tree's column filter subtree node.
     * We look up the node again here because it might be new; or may have been deleted & recreated during editing.
     */
    hideEditor: function() {
        // look in the filter, under column filters, for a column filter for this column
        var filter = this.grid.getGlobalFilter(),
            columnName = this.column.name,
            columnFilterSubtree = filter.getColumnFilter(columnName);

        if (columnFilterSubtree) {
            // write back to filter-tree node for persisting with getState
            columnFilterSubtree.menuModes = this.menuModes;
        }

        this.column.menuModes = this.menuModes;

        ComboBox.prototype.hideEditor.call(this);
    },

    keyup: function(e) {
        if (e) {
            prototype.keyup.call(this, e);

            if (this.grid.resolveProperty('filteringMode') === 'immediate') {
                this.saveEditorValue(this.getEditorValue());
                this.moveEditor();
            }
        }
    },

    insertText: function(e) {
        var start = this.selectionStart,
            end = this.selectionEnd,
            dropdown = this.dropdown,
            operator = dropdown.value,
            option = dropdown.options[dropdown.selectedIndex],
            optgroup = option.parentElement,
            isOperator = !(optgroup.tagName === 'OPTGROUP' && optgroup.className);

        this.input.focus();

        if (start === end && isOperator) {
            var parser = this.grid.getGlobalFilter().parserCQL,
                cql = this.input.value,
                position = parser.getOperatorPosition(cql, this.selectionStart, operator);

            start = position.start;
            end = position.end;

            // prepend space to operator as needed
            if (
                start > 0 && // not at very beginning? and...
                !/\s/.test(cql[start - 1]) // no white space before operator?
            ) {
                operator = ' ' + operator;
            }

            // append space to operator as needed
            if (
                end === cql.length || // at very end? or...
                !/\s/.test(cql[end]) // no white space after operator?
            ) {
                operator += ' ';
            }
        }

        // insert the drop-down text at the insertion point or over the selected text
        this.input.setRangeText(operator, start, end, 'end');

        // close the drop-down
        this.toggleDropDown();
    }

});


module.exports = FilterBox;

},{"../Shared":60,"./CellEditor":67,"./ComboBox":69,"pop-menu":52}],72:[function(require,module,exports){
'use strict';

var Textfield = require('./Textfield');

/**
 * Functions well in Chrome, Safari, Firefox, and Internet Explorer.
 * @constructor
 * @extends Textfield
 */
var Number = Textfield.extend('Number', {

    initialize: function(grid) {
        this.localizer = grid.localization.get('number');
    }

});

module.exports = Number;

},{"./Textfield":75}],73:[function(require,module,exports){
'use strict';

var CellEditor = require('./CellEditor');

/**
 * @constructor
 * @extends CellEditor
 */
var Slider = CellEditor.extend('Slider', {

    template: '<input type="range" lang="{{locale}}" style="{{style}}">'

});

module.exports = Slider;

},{"./CellEditor":67}],74:[function(require,module,exports){
'use strict';

var CellEditor = require('./CellEditor.js');

/**
 * @constructor
 * @extends CellEditor
 */
var Spinner = CellEditor.extend('Spinner', {

    template: '<input type="number" lang="{{locale}}" style="{{style}}">'

});

module.exports = Spinner;

},{"./CellEditor.js":67}],75:[function(require,module,exports){
'use strict';

var CellEditor = require('./CellEditor.js');
var Localization = require('../lib/Localization');


/**
 * As of spring 2016:
 * Functions well in Chrome, Safari, Firefox, and Internet Explorer.
 * @constructor
 * @extends CellEditor
 */
var Textfield = CellEditor.extend('Textfield', {

    template: '<input type="text" lang="{{locale}}" style="{{style}}">',

    localizer: Localization.prototype.string,

    selectAll: function() {
        var lastCharPlusOne = this.getEditorValue().length;
        this.input.setSelectionRange(0, lastCharPlusOne);
    }
});

module.exports = Textfield;

},{"../lib/Localization":119,"./CellEditor.js":67}],76:[function(require,module,exports){
/**
 * @module cellEditors
 */

'use strict';

/**
 *
 * @param {Hypergrid} grid
 * @param {boolean} [privateRegistry=false] - This instance will use a private registry.
 * @constructor
 */
function CellEditors(grid, privateRegistry) {
    this.grid = grid;

    if (privateRegistry) {
        this.editors = {};
    }

    // preregister the standard cell editors
    if (privateRegistry || !this.get('celleditor')) {
        this.add(require('./CellEditor'));
        this.add(require('./ComboBox'));
        this.add(require('./Color'));
        this.add(require('./Date'));
        this.add(require('./FilterBox'));
        this.add(require('./Number'));
        this.add(require('./Slider'));
        this.add(require('./Spinner'));
        this.add(require('./Textfield'));
    }
}

CellEditors.prototype = {
    constructor: CellEditors.prototype.constructor, // preserve constructor

    /**
     * @summary Register a cell editor constructor.
     * @desc Adds a custom cell editor constructor to the `editors` hash using the provided name (or the class name), converted to all lower case.
     *
     * > All native cell editors are "preregistered" in `editors`..
     *
     * @param {string} [name] - Case-insensitive editor key. If not given, `YourCellEditor.prototype.$$CLASS_NAME` is used.
     *
     * @param {YourCellEditor.prototype.constructor} Constructor - A constructor, typically extended from `CellEditor` (or a descendant therefrom).
     *
     * > Note: `$$CLASS_NAME` can be easily set up by providing a string as the (optional) first parameter (`alias`) in your {@link https://www.npmjs.com/package/extend-me|CellEditor.extend} call.
     *
     * @returns {CellEditor} A newly registered constructor extended from {@link CellEditor}.
     *
     * @memberOf module:cellEditors
     */
    add: function(name, Constructor) {
        if (typeof name === 'function') {
            Constructor = name;
            name = undefined;
        }

        name = name || Constructor.prototype.$$CLASS_NAME;
        name = name && name.toLowerCase();
        this.editors[name] = Constructor;
        return Constructor;
    },

    /**
     * @summary Register a synonym for an existing cell editor constructor.
     * @param {string} synonymName
     * @param {string} existingName
     * @returns {CellEditor} The previously registered constructor this new synonym points to.
     * @memberOf CellEditors.prototype
     */
    addSynonym: function(synonymName, existingName) {
        var cellEditor = this.get(existingName);
        return (this.editors[synonymName] = cellEditor);
    },

    /**
     * @param {string} name - Name of a registered editor.
     * @returns {CellEditor} A registered constructor extended from {@link CellEditor}.
     * @memberOf CellEditors.prototype
     */
    get: function(name) {
        return this.editors[name && name.toLowerCase()];
    },

    /**
     * @summary Lookup registered cell editor and return a new instance thereof.
     * @desc Note: Must be called with the Hypergrid object as context!
     * @returns {CellEditor} New instance of the named cell editor.
     * @param {string} name - Name of a registered editor.
     * @param {string} [options] - Properties to add to the instantiated editor primarily for mustache's use.
     * @memberOf CellEditors.prototype
     */
    create: function(name, options) {
        var cellEditor,
            Constructor = this.get(name);

        if (Constructor) {
            if (Constructor.abstract) {
                throw 'Attempt to instantiate an "abstract" cell editor class.';
            }
            cellEditor = new Constructor(this.grid, options);
        }

        return cellEditor;
    },

    /**
     * The cell editor registry containing all the "preregistered" cell editor constructors.
     * @private
     * @memberOf CellEditors.prototype
     */
    editors: {}
};

module.exports = CellEditors;

},{"./CellEditor":67,"./Color":68,"./ComboBox":69,"./Date":70,"./FilterBox":71,"./Number":72,"./Slider":73,"./Spinner":74,"./Textfield":75}],77:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var Button = CellRenderer.extend('Button', {

    /**
     * @summary The default cell rendering function for a button cell.
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     */
    paint: function(gc, config) {
        var val = config.value;
        var c = config.x;
        var r = config.y;
        var bounds = config.bounds;
        var x = bounds.x + 2;
        var y = bounds.y + 2;
        var width = bounds.width - 3;
        var height = bounds.height - 3;
        var radius = height / 2;
        var arcGradient = gc.createLinearGradient(x, y, x, y + height);
        if (config.mouseDown) {
            arcGradient.addColorStop(0, '#B5CBED');
            arcGradient.addColorStop(1, '#4d74ea');
        } else {
            arcGradient.addColorStop(0, '#ffffff');
            arcGradient.addColorStop(1, '#aaaaaa');
        }
        gc.fillStyle = arcGradient;
        gc.strokeStyle = '#000000';
        this.roundRect(gc, x, y, width, height, radius, arcGradient, true);

        var ox = (width - config.getTextWidth(gc, val)) / 2;
        var oy = (height - config.getTextHeight(gc.font).descent) / 2;

        if (gc.textBaseline !== 'middle') {
            gc.textBaseline = 'middle';
        }

        gc.fillStyle = '#000000';

        config.backgroundColor = 'rgba(0,0,0,0)';
        gc.fillText(val, x + ox, y + oy);

        //identify that we are a button
        config.buttonCells[c + ',' + r] = true;
    }
});

module.exports = Button;



},{"./CellRenderer":78}],78:[function(require,module,exports){
'use strict';

var Base = require('./../lib/Base');

/** @constructor
 * @desc Instances of `CellRenderer` are used to render the 2D graphics context within the bound of a cell. Extend this base class to implement your own cell renderer
 *
 *
 * See also {@tutorial cell-renderer}.
 */
var CellRenderer = Base.extend('CellRenderer', {
    /**
     * @desc An empty implementation of a cell renderer, see [the null object pattern](http://c2.com/cgi/wiki?NullObject).
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf CellRenderer.prototype
     */
    paint: function(gc, config) {},

    /**
     * @desc A simple implementation of rounding a cell.
     * @param {CanvasGraphicsContext} gc
     * @param {number} x - the x grid coordinate of my origin
     * @param {number} y - the y grid coordinate of my origin
     * @param {number} width - the width I'm allowed to draw within
     * @param {number} height - the height I'm allowed to draw within
     * @param {number} radius
     * @param {number} fill
     * @param {number} stroke
     * @memberOf CellRenderer.prototype
     */
    roundRect: function(gc, x, y, width, height, radius, fill, stroke) {

        if (!stroke) {
            stroke = true;
        }
        if (!radius) {
            radius = 5;
        }
        gc.beginPath();
        gc.moveTo(x + radius, y);
        gc.lineTo(x + width - radius, y);
        gc.quadraticCurveTo(x + width, y, x + width, y + radius);
        gc.lineTo(x + width, y + height - radius);
        gc.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        gc.lineTo(x + radius, y + height);
        gc.quadraticCurveTo(x, y + height, x, y + height - radius);
        gc.lineTo(x, y + radius);
        gc.quadraticCurveTo(x, y, x + radius, y);
        gc.closePath();
        if (stroke) {
            gc.stroke();
        }
        if (fill) {
            gc.fill();
        }
        gc.closePath();
    }
});

CellRenderer.abstract = true; // don't instantiate directly

module.exports = CellRenderer;

},{"./../lib/Base":118}],79:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var ErrorCell = CellRenderer.extend('ErrorCell', {

    /**
     * @summary Writes error message into cell.
     *
     * @desc This function is guaranteed to be called as follows:
     *
     * ```javascript
     * gc.save();
     * gc.beginPath();
     * gc.rect(x, y, width, height);
     * gc.clip();
     * behavior.getCellProvider().renderCellError(gc, message, x, y, width, height);
     * gc.restore();
     * ```
     *
     * Before doing anything else, this function should clear the cell by setting `gc.fillStyle` and calling `gc.fill()`.
     *
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf ErrorCell.prototype
     */
    paint: function(gc, config, message) {
        //var images = require('../../images/index');
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        // clear the cell
        // (this makes use of the rect path defined by the caller)
        gc.fillStyle = '#FFD500';
        gc.fill();
        // render cell border
        //gc.strokeStyle = gc.createPattern(images.caution, 'repeat'); // Causes Error
        gc.lineWidth = 5;
        gc.beginPath();
        gc.moveTo(x, y); // caution: do not use rect() here because Chrome does not clip its stroke properly
        gc.lineTo(x + width, y);
        gc.lineTo(x + width, y + height);
        gc.lineTo(x, y + height);
        gc.lineTo(x, y);
        gc.stroke();
        // adjust clip region to prevent text from rendering over right border should it overflow
        gc.beginPath();
        gc.rect(x, y, width - 2, height);
        gc.clip();
        // render message text
        gc.fillStyle = '#A00';
        gc.textAlign = 'start';
        gc.textBaseline = 'middle';
        gc.font = 'bold 6pt "arial narrow", verdana, geneva';
        gc.fillText(message, x + 4, y + height / 2 + 0.5);
    }
});

module.exports = ErrorCell;

},{"./CellRenderer":78}],80:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var LastSelection = CellRenderer.extend('LastSelection', {

    /**
     * @desc A rendering of the last Selection Model
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf LastSelection.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        // var focusLineStep =  [
        //     [5, 5],
        //     [0, 1, 5, 4],
        //     [0, 2, 5, 3],
        //     [0, 3, 5, 2],
        //     [0, 4, 5, 1],
        //     [0, 5, 5, 0],
        //     [1, 5, 4, 0],
        //     [2, 5, 3, 0],
        //     [3, 5, 2, 0],
        //     [4, 5, 1, 0]
        // ];
        gc.rect(x, y, width, height);
        gc.fillStyle = config.selectionRegionOverlayColor;
        gc.fill();
        gc.lineWidth = 1;
        gc.strokeStyle = config.selectionRegionOutlineColor;

        // animate the dashed line a bit here for fun

        gc.stroke();

        // gc.rect(x, y, width, height);
        //
        // gc.strokeStyle = 'white';
        //
        // //animate the dashed line a bit here for fun
        // gc.setLineDash(focusLineStep[Math.floor(10 * (Date.now() / 300 % 1)) % focusLineStep.length]);
        //
        // gc.stroke();
    }
});

module.exports = LastSelection;



},{"./CellRenderer":78}],81:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var SimpleCell = CellRenderer.extend('SimpleCell', {

    /**
     * @summary The default cell rendering function for rendering a vanilla cell.
     * @desc Great care has been taken in crafting this function as it needs to perform extremely fast. Reads on the gc object are expensive but not quite as expensive as writes to it. We do our best to avoid writes, then avoid reads. Clipping bounds are not set here as this is also an expensive operation. Instead, we truncate overflowing text and content by filling a rectangle with background color column by column instead of cell by cell.  This column by column fill happens higher up on the stack in a calling function from fin-hypergrid-renderer.  Take note we do not do cell by cell border renderering as that is expensive.  Instead we render many fewer gridlines after all cells are rendered.
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf SimpleCell.prototype
     */
    paint: function(gc, config) {
        var val = config.value,
            x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height,
            wrapHeaders = config.headerTextWrapping,
            leftPadding = 2, //TODO: fix this
            isHeader = config.y === 0;

        var leftIcon, rightIcon, centerIcon, ixoffset, iyoffset, font;

        // setting gc properties are expensive, let's not do it needlessly

        if (val && val.constructor === Array) {
            leftIcon = val[0];
            rightIcon = val[2];
            val = val[1];
            if (val && typeof val === 'object') {
                if (val.constructor.name === 'HTMLImageElement') { // must be an image
                    centerIcon = val;
                    val = null;
                }
            }
            if (leftIcon && leftIcon.nodeName !== 'IMG') {
                leftIcon = null;
            }
            if (rightIcon && rightIcon.nodeName !== 'IMG') {
                rightIcon = null;
            }
            if (centerIcon && centerIcon.nodeName !== 'IMG') {
                centerIcon = null;
            }
        }

        val = valOrFunc(val, config, config.calculator);
        val = config.formatValue(val);

        font = config.isSelected ? config.foregroundSelectionFont : config.font;

        if (gc.font !== font) {
            gc.font = font;
        }
        if (gc.textAlign !== 'left') {
            gc.textAlign = 'left';
        }
        if (gc.textBaseline !== 'middle') {
            gc.textBaseline = 'middle';
        }

        // fill background only if our bgColor is populated or we are a selected cell
        var backgroundColor, hover, hoverColor, selectColor,
            colors = [];

        if (config.isCellHovered && config.hoverCellHighlight.enabled) {
            hoverColor = config.hoverCellHighlight.backgroundColor;
        } else if (config.isRowHovered && (hover = config.hoverRowHighlight).enabled) {
            hoverColor = config.isGridColumn || !hover.header || hover.header.backgroundColor === undefined ? hover.backgroundColor : hover.header.backgroundColor;
        } else if (config.isColumnHovered && (hover = config.hoverColumnHighlight).enabled) {
            hoverColor = config.isGridRow || !hover.header || hover.header.backgroundColor === undefined ? hover.backgroundColor : hover.header.backgroundColor;
        }
        if (alpha(hoverColor) < 1) {
            if (config.isSelected) {
                selectColor = valOrFunc(config.backgroundSelectionColor, config);
            }
            if (alpha(selectColor) < 1) {
                backgroundColor = valOrFunc(config.backgroundColor, config);
                if (alpha(backgroundColor) > 0) {
                    colors.push(backgroundColor);
                }
            }
            if (selectColor !== undefined) {
                colors.push(selectColor);
            }
        }
        if (hoverColor !== undefined) {
            colors.push(hoverColor);
        }
        layerColors(gc, colors, x, y, width, height);

        // draw text
        var theColor = valOrFunc(config.isSelected ? config.foregroundSelectionColor : config.color, config);
        if (gc.fillStyle !== theColor) {
            gc.fillStyle = theColor;
            gc.strokeStyle = theColor;
        }

        if (isHeader && wrapHeaders) {
            this.renderMultiLineText(gc, config, val);
        } else {
            this.renderSingleLineText(gc, config, val);
        }

        var iconWidth = 0;
        if (leftIcon) {
            iyoffset = Math.round((height - leftIcon.height) / 2);
            gc.drawImage(leftIcon, x + leftPadding, y + iyoffset);
            iconWidth = Math.max(leftIcon.width + 2);
        }
        if (rightIcon && width > 1.75 * height) {
            iyoffset = Math.round((height - rightIcon.height) / 2);
            var rightX = x + width - rightIcon.width;
            if (backgroundColor !== undefined) {
                layerColors(gc, colors, rightX, y, rightIcon.width, height);
            } else {
                gc.clearRect(rightX, y, rightIcon.width, height);
            }
            gc.drawImage(rightIcon, rightX, y + iyoffset);
            iconWidth = Math.max(rightIcon.width + 2);
        }
        if (centerIcon) {
            iyoffset = Math.round((height - centerIcon.height) / 2);
            ixoffset = Math.round((width - centerIcon.width) / 2);
            gc.drawImage(centerIcon, x + width - ixoffset - centerIcon.width, y + iyoffset);
            iconWidth = Math.max(centerIcon.width + 2);
        }
        if (config.cellBorderThickness) {
            gc.beginPath();
            gc.rect(x, y, width, height);
            gc.lineWidth = config.cellBorderThickness;
            gc.strokeStyle = config.cellBorderStyle;

            // animate the dashed line a bit here for fun

            gc.stroke();
            gc.closePath();
        }
        config.minWidth = config.minWidth + 2 * (iconWidth);
    },

    /**
     * @summary Renders single line text.
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {*} val - The text to render in the cell.
     * @memberOf SimpleCell.prototype
     */
    renderMultiLineText: function(gc, config, val) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;
        var lines = fitText(gc, config, val, width);
        if (lines.length === 1) {
            return this.renderSingleLineText(gc, config, squeeze(val));
        }

        var colHEdgeOffset = config.cellPadding,
            halignOffset = 0,
            valignOffset = config.voffset,
            halign = config.halign,
            textHeight = config.getTextHeight(config.font).height;

        switch (halign) {
            case 'right':
                halignOffset = width - colHEdgeOffset;
                break;
            case 'center':
                halignOffset = width / 2;
                break;
            case 'left':
                halignOffset = colHEdgeOffset;
                break;
        }

        var hMin = 0, vMin = Math.ceil(textHeight / 2);

        valignOffset += Math.ceil((height - (lines.length - 1) * textHeight) / 2);

        halignOffset = Math.max(hMin, halignOffset);
        valignOffset = Math.max(vMin, valignOffset);

        gc.save(); // define a clipping region for cell
        gc.beginPath();
        gc.rect(x, y, width, height);
        gc.clip();

        gc.textAlign = halign;

        for (var i = 0; i < lines.length; i++) {
            gc.fillText(lines[i], x + halignOffset, y + valignOffset + (i * textHeight));
        }

        gc.restore(); // discard clipping region
    },

    /**
     * @summary Renders single line text.
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {*} val - The text to render in the cell.
     * @memberOf SimpleCell.prototype
     */
    renderSingleLineText: function(gc, config, val) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;
        var colHEdgeOffset = config.cellPadding,
            halignOffset = 0,
            valignOffset = config.voffset,
            halign = config.halign,
            isCellHovered = config.isCellHovered,
            isLink = config.link;

        var fontMetrics = config.getTextHeight(config.font);
        var textWidth = config.getTextWidth(gc, val);

        //we must set this in order to compute the minimum width
        //for column autosizing purposes
        config.minWidth = textWidth + (2 * colHEdgeOffset);

        switch (halign) {
            case 'right':
                //textWidth = config.getTextWidth(gc, config.value);
                halignOffset = width - colHEdgeOffset - textWidth;
                break;
            case 'center':
                //textWidth = config.getTextWidth(gc, config.value);
                halignOffset = (width - textWidth) / 2;
                break;
            case 'left':
                halignOffset = colHEdgeOffset;
                break;
        }

        halignOffset = Math.max(0, halignOffset);
        valignOffset = valignOffset + Math.ceil(height / 2);

        if (val !== null) {
            gc.fillText(val, x + halignOffset, y + valignOffset);
        }

        if (isCellHovered) {
            gc.beginPath();
            if (isLink) {
                underline(config, gc, val, x + halignOffset, y + valignOffset + Math.floor(fontMetrics.height / 2), 1);
                gc.stroke();
            }
            gc.closePath();
        }
        if (config.strikeThrough === true) {
            gc.beginPath();
            strikeThrough(config, gc, val, x + halignOffset, y + valignOffset + Math.floor(fontMetrics.height / 2), 1);
            gc.stroke();
            gc.closePath();
        }
    }
});


function fitText(gc, config, string, width) {
    return findLines(gc, config, squeeze(string).split(' '), width);
}

function findLines(gc, config, words, width) {

    if (words.length === 1) {
        return words;
    }

    // starting with just the first word…
    var stillFits, line = [words.shift()];
    while (
        // so lone as line still fits within current column…
    (stillFits = config.getTextWidth(gc, line.join(' ')) < width)
    // …AND there are more words available…
    && words.length
        ) {
        // …add another word to end of line and retest
        line.push(words.shift());
    }

    if (
        !stillFits // if line is now too long…
        && line.length > 1 // …AND is multiple words…
    ) {
        words.unshift(line.pop()); // …back off by (i.e., remove) one word
    }

    line = [line.join(' ')];

    if (words.length) { // if there's anything left…
        line = line.concat(findLines(gc, config, words, width)); // …break it up as well
    }

    return line;
}

// trim string; then reduce all runs of multiple spaces to a single space
function squeeze(string) {
    return (string + '').trim().replace(/\s\s+/g, ' ');
}

function strikeThrough(config, gc, text, x, y, thickness) {
    var fontMetrics = config.getTextHeight(config.font);
    var width = config.getTextWidth(gc, text);
    y = y - (fontMetrics.height * 0.4);

    switch (gc.textAlign) {
        case 'center':
            x -= (width / 2);
            break;
        case 'right':
            x -= width;
            break;
    }

    //gc.beginPath();
    gc.lineWidth = thickness;
    gc.moveTo(x + 0.5, y + 0.5);
    gc.lineTo(x + width + 0.5, y + 0.5);
}

function underline(config, gc, text, x, y, thickness) {
    var width = config.getTextWidth(gc, text);

    switch (gc.textAlign) {
        case 'center':
            x -= (width / 2);
            break;
        case 'right':
            x -= width;
            break;
    }

    //gc.beginPath();
    gc.lineWidth = thickness;
    gc.moveTo(x + 0.5, y + 0.5);
    gc.lineTo(x + width + 0.5, y + 0.5);
}

function layerColors(gc, colors, x, y, width, height) {
    colors.forEach(function(color) {
        gc.fillStyle = color;
        gc.fillRect(x, y, width, height);
    });
}

function valOrFunc(vf, config, calculator) {
    var result = vf;
    if (config.isGridColumn && config.isGridRow) {
        calculator = (typeof vf)[0] === 'f' && vf || calculator;
        if (calculator) {
            result = calculator(config.dataRow, config.columnName);
        }
    }
    return result || result === 0 || result === false ? result : '';
}

function alpha(cssColorSpec) {
    if (cssColorSpec === undefined) {
        // undefined so not visible; treat as transparent
        return 0;
    }

    var matches = cssColorSpec.match(alpha.regex);

    if (matches === null) {
        // an opaque color (a color spec with no alpha channel)
        return 1;
    }

    var A = matches[4];

    if (A === undefined) {
        // cssColorSpec must have been 'transparent'
        return 0;
    }

    return Number(A);
}

alpha.regex = /^(transparent|((RGB|HSL)A\(.*,\s*([\d\.]+)\)))$/i;

module.exports = SimpleCell;

},{"./CellRenderer":78}],82:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var Slider = CellRenderer.extend('Slider', {

    /**
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf Slider.prototype
     * @desc Emerson's paint function for a slider button. currently the user cannot interact with it
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;
        gc.strokeStyle = 'white';
        var val = this.config.value;
        var radius = height / 2;
        var offset = width * val;
        var bgColor = this.config.isSelected ? this.config.backgroundColor : '#333333';
        var btnGradient = gc.createLinearGradient(x, y, x, y + height);
        btnGradient.addColorStop(0, bgColor);
        btnGradient.addColorStop(1, '#666666');
        var arcGradient = gc.createLinearGradient(x, y, x, y + height);
        arcGradient.addColorStop(0, '#aaaaaa');
        arcGradient.addColorStop(1, '#777777');
        gc.fillStyle = btnGradient;
        this.roundRect(gc, x, y, width, height, radius, btnGradient);
        if (val < 1.0) {
            gc.fillStyle = arcGradient;
        } else {
            gc.fillStyle = '#eeeeee';
        }
        gc.beginPath();
        gc.arc(x + Math.max(offset - radius, radius), y + radius, radius, 0, 2 * Math.PI);
        gc.fill();
        gc.closePath();
        this.config.minWidth = 100;
    }
});

module.exports = Slider;

},{"./CellRenderer":78}],83:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var SparkBar = CellRenderer.extend('SparkBar', {

    /**
     * @desc A simple implementation of a sparkline, because it's a barchart we've changed the name ;).
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf SparkBar.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        gc.beginPath();
        var val = this.config.value;
        if (!val || !val.length) {
            return;
        }
        var count = val.length;
        var eWidth = width / count;
        var fgColor = this.config.isSelected ? this.config.foregroundSelectionColor : this.config.color;
        if (this.config.backgroundColor || this.config.isSelected) {
            gc.fillStyle = this.config.isSelected ? 'blue' : this.config.backgroundColor;
            gc.fillRect(x, y, width, height);
        }
        gc.fillStyle = fgColor;
        for (var i = 0; i < val.length; i++) {
            var barheight = val[i] / 110 * height;
            gc.fillRect(x + 5, y + height - barheight, eWidth * 0.6666, barheight);
            x = x + eWidth;
        }
        gc.closePath();
        this.config.minWidth = count * 10;
    }
});

module.exports = SparkBar;

},{"./CellRenderer":78}],84:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var SparkLine = CellRenderer.extend('SparkLine', {

    /**
     * @desc A simple implementation of a sparkline.  see [Edward Tufte sparkline](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR)
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf SparkLine.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        gc.beginPath();
        var val = this.config.value;
        if (!val || !val.length) {
            return;
        }
        var count = val.length;
        var eWidth = width / count;

        var fgColor = this.config.isSelected ? this.config.foregroundSelectionColor : this.config.color;
        if (this.config.backgroundColor || this.config.isSelected) {
            gc.fillStyle = this.config.isSelected ? this.config.backgroundSelectionColor : this.config.backgroundColor;
            gc.fillRect(x, y, width, height);
        }
        gc.strokeStyle = fgColor;
        gc.fillStyle = fgColor;
        gc.beginPath();
        var prev;
        for (var i = 0; i < val.length; i++) {
            var barheight = val[i] / 110 * height;
            if (!prev) {
                prev = barheight;
            }
            gc.lineTo(x + 5, y + height - barheight);
            gc.arc(x + 5, y + height - barheight, 1, 0, 2 * Math.PI, false);
            x = x + eWidth;
        }
        this.config.minWidth = count * 10;
        gc.stroke();
        gc.closePath();
    }
});

module.exports = SparkLine;

},{"./CellRenderer":78}],85:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var TreeCell = CellRenderer.extend('TreeCell', {

    /**
     * @desc A simple implementation of a tree cell renderer for use mainly with the qtree.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf TreeCell.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        var val = this.config.value.data;
        var indent = this.config.value.indent;
        var icon = this.config.value.icon;

        //fill background only if our bgColor is populated or we are a selected cell
        if (this.config.backgroundColor || this.config.isSelected) {
            gc.fillStyle = this.config.isSelected ? this.config.backgroundColor : this.config.backgroundColor;
            gc.fillRect(x, y, width, height);
        }

        if (!val || !val.length) {
            return;
        }
        var valignOffset = Math.ceil(height / 2);

        gc.fillStyle = this.config.isSelected ? this.config.backgroundColor : this.config.backgroundColor;
        gc.fillText(icon + val, x + indent, y + valignOffset);

        var textWidth = this.config.getTextWidth(gc, icon + val);
        var minWidth = x + indent + textWidth + 10;
        this.config.minWidth = minWidth;
    }
});

module.exports = TreeCell;

},{"./CellRenderer":78}],86:[function(require,module,exports){
/**
 * @summary API of cell renderer object constructors, plus some access methods.
 * @module cellRenderers
 */

'use strict';

/**
 * @param {boolean} [privateRegistry=false] - This instance will use a private registry.
 * @constructor
 */
function CellRenderers(privateRegistry) {
    if (privateRegistry) {
        this.singletons = {};
    }

    // preregister the standard cell renderers
    if (privateRegistry || !this.get('emptycell')) {
        this.add('EmptyCell', require('./CellRenderer'));
        this.add(require('./Button'));
        this.add(require('./SimpleCell'));
        this.add(require('./SliderCell'));
        this.add(require('./SparkBar'));
        this.add(require('./LastSelection'));
        this.add(require('./SparkLine'));
        this.add(require('./ErrorCell'));
        this.add(require('./TreeCell'));
    }
}

CellRenderers.prototype = {
    constructor: CellRenderers.prototype.constructor, // preserve constructor

    /**
     * @summary Register and instantiate a cell renderer singleton.
     * @desc Adds a custom cell renderer to the `singletons` hash using the provided name (or the class name), converted to all lower case.
     *
     * > All native cell renderers are "preregistered" in `singletons`. Add more by calling `get`.
     *
     * @param {string} [name] - Case-insensitive renderer key. If not given, `YourCellRenderer.prototype.$$CLASS_NAME` is used.
     *
     * @param {CellRenderer} Constructor - A constructor, typically extended from `CellRenderer` (or a descendant therefrom).
     *
     * > Note: `$$CLASS_NAME` can be easily set up by providing a string as the (optional) first parameter (`alias`) in your {@link https://www.npmjs.com/package/extend-me|CellEditor.extend} call.
     *
     * @returns {CellRenderers} A newly registered constructor extended from {@link CellRenderers}.
     *
     * @memberOf CellRenderers.prototype
     */
    add: function(name, Constructor) {
        if (typeof name === 'function') {
            Constructor = name;
            name = undefined;
        }

        name = name || Constructor.prototype.$$CLASS_NAME;
        name = name && name.toLowerCase();
        return (this.singletons[name] = new Constructor);
    },

    /**
     * @summary Register a synonym for an existing cell renderer singleton.
     * @param {string} synonymName
     * @param {string} existingName
     * @returns {CellRenderers} The previously registered constructor this new synonym points to.
     * @memberOf CellRenderers.prototype
     */
    addSynonym: function(synonymName, existingName) {
        var cellRenderer = this.get(existingName);
        return (this.singletons[synonymName] = cellRenderer);
    },

    /**
     * Fetch a registered cell renderer singleton.
     * @param {string} name
     * @returns {CellRenderers} A registered constructor extended from {@link CellRenderers}.
     * @memberOf CellRenderers.prototype
     */
    get: function(name) {
        return this.singletons[name && name.toLowerCase()];
    },

    /**
     * The cell editor registry containing all the "preregistered" cell renderer singletons.
     * @private
     * @memberOf CellRenderers.prototype
     */
    singletons: {}
};


module.exports = CellRenderers;

},{"./Button":77,"./CellRenderer":78,"./ErrorCell":79,"./LastSelection":80,"./SimpleCell":81,"./SliderCell":82,"./SparkBar":83,"./SparkLine":84,"./TreeCell":85}],87:[function(require,module,exports){
'use strict';

var Base = require('../lib/Base');

var A = 'A'.charCodeAt(0);

/**
 * @constructor
 */
var DataModel = Base.extend('DataModel', {

    next: null,

    grid: null,

    initialize: function(grid) {
        this.grid = grid;
    },

    changed: function() {
        this.grid.behavior.changed();
    },

    getPrivateState: function() {
        return this.grid.getPrivateState();
    },

    applyState: function() {

    },

    alphaFor: function(i) {
        // Name the column headers in A, .., AA, AB, AC, .., AZ format
        // quotient/remainder
        //var quo = Math.floor(col/27);
        var quo = Math.floor(i / 26);
        var rem = i % 26;
        var code = '';
        if (quo > 0) {
            code += this.alpha(quo - 1);
        }
        code += this.alpha(rem);
        return code;
    },

    alpha: function(i) {
        return String.fromCharCode(A + i);
    },

    /**
     * @param {object} config
     * @param {string} declaredRendererName - The proposed cell renderer name (form the render properties).
     * @returns {CellRenderer}
     * @memberOf DataModel.prototype
     */
    getCell: function(config, declaredRendererName) {
        return this.grid.cellRenderers.get(declaredRendererName);
    },

    /**
     * @summary Instantiate a new cell editor.
     * @desc The application developer may override this method to:
     * * Instantiate and return an arbitrary cell editor. The generic implementation here simply returns the declared cell editor. This is `undefined` when there was no such declaration, or if the named cell editor was not registered.
     * * Return `undefined` for no cell editor at all. The cell will not be editable.
     * * Set properties on the instance by passing them in the `options` object. These are applied to the new cell editor object after instantiation but before rendering.
     * * Manipulate the cell editor object (including its DOM elements) after rendering but before DOM insertion.
     *
     * Overriding this method with a null function (that always returns `undefined`) will have the effect of making all cells uneditable.
     *
     * @param {number} columnIndex - Absolute column index. I.e., the position of the column in the data source's original `fields` array, as echoed in `behavior.allColumns[]`.
     * @param {number} rowIndex - Row index of the data row in the currently filtered and sorted list of rows, regardless of vertical scroll position, offset by the number of header rows (all the rows above the first data row including the filter row). I.e., after subtracting out the number of header rows, this is the position of the data row in the `index` array of the data source (i.e., the last data source pipeline).
     * @param {string} declaredEditorName - The proposed cell editor name (from the render properties).
     * @param {object} options - Properties to copy to the new cell editor primarily for mustache's use. Additionally, always includes the following:
     * @param {string} options.format - The value of the `format` render prop. May be `undefined`.
     * @param {object} options.column - For convenience, the column object in `behavior.allColumns[]` to which `columnIndex` refers.
     * @param {Point} options.editPoint - The grid coordinates of the cell to edit.
     * @param {number} options.editPoint.x - The horizontal model coordinate of the cell to edit. This is the grid coordinate regardless of horizontal scroll position. I.e., the position of the column in the ordered list of selected columns (`behavior.columns[]`). (This is the coordinate required by {@link Hypergrid#editAt|editAt}.)
     * @param {number} options.editPoint.y - Same as `rowIndex`.
     *
     * @returns {undefined|CellEditor} An object instantiated from the registered cell editor constructor named in `declaredEditorName`. A falsy return means the cell is not editable because the `declaredEditorName` was not registered.
     *
     * @memberOf DataModel.prototype
     */
    getCellEditorAt: function(columnIndex, rowIndex, declaredEditorName, options) {
        return this.grid.cellEditors.create(declaredEditorName, options);
    }

});

module.exports = DataModel;

},{"../lib/Base":118}],88:[function(require,module,exports){
'use strict';

var DataModel = require('./DataModel');

/**
 * @constructor
 * @extends DataModel
 */
var Default = DataModel.extend('Default', {

    /**
     * @type {object}
     * @memberOf Default.prototype
     */
    dataUpdates: {},

    /**
     * @memberOf Default.prototype
     * @desc This is the most important behavior function.
     * @returns {object} Data point at the given coordinates.
     * @param {number} x - the horizontal coordinate
     * @param {number} x - the vertical coordinate
     */
    getValue: function(x, y) {
        var override = this.dataUpdates['p_' + x + '_' + y];
        if (override) {
            return override;
        }
        if (x === 0) {
            if (y === 0) {
                return '';
            }
            return y;
        }
        if (y === 0) {
            return this.alphaFor(x - 1);
        }
        return (x - 1) + ', ' + this.alpha((y - 1) % 26);
    },

    /**
     * @memberOf Default.prototype
     * @param {number} x
     * @param {number} y
     * @param value
     */
    setValue: function(x, y, value) {
        this.dataUpdates['p_' + x + '_' + y] = value;
    },

    /**
     * @memberOf Default.prototype
     * @returns {number}
     */
    getColumnCount: function() {
        return 27;
    },

    /**
     * @memberOf Default.prototype
     * @returns {number}
     */
    getRowCount: function() {
        //jeepers batman a quadrillion rows!
        return 53;
    }

});

module.exports = Default;

},{"./DataModel":87}],89:[function(require,module,exports){
'use strict';

var DataModel = require('./DataModel');

/**
 * @constructor
 * @extends DataModel
 */
var InMemory = DataModel.extend('InMemory', {

    dataUpdates: {},

    /**
     * @memberOf InMemory.prototype
     * @desc This is the most important behavior function.
     * @returns {object} Data point at the given coordinates.
     * @param {number} x - the x coordinate
     * @param {number} x - the y coordinate
     */
    getValue: function(x, y) {
        var override = this.dataUpdates['p_' + x + '_' + y];
        if (override) {
            return override;
        }
        if (x === 0) {
            if (y === 0) {
                return '';
            }
            return y;
        }
        if (y === 0) {
            return this.alphaFor(x - 1);
        }
        return (x - 1) + ', ' + this.alpha((y - 1) % 26);
    },

    /**
     * @memberOf InMemory.prototype
     * @param {number} x
     * @param {number} y
     * @param value
     */
    setValue: function(x, y, value) {
        this.dataUpdates['p_' + x + '_' + y] = value;
    },

    /**
     * @memberOf InMemory.prototype
     * @returns {number}
     */
    getColumnCount: function() {
        return 27;
    },

    /**
     * @memberOf InMemory.prototype{number}
     * @returns {number}
     */
    getRowCount: function() {
        //jeepers batman a quadrillion rows!
        return 53;
    }

});

module.exports = InMemory;

},{"./DataModel":87}],90:[function(require,module,exports){
'use strict';

var analytics = require('../Shared.js').analytics;
var DataModel = require('./DataModel');
var images = require('../../images');

var UPWARDS_BLACK_ARROW = '\u25b2', // aka '▲'
    DOWNWARDS_BLACK_ARROW = '\u25bc'; // aka '▼'

var nullDataSource = {
    isNullObject: function() {
        return true;
    },
    getFields: function() {
        return [];
    },
    getDataIndex: function(y) {
        return 0;
    },
    setFields: function(arr) {
    },
    getHeaders: function() {
        return [];
    },
    setHeaders: function(arr) {
    },
    getColumnCount: function() {
        return 0;
    },
    getRowCount: function() {
        return 0;
    },
    getTopTotals:function(){ //or maybe getGrandTotals
      return [];
    },
    setTopTotals:function(){},
    getBottomTotals: function(){
        return [];
    },
    setBottomTotals:function(){},
    setData: function(arr) {},
    click: function() {},
    apply: function() {},
    getRow: function() {
        return null;
    },
    getValue: function(x, y){
        return 0;
    },
    setValue: function(x, y, value){},
    get: function() {
        return null;
    },
    set: function() {},
    viewMakesSense: function() {
        return false;
    }
};

/**
 * @name dataModels.JSON
 * @constructor
 * @extends DataModel
 */
var JSON = DataModel.extend('dataModels.JSON', {

    //null object pattern for the source object
    resetSources: function() {
        this.sources = {
            source: nullDataSource,
            globalfilter: nullDataSource
        };
        this.dataSource = undefined;
    },

    topTotals: [],
    bottomTotals: [],

    initialize: function() {
        this.resetSources();
        this.selectedData = [];
    },

    clearSelectedData: function() {
        this.selectedData.length = 0;
    },

    getDataSource: function() {
        return this.deprecated('getDataSource()', 'dataSource', '1.0.7');
    },

    getGlobalFilterDataSource: function() {
        return this.sources.globalfilter;
    },

    getData: function() {
        return this.sources.source.data;
    },

    getFilteredData: function() {
        var ds = this.dataSource;
        var count = ds.getRowCount();
        var result = new Array(count);
        for (var y = 0; y < count; y++) {
            result[y] = ds.getRow(y);
        }
        return result;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} x
     * @param {number} y
     * @returns {*}
     */
    getValue: function(x, y) {
        var hasHierarchyColumn = this.hasHierarchyColumn();
        var headerRowCount = this.grid.getHeaderRowCount();
        var value;

        if (hasHierarchyColumn) {
            if (x === -2) {
                x = 0;
            }
        } else if (this.isDrillDown()) {
            x += 1;
        }
        if (y < headerRowCount) {
            value = this.getHeaderRowValue(x, y);
        } else {
            // if (hasHierarchyColumn) {
            //     y += 1;
            // }
            value = this.dataSource.getValue(x, y - headerRowCount);
        }
        return value;
    },

    getDataIndex: function(y) {
        return this.dataSource.getDataIndex(y - this.grid.getHeaderRowCount());
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} x
     * @param {number} y - negative values refer to _bottom totals_ rows
     * @returns {*}
     */
    getHeaderRowValue: function(x, y) {
        var value;
        if (y === undefined) {
            value = this.getHeaders()[Math.max(x, 0)];
        } else if (y < 0) { // bottom totals rows
            var bottomTotals = this.getBottomTotals();
            value = bottomTotals[bottomTotals.length + y][x];
        } else {
            var isFilterRow = this.grid.isShowFilterRow(),
                isHeaderRow = this.grid.isShowHeaderRow(),
                topTotalsOffset = (isFilterRow ? 1 : 0) + (isHeaderRow ? 1 : 0);
            if (y >= topTotalsOffset) { // top totals rows
                value = this.getTopTotals()[y - topTotalsOffset][x];
            } else if (isHeaderRow && y === 0) {
                value = this.getHeaders()[x];
                var sortString = this.getSortImageForColumn(x);
                if (sortString) {
                    var at = value.lastIndexOf(this.groupHeaderDelimiter) + 1;
                    value = at ? value.substr(0, at) + sortString + value.substr(at) : sortString + value;
                }
            } else { // must be filter row
                var filter = this.getGlobalFilter();
                value = filter && filter.getColumnFilterState(this.getFields()[x]) || '';
                var icon = images.filter(value.length);
                return [null, value, icon];
            }
        }
        return value;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} x
     * @param {number} y
     * @param value
     */
    setValue: function(x, y, value) {
        var hasHierarchyColumn = this.hasHierarchyColumn();
        var headerRowCount = this.grid.getHeaderRowCount();
        if (hasHierarchyColumn) {
            if (x === -2) {
                x = 0;
            }
        } else if (this.isDrillDown()) {
            x += 1;
        }
        if (y < headerRowCount) {
            this.setHeaderRowValue(x, y, value);
        } else {
            this.dataSource.setValue(x, y - headerRowCount, value);
        }
        this.changed();
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} x
     * @param {number} y
     * @param value
     * @returns {*}
     */
    setHeaderRowValue: function(x, y, value) {
        if (value === undefined) {
            return this._setHeader(x, y); // y is really the value
        }
        var isFilterRow = this.grid.isShowFilterRow();
        var isHeaderRow = this.grid.isShowHeaderRow();
        var topTotalsOffset = (isFilterRow ? 1 : 0) + (isHeaderRow ? 1 : 0);
        if (y >= topTotalsOffset) {
            this.getTopTotals()[y - topTotalsOffset][x] = value;
        } else if (x === -1) {
            return; // can't change the row numbers header
        } else if (isHeaderRow && y === 0) {
            return this._setHeader(x, value);
        } else if (isFilterRow) {
            this.setFilter(x, value, { alert: true });
        } else {
            return this._setHeader(x, value);
        }
        return '';
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} colIndex
     * @returns {*}
     */
    getColumnProperties: function(colIndex) {
        //access directly because we want it ordered
        var column = this.grid.behavior.getColumn(colIndex);
        if (column) {
            return column.getProperties();
        }
        return undefined;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {number}
     */
    getColumnCount: function() {
        var showTree = this.grid.resolveProperty('showTreeColumn') === true;
        var offset = (this.isDrillDown() && !showTree) ? -1 : 0;
        return this.dataSource.getColumnCount() + offset;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {number}
     */
    getRowCount: function() {
        var count = this.dataSource.getRowCount();
        count += this.grid.getHeaderRowCount();
        return count;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {string[]}
     */
    getHeaders: function() {
        return this.dataSource && this.dataSource.getHeaders() || [];
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {string[]} headers
     */
    setHeaders: function(headers) {
        this.dataSource.setHeaders(headers);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {string[]} fields
     */
    setFields: function(fields) {
        this.dataSource.setFields(fields);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {string[]}
     */
    getFields: function() {
        return this.dataSource.getFields();
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {string[]}
     */
    getCalculators: function() {
        return this.dataSource.getCalculators();
    },

    /** @typedef {object} dataSourcePipelineObject
     * @property {function} DataSource - A `hyper-analytics`-style  "data source" constructor.
     * @property {*} [options] - When defined, passed as 2nd argument to constructor.
     * @property {string} [parent] - Defines a branch off the main sequence.
     */

    /**
     * @type {dataSourcePipelineObject[]}
     * @memberOf dataModels.JSON.prototype
     */
    pipeline: [
        { type: 'JSDataSource' },
        { type: 'DataSourceGlobalFilter' },
        { type: 'DataSourceSorterComposite' },
    ],

    /**
     * @summary Instantiates the data source pipeline.
     * @desc Each new pipe is created using the supplied constructor and a reference to the previous data source in the pipeline. A reference to each new pipe is added to `this` dataModel as a property using the pipe's `name`.
     *
     * The first pipe must have a `@@CLASS_NAME` of `'DataSource'`. Hence, the start of the pipeline is `this.source`. The last pipe is assigned the synonym `this.dataSource`.
     *
     * Branches are created when a pipe specifies a name in `parent`.
     * @param {object[]} [dataSource] - Array of uniform objects containing the grid data. Passed as 1st param to constructor of first data source object in the pipeline. If omitted, the previous data source will be re-used.
     * @param {string[]} [dataFields] - Array of field names. Passed as 2nd param to constructor of first data source object in the pipeline. If omitted (along with `dataSource`), the previous fields array will be re-used.
     * @param {string[]} [dataCalculators] - Array of field names. Passed as 3rd param to constructor of first data source object in the pipeline. If omitted (along with `dataSource`), the previous calculators array will be re-used.
     * @memberOf dataModels.JSON.prototype
     */
    setData: function(dataSource, dataFields, dataCalculators) {
        this.resetSources();

        if (!dataSource) {
            var source = this.source;
            if (!source) {
                throw 'Expected dataSource.';
            }
            dataSource = source.data;
            dataFields = source.fields;
            dataCalculators = source.calculators;
        }

        this.pipeline.forEach(function(sources, pipe, index) {
            var DataSource = analytics[pipe.type];

            pipe.name = pipe.name || getDataSourceName(pipe.type);

            if (index === 0 && pipe.name !== 'source') {
                throw 'Expected pipeline to begin with source.';
            }

            if (pipe.parent) {
                this.dataSource = this.dataSource || dataSource; // tip of main trunk on first diversion
                dataSource = sources[getDataSourceName(pipe.parent)];
                if (!dataSource) {
                    throw 'Parent data source not in pipeline.';
                }
            }

            dataSource = new DataSource(dataSource, dataFields, dataCalculators);
            dataFields = dataCalculators = undefined; // for first data source only

            sources[pipe.name] = dataSource;
        }.bind(this, this.sources));

        this.source = this.sources.source;
        this.dataSource = this.dataSource || dataSource; // tip of main trunk if never branched

        this.applyAnalytics();
    },

    /**
     * @param {number} [newLength=0]
     */
    truncatePipeline: function(newLength) {
        this.pipeline.length = newLength || 0;
    },

    /**
     * Add a pipe to the data source pipeline.
     * @desc No-op if already added.
     * @param {dataSourcePipelineObject} newPipe
     * @param {string|null|undefined} [afterPipe] - One of:
     * * `null` - Inserts at beginning.
     * * *string* - Name of an existing pipe _after which_ the new pipe will be added.
     * * *else* _(including `undefined` or omitted)_ - Adds to end.
     * @memberOf dataModels.JSON.prototype
     */
    addPipe: function(newPipe, referencePipe) {
        var referenceIndex,
            added = this.pipeline.find(function(pipe) { return pipe.type === newPipe.type; });

        if (!added) {
            if (referencePipe === null) {
                referenceIndex = 0; // add to beginning
            } else if (
                !this.pipeline.find(function(pipe, index) {
                    referenceIndex = index + 1; // add after found pipe
                    return pipe.type === referencePipe;
                })
            ) {
                referenceIndex = this.pipeline.length; // not found: add to end
            }
            this.pipeline.splice(referenceIndex, 0, newPipe);
        }
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {Array<Array>} totalRows
     */
    setTopTotals: function(totalRows) {
        this.topTotals = totalRows;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {Array<Array>}
     */
    getTopTotals: function() {
        return this.dataSource.getGrandTotals() || this.topTotals;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {Array<Array>} totalRows
     */
    setBottomTotals: function(totalRows) {
        this.bottomTotals = totalRows;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {Array<Array>}
     */
    getBottomTotals: function() {
        return this.dataSource.getGrandTotals() || this.bottomTotals;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {object[]}
     */
    getActiveColumns: function() {
        return this.grid.behavior.columns.filter(function(column) {
            return column.name !== 'tree';
        });
    },
    getVisibleColumns: function() {
        return this.deprecated('getVisibleColumns()', 'getActiveColumns()', '1.0.6', arguments);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {object[]}
     */
    getHiddenColumns: function() {
        var visible = this.grid.behavior.columns;
        var all = this.grid.behavior.allColumns;
        var hidden = [];
        for (var i = 0; i < all.length; i++) {
            if (visible.indexOf(all[i]) === -1) {
                hidden.push(all[i]);
            }
        }
        hidden.sort(function(a, b) {
            return a.header < b.header;
        });
        return hidden;
    },
    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {boolean}
     */
    hasHierarchyColumn: function() {
        var showTree = this.grid.resolveProperty('showTreeColumn') === true;
        return this.isDrillDown() && showTree;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     */
    applyAnalytics: function(options) {
        selectedDataRowsBackingSelectedGridRows.call(this);

        this.pipeline.forEach(function(sources, pipe) {
            var dataSource = sources[pipe.name];

            if (dataSource) {
                if (dataSource.sorts) {
                    dataSource.set(this.getSortedColumnIndexes().slice());
                }

                if (dataSource.apply) {
                    dataSource.apply(options);
                }
            }
        }.bind(this, this.sources));

        reselectGridRowsBackedBySelectedDataRows.call(this);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} colIndex
     * @param keys
     */
    toggleSort: function(colIndex, keys) {
        this.incrementSortState(colIndex, keys);
        this.applyAnalytics({columnSort: true});
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} colIndex
     * @param {boolean} deferred
     */
    unSortColumn: function(columnIndex, deferred) {
        var sorts = this.getSortedColumnIndexes(),
            sortPosition, found;

        if (sorts.find(function(sortSpec, index) {
            sortPosition = index;
            return sortSpec.columnIndex === columnIndex;
        })) {
            if (sorts.length === 1) {
                for (var dataSource = this.dataSource; dataSource; dataSource = dataSource.dataSource) {
                    if (dataSource.defaultSortColumn) {
                        found = true;
                        break;
                    }
                }
            }

            if (found) {
                // Make the sole remaining sorted column the tree column of the "joined" data source
                sorts[0] = {
                    columnIndex: dataSource.defaultSortColumn.index,
                    direction: 1
                };
            } else {
                sorts.splice(sortPosition, 1);
            }

            if (!deferred) {
                this.applyAnalytics({columnSort: true});
            }
        }
    },

    /**
     * @memberOf dataModels.JSON.prototype
     */
    getSortedColumnIndexes: function() {
        var state = this.getPrivateState();
        state.sorts = state.sorts || [];
        return state.sorts;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} colIndex
     * @param {string[]} keys
     */
    incrementSortState: function(columnIndex, keys) {
        var sorts = this.getSortedColumnIndexes(),
            sortSpec = sorts.find(function(spec, index) {
                return spec.columnIndex === columnIndex;
            });

        if (!sortSpec) { // was unsorted
            if (keys.indexOf('CTRL') < 0) { sorts.length = 0; }
            sorts.unshift({
                columnIndex: columnIndex, // so define and...
                direction: 1 // ...make ascending
            });
        } else if (sortSpec.direction > 0) { // was ascending
            sortSpec.direction = -1; // so make descending
        } else { // was descending
            this.unSortColumn(columnIndex, true); // so make unsorted
        }

        //Minor improvement, but this check can happe n earlier and terminate earlier
        if (sorts.length > 3) {
            sorts.length = 3;
        }
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param index
     * @param returnAsString
     * @returns {*}
     */
    getSortImageForColumn: function(columnIndex) {
        var sortPosition,
            sorts = this.getSortedColumnIndexes(),
            sortSpec = sorts.find(function(spec, index) {
                sortPosition = index;
                return spec.columnIndex === columnIndex;
            }),
            result = null;

        if (sortSpec) {
            var rank = sorts.length - sortPosition,
                arrow = sortSpec.direction > 0 ? UPWARDS_BLACK_ARROW : DOWNWARDS_BLACK_ARROW;
            result = rank + arrow + ' ';
        }

        return result;
    },

    isDrillDown: function(event) {
        return this.pipeline.find(function(pipe) {
            var test = pipe.test,
                type = typeof test;

            test = type === 'function' && pipe.test ||
                type === 'string' && this[pipe.test];

            return test && test.call(this, event);
        }.bind(this));
    },

    /**
     * @param cell
     * @param event
     * @return {boolean} Clicked in a drill-down column.
     * @memberOf dataModels.JSON.prototype
     */
    cellClicked: function(cell, event) {
        var clickedInDrillDownColumn = this.isDrillDown(event);
        if (clickedInDrillDownColumn) {
            var y = event.gridCell.y - this.grid.getHeaderRowCount();
            this.toggleRow(y);
        }
        return clickedInDrillDownColumn;
    },

    /**
     * @summary Toggle the drill-down control of a the specified row.
     * @desc Operates only on the following rows:
     * * Expandable rows - Rows with a drill-down control.
     * * Revealed rows - Rows not hidden inside of collapsed drill-downs.
     * @param y - Revealed row number. (This is not the row ID.)
     * @param {boolean} [expand] - One of:
     * * `true` - Expand row.
     * * `false` - Collapse row.
     * * `undefined` (or omitted) - Toggle state of row.
     * @returns {boolean|undefined} If any rows expanded or collapsed; `undefined` means row had no drill-down control.
     * @memberOf dataModels.JSON.prototype
     */
    toggleRow: function(y, expand) {
        //TODO: fire a row toggle event
        var changed;
        if (this.isDrillDown()) {
            changed = this.dataSource.click(y, expand);
            if (changed) {
                this.applyAnalytics({rowClick: true});
                this.changed();
            }
        }
        return changed;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} y
     * @returns {object}
     */
    getRow: function(y) {
        var headerRowCount = this.grid.getHeaderRowCount();
        var topTotals = this.getTopTotals();
        var hasToptotals = !!topTotals.length;
        if (y < headerRowCount && !hasToptotals) {

            return topTotals[y - (headerRowCount - topTotals.length)];
        }
        return this.dataSource.getRow(y - headerRowCount);
    },

    buildRow: function(y) {
        return this.deprecated('buildRow', 'dataSource', '1.0.8');
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} y
     * @returns {object}
     */
    getComputedRow: function(y) {
        var rcf = this.getRowContextFunction([y]);
        var fields = this.getFields();
        var row = {};
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            row[field] = rcf(field)[0];
        }
        return row;
    },

    getValueByField: function(fieldName, y) {
        return this.deprecated('getValueByField', 'dataSource', '1.0.8');
    },

    /**
     * @summary Get a reference to the filter attached to the Hypergrid.
     * @returns {FilterTree}
     * @memberOf dataModels.JSON.prototype
     */
    getGlobalFilter: function() {
        return this.getGlobalFilterDataSource().get();
    },

    /**
     * @summary Attach/detach a filter to a Hypergrid.
     * @param {FilterTree} [filter] - The filter object. If undefined, any attached filter is removed, turning filtering OFF.
     * @memberOf dataModels.JSON.prototype
     */
    setGlobalFilter: function(filter) {
        this.getGlobalFilterDataSource().set(filter);
        this.applyAnalytics();
    },

    /**
     * @summary Set the case sensitivity of filter tests against data.
     * @desc Case sensitivity pertains to string compares only. This includes untyped columns, columns typed as strings, typed columns containing data that cannot be coerced to type or when the filter expression operand cannot be coerced.
     *
     * NOTE: This is a shared property and affects all grid managed by this instance of the app.
     * @param {boolean} isSensitive
     * @memberOf dataModels.JSON.prototype
     */
    setGlobalFilterCaseSensitivity: function(isSensitive) {
        this.getGlobalFilter().setCaseSensitivity(isSensitive);
        this.applyAnalytics();
    },

    /**
     * @summary Get a particular column filter's state.
     * @param {string} columnName
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @param {boolean} [options.syntax='CQL'] - The syntax to use to describe the filter state. Note that `getFilter`'s default syntax, `'CQL'`, differs from the other get state methods.
     * @returns {FilterTreeStateObject}
     * @memberOf dataModels.JSON.prototype
     */
    getFilter: function(columnIndexOrName, options) {
        var isIndex = !isNaN(Number(columnIndexOrName)),
            columnName = isIndex ? this.getFields()[columnIndexOrName] : columnIndexOrName;

        return this.getGlobalFilter().getColumnFilterState(columnName, options);
    },

    /**
     * @summary Set a particular column filter's state.
     * @desc After setting the new filter state, reapplies the filter to the data source.
     * @param {number|string} columnIndexOrName - The _column filter_ to set.
     * @param {string|object} [state] - A filter tree object or a JSON, SQL, or CQL subexpression string that describes the a new state for the named column filter. The existing column filter subexpression is replaced with a new node based on this state. If it does not exist, the new subexpression is added to the column filters subtree (`filter.columnFilters`).
     *
     * If undefined, removes the entire column filter subexpression from the column filters subtree.
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @param {string} [options.syntax='CQL'] - The syntax to use to describe the filter state. Note that `setFilter`'s default syntax, `'CQL'`, differs from the other get state methods.
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf dataModels.JSON.prototype
     */
    setFilter: function(columnIndexOrName, state, options) {
        var isIndex = !isNaN(Number(columnIndexOrName)),
            columnName = isIndex ? this.getFields()[columnIndexOrName] : columnIndexOrName;

        this.getGlobalFilter().setColumnFilterState(columnName, state, options);
        this.grid.fireSyntheticFilterAppliedEvent();
        this.applyAnalytics();
    },

    /**
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @returns {FilterTreeStateObject}
     * @memberOf dataModels.JSON.prototype
     */
    getFilters: function(options) {
        return this.getGlobalFilter().getColumnFiltersState(options);
    },

    /**
     * @param {FilterTreeStateObject} state
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf dataModels.JSON.prototype
     */
    setFilters: function(state, options) {
        this.getGlobalFilter().setColumnFiltersState(state, options);
        this.grid.fireSyntheticFilterAppliedEvent();
        this.applyAnalytics();
    },

    /**
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @returns {FilterTreeStateObject}
     * @memberOf dataModels.JSON.prototype
     */
    getTableFilter: function(options) {
        return this.getGlobalFilter().getTableFilterState(options);
    },

    /**
     * @summary Set a the table filter state.
     * @param {FilterTreeStateObject} state
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf dataModels.JSON.prototype
     */
    setTableFilter: function(state, options) {
        this.getGlobalFilter().setTableFilterState(state, options);
        this.grid.fireSyntheticFilterAppliedEvent();
        this.applyAnalytics();
    },

    /**
     * @memberOf dataModels.JSON.prototype
     */
    applyState: function() {
        this.applyAnalytics();
    },

    /**
     * @memberOf dataModels.JSON.prototype
     */
    reset: function() {
        this.setData([]);
    },

    getUnfilteredValue: function(x, y) {
        return this.sources.source.getValue(x, y);
    },

    getUnfilteredRowCount: function() {
        return this.sources.source.getRowCount();
    }
});

// LOCAL METHODS -- to be called with `.call(this`

/**
 * Accumulate actual data row objects backing current grid row selections.
 * This call should be paired with a subsequent call to `reselectGridRowsBackedBySelectedDataRows`.
 * @private
 * @memberOf dataModels.JSON.prototype
 */
function selectedDataRowsBackingSelectedGridRows() {
    var selectedData = this.selectedData,
        hasRowSelections = this.grid.selectionModel.hasRowSelections(),
        needFilteredDataList = selectedData.length || hasRowSelections;

    if (needFilteredDataList) {
        var filteredData = this.getFilteredData();
    }

    // STEP 1: Remove any filtered data rows from the recently selected list.
    selectedData.forEach(function(dataRow, index) {
        if (filteredData.indexOf(dataRow) >= 0) {
            delete selectedData[index];
        }
    });

    // STEP 2: Accumulate the data rows backing any currently selected grid rows in `this.selectedData`.
    if (hasRowSelections) { // any current grid row selections?
        this.grid.getSelectedRows().forEach(function(selectedRowIndex) {
            var dataRow = filteredData[selectedRowIndex];
            if (selectedData.indexOf(dataRow) < 0) {
                selectedData.push(dataRow);
            }
        });
    }
}

/**
 * Re-establish grid row selections based on actual data row objects accumulated by `selectedDataRowsBackingSelectedGridRows` which should be called first.
 * @private
 * @memberOf dataModels.JSON.prototype
 */
function reselectGridRowsBackedBySelectedDataRows() {
    if (this.selectedData.length) { // any data row objects added from previous grid row selections?
        var selectionModel = this.grid.selectionModel,
            offset = this.grid.getHeaderRowCount(),
            filteredData = this.getFilteredData();

        selectionModel.clearRowSelection();

        this.selectedData.forEach(function(dataRow) {
            var index = filteredData.indexOf(dataRow);
            if (index >= 0) {
                selectionModel.selectRow(offset + index);
            }
        });
    }
}

function getDataSourceName(name) {
    name = analytics[name].prototype.$$CLASS_NAME || name;
    return name.replace(/^Data(Source|Node)/, '').toLowerCase() || 'source';
}


module.exports = JSON;

},{"../../images":4,"../Shared.js":60,"./DataModel":87}],91:[function(require,module,exports){
'use strict';

module.exports = {
    DataModel: require('./DataModel'), // abstract base class
    Default: require('./Default'),
    InMemory: require('./InMemory'),
    JSON: require('./JSON')
};
},{"./DataModel":87,"./Default":88,"./InMemory":89,"./JSON":90}],92:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var LRUCache = require('lru-cache');


/**
 * This module lists the properties that can be set on a {@link Hypergrid} along with their default values.
 * Edit this file to override the defaults.
 * @module defaults
 */

module.exports = {

    /**
     * The font for data cells.
     * @default
     * @type {cssFont}
     * @instance
     */
    noDataMessage: 'no data to display',


    /**
     * The font for data cells.
     * @default
     * @type {cssFont}
     * @instance
     */
    font: '13px Tahoma, Geneva, sans-serif',

    /**
     * Font color for data cells.
     * @default
     * @type {string}
     * @instance
     */
    color: 'rgb(25, 25, 25)',

    /**
     * Background color for data cells.
     * @default
     * @type {string}
     * @instance
     */
    backgroundColor: 'rgb(241, 241, 241)',

    /**
     * Font style for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    foregroundSelectionFont: 'bold 13px Tahoma, Geneva, sans-serif',

    /**
     * Font color for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    foregroundSelectionColor: 'rgb(0, 0, 128)',
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    sortOnHiddenColumns: true,
    /**
     * Background color for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    backgroundSelectionColor: 'rgba(147, 185, 255, 0.625)',


    /********** SECTION: COLUMN HEADER COLORS **********/

    // IMPORTANT CAVEAT: The code is inconsistent regarding the terminology. Is the "column header" section _the row_ of cells at the top (that act as headers for each column) or is it _the column_ of cells (that act as headers for each row)? Oh my.

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    columnHeaderFont: '12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderColor: 'rgb(25, 25, 25)',

    /**
     * Font style for selected columns' headers.
     * @default
     * @type {string}
     * @instance
     */
    columnHeaderForegroundSelectionFont: 'bold 12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundColor: 'rgb(223, 227, 232)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderForegroundSelectionColor: 'rgb(80, 80, 80)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundSelectionColor: 'rgba(255, 220, 97, 0.45)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderForegroundColumnSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundColumnSelectionColor: 'rgb(255, 180, 0)',


    /********** SECTION: ROW HEADER COLORS **********/

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    rowHeaderFont: '12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundColor: 'rgb(223, 227, 232)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderForegroundSelectionColor: 'rgb(80, 80, 80)',

    /**
     * Font style for selected rows' headers.
     * @default
     * @type {string}
     * @instance
     */
    rowHeaderForegroundSelectionFont: 'bold 12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundSelectionColor: 'rgba(255, 220, 97, 0.45)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderForegroundRowSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundRowSelectionColor: 'rgb(255, 180, 0)',


    /********** SECTION: FILTER ROW COLORS **********/

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    filterFont: '12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterBackgroundColor: 'white',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterForegroundSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterBackgroundSelectionColor: 'rgb(255, 220, 97)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterCellBorderStyle: 'rgba(0,0,0,0.8)',

    /**
     * @default
     * @type {number}
     * @instance
     */
    filterCellBorderThickness: 0.4,
    /********** SECTION: TREE COLUMN COLORS **********/
    // The "tree column" contains the hierarchical drill-down controls.

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    treeColumnFont: '12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundColor: 'rgb(223, 227, 232)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnForegroundSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundSelectionColor: 'rgba(255, 220, 97, 0.45)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnForegroundColumnSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundColumnSelectionColor: 'rgb(255, 180, 0)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    backgroundColor2: 'rgb(201, 201, 201)',

    /**
     * @default
     * @type {number}
     * @instance
     */
    voffset: 0,

    /**
     * @default
     * @type {string}
     * @instance
     */
    scrollbarHoverOver: 'visible',

    /**
     * @default
     * @type {string}
     * @instance
     */
    scrollbarHoverOff: 'hidden',

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    scrollingEnabled: true,

    /**
     * @default
     * @type {string}
     * @instance
     */
    vScrollbarClassPrefix: '',

    /**
     * @default
     * @type {string}
     * @instance
     */
    hScrollbarClassPrefix: '',

    //these used to be in the constants element

    /**
     * @default
     * @type {string}
     * @instance
     */
    fixedRowAlign: 'center',

    /**
     * @default
     * @type {string}
     * @instance
     */
    fixedColAlign: 'center',

    /**
     * @default
     * @type {number}
     * @instance
     */
    cellPadding: 5,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesH: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesV: true,
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesVOverflow: false,

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    lineColor: 'rgb(199, 199, 199)',

    /**
     * @default
     * @type {number}
     * @instance
     */
    lineWidth: 0.4,


    /**
     * @default
     * @type {number}
     * @instance
     */
    defaultRowHeight: 15,

    /**
     * @default
     * @type {number}
     * @instance
     */
    defaultColumnWidth: 100,

    //for immediate painting, set these values to 0, true respectively

    /**
     * @default
     * @type {number}
     * @instance
     */
    repaintIntervalRate: 60,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    repaintImmediately: false,

    //enable or disable double buffering

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    useBitBlit: false,


    /**
     * @default
     * @type {boolean}
     * @instance
     */
    useHiDPI: true,

    /**
     * @default ['alt', 'esc']
     * @type {string}
     * @instance
     */
    editorActivationKeys: ['alt', 'esc'],

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    readOnly: false,

    // inherited by cell renderers

    /**
     * @default `getTextWidth`
     * @type {function}
     * @instance
     */
    getTextWidth: getTextWidth,

    /**
     * @default `getTextHeight`
     * @type {function}
     * @instance
     */
    getTextHeight: getTextHeight,


    /**
     * @default
     * @type {number}
     * @instance
     */
    fixedColumnCount: 0,

    /**
     * @default
     * @type {number}
     * @instance
     */
    fixedRowCount: 0,

    /**
     * @default
     * @type {number}
     * @instance
     */
    headerColumnCount: 0,


    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showRowNumbers: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showTreeColumn: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showHeaderRow: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showFilterRow: true,


    /** Clicking in a cell "selects" it; it is added to the select region and repainted with "cell selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    cellSelection: true,

    /** Clicking in a row header (leftmost column) "selects" the row; the entire row is added to the select region and repainted with "row selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    columnSelection: true,

    /** Clicking in a column header (top row) "selects" the column; the entire column is added to the select region and repainted with "column selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    rowSelection: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    singleRowSelectionMode: true,

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    selectionRegionOverlayColor: 'rgba(0, 0, 48, 0.2)',

    /**
     * @default
     * @type {string}
     * @instance
     */
    selectionRegionOutlineColor: 'black',

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    columnAutosizing: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    rowNumberAutosizing: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    headerTextWrapping: false,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    rowResize: false,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    editable: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    editOnDoubleClick: true,

    /**
     * @default
     * @type {number}
     * @instance
     */
    doubleClickDelay: 325,

    /**
     * Grid-level property.
     * When user presses a printable character key _or_ BACKSPACE _or_ DELETE:
     * 1. Activate cell editor on current cell (i.e., origin of most recent selection).
     * 2. If cell editor is a text editor:
     *    1. Replace current value with the character the user typed; or
     *    2. Clear it on BACKSPACE, DELETE, or other invalid character (_e.g._ when user types a letter but the cell editor only accepts digits).
     *
     * > In invoked, user has the option to back out by pressing the ESCAPE key.
     *
     * @default
     * @type {boolean}
     * @instance
     */
    editOnKeydown: true,

    /**
     * @default
     * @type {boolean}
     */
    checkboxOnlyRowSelections: false,

    /** @summary Name of a formatter for cell text.
     * The default (`undefined`) falls back to `column.type`.
     * The value `null` does no formatting.
     * @default undefined
     * @type {undefined|null|string}
     * @tutorial localization
     */
    format: undefined,

    /** @summary Name of a cell editor from the {@link module:cellEditors|cellEditors API}..
     * @desc Not editable if named editor is does not exist.
     * @default undefined
     * @type {undefined|null|string}
     * @tutorial cell-editors
     */
    editor: undefined,

    /**
     * Name of cell renderer from the {@link module:cellRenderers|cellRenderers API}.
     * @default
     * @type {string}
     */
    renderer: 'SimpleCell',

    /********** HOVER COLORS **********/

    /** @typedef hoverColors
     * @property {boolean} [enable=false] - `false` means not hilite on hover
     * @property {cssColor} backgroundColor - cell, row, or column background color. Alpha channel will be respected and if given will be painted over the cells predetermined color.
     * @property {cssColor} [header.backgroundColor=backgroundColor] - for columns and rows, this is the background color of the column or row "handle" (header rows or columns, respectively). (Not used for cells.)
     */

    /** On mouse hover, whether to repaint the cell background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(160, 160, 40, 0.30) }'
     */
    hoverCellHighlight: {
        enabled: true,
        backgroundColor: 'rgba(160, 160, 40, 0.45)'
    },

    /** On mouse hover, whether to repaint the row background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(100, 100, 25, 0.15) }'
     */
    hoverRowHighlight: {
        enabled: true,
        backgroundColor: 'rgba(100, 100, 25, 0.30)'

    },

    /** On mouse hover, whether to repaint the column background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(60, 60, 15, 0.15) }'
     */
    hoverColumnHighlight: {
        enabled: true,
        backgroundColor: 'rgba(60, 60, 15, 0.15)'
    },


    /** Display cell font with under-score line drawn over it.
     * > Implementation of links right now is not automatic; you must attach a 'fin-click' listener to the hypergrid object, etc.
     * @type {boolean}
     * @default
     */
    link: false,

    /** Display cell font with strike-through line drawn over it.
     * @type {boolean}
     * @default
     */
    strikeThrough: false,

    /** Ignore sort interaction (double-click).
     * @type {boolean}
     * @default
     */
    unsortable: false,

};

/** @typedef {string} cssColor
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
/** @typedef {string} cssFont
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
 */

var textWidthCache = new LRUCache(2000);

function getTextWidth(gc, string) {
    if (string === null || string === undefined) {
        return 0;
    }
    string = string + '';
    if (string.length === 0) {
        return 0;
    }
    var key = gc.font + string;
    var width = textWidthCache.get(key);
    if (!width) {
        width = gc.measureText(string).width;
        textWidthCache.set(key, width);
    }
    return width;
}

var fontData = {};

function getTextHeight(font) {
    var result = fontData[font];

    if (!result) {
        result = {};

        var text = document.createElement('span');
        text.textContent = 'Hg';
        text.style.font = font;

        var block = document.createElement('div');
        block.style.display = 'inline-block';
        block.style.width = '1px';
        block.style.height = '0px';

        var div = document.createElement('div');
        div.appendChild(text);
        div.appendChild(block);

        div.style.position = 'absolute';
        document.body.appendChild(div);

        try {

            block.style.verticalAlign = 'baseline';

            var blockRect = block.getBoundingClientRect();
            var textRect = text.getBoundingClientRect();

            result.ascent = blockRect.top - textRect.top;

            block.style.verticalAlign = 'bottom';
            result.height = blockRect.top - textRect.top;

            result.descent = result.height - result.ascent;

        } finally {
            document.body.removeChild(div);
        }
        if (result.height !== 0) {
            fontData[font] = result;
        }
    }

    return result;
}

},{"lru-cache":49}],93:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var ListDragon = require('list-dragon');

var Dialog = require('./Dialog');
var stylesheet = require('../lib/stylesheet');

/**
 * @constructor
 * @extends Dialog
 */
var ColumnPicker = Dialog.extend('ColumnPicker', {
    /**
     * @param {Hypergrid} grid
     * @param {object} [options] - May include `Dialog` options.
     */
    initialize: function(grid, options) {
        var behavior = grid.behavior;

        this.grid = grid;

        if (behavior.isColumnReorderable()) {
            // grab the lists from the behavior
            if (behavior.setGroups){
                this.selectedGroups = {
                    title: 'Groups',
                    models: behavior.getGroups()
                };

                this.availableGroups = {
                    title: 'Available Groups',
                    models: behavior.getAvailableGroups()
                };
            }

            this.inactiveColumns = {
                title: 'Inactive Columns',
                models: behavior.getHiddenColumns().sort(compareByName)
            };

            this.activeColumns = {
                title: 'Active Columns',
                models: behavior.getActiveColumns()
            };

            this.sortOnHiddenColumns = this.wasSortOnHiddenColumns = grid.resolveProperty('sortOnHiddenColumns');

            // parse & add the drag-and-drop stylesheet addendum
            var stylesheetAddendum = stylesheet.inject('list-dragon-addendum');

            // create drag-and-drop sets from the lists
            var listSets = [
                new ListDragon([
                    this.selectedGroups,
                    this.availableGroups
                ], {
                    // add the list-dragon-base stylesheet right before the addendum
                    cssStylesheetReferenceElement: stylesheetAddendum
                }),
                new ListDragon([
                    this.inactiveColumns,
                    this.activeColumns
                ], {
                    // these models have a header property as their labels
                    label: '{header}'
                })
            ];

            // add the drag-and-drop sets to the dialog
            var self = this;
            listSets.forEach(function(listSet) {
                listSet.modelLists.forEach(function(list) {
                    self.append(list.container);
                });
            });
            //Listen to the visible column changes
            listSets[1].modelLists[1].element.addEventListener('listchanged', function(e){
                grid.fireSyntheticOnColumnsChangedEvent();
            });

            this.sortOnHiddenColumns = this.grid.resolveProperty('sortOnHiddenColumns');
        } else {
            var div = document.createElement('div');
            div.style.textAlign = 'center';
            div.style.marginTop = '2em';
            div.innerHTML = 'The selection of visible columns in the grid may not be changed.';
            this.append(div);
        }

        // Add checkbox to control panel for sorting on hidden fields
        var label = document.createElement('label');
        label.innerHTML = '<input type="checkbox"> Allow sorting on hidden columns';
        label.style.fontWeight = 'normal';
        label.style.marginRight = '2em';

        var checkbox = label.querySelector('input');
        checkbox.checked = this.sortOnHiddenColumns;
        checkbox.addEventListener('click', function(e){
            self.sortOnHiddenColumns = checkbox.checked;
            e.stopPropagation();
        });

        var panel = this.el.querySelector('.hypergrid-dialog-control-panel');
        panel.insertBefore(label, panel.firstChild);

        // add the dialog to the DOM
        this.open(options.container);
    },

    onClosed: function() {
        var behavior = this.grid.behavior,
            columns = behavior.columns;

        if (this.activeColumns) {
            var tree = columns[0];

            // TODO: breaking encapsulation; should be using setters and getters on the behavior
            columns.length = 0;
            if (tree && tree.label === 'Tree') {
                columns.push(tree);
            }
            this.activeColumns.models.forEach(function(column) {
                columns.push(column);
            });

            if (this.sortOnHiddenColumns !== this.wasSortOnHiddenColumns) {
                this.grid.addProperties({ sortOnHiddenColumns: this.sortOnHiddenColumns });
                behavior.sortChanged(this.inactiveColumns.models);
            }

            behavior.changed();
        }

        if (this.selectedGroups){
            var groupBys = this.selectedGroups.models.map(function(e) {
                return e.id;
            });
            behavior.dataModel.setGroups(groupBys);
        }
    }
});

function compareByName(a, b) {
    a = a.header.toString().toUpperCase();
    b = b.header.toString().toUpperCase();
    return a < b ? -1 : a > b ? +1 : 0;
}


module.exports = ColumnPicker;

},{"../lib/stylesheet":129,"./Dialog":94,"list-dragon":48}],94:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var automat = require('automat');

var Base = require('../lib/Base');
var markup = require('../../html');
var images = require('../../images');
var elfor = require('../lib/elfor');

/**
 * Creates and services a DOM element used as a cntainer for a dialog. The standard `markup.dialog` is simply a div with a _control panel_ containing a close box and a settings gear icon.
 *
 * You can supply an alternative dialog template. The interface is:
 * * Class name `hypergrid-dialog`.
 * * At least one child element. Content will be inserted before this first child.
 * * Typically contains a close-box element with class name `hypergrid-dialog-close` and possibly other controls with class name `hypergrid-dialog-xxxx` (where _xxxx_ is a unique name for your control).
 *
 * @constructor
 */
var Dialog = Base.extend('Dialog', {

    /**
     * Creates a basic dialog box in `this.el`.
     * @param {Hypergrid} grid
     * @param {object} [options]
     * @param {string|function} [options.dialogTemplate] - An alternate dialog template. The last child element must be the "control panel."
     * @param {boolean} [options.settings=true] - Control box has settings icon. (Settings icon must be included in template. This option removes it. That is, if explicitly `false` _and_ there is a settings control, remove it.)
     * @param {string|boolean} [options.backgroundImage=images.dialog.src] - A URI for a background image. If explicitly `false`, background image is suppressed.
     * @param {function} [terminate]
     */
    initialize: function(grid, options) {
        options = options || {};

        this.grid = grid;

        // create the backdrop; it is absolute-positioned and stretched
        this.el = automat.firstChild(options.dialogTemplate || markup.dialog, options.dialogReplacements);

        this.originalFirstChild = this.el.firstElementChild;

        if (options.settings === false) {
            var settings = this.el.querySelector('.hypergrid-dialog-settings');
            if (settings) {
                settings.remove();
            }
        }

        // add background image
        if (options.backgroundImage !== false) {
            this.el.style.backgroundImage = 'url(\'' + (options.backgroundImage || images.dialog.src) + '\')';
        }

        // listen for clicks
        this.el.addEventListener('click', onClick.bind(this));

        if (options.terminate) {
            this.terminate = options.terminate;
        }
    },

    /**
     * @summary Adds DOM `Node`s to dialog.
     * @desc Input can be nodes or a template from which to create nodes. The nodes are inserted into the dialog's DOM (`this.el`), right before the "control panel."
     * @param {string|function|Node|Node[]} nodes - See `automat`.
     * @param {...*} [replacements] - See `automat`.
     */
    append: function(nodes, replacements/*...*/) {
        var el = this.el;

        if (typeof nodes === 'string' || typeof nodes === 'function') {
            var args = Array.prototype.slice.call(arguments);
            args.splice(1, 0, el, this.originalFirstChild);
            automat.append.apply(null, args);

        } else if ('length' in nodes) {
            for (var i = 0; i < nodes.length; ++i) {
                el.insertBefore(nodes[i], this.originalFirstChild);
            }

        } else {
            el.insertBefore(nodes, this.originalFirstChild);
        }
    },

    /**
     * Insert dialog into DOM.
     *
     * @param {HTMLElement} [container] - If undefined, dialog is appended to body.
     *
     * If defined, dialog is appended to container. When container is not body, it will be:
     * # made visible before append (it should initially be hidden)
     * # made hidden after remove
     */
    open: function(container) {
        var error;

        if (!(this.opened || this.opening || this.closed || this.closing)) {
            error = this.onOpen();

            if (!error) {
                var el = this.el;

                this.opening = true;

                container = container || document.querySelector('body');

                if (container.tagName !== 'BODY') {
                    container.style.visibility = 'visible';
                }

                // insert the new dialog markup into the DOM
                container.appendChild(el);

                // schedule it for a show transition
                setTimeout(function() { el.classList.add('hypergrid-dialog-visible'); }, 50);

                // at end of show transition, hide all the hypergrids behind it to prevent any key/mouse events from getting to them
                // todo: pause all hypergrids so they don't spin uselessly
                el.addEventListener('transitionend', this.hideAppBound = hideApp.bind(this));
            }
        }

        return error;
    },

    /**
     * Remove dialog from DOM.
     */
    close: function() {
        var error;

        if (this.opened && !(this.closed || this.closing)) {
            error = this.onClose();

            if (!error) {
                var el = this.el;

                this.closing = true;

                // unhide all the hypergrids behind the dialog
                this.appVisible('visible');

                // start a hide transition of dialog revealing grids behind it
                el.classList.remove('hypergrid-dialog-visible');

                // at end of hide transition, remove dialog from the DOM
                el.addEventListener('transitionend', this.removeDialogBound = removeDialog.bind(this));
            }
        }

        return error;
    },

    appSelector: 'canvas.hypergrid',
    appVisible: function(visibility) {
        elfor.each(this.appSelector, function(el) {
            el.style.visibility = visibility;
        });
    },

    onOpen: nullPattern,
    onOpened: nullPattern,
    onClose: nullPattern,
    onClosed: nullPattern,
    terminate: nullPattern
});

function nullPattern() {}

function removeDialog(evt) {
    if (evt.target === this.el && evt.propertyName === 'opacity') {
        if (this.el.parentElement.tagName !== 'BODY') {
            this.el.parentElement.style.visibility = 'hidden';
        }
        this.el.remove();
        delete this.el;

        this.onClosed();
        this.terminate();
        this.closing = false;
        this.closed = true;
    }
}

function hideApp(evt) {
    if (evt.target === this.el && evt.propertyName === 'opacity') {
        this.appVisible('hidden');
        this.el.removeEventListener('transitionend', this.hideAppBound);
        this.onOpened();
        this.opening = false;
        this.opened = true;
    }
}

function onClick(evt) {
    if (this) {
        if (evt.target.classList.contains('hypergrid-dialog-close')) {
            evt.preventDefault(); // ignore href
            this.close();

        } else if (evt.target.classList.contains('hypergrid-dialog-settings')) {
            evt.preventDefault(); // ignore href
            if (this.settings) { this.settings(); }

        } else if (this.onClick && !this.onClick.call(this, evt) && evt.target.tagName === 'A') {
            evt.preventDefault(); // ignore href of handled event
        }
    }

    evt.stopPropagation(); // the click stops here, handled or not
}

module.exports = Dialog;

},{"../../html":2,"../../images":4,"../lib/Base":118,"../lib/elfor":125,"automat":5}],95:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var Tabz = require('tabz');
var popMenu = require('pop-menu');
var automat = require('automat');

var Dialog = require('./Dialog');
var markup = require('../../html');
var copyInput = require('../lib/copy-input');

var tabProperties = {
    tableQB: {
        isTableFilter: true
    },
    tableSQL: {
        isTableFilter: true,
        language: 'SQL'
    },
    columnsQB: {
        isColumnFilter: true
    },
    columnsSQL: {
        isColumnFilter: true,
        language: 'SQL'
    },
    columnsCQL: {
        isColumnFilter: true,
        language: 'CQL'
    }
};

/**
 * @constructor
 * @extends Dialog
 */
var ManageFilters = Dialog.extend('ManageFilters', {

    /**
     * @param {Hypergrid} grid
     * @param {object} [options] - May include `Dialog` options.
     * @param {HTMLElement} [options.container=document.body]
     */
    initialize: function(grid, options) {
        this.filter = grid.getGlobalFilter();

        this.append(markup.filterTrees);

        // initialize the folder tabs
        var tabz = this.tabz = new Tabz({
            root: this.el,
            onEnable: renderFolder.bind(this),
            onDisable: saveFolders.bind(this, null) // null options
        });

        // wire-up the New Column drop-down
        var newColumnDropDown = this.el.querySelector('#add-column-filter-subexpression');
        newColumnDropDown.onmousedown = onNewColumnMouseDown.bind(this);
        newColumnDropDown.onchange = onNewColumnChange.bind(this);

        // put the two subtrees in the two panels
        tabz.folder('#tableQB').appendChild(this.filter.tableFilter.el);
        tabz.folder('#columnsQB').appendChild(this.filter.columnFilters.el);

        // copy the SQL more-info block from the table to the columns tab
        var columnSqlEl = tabz.folder('#columnsSQL');
        var moreSqlInfo = tabz.folder('#tableSQL').firstElementChild.cloneNode(true);
        columnSqlEl.insertBefore(moreSqlInfo, columnSqlEl.firstChild);

        // add it to the DOM
        this.open(options.container);

        // following needed for unclear reasons to get drop-down to display correctly
        newColumnDropDown.selectedIndex = 0;
    },

    onClose: function() {
        return saveFolders.call(this);
    },

    onClosed: function() {
        var behavior = this.grid.behavior;
        behavior.applyAnalytics();
        behavior.changed();
    },

    /**
     * Custom click handlers; called by curtain.onclick in context
     * @param evt
     * @returns {boolean}
     */
    onClick: function(evt) { // to be called with filter object as syntax
        var ctrl = evt.target;

        if (ctrl.classList.contains('more-info')) {
            // find all more-info links and their adjacent blocks (blocks always follow links)
            var els = this.el.querySelectorAll('.more-info');

            // hide all more-info blocks except the one following this link (unless it's already visible in which case hide it too).
            for (var i = 0; i < els.length; ++i) {
                var el = els[i];
                if (el.tagName === 'A') {
                    var found = el === ctrl;
                    el.classList[found ? 'toggle' : 'remove']('hide-info');
                    el = els[i + 1];
                    el.style.display = found && el.style.display !== 'block' ? 'block' : 'none';
                }
            }

        } else if (ctrl.classList.contains('filter-copy')) {
            var isCopyAll = ctrl.childNodes.length; // contains "All"
            if (isCopyAll) {
                ctrl = this.tabz.folder(ctrl).querySelector(copyInput.selectorTextControls);
                copyInput(ctrl, this.filter.columnFilters.getState({ syntax: 'SQL' }));
            } else {
                copyInput(ctrl.parentElement.querySelector(copyInput.selectorTextControls));
            }

        } else {
            return true; // means unhandled
        }
    }
});

/**
 * @param options
 * @param tab
 * @param folder
 * @param [panel] Panel to save (from tab click). If omitted, save both panels (from onclose).
 * @returns {boolean|undefined|string}
 */
function saveFolders(options, tab, folder, panel) {
    return (
        (!panel || panel.id === 'tableFilterPanel') && saveFolder.call(this, this.filter.tableFilter, options) ||
        (!panel || panel.id === 'columnFiltersPanel') && saveFolder.call(this, this.filter.columnFilters, options)
    );
}

/**
 * @this Filter
 * @param {DefaultFilter} subtree
 * @param {object} [options={alert:true,focus:true}] - Side effects as per `FilterTree.prototype.invalid`'s `options`' parameter.
 * @returns {undefined|string} - Validation error text; falsy means valid (no error).
 */
function saveFolder(subtree, options) { // to be called with filter object as syntax
    var isColumnFilters = subtree === this.filter.columnFilters,
        tabQueryBuilder = this.tabz.tab(isColumnFilters ? '#columnsQB' : '#tableQB'),
        tab = this.tabz.enabledTab(tabQueryBuilder),
        folder = this.tabz.folder(tab),
        isQueryBuilder = tab === tabQueryBuilder,
        defaultedOptions = options || {
            alert: true,
            focus: true
        },
        enhancedOptions = {
            alert: defaultedOptions.alert,
            focus: defaultedOptions.focus && isQueryBuilder
        },
        error, ctrl;

    if (isColumnFilters || isQueryBuilder) {
        error = subtree.invalid(enhancedOptions);
    } else { // table filter SQL tab
        ctrl = folder.querySelector('textarea');
        error = this.filter.setTableFilterState(ctrl.value, options);
    }

    if (error && !isQueryBuilder) {
        // If there was a validation error, move the focus from the query builder control to the text box control.
        if (isColumnFilters) {
            // We're in SQL or CQL tab so find text box that goes with this subexpression and focus on it instead of QB control.
            var errantColumnName = error.node.el.parentElement.querySelector('input').value;
            ctrl = folder.querySelector('[name="' + errantColumnName + '"]');
        }
    }

    if (ctrl) {
        decorateFilterInput(ctrl, error);
    }

    return error;
}

function decorateFilterInput(ctrl, error) {
    ctrl.classList.toggle('filter-tree-error', !!error);

    ctrl.focus();

    // find the nearby warning element
    var warningEl;
    do {
        ctrl = ctrl.parentElement;
        warningEl = ctrl.querySelector('.filter-tree-warn');
    } while (!warningEl);

    // show or hide the error
    warningEl.innerHTML = error.message || error || '';
}

function onNewColumnMouseDown(evt) { // to be called with filter object as syntax
    if (saveFolder.call(this, this.filter.columnFilters)) {
        evt.preventDefault(); // do not drop down
    } else {
        // (re)build the drop-down contents, with same prompt, but excluding columns with active filter subexpressions
        var ctrl = evt.target,
            prompt = ctrl.options[0].text.replace('…', ''), // use original but w/o ellipsis as .build() appends one
            blacklist = this.filter.columnFilters.children.map(function(columnFilter) {
                return columnFilter.children.length && columnFilter.children[0].column;
            }),
            options = {
                prompt: prompt,
                blacklist: blacklist
            };

        popMenu.build(ctrl, this.filter.root.schema, options);
    }
}

function onNewColumnChange(evt) {
    var ctrl = evt.target,
        tabColumnQB = this.tabz.folder('#tableQB'),
        tab = this.tabz.enabledTab(tabColumnQB.parentElement),
        isQueryBuilder = tab === tabColumnQB,
        tabProps = tabProperties[tab.id];

    this.filter.columnFilters.add({
        state: {
            type: 'columnFilter',
            children: [ { column: ctrl.value } ]
        },
        focus: isQueryBuilder
    });

    if (tabProps.isColumnFilter && tabProps.lanugage) {
        renderFolder.call(this, tab);
    }

    // remove all but the prompt option (first child)
    ctrl.selectedIndex = 0;
    while (ctrl.lastChild !== ctrl.firstChild) {
        ctrl.removeChild(ctrl.lastChild);
    }
}

function renderFolder(tab) { // to be called with filter object as syntax
    var tabProps = tabProperties[tab.id],
        queryLanguage = tabProps.language;

    if (queryLanguage) {
        var globalFilter = this.filter,
            folder = this.tabz.folder(tab);

        if (tabProps.isTableFilter) {

            folder.querySelector('textarea').value = globalFilter.tableFilter.getState({ syntax: 'SQL' });

        } else { // column filter

            var columnFilters = globalFilter.columnFilters.children,
                el = folder.lastElementChild,
                msgEl = el.querySelector('span'),
                listEl = el.querySelector('ol'),
                copyAllLink = el.querySelector('a:first-of-type');

            msgEl.innerHTML = activeFiltersMessage(columnFilters.length);
            listEl.innerHTML = '';

            // for each column filter subtree, append an <li>...</li> element containing:
            // column title, "(copy)" link, and editable text input box containing the subexpression
            columnFilters.forEach(function(filter) {
                var conditional = filter.children[0],
                    item = conditional.schema[0],
                    name = conditional.column,
                    alias = item.alias || name,
                    expression = filter.getState({ syntax: queryLanguage }),
                    isNull = expression === '(NULL IS NULL)' || expression === '',
                    content = isNull ? '' : expression,
                    className = isNull ? 'filter-tree-error' : '',
                    li = automat.firstChild(markup[queryLanguage], alias, name, content, className);

                listEl.appendChild(li);
            });

            folder.onkeyup = setColumnFilterState.bind(this, queryLanguage);

            if (copyAllLink) {
                // if there's a "(copy all)" link, hide it if only 0 or 1 subexpressions
                copyAllLink.style.display = columnFilters.length > 1 ? 'block' : 'none';
            }
        }

    }
}

//var RETURN_KEY = 0x0d, ESCAPE_KEY = 0x1b;
/**
 * Called from key-up events from `#columnSQL` and `#columnCQL` tabs.
 * @this Filter
 * @param {string} queryLanguage
 * @param {KeyboardEvent} evt
 */
function setColumnFilterState(queryLanguage, evt) {
    var ctrl = evt.target;

    // Only handle if key was pressed inside a text box.
    if (ctrl.classList.contains('filter-text-box')) {
        //switch (evt.keyCode) {
        //    case ESCAPE_KEY:
        //        ctrl.value = oldArg;
        //    case RETURN_KEY: // eslint-disable-line no-fallthrough
        //        ctrl.blur();
        //        break;
        //    default:
        var error,
            options = { syntax: queryLanguage, alert: true };

        try {
            error = this.filter.setColumnFilterState(ctrl.name, ctrl.value, options);
        } catch (err) {
            error = err;
        }

        decorateFilterInput(ctrl, error);
        //}
    }
}

function activeFiltersMessage(n) {
    var result;

    switch (n) {
        case 0:
            result = 'There are no active column filters.';
            break;
        case 1:
            result = 'There is 1 active column filter:';
            break;
        default:
            result = 'There are ' + n + ' active column filters:';
    }

    return result;
}


module.exports = ManageFilters;

},{"../../html":2,"../lib/copy-input":122,"./Dialog":94,"automat":5,"pop-menu":52,"tabz":56}],96:[function(require,module,exports){
'use strict';

module.exports.ColumnPicker = require('./ColumnPicker');
module.exports.ManageFilters = require('./ManageFilters');

},{"./ColumnPicker":93,"./ManageFilters":95}],97:[function(require,module,exports){
/* eslint-env browser */

'use strict';

/* NOTE
 *
 * What this file is:
 * * This file is browserify's entry point.
 * * This file creates the `window.fin.Hypergrid` object.
 *
 * What this file is not:
 * * This file is not a node module; it has no reference to `module.exports` or `exports`; it cannot be "required" by any other file.
 * * This file is blacklisted in .npmignore and is not published to npm.
 *
 * Note: The npm "main" entry point (as noted in package.json) is src/Hypergrid.js.
 */

var Hypergrid = require('./Hypergrid');

// Expose some namespaces to users of the hypergrid.js file through `fin.Hypergrid`:
Hypergrid.JSON = require('./lib/json');
Hypergrid.images = require('../images');
Hypergrid.behaviors = require('./behaviors');
Hypergrid.dataModels = require('./dataModels');
Hypergrid.features = require('./features');
Hypergrid.analytics = require('./Shared.js').analytics;
Hypergrid.DefaultFilter = require('./filter/DefaultFilter');
Hypergrid.ColumnSchemaFactory = require('./filter/ColumnSchemaFactory');
Hypergrid.FilterTree = require('./Shared').FilterTree;
Hypergrid.rectangular = require('rectangular');

// Create the `fin` and in particular the `fin.Hypergrid` objects:
(window.fin = window.fin || {}).Hypergrid = Hypergrid;

// Note that while users of the npm module can also access the above namespaces through the Hypergrid object, in reality they also have access to any namespace through `require`, for example:
// var behaviorJSON = require('fin-hypergrid/src/behaviors/JSON');

},{"../images":4,"./Hypergrid":59,"./Shared":60,"./Shared.js":60,"./behaviors":66,"./dataModels":91,"./features":114,"./filter/ColumnSchemaFactory":115,"./filter/DefaultFilter":116,"./lib/json":126,"rectangular":53}],98:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 * @extends Feature
 */
var CellClick = Feature.extend('CellClick', {

    /**
     * @memberOf CellClick.prototype
     * @desc Handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleClick: function(grid, event) {
        var consumed;

        if (
            event.gridCell.y >= grid.behavior.getHeaderRowCount() &&
            event.gridCell.x >= grid.behavior.getHeaderColumnCount()
        ) {
            consumed = grid.cellClicked(event);
        }

        if (!consumed && this.next) {
            this.next.handleClick(grid, event);
        }
    }
});

module.exports = CellClick;

},{"./Feature.js":107}],99:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');
var CellEditor = require('../cellEditors/CellEditor');

/**
 * @constructor
 * @extends Feature
 */
var CellEditing = Feature.extend('CellEditing', {

    /**
     * @memberOf CellEditing.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleDoubleClick: function(grid, event) {
        var isDoubleClickEditorActivation = grid.resolveProperty('editOnDoubleClick');
        if (this.checkActivateEditor(grid, event, isDoubleClickEditorActivation)) {
            grid.onEditorActivate(event);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    handleClick: function(grid, event) {
        var isDoubleClickEditorActivation = grid.resolveProperty('editOnDoubleClick');
        if (this.checkActivateEditor(grid, event, !isDoubleClickEditorActivation)) {
            grid.onEditorActivate(event);
        } else if (this.next) {
            this.next.handleClick(grid, event);
        }
    },

    checkActivateEditor: function(grid, event, isDoubleClickEditorActivation) {
        var headerRowCount = grid.behavior.getHeaderRowCount();
        var headerColumnCount = grid.behavior.getHeaderColumnCount();
        var gridCell = event.gridCell;
        var isFilterRow = grid.isFilterRow(gridCell.y);

        return isDoubleClickEditorActivation &&
            gridCell.x >= headerColumnCount &&
            (isFilterRow || gridCell.y >= headerRowCount);
    },

    /**
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf KeyPaging.prototype
     */
    handleKeyDown: function(grid, event) {
        var char, isVisibleChar, isDeleteChar, currentCell, editor;

        if (
            grid.resolveProperty('editOnKeydown') &&
            !grid.cellEditor &&
            (
                (char = event.detail.char) === 'F2' ||
                (isVisibleChar = char.length === 1 && !(event.detail.meta || event.detail.ctrl)) ||
                (isDeleteChar = char === 'DELETE' || char === 'BACKSPACE')
            )
        ) {
            currentCell = grid.selectionModel.getLastSelection();
            if (currentCell) {
                var pseudoEvent = { gridCell: currentCell.origin };
                editor = grid.onEditorActivate(pseudoEvent);
                if (editor instanceof CellEditor) {
                    if (isVisibleChar) {
                        editor.setEditorValue(char);
                    } else if (isDeleteChar) {
                        editor.setEditorValue('');
                    }
                    event.detail.primitiveEvent.preventDefault();
                }
            }
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    }

});

module.exports = CellEditing;

},{"../cellEditors/CellEditor":67,"./Feature.js":107}],100:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 * @extends Feature
 */
var CellSelection = Feature.extend('CellSelection', {

    /**
     * The pixel location of the mouse pointer during a drag operation.
     * @type {window.fin.rectangular.Point}
     * @memberOf CellSelection.prototype
     */
    currentDrag: null,

    /**
     * the cell coordinates of the where the mouse pointer is during a drag operation
     * @type {Object}
     * @memberOf CellSelection.prototype
     */
    lastDragCell: null,

    /**
     * a millisecond value representing the previous time an autoscroll started
     * @type {number}
     * @default 0
     * @memberOf CellSelection.prototype
     */
    sbLastAuto: 0,

    /**
     * a millisecond value representing the time the current autoscroll started
     * @type {number}
     * @default 0
     * @memberOf CellSelection.prototype
     */
    sbAutoStart: 0,

    /**
     * @memberOf CellSelection.prototype
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        if (this.dragging) {
            this.dragging = false;
        }
        if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        var isRightClick = event.primitiveEvent.detail.isRightClick;
        var cell = event.gridCell;
        var viewCell = event.viewPoint;
        var dx = cell.x;
        var dy = cell.y;
        var headerRowCount = grid.behavior.getHeaderRowCount();
        var headerColumnCount = grid.behavior.getHeaderColumnCount();
        var columnCount = grid.getColumnCount();
        var isOutside = viewCell.x >= columnCount;

        var isHeader = dy < headerRowCount || dx < headerColumnCount;

        if (!grid.isCellSelection() || isRightClick || isHeader || isOutside) {
            if (this.next) {
                this.next.handleMouseDown(grid, event);
            }
        } else {
            var numFixedColumns = grid.getFixedColumnCount();
            var numFixedRows = grid.getFixedRowCount();

            //if we are in the fixed area do not apply the scroll values
            //check both x and y values independently
            if (viewCell.x < numFixedColumns) {
                dx = viewCell.x;
            }

            if (viewCell.y < numFixedRows) {
                dy = viewCell.y;
            }

            var dCell = grid.newPoint(dx, dy);

            var primEvent = event.primitiveEvent;
            var keys = primEvent.detail.keys;
            this.dragging = true;
            this.extendSelection(grid, dCell, keys);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {
        var isRightClick = event.primitiveEvent.detail.isRightClick;

        if (!grid.isCellSelection() || isRightClick || !this.dragging) {
            if (this.next) {
                this.next.handleMouseDrag(grid, event);
            }
        } else {

            var numFixedColumns = grid.getFixedColumnCount();
            var numFixedRows = grid.getFixedRowCount();

            var cell = event.gridCell;
            var viewCell = event.viewPoint;
            var dx = cell.x;
            var dy = cell.y;

            //if we are in the fixed area do not apply the scroll values
            //check both x and y values independently
            if (viewCell.x < numFixedColumns) {
                dx = viewCell.x;
            }

            if (viewCell.y < numFixedRows) {
                dy = viewCell.y;
            }

            var dCell = grid.newPoint(dx, dy);

            var primEvent = event.primitiveEvent;
            this.currentDrag = primEvent.detail.mouse;
            this.lastDragCell = dCell;

            this.checkDragScroll(grid, this.currentDrag);
            this.handleMouseDragCellSelection(grid, dCell, primEvent.detail.keys);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleKeyDown: function(grid, event) {
        var handler;
        if ((handler = this['handle' + event.detail.char])) {
            handler.call(this, grid, event.detail);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Handle a mousedrag selection.
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    handleMouseDragCellSelection: function(grid, gridCell, keys) {

        var headerRowCount = grid.behavior.getHeaderRowCount();
        var headerColumnCount = grid.behavior.getHeaderColumnCount();
        var x = gridCell.x;
        var y = gridCell.y;
        x = Math.max(headerColumnCount, x);
        y = Math.max(headerRowCount, y);

        var previousDragExtent = grid.getDragExtent();
        var mouseDown = grid.getMouseDown();

        //var scrollingNow = grid.isScrollingNow();

        var newX = x - mouseDown.x;
        var newY = y - mouseDown.y;

        if (previousDragExtent.x === newX && previousDragExtent.y === newY) {
            return;
        }

        grid.clearMostRecentSelection();

        grid.select(mouseDown.x, mouseDown.y, newX, newY);
        grid.setDragExtent(grid.newPoint(newX, newY));

        grid.repaint();
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc this checks while were dragging if we go outside the visible bounds, if so, kick off the external autoscroll check function (above)
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     */
    checkDragScroll: function(grid, mouse) {
        if (!grid.resolveProperty('scrollingEnabled')) {
            return;
        }
        var b = grid.getDataBounds();
        var inside = b.contains(mouse);
        if (inside) {
            if (grid.isScrollingNow()) {
                grid.setScrollingNow(false);
            }
        } else if (!grid.isScrollingNow()) {
            grid.setScrollingNow(true);
            this.scrollDrag(grid);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc this function makes sure that while we are dragging outside of the grid visible bounds, we srcroll accordingly
     * @param {Hypergrid} grid
     */
    scrollDrag: function(grid) {

        if (!grid.isScrollingNow()) {
            return;
        }

        var dragStartedInHeaderArea = grid.isMouseDownInHeaderArea();
        var lastDragCell = this.lastDragCell;
        var b = grid.getDataBounds();
        var xOffset = 0;
        var yOffset = 0;

        var numFixedColumns = grid.getFixedColumnCount();
        var numFixedRows = grid.getFixedRowCount();

        var dragEndInFixedAreaX = lastDragCell.x < numFixedColumns;
        var dragEndInFixedAreaY = lastDragCell.y < numFixedRows;

        if (!dragStartedInHeaderArea) {
            if (this.currentDrag.x < b.origin.x) {
                xOffset = -1;
            }
            if (this.currentDrag.y < b.origin.y) {
                yOffset = -1;
            }
        }
        if (this.currentDrag.x > b.origin.x + b.extent.x) {
            xOffset = 1;
        }
        if (this.currentDrag.y > b.origin.y + b.extent.y) {
            yOffset = 1;
        }

        var dragCellOffsetX = xOffset;
        var dragCellOffsetY = yOffset;

        if (dragEndInFixedAreaX) {
            dragCellOffsetX = 0;
        }

        if (dragEndInFixedAreaY) {
            dragCellOffsetY = 0;
        }

        this.lastDragCell = lastDragCell.plusXY(dragCellOffsetX, dragCellOffsetY);
        grid.scrollBy(xOffset, yOffset);
        this.handleMouseDragCellSelection(grid, lastDragCell, []); // update the selection
        grid.repaint();
        setTimeout(this.scrollDrag.bind(this, grid), 25);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc extend a selection or create one if there isnt yet
     * @param {Hypergrid} grid
     * @param {Object} gridCell - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    extendSelection: function(grid, gridCell, keys) {
        var hasCTRL = keys.indexOf('CTRL') >= 0;
        var hasSHIFT = keys.indexOf('SHIFT') >= 0;
        // var scrollTop = grid.getVScrollValue();
        // var scrollLeft = grid.getHScrollValue();

        // var numFixedColumns = 0;//grid.getFixedColumnCount();
        // var numFixedRows = 0;//grid.getFixedRowCount();

        var mousePoint = grid.getMouseDown();
        var x = gridCell.x; // - numFixedColumns + scrollLeft;
        var y = gridCell.y; // - numFixedRows + scrollTop;

        //were outside of the grid do nothing
        if (x < 0 || y < 0) {
            return;
        }

        //we have repeated a click in the same spot deslect the value from last time
        if (
            hasCTRL &&
            x === mousePoint.x &&
            y === mousePoint.y
        ) {
            grid.clearMostRecentSelection();
            grid.popMouseDown();
            grid.repaint();
            return;
        }

        if (!hasCTRL && !hasSHIFT) {
            grid.clearSelections();
        }

        if (hasSHIFT) {
            grid.clearMostRecentSelection();
            grid.select(mousePoint.x, mousePoint.y, x - mousePoint.x + 1, y - mousePoint.y + 1);
            grid.setDragExtent(grid.newPoint(x - mousePoint.x + 1, y - mousePoint.y));
        } else {
            grid.select(x, y, 0, 0);
            grid.setMouseDown(grid.newPoint(x, y));
            grid.setDragExtent(grid.newPoint(0, 0));
        }
        grid.repaint();
    },


    /**
     * @memberOf CellSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     */
    handleDOWNSHIFT: function(grid) {
        this.moveShiftSelect(grid, 0, 1);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUPSHIFT: function(grid) {
        this.moveShiftSelect(grid, 0, -1);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFTSHIFT: function(grid) {
        this.moveShiftSelect(grid, -1, 0);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHTSHIFT: function(grid) {
        this.moveShiftSelect(grid, 1, 0);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleDOWN: function(grid, event) {
        //keep the browser viewport from auto scrolling on key event
        event.primitiveEvent.preventDefault();

        var count = this.getAutoScrollAcceleration();
        this.moveSingleSelect(grid, 0, count);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUP: function(grid, event) {
        //keep the browser viewport from auto scrolling on key event
        event.primitiveEvent.preventDefault();

        var count = this.getAutoScrollAcceleration();
        this.moveSingleSelect(grid, 0, -count);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFT: function(grid) {
        this.moveSingleSelect(grid, -1, 0);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHT: function(grid) {
        this.moveSingleSelect(grid, 1, 0);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc If we are holding down the same navigation key, accelerate the increment we scroll
     * #### returns: integer
     */
    getAutoScrollAcceleration: function() {
        var count = 1;
        var elapsed = this.getAutoScrollDuration() / 2000;
        count = Math.max(1, Math.floor(elapsed * elapsed * elapsed * elapsed));
        return count;
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc set the start time to right now when we initiate an auto scroll
     */
    setAutoScrollStartTime: function() {
        this.sbAutoStart = Date.now();
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc update the autoscroll start time if we haven't autoscrolled within the last 500ms otherwise update the current autoscroll time
     */
    pingAutoScroll: function() {
        var now = Date.now();
        if (now - this.sbLastAuto > 500) {
            this.setAutoScrollStartTime();
        }
        this.sbLastAuto = Date.now();
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc answer how long we have been auto scrolling
     * #### returns: integer
     */
    getAutoScrollDuration: function() {
        if (Date.now() - this.sbLastAuto > 500) {
            return 0;
        }
        return Date.now() - this.sbAutoStart;
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Augment the most recent selection extent by (offsetX,offsetY) and scroll if necessary.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveShiftSelect: function(grid, offsetX, offsetY) {

        var maxColumns = grid.getColumnCount() - 1;
        var maxRows = grid.getRowCount() - 1;

        var maxViewableColumns = grid.getVisibleColumns() - 1;
        var maxViewableRows = grid.getVisibleRows() - 1;

        if (!grid.resolveProperty('scrollingEnabled')) {
            maxColumns = Math.min(maxColumns, maxViewableColumns);
            maxRows = Math.min(maxRows, maxViewableRows);
        }

        var origin = grid.getMouseDown();
        var extent = grid.getDragExtent();

        var newX = extent.x + offsetX;
        var newY = extent.y + offsetY;

        newX = Math.min(maxColumns - origin.x, Math.max(-origin.x, newX));
        newY = Math.min(maxRows - origin.y, Math.max(-origin.y, newY));

        grid.clearMostRecentSelection();
        grid.select(origin.x, origin.y, newX, newY);

        grid.setDragExtent(grid.newPoint(newX, newY));

        if (grid.insureModelColIsVisible(newX + origin.x, offsetX)) {
            this.pingAutoScroll();
        }
        if (grid.insureModelRowIsVisible(newY + origin.y, offsetY)) {
            this.pingAutoScroll();
        }

        grid.repaint();

    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Replace the most recent selection with a single cell selection that is moved (offsetX,offsetY) from the previous selection extent.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveSingleSelect: function(grid, offsetX, offsetY) {

        var maxColumns = grid.getColumnCount() - 1;
        var maxRows = grid.getRowCount() - 1;

        var maxViewableColumns = grid.getVisibleColumnsCount() - 1;
        var maxViewableRows = grid.getVisibleRowsCount() - 1;

        var minRows = grid.getHeaderRowCount();
        var minCols = grid.getHeaderColumnCount();

        if (!grid.resolveProperty('scrollingEnabled')) {
            maxColumns = Math.min(maxColumns, maxViewableColumns);
            maxRows = Math.min(maxRows, maxViewableRows);
        }

        var mouseCorner = grid.getMouseDown().plus(grid.getDragExtent());

        var newX = mouseCorner.x + offsetX;
        var newY = mouseCorner.y + offsetY;

        newX = Math.min(maxColumns, Math.max(minCols, newX));
        newY = Math.min(maxRows, Math.max(minRows, newY));

        grid.clearSelections();
        grid.select(newX, newY, 0, 0);
        grid.setMouseDown(grid.newPoint(newX, newY));
        grid.setDragExtent(grid.newPoint(0, 0));

        grid.selectCellAndScrollToMakeVisible(newX, newY);

        // if (grid.insureModelColIsVisible(newX, offsetX)) {
        //     this.pingAutoScroll();
        // }
        // if (grid.insureModelRowIsVisible(newY, offsetY)) {
        //     this.pingAutoScroll();
        // }

        grid.repaint();

    }

});

module.exports = CellSelection;

},{"./Feature.js":107}],101:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 * @extends Feature
 */
var ColumnAutosizing = Feature.extend('ColumnAutosizing', {

    /**
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf ColumnAutosizing.prototype
     */
    handleDoubleClick: function(grid, event) {
        var headerRowCount = grid.getHeaderRowCount();
        //var headerColCount = grid.getHeaderColumnCount();
        var gridCell = event.gridCell;
        if (gridCell.y <= headerRowCount) {
            grid.autosizeColumn(gridCell.x);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    }

});

module.exports = ColumnAutosizing;

},{"./Feature.js":107}],102:[function(require,module,exports){
/* eslint-env browser */
/* global requestAnimationFrame */

'use strict';

// This feature is responsible for column drag and drop reordering.
// This object is a mess and desperately needs a complete rewrite.....

var Feature = require('./Feature.js');

var columnAnimationTime = 150;
var dragger;
var draggerCTX;
var floatColumn;
var floatColumnCTX;

/**
 * @constructor
 * @extends Feature
 */
var ColumnMoving = Feature.extend('ColumnMoving', {

    /**
     * queue up the animations that need to play so they are done synchronously
     * @type {Array}
     * @memberOf CellMoving.prototype
     */
    floaterAnimationQueue: [],

    /**
     * am I currently auto scrolling right
     * @type {boolean}
     * @memberOf CellMoving.prototype
     */
    columnDragAutoScrollingRight: false,

    /**
     * am I currently auto scrolling left
     * @type {boolean}
     * @memberOf CellMoving.prototype
     */
    columnDragAutoScrollingLeft: false,

    /**
     * is the drag mechanism currently enabled ("armed")
     * @type {boolean}
     * @memberOf CellMoving.prototype
     */
    dragArmed: false,

    /**
     * am I dragging right now
     * @type {boolean}
     * @memberOf CellMoving.prototype
     */
    dragging: false,

    /**
     * the column index of the currently dragged column
     * @type {number}
     * @memberOf CellMoving.prototype
     */
    dragCol: -1,

    /**
     * an offset to position the dragged item from the cursor
     * @type {number}
     * @memberOf CellMoving.prototype
     */
    dragOffset: 0,

    /**
     * @memberOf CellMoving.prototype
     * @desc give me an opportunity to initialize stuff on the grid
     * @param {Hypergrid} grid
     */
    initializeOn: function(grid) {
        this.isFloatingNow = false;
        this.initializeAnimationSupport(grid);
        if (this.next) {
            this.next.initializeOn(grid);
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc initialize animation support on the grid
     * @param {Hypergrid} grid
     */
    initializeAnimationSupport: function(grid) {
        if (!dragger) {
            dragger = document.createElement('canvas');
            dragger.setAttribute('width', '0px');
            dragger.setAttribute('height', '0px');

            document.body.appendChild(dragger);
            draggerCTX = dragger.getContext('2d');
        }
        if (!floatColumn) {
            floatColumn = document.createElement('canvas');
            floatColumn.setAttribute('width', '0px');
            floatColumn.setAttribute('height', '0px');

            document.body.appendChild(floatColumn);
            floatColumnCTX = floatColumn.getContext('2d');
        }

    },

    getCanDragCursorName: function() {
        return '-webkit-grab';
    },

    getDraggingCursorName: function() {
        return '-webkit-grabbing';
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {

        var gridCell = event.gridCell;
        var x;
        //var y;

        var distance = Math.abs(event.primitiveEvent.detail.dragstart.x - event.primitiveEvent.detail.mouse.x);

        if (distance < 10 || this.isFixedColumn(grid, event)) {
            if (this.next) {
                this.next.handleMouseDrag(grid, event);
            }
            return;
        }

        if (this.isHeaderRow(grid, event) && this.dragArmed && !this.dragging) {
            this.dragging = true;
            this.dragCol = gridCell.x;
            this.dragOffset = event.mousePoint.x;
            this.detachChain();
            x = event.primitiveEvent.detail.mouse.x - this.dragOffset;
            //y = event.primitiveEvent.detail.mouse.y;
            this.createDragColumn(grid, x, this.dragCol);
        } else if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }

        if (this.dragging) {
            x = event.primitiveEvent.detail.mouse.x - this.dragOffset;
            //y = event.primitiveEvent.detail.mouse.y;
            this.dragColumn(grid, x);
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        if (grid.behavior.isColumnReorderable() && !this.isFixedColumn(grid, event)) {
            if (this.isHeaderRow(grid, event) && event.gridCell.x !== -1) {
                this.dragArmed = true;
                this.cursor = this.getDraggingCursorName();
                grid.clearSelections();
            }
        }
        if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        //var col = event.gridCell.x;
        if (this.dragging) {
            this.cursor = null;
            //delay here to give other events a chance to be dropped
            var self = this;
            this.endDragColumn(grid);
            setTimeout(function() {
                self.attachChain();
            }, 200);
        }
        this.dragCol = -1;
        this.dragging = false;
        this.dragArmed = false;
        this.cursor = null;
        grid.repaint();

        if (this.next) {
            this.next.handleMouseUp(grid, event);
        }

    },

    /**
     * @memberOf CellMoving.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseMove: function(grid, event) {

        if (!this.dragging && event.mousePoint.y < 5 && event.viewPoint.y === 0 && !this.isFixedColumn(grid, event)) {
            this.cursor = this.getCanDragCursorName();
        } else {
            this.cursor = null;
        }

        if (this.next) {
            this.next.handleMouseMove(grid, event);
        }

        if (this.isHeaderRow(grid, event) && this.dragging) {
            this.cursor = this.getDraggingCursorName(); //move';
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc this is the main event handler that manages the dragging of the column
     * @param {Hypergrid} grid
     * @param {boolean} draggedToTheRight - are we moving to the right
     */
    floatColumnTo: function(grid, draggedToTheRight) {
        this.floatingNow = true;

        var renderer = grid.getRenderer();
        var colEdges = renderer.getColumnEdges();
        var scrollLeft = grid.getHScrollValue();
        var floaterIndex = grid.renderOverridesCache.floater.columnIndex;
        var draggerIndex = grid.renderOverridesCache.dragger.columnIndex;
        var hdpiratio = grid.renderOverridesCache.dragger.hdpiratio;

        var draggerStartX;
        var floaterStartX;
        var fixedColumnCount = grid.getFixedColumnCount();
        var draggerWidth = grid.getColumnWidth(draggerIndex);
        var floaterWidth = grid.getColumnWidth(floaterIndex);

        var max = grid.getVisibleColumnsCount();

        var doffset = 0;
        var foffset = 0;

        if (draggerIndex >= fixedColumnCount) {
            doffset = scrollLeft;
        }
        if (floaterIndex >= fixedColumnCount) {
            foffset = scrollLeft;
        }

        if (draggedToTheRight) {
            draggerStartX = colEdges[Math.min(max, draggerIndex - doffset)];
            floaterStartX = colEdges[Math.min(max, floaterIndex - foffset)];

            grid.renderOverridesCache.dragger.startX = (draggerStartX + floaterWidth) * hdpiratio;
            grid.renderOverridesCache.floater.startX = draggerStartX * hdpiratio;

        } else {
            floaterStartX = colEdges[Math.min(max, floaterIndex - foffset)];
            draggerStartX = floaterStartX + draggerWidth;

            grid.renderOverridesCache.dragger.startX = floaterStartX * hdpiratio;
            grid.renderOverridesCache.floater.startX = draggerStartX * hdpiratio;
        }
        grid.swapColumns(draggerIndex, floaterIndex);
        grid.renderOverridesCache.dragger.columnIndex = floaterIndex;
        grid.renderOverridesCache.floater.columnIndex = draggerIndex;


        this.floaterAnimationQueue.unshift(this.doColumnMoveAnimation(grid, floaterStartX, draggerStartX));

        this.doFloaterAnimation(grid);

    },

    /**
     * @memberOf CellMoving.prototype
     * @desc manifest the column drag and drop animation
     * @param {Hypergrid} grid
     * @param {number} floaterStartX - the x start coordinate of the column underneath that floats behind the dragged column
     * @param {number} draggerStartX - the x start coordinate of the dragged column
     */
    doColumnMoveAnimation: function(grid, floaterStartX, draggerStartX) {
        var self = this;
        return function() {
            var d = floatColumn;
            d.style.display = 'inline';
            self.setCrossBrowserProperty(d, 'transform', 'translate(' + floaterStartX + 'px, ' + 0 + 'px)');

            //d.style.webkit-webkit-Transform = 'translate(' + floaterStartX + 'px, ' + 0 + 'px)';
            //d.style.webkit-webkit-Transform = 'translate(' + floaterStartX + 'px, ' + 0 + 'px)';

            requestAnimationFrame(function() {
                self.setCrossBrowserProperty(d, 'transition', (self.isWebkit ? '-webkit-' : '') + 'transform ' + columnAnimationTime + 'ms ease');
                self.setCrossBrowserProperty(d, 'transform', 'translate(' + draggerStartX + 'px, ' + -2 + 'px)');
            });
            grid.repaint();
            //need to change this to key frames

            setTimeout(function() {
                self.setCrossBrowserProperty(d, 'transition', '');
                grid.renderOverridesCache.floater = null;
                grid.repaint();
                self.doFloaterAnimation(grid);
                requestAnimationFrame(function() {
                    d.style.display = 'none';
                    self.isFloatingNow = false;
                });
            }, columnAnimationTime + 50);
        };
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc manifest the floater animation
     * @param {Hypergrid} grid
     */
    doFloaterAnimation: function(grid) {
        if (this.floaterAnimationQueue.length === 0) {
            this.floatingNow = false;
            grid.repaint();
            return;
        }
        var animation = this.floaterAnimationQueue.pop();
        animation();
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc create the float column at columnIndex underneath the dragged column
     * @param {Hypergrid} grid
     * @param {number} columnIndex - the index of the column that will be floating
     */
    createFloatColumn: function(grid, columnIndex) {

        var fixedColumnCount = grid.getFixedColumnCount();
        var scrollLeft = grid.getHScrollValue();

        if (columnIndex < fixedColumnCount) {
            scrollLeft = 0;
        }

        var renderer = grid.getRenderer();
        var columnEdges = renderer.getColumnEdges();

        var columnWidth = grid.getColumnWidth(columnIndex);
        var colHeight = grid.div.clientHeight;
        var d = floatColumn;
        var style = d.style;
        var location = grid.div.getBoundingClientRect();

        style.top = (location.top - 2) + 'px';
        style.left = location.left + 'px';
        style.position = 'fixed';

        var hdpiRatio = grid.getHiDPI(floatColumnCTX);

        d.setAttribute('width', Math.round(columnWidth * hdpiRatio) + 'px');
        d.setAttribute('height', Math.round(colHeight * hdpiRatio) + 'px');
        style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
        style.width = columnWidth + 'px'; //Math.round(columnWidth / hdpiRatio) + 'px';
        style.height = colHeight + 'px'; //Math.round(colHeight / hdpiRatio) + 'px';
        style.borderTop = '1px solid ' + renderer.resolveProperty('lineColor');
        style.backgroundColor = renderer.resolveProperty('backgroundColor');

        var startX = columnEdges[columnIndex - scrollLeft];
        startX = startX * hdpiRatio;

        floatColumnCTX.scale(hdpiRatio, hdpiRatio);

        grid.renderOverridesCache.floater = {
            columnIndex: columnIndex,
            ctx: floatColumnCTX,
            startX: startX,
            width: columnWidth,
            height: colHeight,
            hdpiratio: hdpiRatio
        };

        style.zIndex = '4';
        this.setCrossBrowserProperty(d, 'transform', 'translate(' + startX + 'px, ' + -2 + 'px)');
        style.cursor = this.getDraggingCursorName();
        grid.repaint();
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc utility function for setting cross browser css properties
     * @param {HTMLElement} element - descripton
     * @param {string} property - the property
     * @param {string} value - the value to assign
     */
    setCrossBrowserProperty: function(element, property, value) {
        var uProperty = property[0].toUpperCase() + property.substr(1);
        this.setProp(element, 'webkit' + uProperty, value);
        this.setProp(element, 'Moz' + uProperty, value);
        this.setProp(element, 'ms' + uProperty, value);
        this.setProp(element, 'O' + uProperty, value);
        this.setProp(element, property, value);
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc utility function for setting properties on HTMLElements
     * @param {HTMLElement} element - descripton
     * @param {string} property - the property
     * @param {string} value - the value to assign
     */
    setProp: function(element, property, value) {
        if (property in element.style) {
            element.style[property] = value;
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc create the dragged column at columnIndex above the floated column
     * @param {Hypergrid} grid
     * @param {number} x - the start position
     * @param {number} columnIndex - the index of the column that will be floating
     */
    createDragColumn: function(grid, x, columnIndex) {

        var fixedColumnCount = grid.getFixedColumnCount();
        var scrollLeft = grid.getHScrollValue();

        if (columnIndex < fixedColumnCount) {
            scrollLeft = 0;
        }

        var renderer = grid.getRenderer();
        var columnEdges = renderer.getColumnEdges();
        var hdpiRatio = grid.getHiDPI(draggerCTX);
        var columnWidth = grid.getColumnWidth(columnIndex);
        var colHeight = grid.div.clientHeight;
        var d = dragger;
        var location = grid.div.getBoundingClientRect();
        var style = d.style;

        style.top = location.top + 'px';
        style.left = location.left + 'px';
        style.position = 'fixed';
        style.opacity = 0.85;
        style.boxShadow = '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)';
        //style.zIndex = 100;
        style.borderTop = '1px solid ' + renderer.resolveProperty('lineColor');
        style.backgroundColor = grid.renderer.resolveProperty('backgroundColor');

        d.setAttribute('width', Math.round(columnWidth * hdpiRatio) + 'px');
        d.setAttribute('height', Math.round(colHeight * hdpiRatio) + 'px');

        style.width = columnWidth + 'px'; //Math.round(columnWidth / hdpiRatio) + 'px';
        style.height = colHeight + 'px'; //Math.round(colHeight / hdpiRatio) + 'px';

        var startX = columnEdges[columnIndex - scrollLeft];
        startX = startX * hdpiRatio;

        draggerCTX.scale(hdpiRatio, hdpiRatio);

        grid.renderOverridesCache.dragger = {
            columnIndex: columnIndex,
            startIndex: columnIndex,
            ctx: draggerCTX,
            startX: startX,
            width: columnWidth,
            height: colHeight,
            hdpiratio: hdpiRatio
        };

        this.setCrossBrowserProperty(d, 'transform', 'translate(' + x + 'px, -5px)');
        style.zIndex = '5';
        style.cursor = this.getDraggingCursorName();
        grid.repaint();
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc this function is the main dragging logic
     * @param {Hypergrid} grid
     * @param {number} x - the start position
     */
    dragColumn: function(grid, x) {

        //TODO: this function is overly complex, refactor this in to something more reasonable
        var self = this;
        //var renderer = grid.getRenderer();
        //var columnEdges = renderer.getColumnEdges();

        var autoScrollingNow = this.columnDragAutoScrollingRight || this.columnDragAutoScrollingLeft;

        var hdpiRatio = grid.getHiDPI(draggerCTX);

        var dragColumnIndex = grid.renderOverridesCache.dragger.columnIndex;

        var minX = 0;
        var maxX = grid.renderer.getFinalVisableColumnBoundary();
        x = Math.min(x, maxX + 15);
        x = Math.max(minX - 15, x);

        //am I at my lower bound
        var atMin = x < minX && dragColumnIndex !== 0;

        //am I at my upper bound
        var atMax = x > maxX;

        var d = dragger;

        this.setCrossBrowserProperty(d, 'transition', (self.isWebkit ? '-webkit-' : '') + 'transform ' + 0 + 'ms ease, box-shadow ' + columnAnimationTime + 'ms ease');

        this.setCrossBrowserProperty(d, 'transform', 'translate(' + x + 'px, ' + -10 + 'px)');
        requestAnimationFrame(function() {
            d.style.display = 'inline';
        });

        var overCol = grid.renderer.getColumnFromPixelX(x + (d.width / 2 / hdpiRatio));

        if (atMin) {
            overCol = 0;
        }

        if (atMax) {
            overCol = grid.getColumnCount() - 1;
        }

        var doAFloat = dragColumnIndex > overCol;
        doAFloat = doAFloat || (overCol - dragColumnIndex >= 1);

        if (doAFloat && !atMax && !autoScrollingNow) {
            var draggedToTheRight = dragColumnIndex < overCol;
            // if (draggedToTheRight) {
            //     overCol = overCol - 1;
            // }
            if (this.isFloatingNow) {
                return;
            }

            this.isFloatingNow = true;
            this.createFloatColumn(grid, overCol);
            this.floatColumnTo(grid, draggedToTheRight);
        } else {

            if (x < minX - 10) {
                this.checkAutoScrollToLeft(grid, x);
            }
            if (x > minX - 10) {
                this.columnDragAutoScrollingLeft = false;
            }
            //lets check for autoscroll to right if were up against it
            if (atMax || x > maxX + 10) {
                this.checkAutoScrollToRight(grid, x);
                return;
            }
            if (x < maxX + 10) {
                this.columnDragAutoScrollingRight = false;
            }
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc autoscroll to the right if necessary
     * @param {Hypergrid} grid
     * @param {number} x - the start position
     */
    checkAutoScrollToRight: function(grid, x) {
        if (this.columnDragAutoScrollingRight) {
            return;
        }
        this.columnDragAutoScrollingRight = true;
        this._checkAutoScrollToRight(grid, x);
    },

    _checkAutoScrollToRight: function(grid, x) {
        if (!this.columnDragAutoScrollingRight) {
            return;
        }
        var scrollLeft = grid.getHScrollValue();
        if (!grid.dragging || scrollLeft > (grid.sbHScroller.range.max - 2)) {
            return;
        }
        var draggedIndex = grid.renderOverridesCache.dragger.columnIndex;
        grid.scrollBy(1, 0);
        var newIndex = draggedIndex + 1;
        console.log(newIndex, draggedIndex);
        grid.swapColumns(newIndex, draggedIndex);
        grid.renderOverridesCache.dragger.columnIndex = newIndex;

        setTimeout(this._checkAutoScrollToRight.bind(this, grid, x), 250);
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc autoscroll to the left if necessary
     * @param {Hypergrid} grid
     * @param {number} x - the start position
     */
    checkAutoScrollToLeft: function(grid, x) {
        if (this.columnDragAutoScrollingLeft) {
            return;
        }
        this.columnDragAutoScrollingLeft = true;
        this._checkAutoScrollToLeft(grid, x);
    },

    _checkAutoScrollToLeft: function(grid, x) {
        if (!this.columnDragAutoScrollingLeft) {
            return;
        }

        var scrollLeft = grid.getHScrollValue();
        if (!grid.dragging || scrollLeft < 1) {
            return;
        }
        var draggedIndex = grid.renderOverridesCache.dragger.columnIndex;
        grid.swapColumns(draggedIndex + scrollLeft, draggedIndex + scrollLeft - 1);
        grid.scrollBy(-1, 0);
        setTimeout(this._checkAutoScrollToLeft.bind(this, grid, x), 250);
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc a column drag has completed, update data and cleanup
     * @param {Hypergrid} grid
     */
    endDragColumn: function(grid) {

        var fixedColumnCount = grid.getFixedColumnCount();
        var scrollLeft = grid.getHScrollValue();

        var columnIndex = grid.renderOverridesCache.dragger.columnIndex;

        if (columnIndex < fixedColumnCount) {
            scrollLeft = 0;
        }

        var renderer = grid.getRenderer();
        var columnEdges = renderer.getColumnEdges();
        var self = this;
        var startX = columnEdges[columnIndex - scrollLeft];
        var d = dragger;
        var changed = grid.renderOverridesCache.dragger.startIndex !== grid.renderOverridesCache.dragger.columnIndex;
        self.setCrossBrowserProperty(d, 'transition', (self.isWebkit ? '-webkit-' : '') + 'transform ' + columnAnimationTime + 'ms ease, box-shadow ' + columnAnimationTime + 'ms ease');
        self.setCrossBrowserProperty(d, 'transform', 'translate(' + startX + 'px, ' + -1 + 'px)');
        d.style.boxShadow = '0px 0px 0px #888888';

        setTimeout(function() {
            grid.renderOverridesCache.dragger = null;
            grid.repaint();
            requestAnimationFrame(function() {
                d.style.display = 'none';
                grid.endDragColumnNotification(); //internal notification
                if (changed){
                    grid.fireSyntheticOnColumnsChangedEvent(); //public notification
                }
            });
        }, columnAnimationTime + 50);

    },

    /**
     * @memberOf CellMoving.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isHeaderRow: function(grid, event) {
        var gridCell = event.viewPoint;
        var isFixed = gridCell.y === 0;
        return isFixed;
    }

});

module.exports = ColumnMoving;

},{"./Feature.js":107}],103:[function(require,module,exports){
/* eslint-env browser */
/* global requestAnimationFrame */

'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 * @extends Feature
 */
var ColumnPicker = Feature.extend('ColumnPicker', {

    /**
     * @memberOf ColumnPicker.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleKeyUp: function(grid, event) {
        var key = event.detail.char.toLowerCase();
        var keys = grid.resolveProperty('editorActivationKeys');
        if (keys.indexOf(key) > -1) {
           grid.toggleDialog('ColumnPicker');
        }
    },

});

module.exports = ColumnPicker;

},{"./Feature.js":107}],104:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 * @extends Feature
 */
var ColumnResizing = Feature.extend('ColumnResizing', {

    /**
     * the index of the column wall were currently dragging
     * @type {number}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    dragIndex: -2,

    /**
     * the pixel location of the where the drag was initiated
     * @type {number}
     * @default -1
     * @memberOf ColumnResizing.prototype
     */
    dragStart: -1,

    /**
     * the starting width/height of the row/column we are dragging
     * @type {number}
     * @default -1
     * @memberOf ColumnResizing.prototype
     */
    dragIndexStartingSize: -1,

    /**
     * @memberOf ColumnResizing.prototype
     * @desc get the mouse x,y coordinate
     * @returns {number}
     * @param {MouseEvent} event - the mouse event to query
     */
    getMouseValue: function(event) {
        return event.primitiveEvent.detail.mouse.x;
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc get the grid cell x,y coordinate
     * @returns {number}
     * @param {window.fin.rectangular.Point} gridCell
     */
    getGridCellValue: function(gridCell) {
        return gridCell.y;
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the grids x,y scroll value
     * @returns {number}
     * @param {Hypergrid} grid
     */
    getScrollValue: function(grid) {
        return grid.getHScrollValue();
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the width/height of the row/column of interest
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     */
    getAreaSize: function(grid, index) {
        return grid.getColumnWidth(index);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc set the width/height of the row/column at index
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     * @param {number} value - the width/height to set to
     */
    setAreaSize: function(grid, index, value) {
        grid.setColumnWidth(index, value);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the recently rendered area's width/height
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     */
    getPreviousAbsoluteSize: function(grid, index) {
        return grid.getRenderedWidth(index);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc returns the index of which divider I'm over
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    overAreaDivider: function(grid, event) {
        return grid.overColumnDivider(event);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc am I over the column/row area
     * @returns {boolean}
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFirstFixedOtherArea: function(grid, event) {
        return this.isFirstFixedRow(grid, event);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the cursor name
     * @returns {string}
     */
    getCursorName: function() {
        return 'col-resize';
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {
        if (this.dragIndex > -2) {
            //var fixedAreaCount = this.getFixedAreaCount(grid);
            //var offset = this.getFixedAreaSize(grid, fixedAreaCount + areaIndex);
            var mouse = this.getMouseValue(event);
            var scrollValue = this.getScrollValue(grid);
            if (this.dragIndex < this.getFixedAreaCount(grid)) {
                scrollValue = 0;
            }
            var previous = this.getPreviousAbsoluteSize(grid, this.dragIndex - scrollValue);
            var distance = mouse - previous;
            this.setAreaSize(grid, this.dragIndex, distance);
        } else if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc get the width/height of a specific row/column
     * @param {Hypergrid} grid
     * @param {number} areaIndex - the row/column index of interest
     */
    getSize: function(grid, areaIndex) {
        return this.getAreaSize(grid, areaIndex);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the fixed area rows/columns count
     * @returns {number}
     * @param {Hypergrid} grid
     */
    getOtherFixedAreaCount: function(grid) {
        return grid.getFixedRowCount();
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        var isEnabled = this.isEnabled(grid);
        var overArea = this.overAreaDivider(grid, event);
        if (isEnabled && overArea > -1 && this.isFirstFixedOtherArea(grid, event)) {
            var scrollValue = this.getScrollValue(grid);
            if (overArea < this.getFixedAreaCount(grid)) {
                scrollValue = 0;
            }
            this.dragIndex = overArea - 1 + scrollValue;
            this.dragStart = this.getMouseValue(event);
            this.dragIndexStartingSize = 0;
            this.detachChain();
        } else if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        var isEnabled = this.isEnabled(grid);
        if (isEnabled && this.dragIndex > -2) {
            this.cursor = null;
            this.dragIndex = -2;

            event.primitiveEvent.stopPropagation();
            //delay here to give other events a chance to be dropped
            var self = this;
            grid.synchronizeScrollingBoundries();
            setTimeout(function() {
                self.attachChain();
            }, 200);
        } else if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseMove: function(grid, event) {
        if (this.dragIndex > -2) {
            return;
        }
        this.cursor = null;
        if (this.next) {
            this.next.handleMouseMove(grid, event);
        }
        this.checkForAreaResizeCursorChange(grid, event);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc fill this in
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    checkForAreaResizeCursorChange: function(grid, event) {
        var isEnabled = this.isEnabled(grid);
        if (isEnabled && this.overAreaDivider(grid, event) > -1 && this.isFirstFixedOtherArea(grid, event)) {
            this.cursor = this.getCursorName();
        } else {
            this.cursor = null;
        }

    },

    /**
     * @param {Hypergrid} grid
     * @returns {number}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    getFixedAreaCount: function(grid) {
        var count = grid.getFixedColumnCount() + (grid.isShowRowNumbers() ? 1 : 0) + (grid.hasHierarchyColumn() ? 1 : 0);
        return count;
    },

    /**
     * @param {Hypergrid} grid
     * @param event
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    handleDoubleClick: function(grid, event) {
        var isEnabled = this.isEnabled(grid);
        var hasCursor = this.overAreaDivider(grid, event) > -1; //this.cursor !== null;
        var headerRowCount = grid.getHeaderRowCount();
        //var headerColCount = grid.getHeaderColumnCount();
        var gridCell = event.gridCell;
        if (isEnabled && hasCursor && (gridCell.y <= headerRowCount)) {
            grid.autosizeColumn(gridCell.x - 1);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    /**
     * @param {Hypergrid} grid
     * @returns {boolean}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    isEnabled: function(grid) {
        return true;
    }

});

module.exports = ColumnResizing;

},{"./Feature.js":107}],105:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * Extra msecs to avoid race condition with fincanvas's double click timer.
 * @type {number}
 * @defaultvalue 50
 * NOTE: 50 msecs seems to work well. 10 and even 25 proved insufficient in Chrome.
 * @private
 */
var RACE_TIME = 50;

/**
 * @constructor
 * @extends Feature
 */
var ColumnSelection = Feature.extend('ColumnSelection', {

    /**
     * The pixel location of the mouse pointer during a drag operation.
     * @type {window.fin.rectangular.Point}
     * @default null
     * @memberOf ColumnSelection.prototype
     */
    currentDrag: null,

    /**
     * The cell coordinates of the where the mouse pointer is during a drag operation.
     * @type {Object}
     * @default null
     * @memberOf ColumnSelection.prototype
     */
    lastDragCell: null,

    /**
     * a millisecond value representing the previous time an autoscroll started
     * @type {number}
     * @default 0
     * @memberOf ColumnSelection.prototype
     */
    sbLastAuto: 0,

    /**
     * a millisecond value representing the time the current autoscroll started
     * @type {number}
     * @default 0
     * @memberOf ColumnSelection.prototype
     */
    sbAutoStart: 0,


    /**
     * @memberOf ColumnSelection.prototype
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        if (this.dragging) {
            this.dragging = false;
        }
        if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    handleDoubleClick: function(grid, event) {
        if (this.doubleClickTimer) {
            clearTimeout(this.doubleClickTimer); // prevent mouseDown from continuing
            this.doubleClickTimer = undefined;
        }
        if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        if (this.doubleClickTimer) {
            return;
        }

        if ((!grid.isColumnSelection() || event.mousePoint.y < 5) && this.next) {
            this.next.handleMouseDown(grid, event);
            return;
        }

        var isRightClick = event.primitiveEvent.detail.isRightClick;
        var cell = event.gridCell;
        var viewCell = event.viewPoint;
        var dx = cell.x;
        var dy = cell.y;

        var isHeader = grid.isShowHeaderRow() && dy === 0 && dx !== -1;

        if (isRightClick || !isHeader) {
            if (this.next) {
                this.next.handleMouseDown(grid, event);
            }
        } else {
            // HOLD OFF WHILE WAITING FOR DOUBLE-CLICK
            this.doubleClickTimer = setTimeout(function() {
                this.doubleClickTimer = undefined;
                var numFixedColumns = grid.getFixedColumnCount();

                //if we are in the fixed area do not apply the scroll values
                //check both x and y values independently
                if (viewCell.x < numFixedColumns) {
                    dx = viewCell.x;
                }

                var dCell = grid.newPoint(dx, 0);

                var primEvent = event.primitiveEvent;
                var keys = primEvent.detail.keys;
                this.dragging = true;
                this.extendSelection(grid, dCell, keys);
            }.bind(this), grid.resolveProperty('doubleClickDelay') + RACE_TIME);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {

        if ((!grid.isColumnSelection() || this.isColumnDragging(grid)) && this.next) {
            this.next.handleMouseDrag(grid, event);
            return;
        }

        var isRightClick = event.primitiveEvent.detail.isRightClick;

        if (isRightClick || !this.dragging) {
            if (this.next) {
                this.next.handleMouseDrag(grid, event);
            }
        } else {

            var numFixedColumns = grid.getFixedColumnCount();

            var cell = event.gridCell;
            var viewCell = event.viewPoint;
            var dx = cell.x;
            var dy = cell.y;

            //if we are in the fixed area do not apply the scroll values
            //check both x and y values independently
            if (viewCell.x < numFixedColumns) {
                dx = viewCell.x;
            }

            var dCell = grid.newPoint(dx, dy);

            var primEvent = event.primitiveEvent;
            this.currentDrag = primEvent.detail.mouse;
            this.lastDragCell = dCell;

            this.checkDragScroll(grid, this.currentDrag);
            this.handleMouseDragCellSelection(grid, dCell, primEvent.detail.keys);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleKeyDown: function(grid, event) {
        var handler;
        if (
            grid.getLastSelectionType() === 'column' &&
            (handler = this['handle' + event.detail.char])
        ) {
            handler.call(this, grid, event.detail);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc Handle a mousedrag selection
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    handleMouseDragCellSelection: function(grid, gridCell, keys) {
        var x = gridCell.x;
        //            var previousDragExtent = grid.getDragExtent();
        var mouseDown = grid.getMouseDown();

        var newX = x - mouseDown.x;
        //var newY = y - mouseDown.y;

        // if (previousDragExtent.x === newX && previousDragExtent.y === newY) {
        //     return;
        // }

        grid.clearMostRecentColumnSelection();

        grid.selectColumn(mouseDown.x, x);
        grid.setDragExtent(grid.newPoint(newX, 0));

        grid.repaint();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc this checks while were dragging if we go outside the visible bounds, if so, kick off the external autoscroll check function (above)
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     */
    checkDragScroll: function(grid, mouse) {
        if (!grid.resolveProperty('scrollingEnabled')) {
            return;
        }
        var b = grid.getDataBounds();
        var inside = b.contains(mouse);
        if (inside) {
            if (grid.isScrollingNow()) {
                grid.setScrollingNow(false);
            }
        } else if (!grid.isScrollingNow()) {
            grid.setScrollingNow(true);
            this.scrollDrag(grid);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc this function makes sure that while we are dragging outside of the grid visible bounds, we srcroll accordingly
     * @param {Hypergrid} grid
     */
    scrollDrag: function(grid) {

        if (!grid.isScrollingNow()) {
            return;
        }

        var lastDragCell = this.lastDragCell;
        var b = grid.getDataBounds();
        var xOffset = 0;
        var yOffset = 0;

        var numFixedColumns = grid.getFixedColumnCount();
        var numFixedRows = grid.getFixedRowCount();

        var dragEndInFixedAreaX = lastDragCell.x < numFixedColumns;
        var dragEndInFixedAreaY = lastDragCell.y < numFixedRows;

        if (this.currentDrag.x < b.origin.x) {
            xOffset = -1;
        }

        if (this.currentDrag.x > b.origin.x + b.extent.x) {
            xOffset = 1;
        }

        var dragCellOffsetX = xOffset;
        var dragCellOffsetY = yOffset;

        if (dragEndInFixedAreaX) {
            dragCellOffsetX = 0;
        }

        if (dragEndInFixedAreaY) {
            dragCellOffsetY = 0;
        }

        this.lastDragCell = lastDragCell.plusXY(dragCellOffsetX, dragCellOffsetY);
        grid.scrollBy(xOffset, yOffset);
        this.handleMouseDragCellSelection(grid, lastDragCell, []); // update the selection
        grid.repaint();
        setTimeout(this.scrollDrag.bind(this, grid), 25);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc extend a selection or create one if there isnt yet
     * @param {Hypergrid} grid
     * @param {Object} gridCell - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    extendSelection: function(grid, gridCell, keys) {
        grid.stopEditing();
        //var hasCTRL = keys.indexOf('CTRL') !== -1;
        var hasSHIFT = keys.indexOf('SHIFT') !== -1;

        // var scrollTop = grid.getVScrollValue();
        // var scrollLeft = grid.getHScrollValue();

        // var numFixedColumns = 0;//grid.getFixedColumnCount();
        // var numFixedRows = 0;//grid.getFixedRowCount();

        var mousePoint = grid.getMouseDown();
        var x = gridCell.x; // - numFixedColumns + scrollLeft;
        var y = gridCell.y; // - numFixedRows + scrollTop;

        //were outside of the grid do nothing
        if (x < 0 || y < 0) {
            return;
        }

        //we have repeated a click in the same spot deslect the value from last time
        // if (mousePoint && x === mousePoint.x && y === mousePoint.y) {
        //     grid.clearSelections();
        //     grid.popMouseDown();
        //     grid.repaint();
        //     return;
        // }

        // if (!hasCTRL && !hasSHIFT) {
        //     grid.clearSelections();
        // }

        if (hasSHIFT) {
            grid.clearMostRecentColumnSelection();
            grid.selectColumn(x, mousePoint.x);
            grid.setDragExtent(grid.newPoint(x - mousePoint.x, 0));
        } else {
            grid.toggleSelectColumn(x, keys);
            grid.setMouseDown(grid.newPoint(x, y));
            grid.setDragExtent(grid.newPoint(0, 0));
        }
        grid.repaint();
    },


    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     */
    handleDOWNSHIFT: function(grid) {},

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUPSHIFT: function(grid) {},

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFTSHIFT: function(grid) {
        this.moveShiftSelect(grid, -1);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHTSHIFT: function(grid) {
        this.moveShiftSelect(grid, 1);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleDOWN: function(grid) {

        // var mouseCorner = grid.getMouseDown().plus(grid.getDragExtent());
        // var maxRows = grid.getRowCount() - 1;

        // var newX = mouseCorner.x;
        // var newY = grid.getHeaderRowCount() + grid.getVScrollValue();

        // newY = Math.min(maxRows, newY);

        // grid.clearSelections();
        // grid.select(newX, newY, 0, 0);
        // grid.setMouseDown(new grid.rectangular.Point(newX, newY));
        // grid.setDragExtent(new grid.rectangular.Point(0, 0));

        // grid.repaint();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUP: function(grid) {},

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFT: function(grid) {
        this.moveSingleSelect(grid, -1);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHT: function(grid) {
        this.moveSingleSelect(grid, 1);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc If we are holding down the same navigation key, accelerate the increment we scroll
     * #### returns: integer
     */
    getAutoScrollAcceleration: function() {
        var count = 1;
        var elapsed = this.getAutoScrollDuration() / 2000;
        count = Math.max(1, Math.floor(elapsed * elapsed * elapsed * elapsed));
        return count;
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc set the start time to right now when we initiate an auto scroll
     */
    setAutoScrollStartTime: function() {
        this.sbAutoStart = Date.now();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc update the autoscroll start time if we haven't autoscrolled within the last 500ms otherwise update the current autoscroll time
     */
    pingAutoScroll: function() {
        var now = Date.now();
        if (now - this.sbLastAuto > 500) {
            this.setAutoScrollStartTime();
        }
        this.sbLastAuto = Date.now();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc answer how long we have been auto scrolling
     * #### returns: integer
     */
    getAutoScrollDuration: function() {
        if (Date.now() - this.sbLastAuto > 500) {
            return 0;
        }
        return Date.now() - this.sbAutoStart;
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc Augment the most recent selection extent by (offsetX,offsetY) and scroll if necessary.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveShiftSelect: function(grid, offsetX) {

        var maxColumns = grid.getColumnCount() - 1;

        var maxViewableColumns = grid.getVisibleColumns() - 1;

        if (!grid.resolveProperty('scrollingEnabled')) {
            maxColumns = Math.min(maxColumns, maxViewableColumns);
        }

        var origin = grid.getMouseDown();
        var extent = grid.getDragExtent();

        var newX = extent.x + offsetX;
        //var newY = grid.getRowCount();

        newX = Math.min(maxColumns - origin.x, Math.max(-origin.x, newX));

        grid.clearMostRecentColumnSelection();
        grid.selectColumn(origin.x, origin.x + newX);

        grid.setDragExtent(grid.newPoint(newX, 0));

        if (grid.insureModelColIsVisible(newX + origin.x, offsetX)) {
            this.pingAutoScroll();
        }

        grid.repaint();

    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc Replace the most recent selection with a single cell selection that is moved (offsetX,offsetY) from the previous selection extent.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveSingleSelect: function(grid, offsetX) {

        var maxColumns = grid.getColumnCount() - 1;

        var maxViewableColumns = grid.getVisibleColumnsCount() - 1;

        if (!grid.resolveProperty('scrollingEnabled')) {
            maxColumns = Math.min(maxColumns, maxViewableColumns);
        }

        var mouseCorner = grid.getMouseDown().plus(grid.getDragExtent());

        var newX = mouseCorner.x + offsetX;
        //var newY = grid.getRowCount();

        newX = Math.min(maxColumns, Math.max(0, newX));

        grid.clearSelections();
        grid.selectColumn(newX);
        grid.setMouseDown(grid.newPoint(newX, 0));
        grid.setDragExtent(grid.newPoint(0, 0));

        if (grid.insureModelColIsVisible(newX, offsetX)) {
            this.pingAutoScroll();
        }

        grid.repaint();

    },

    isColumnDragging: function(grid) {
        var dragger = grid.lookupFeature('ColumnMoving');
        if (!dragger) {
            return false;
        }
        var isActivated = dragger.dragging && !this.dragging;
        return isActivated;
    }

});

module.exports = ColumnSelection;

},{"./Feature.js":107}],106:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 * @extends Feature
 */
var ColumnSorting = Feature.extend('ColumnSorting', {

    /**
     * @memberOf ColumnSorting.prototype
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */

    handleDoubleClick: function(grid, event) {
        var gridCell = event.gridCell;
        if (
            grid.isShowHeaderRow() &&
            gridCell.y === 0 &&
            gridCell.x !== -1 &&
            !grid.behavior.getColumnProperties(gridCell.x).unsortable
        ) {
            var keys = event.primitiveEvent.detail.keys;
            grid.toggleSort(gridCell.x, keys);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    /**
     * @memberOf ColumnSorting.prototype
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseMove: function(grid, event) {
        var gridCell = event.gridCell;
        if (
            this.isFixedRow(grid, event) &&
            gridCell.y < 1 &&
            !grid.behavior.getColumnProperties(gridCell.x).unsortable
        ) {
            this.cursor = 'pointer';
        } else {
            this.cursor = null;
        }
        if (this.next) {
            this.next.handleMouseMove(grid, event);
        }
    }

});

module.exports = ColumnSorting;

},{"./Feature.js":107}],107:[function(require,module,exports){
'use strict';

var Base = require('../lib/Base');

/**
 * Instances of features are connected to one another to make a chain of responsibility for handling all the input to the hypergrid.
 * @constructor
 */
var Feature = Base.extend('Feature', {

    /**
     * the next feature to be given a chance to handle incoming events
     * @type {Feature}
     * @default null
     * @memberOf Feature.prototype
     */
    next: null,

    /**
     * a temporary holding field for my next feature when I'm in a disconnected state
     * @type {Feature}
     * @default null
     * @memberOf Feature.prototype
     */
    detached: null,

    /**
     * the cursor I want to be displayed
     * @type {string}
     * @default null
     * @memberOf Feature.prototype
     */
    cursor: null,

    /**
     * the cell location where the cursor is currently
     * @type {Point}
     * @default null
     * @memberOf Feature.prototype
     */
    currentHoverCell: null,

    /**
     * @memberOf Feature.prototype
     * @desc set my next field, or if it's populated delegate to the feature in my next field
     * @param {Feature} nextFeature - this is how we build the chain of responsibility
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    setNext: function(nextFeature) {
        if (this.next) {
            this.next.setNext(nextFeature);
        } else {
            this.next = nextFeature;
            this.detached = nextFeature;
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc disconnect my child
     */
    detachChain: function() {
        this.next = null;
    },

    /**
     * @memberOf Feature.prototype
     * @desc reattach my child from the detached reference
     */
    attachChain: function() {
        this.next = this.detached;
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle mouse move down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseMove: function(grid, event) {
        if (this.next) {
            this.next.handleMouseMove(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseExit: function(grid, event) {
        if (this.next) {
            this.next.handleMouseExit(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseEnter: function(grid, event) {
        if (this.next) {
            this.next.handleMouseEnter(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseDown: function(grid, event) {
        if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseUp: function(grid, event) {
        if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleKeyDown: function(grid, event) {
        if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleKeyUp: function(grid, event) {
        if (this.next) {
            this.next.handleKeyUp(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleWheelMoved: function(grid, event) {
        if (this.next) {
            this.next.handleWheelMoved(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleDoubleClick: function(grid, event) {
        if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleClick: function(grid, event) {
        if (this.next) {
            this.next.handleClick(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseDrag: function(grid, event) {
        if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleContextMenu: function(grid, event) {
        if (this.next) {
            this.next.handleContextMenu(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc toggle the column picker
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    moveSingleSelect: function(grid, x, y) {
        if (this.next) {
            this.next.moveSingleSelect(grid, x, y);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFixedRow: function(grid, event) {
        return event.viewPoint.y < grid.getFixedRowCount();
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFirstFixedRow: function(grid, event) {
        return event.viewPoint.y < 1;
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFixedColumn: function(grid, event) {
        return event.viewPoint.x < grid.getFixedColumnCount();
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFirstFixedColumn: function(grid, event) {
        return event.viewPoint.x === 0;
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isTopLeft: function(grid, event) {
        return this.isFixedRow(grid, event) && this.isFixedColumn(grid, event);
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    setCursor: function(grid) {
        if (this.next) {
            this.next.setCursor(grid);
        }
        if (this.cursor) {
            grid.beCursor(this.cursor);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    initializeOn: function(grid) {
        if (this.next) {
            this.next.initializeOn(grid);
        }
    }

});

module.exports = Feature;

},{"../lib/Base":118}],108:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 */
var Filters = Feature.extend('Filters', {

    handleDoubleClick: function(grid, event) {
        if (grid.isFilterRow(event.gridCell.y)) {
            grid.onEditorActivate(event);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    handleClick: function(grid, event) {
        if (grid.isFilterRow(event.gridCell.y)) {
            grid.onEditorActivate(event);
        } else if (this.next) {
            this.next.handleClick(grid, event);
        }
    }

});

module.exports = Filters;

},{"./Feature.js":107}],109:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

var commands = {
    PAGEDOWN: function(grid) { grid.pageDown(); },
    PAGEUP: function(grid) { grid.pageUp(); },
    PAGELEFT: function(grid) { grid.pageLeft(); },
    PAGERIGHT: function(grid) { grid.pageRight(); }
};

/**
 * @constructor
 */
var KeyPaging = Feature.extend('KeyPaging', {

    /**
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf KeyPaging.prototype
     */
    handleKeyDown: function(grid, event) {
        var func = commands[event.detail.char];
        if (func) {
            func(grid);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    }

});

module.exports = KeyPaging;

},{"./Feature.js":107}],110:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 */
var OnHover = Feature.extend('OnHover', {

    /**
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf OnHover.prototype
     */
    handleMouseMove: function(grid, event) {
        var currentHoverCell = grid.getHoverCell();
        if (!event.gridCell.equals(currentHoverCell)) {
            if (currentHoverCell) {
                this.handleMouseExit(grid, currentHoverCell);
            }
            this.handleMouseEnter(grid, event);
            grid.setHoverCell(event.gridCell);
        } else if (this.next) {
            this.next.handleMouseMove(grid, event);
        }
    }

});

module.exports = OnHover;

},{"./Feature.js":107}],111:[function(require,module,exports){
'use strict';

var ColumnResizing = require('./ColumnResizing');

/**
 * @constructor
 * @extends ColumnResizing
 */
var RowResizing = ColumnResizing.extend('RowResizing', {

    /**
     * the index of the row/column we are dragging
     * @type {number}
     * @default -1
     * @memberOf RowResizing.prototype
     */
    dragArea: -1,

    /**
     * the pixel location of the where the drag was initiated
     * @type {number}
     * @default -1
     * @memberOf RowResizing.prototype
     */
    dragStart: -1,

    /**
     * the starting width/height of the row/column we are dragging
     * @type {number}
     * @default -1
     * @memberOf RowResizing.prototype
     */
    dragAreaStartingSize: -1,

    /**
     * @memberOf RowResizing.prototype
     * @desc get the mouse x,y coordinate
     * @returns {number}
     * @param {MouseEvent} event - the mouse event to query
     */
    getMouseValue: function(event) {
        return event.primitiveEvent.detail.mouse.y;
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc get the grid cell x,y coordinate
     * @returns {number}
     * @param {Point} gridCell
     */
    getGridCellValue: function(gridCell) {
        return gridCell.x;
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the grids x,y scroll value
     * @returns {number}
     * @param {Hypergrid} grid
     */
    getScrollValue: function(grid) {
        return grid.getVScrollValue();
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the width/height of the row/column of interest
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     */
    getAreaSize: function(grid, index) {
        return grid.getRowHeight(index);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc set the width/height of the row/column at index
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     * @param {number} value - the width/height to set to
     */
    setAreaSize: function(grid, index, value) {
        grid.setRowHeight(index, value);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc returns the index of which divider I'm over
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    overAreaDivider: function(grid, event) {
        return grid.overRowDivider(event);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc am I over the column/row area
     * @returns {boolean}
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFirstFixedOtherArea: function(grid, event) {
        return this.isFirstFixedColumn(grid, event);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the cursor name
     * @returns {string}
     */
    getCursorName: function() {
        return 'row-resize';
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the recently rendered area's width/height
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     */
    getPreviousAbsoluteSize: function(grid, index) {
        return grid.getRenderedHeight(index);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the fixed area rows/columns count
     * @returns {number}
     * @param {Hypergrid} grid
     */
    getOtherFixedAreaCount: function(grid) {
        return grid.getFixedColumnCount();
    },

    /**
     *
     * @param {Hypergrid} grid
     * @returns {number}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    getFixedAreaCount: function(grid) {
        return grid.getFixedRowCount() + grid.getHeaderRowCount();
    },

    /**
     *
     * @param {Hypergrid} grid
     * @returns {boolean}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    isEnabled: function(grid) {
        return grid.isRowResizeable();
    }

});

module.exports = RowResizing;

},{"./ColumnResizing":104}],112:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 */
var RowSelection = Feature.extend('RowSelection', {

    /**
     * The pixel location of the mouse pointer during a drag operation.
     * @type {Point}
     * @default null
     * @memberOf RowSelection.prototype
     */
    currentDrag: null,

    /**
     * The cell coordinates of the where the mouse pointer is during a drag operation.
     * @type {Object}
     * @default null
     * @memberOf RowSelection.prototype
     */
    lastDragCell: null,

    /**
     * a millisecond value representing the previous time an autoscroll started
     * @type {number}
     * @default 0
     * @memberOf RowSelection.prototype
     */
    sbLastAuto: 0,

    /**
     * a millisecond value representing the time the current autoscroll started
     * @type {number}
     * @default 0
     * @memberOf RowSelection.prototype
     */
    sbAutoStart: 0,

    dragArmed: false,

    /**
     * @memberOf RowSelection.prototype
     * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        if (this.dragArmed) {
            this.dragArmed = false;
            //global row selection
            if (event.gridCell.x === -1 && event.gridCell.y === 0) {
                grid.toggleSelectAllRows();
            }
            grid.fireSyntheticRowSelectionChangedEvent();
        } else if (this.dragging) {
            this.dragging = false;
            grid.fireSyntheticRowSelectionChangedEvent();
        } else if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc * @desc Handle this event down the feature chain of responsibility.
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {

        var isRightClick = event.primitiveEvent.detail.isRightClick;
        var cell = event.gridCell;
        var viewCell = event.viewPoint;
        var dx = cell.x;
        var dy = cell.y;


        var isHeader = grid.isShowRowNumbers() && dx < 0;

        if (!grid.isRowSelection() || isRightClick || !isHeader) {
            if (this.next) {
                this.next.handleMouseDown(grid, event);
            }
        } else {

            var numFixedRows = grid.getFixedRowCount();

            //if we are in the fixed area do not apply the scroll values
            //check both x and y values independently
            if (viewCell.y < numFixedRows) {
                dy = viewCell.y;
            }

            var dCell = grid.newPoint(0, dy);

            var primEvent = event.primitiveEvent;
            var keys = primEvent.detail.keys;
            this.dragArmed = true;
            this.extendSelection(grid, dCell, keys);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {
        var isRightClick = event.primitiveEvent.detail.isRightClick;

        if (!this.dragArmed || !grid.isRowSelection() || isRightClick) {
            if (this.next) {
                this.next.handleMouseDrag(grid, event);
            }
        } else {
            this.dragging = true;
            var numFixedRows = grid.getFixedRowCount();

            var cell = event.gridCell;
            var viewCell = event.viewPoint;
            //var dx = cell.x;
            var dy = cell.y;

            //if we are in the fixed area do not apply the scroll values
            //check both x and y values independently
            if (viewCell.y < numFixedRows) {
                dy = viewCell.y;
            }

            var dCell = grid.newPoint(0, dy);

            var primEvent = event.primitiveEvent;
            this.currentDrag = primEvent.detail.mouse;
            this.lastDragCell = dCell;

            this.checkDragScroll(grid, this.currentDrag);
            this.handleMouseDragCellSelection(grid, dCell, primEvent.detail.keys);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleKeyDown: function(grid, event) {
        var handler;
        if (
            grid.getLastSelectionType() === 'row' &&
            (handler = this['handle' + event.detail.char])
        ) {
            handler.call(this, grid, event.detail);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc Handle a mousedrag selection
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    handleMouseDragCellSelection: function(grid, gridCell, keys) {
        var y = gridCell.y;
        //            var previousDragExtent = grid.getDragExtent();
        var mouseDown = grid.getMouseDown();

        var newY = y - mouseDown.y;
        //var newY = y - mouseDown.y;

        // if (previousDragExtent.x === newX && previousDragExtent.y === newY) {
        //     return;
        // }

        grid.clearMostRecentRowSelection();

        grid.selectRow(mouseDown.y, y);
        grid.setDragExtent(grid.newPoint(0, newY));

        grid.repaint();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc this checks while were dragging if we go outside the visible bounds, if so, kick off the external autoscroll check function (above)
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     */
    checkDragScroll: function(grid, mouse) {
        if (!grid.resolveProperty('scrollingEnabled')) {
            return;
        }
        var b = grid.getDataBounds();
        var inside = b.contains(mouse);
        if (inside) {
            if (grid.isScrollingNow()) {
                grid.setScrollingNow(false);
            }
        } else if (!grid.isScrollingNow()) {
            grid.setScrollingNow(true);
            this.scrollDrag(grid);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc this function makes sure that while we are dragging outside of the grid visible bounds, we srcroll accordingly
     * @param {Hypergrid} grid
     */
    scrollDrag: function(grid) {
        if (!grid.isScrollingNow()) {
            return;
        }

        var lastDragCell = this.lastDragCell;
        var b = grid.getDataBounds();
        var xOffset = 0;
        var yOffset = 0;

        var numFixedColumns = grid.getFixedColumnCount();
        var numFixedRows = grid.getFixedRowCount();

        var dragEndInFixedAreaX = lastDragCell.x < numFixedColumns;
        var dragEndInFixedAreaY = lastDragCell.y < numFixedRows;

        if (this.currentDrag.y < b.origin.y) {
            yOffset = -1;
        }

        if (this.currentDrag.y > b.origin.y + b.extent.y) {
            yOffset = 1;
        }

        var dragCellOffsetX = xOffset;
        var dragCellOffsetY = yOffset;

        if (dragEndInFixedAreaX) {
            dragCellOffsetX = 0;
        }

        if (dragEndInFixedAreaY) {
            dragCellOffsetY = 0;
        }

        this.lastDragCell = lastDragCell.plusXY(dragCellOffsetX, dragCellOffsetY);
        grid.scrollBy(xOffset, yOffset);
        this.handleMouseDragCellSelection(grid, lastDragCell, []); // update the selection
        grid.repaint();
        setTimeout(this.scrollDrag.bind(this, grid), 25);
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc extend a selection or create one if there isnt yet
     * @param {Hypergrid} grid
     * @param {Object} gridCell - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    extendSelection: function(grid, gridCell, keys) {
        grid.stopEditing();
        //var hasCTRL = keys.indexOf('CTRL') !== -1;
        var hasSHIFT = keys.indexOf('SHIFT') !== -1;

        var mousePoint = grid.getMouseDown();
        var x = gridCell.x; // - numFixedColumns + scrollLeft;
        var y = gridCell.y; // - numFixedRows + scrollTop;

        //were outside of the grid do nothing
        if (x < 0 || y < 0) {
            return;
        }

        if (hasSHIFT) {
            grid.clearMostRecentRowSelection();
            grid.selectRow(y, mousePoint.y);
            grid.setDragExtent(grid.newPoint(0, y - mousePoint.y));
        } else {
            grid.toggleSelectRow(y, keys);
            grid.setMouseDown(grid.newPoint(x, y));
            grid.setDragExtent(grid.newPoint(0, 0));
        }
        grid.repaint();
    },


    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     */
    handleDOWNSHIFT: function(grid) {
        this.moveShiftSelect(grid, 1);
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUPSHIFT: function(grid) {
        this.moveShiftSelect(grid, -1);
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFTSHIFT: function(grid) {},

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHTSHIFT: function(grid) {},

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleDOWN: function(grid) {
        this.moveSingleSelect(grid, 1);
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUP: function(grid) {
        this.moveSingleSelect(grid, -1);
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFT: function(grid) {},

    /**
     * @memberOf RowSelection.prototype
     * @desc handle this event
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHT: function(grid) {

        var mouseCorner = grid.getMouseDown().plus(grid.getDragExtent());
        var maxColumns = grid.getColumnCount() - 1;

        var newX = grid.getHeaderColumnCount() + grid.getHScrollValue();
        var newY = mouseCorner.y;

        newX = Math.min(maxColumns, newX);

        grid.clearSelections();
        grid.select(newX, newY, 0, 0);
        grid.setMouseDown(grid.newPoint(newX, newY));
        grid.setDragExtent(grid.newPoint(0, 0));

        grid.repaint();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc If we are holding down the same navigation key, accelerate the increment we scroll
     * #### returns: integer
     */
    getAutoScrollAcceleration: function() {
        var count = 1;
        var elapsed = this.getAutoScrollDuration() / 2000;
        count = Math.max(1, Math.floor(elapsed * elapsed * elapsed * elapsed));
        return count;
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc set the start time to right now when we initiate an auto scroll
     */
    setAutoScrollStartTime: function() {
        this.sbAutoStart = Date.now();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc update the autoscroll start time if we haven't autoscrolled within the last 500ms otherwise update the current autoscroll time
     */
    pingAutoScroll: function() {
        var now = Date.now();
        if (now - this.sbLastAuto > 500) {
            this.setAutoScrollStartTime();
        }
        this.sbLastAuto = Date.now();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc answer how long we have been auto scrolling
     * #### returns: integer
     */
    getAutoScrollDuration: function() {
        if (Date.now() - this.sbLastAuto > 500) {
            return 0;
        }
        return Date.now() - this.sbAutoStart;
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc Augment the most recent selection extent by (offsetX,offsetY) and scroll if necessary.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveShiftSelect: function(grid, offsetY) {

        var maxRows = grid.getRowCount() - 1;

        var maxViewableRows = grid.getVisibleRows() - 1;

        if (!grid.resolveProperty('scrollingEnabled')) {
            maxRows = Math.min(maxRows, maxViewableRows);
        }

        var origin = grid.getMouseDown();
        var extent = grid.getDragExtent();

        var newY = extent.y + offsetY;
        //var newY = grid.getRowCount();

        newY = Math.min(maxRows - origin.y, Math.max(-origin.y, newY));

        grid.clearMostRecentRowSelection();
        grid.selectRow(origin.y, origin.y + newY);

        grid.setDragExtent(grid.newPoint(0, newY));

        if (grid.insureModelRowIsVisible(newY + origin.y, offsetY)) {
            this.pingAutoScroll();
        }

        grid.fireSyntheticRowSelectionChangedEvent();
        grid.repaint();

    },

    /**
     * @memberOf RowSelection.prototype
     * @desc Replace the most recent selection with a single cell selection that is moved (offsetX,offsetY) from the previous selection extent.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveSingleSelect: function(grid, offsetY) {

        var maxRows = grid.getRowCount() - 1;

        var maxViewableRows = grid.getVisibleRowsCount() - 1;

        if (!grid.resolveProperty('scrollingEnabled')) {
            maxRows = Math.min(maxRows, maxViewableRows);
        }

        var mouseCorner = grid.getMouseDown().plus(grid.getDragExtent());

        var newY = mouseCorner.y + offsetY;
        //var newY = grid.getRowCount();

        newY = Math.min(maxRows, Math.max(0, newY));

        grid.clearSelections();
        grid.selectRow(newY);
        grid.setMouseDown(grid.newPoint(0, newY));
        grid.setDragExtent(grid.newPoint(0, 0));

        if (grid.insureModelRowIsVisible(newY, offsetY)) {
            this.pingAutoScroll();
        }

        grid.fireSyntheticRowSelectionChangedEvent();
        grid.repaint();

    },

    isSingleRowSelection: function() {
        return true;
    }

});

module.exports = RowSelection;

},{"./Feature.js":107}],113:[function(require,module,exports){
'use strict';

var Feature = require('./Feature.js');

/**
 * @constructor
 */
var ThumbwheelScrolling = Feature.extend('ThumbwheelScrolling', {

    /**
     * @memberOf ThumbwheelScrolling.prototype
     * @desc handle this event down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleWheelMoved: function(grid, e) {
        if (!grid.resolveProperty('scrollingEnabled')) {
            return;
        }

        var primEvent = e.primitiveEvent,
            deltaX = Math.sign(primEvent.wheelDeltaX || -primEvent.deltaX),
            deltaY = Math.sign(primEvent.wheelDeltaY || -primEvent.deltaY);

        if (deltaX || deltaY) {
            grid.scrollBy(
                -deltaX || 0, // 0 if NaN
                -deltaY || 0
            );
        }
    }

});


module.exports = ThumbwheelScrolling;

},{"./Feature.js":107}],114:[function(require,module,exports){
'use strict';

module.exports = {
    Feature: require('./Feature'), // abstract base class
    CellClick: require('./CellClick'),
    CellEditing: require('./CellEditing'),
    CellSelection: require('./CellSelection'),
    ColumnAutosizing: require('./ColumnAutosizing'),
    ColumnMoving: require('./ColumnMoving'),
    ColumnResizing: require('./ColumnResizing'),
    ColumnSelection: require('./ColumnSelection'),
    ColumnSorting: require('./ColumnSorting'),
    Filters: require('./Filters'),
    KeyPaging: require('./KeyPaging'),
    OnHover: require('./OnHover'),
    ColumnPicker: require('./ColumnPicker'),
    RowResizing: require('./RowResizing'),
    RowSelection: require('./RowSelection'),
    ThumbwheelScrolling: require('./ThumbwheelScrolling')
};

},{"./CellClick":98,"./CellEditing":99,"./CellSelection":100,"./ColumnAutosizing":101,"./ColumnMoving":102,"./ColumnPicker":103,"./ColumnResizing":104,"./ColumnSelection":105,"./ColumnSorting":106,"./Feature":107,"./Filters":108,"./KeyPaging":109,"./OnHover":110,"./RowResizing":111,"./RowSelection":112,"./ThumbwheelScrolling":113}],115:[function(require,module,exports){
'use strict';

var popMenu = require('pop-menu');

/**
 * @constructor
 * @summary Build, organize, and sort a column schema list from a list of columns.
 * @desc FilterTree requires a column schema. As a fallback when you don't have a column schema of your own, the string array returned by behavior.dataModel.getFields() would work as is. This factory object will do a little better than that, taking Hypergrid's column array and creating a more textured column schema, including column aliases and types.
 *
 * CAVEAT: Set up the schema completely before instantiating your filter state. Filter-tree uses the schema (in part) to generate column selection drop-downs as part of its "query builder" UI. Note that the UI is *not* automatically updated if you change the schema later.
 *
 * @param {Column[]} columns
 *
 * @property {menuItem[]} schema - This is the output produced by the factory.
 */
function ColumnSchemaFactory(columns, findOptions) {
    this.schema = columns.map(function(column) {
        var item = {
            name: column.name,
            alias: column.header,
            type: column.getType()
        };

        if (column.calculator) {
            item.calculator = column.calculator;
        }

        return item;
    });
}

ColumnSchemaFactory.prototype = {

    constructor: ColumnSchemaFactory.prototype.constructor,

    /**
     * Organize schema into submenus.
     * @param {RegExp} columnGroupsRegex - Schema names or aliases that match this are put into a submenu.
     * @param {string} [options.key='name'] - Must be either 'name' or 'alias'.
     */
    organize: function(columnGroupsRegex, options) {
        var key = options && options.key || 'name',
            submenus = {},
            menu = [];

        this.schema.forEach(function(item) {
            var value = item[key],
                group = value.match(columnGroupsRegex);
            if (group) {
                group = group[0];
                if (!(group in submenus)) {
                    submenus[group] = {
                        label: group.toUpperCase(),
                        submenu: []
                    };
                }
                submenus[group].submenu.push(item);
            } else {
                menu.push(item);
            }
        });

        for (var submenuName in submenus) {
            menu.push(submenus[submenuName]);
        }

        this.schema = menu;
    },

    lookup: function(findOptions, value) {
        var args = Array.prototype.slice.call(arguments);
        return popMenu.lookup.apply(this.schema, args);
    },

    walk: function(iteratee) {
        return popMenu.walk.call(this.schema, iteratee);
    },

    /**
     * @summary Sort the schema.
     * @desc Walk the menu structure, sorting each submenu until finally the top-level menu is sorted.
     * @param {string} [prefix=''] - A submenu sort prefix:
     * * Omit to give no special treatment to submenus.
     * * Give `'\u0000'` to place all the submenus at the top of each enclosing submenu.
     * * Give `'\uffff'` to place all the submenus at the bottom of each enclosing submenu.
     */
    sort: function(prefix) {
        this.schema.sort(function recurse(a, b) {
            if (a.label && !a.sorted) {
                a.submenu.sort(recurse);
                a.sorted = true;
            }
            a = a.label ? prefix + a.label : a.alias || a.name || a;
            b = b.label ? prefix + b.label : b.alias || b.name || b;
            return a < b ? -1 : a > b ? 1 : 0;
        });
    }
};

module.exports = ColumnSchemaFactory;

},{"pop-menu":52}],116:[function(require,module,exports){
'use strict';

var _ = require('object-iterators');

var FilterTree = require('../Shared').FilterTree;
var ParserCQL = require('./parser-CQL');

// Add a property `menuModes` to the tree, defaulting to `operators` as the only active mode
FilterTree.Node.optionsSchema.menuModes = {
    default: {
        operators: 1
    }
};

function quote(text) {
    var qt = ParserCQL.qt;
    return qt + text.replace(new RegExp(qt, 'g'), qt + qt) + qt;
}

var likeDresses = [
    { regex: /^(NOT )?LIKE %(.+)%$/i, operator: 'contains' },
    { regex: /^(NOT )?LIKE (.+)%$/i, operator: 'begins' },
    { regex: /^(NOT )?LIKE %(.+)$/i, operator: 'ends' }
];
var regexEscapedLikePatternChars = /\[([_\[\]%])\]/g; // capture all _, [, ], and % chars enclosed in []
var regexLikePatternChar = /[_\[\]%]/; // find any _, [, ], and % chars NOT enclosed in []

// convert certain LIKE expressions to BEGINS, ENDS, CONTAINS
function convertLikeToPseudoOp(result) {
    likeDresses.find(function(dress) {
        var match = result.match(dress.regex);

        if (match) {
            // unescape all LIKE pattern chars escaped with brackets
            var not = (match[1] || '').toLowerCase(),
                operator = dress.operator,
                operand = match[2],
                operandWithoutEscapedChars = operand.replace(regexEscapedLikePatternChars, '');

            // if result has no actua remaining LIKE pattern chars, go with the conversion
            if (!regexLikePatternChar.test(operandWithoutEscapedChars)) {
                operand = operand.replace(regexEscapedLikePatternChars, '$1'); // unescape the escaped chars
                result = not + operator + ' ' + operand;
            }

            return true; // break out of loop
        }
    });

    return result;
}

var conditionalsCQL = new FilterTree.Conditionals();
conditionalsCQL.makeLIKE = function(beg, end, op, originalOp, c) {
    op = originalOp.toLowerCase();
    return op + ' ' + quote(c.operand);
};
conditionalsCQL.makeIN = function(op, c) {
    return op.toLowerCase() + ' (' + c.operand.replace(/\s*,\s*/g, ', ') + ')';
};
conditionalsCQL.make = function(op, c) {
    var numericOperand;
    op = op.toLowerCase();
    if (/\w/.test(op)) { op += ' '; }
    op += c.getType() === 'number' && !isNaN(numericOperand = Number(c.operand))
        ? numericOperand
        : quote(c.operand);
    return op;
};

// replace the default filter tree terminal node constructor with an extension of same
var CustomFilterLeaf = FilterTree.prototype.addEditor({
    getState: function getState(options) {
        var result,
            syntax = options && options.syntax;

        if (syntax === 'CQL') {
            result = this.getSyntax(conditionalsCQL);
            result = convertLikeToPseudoOp(result);
            var defaultOp = this.schema.lookup(this.column).defaultOp || this.root.parserCQL.defaultOp; // mimics logic in parser-CQL.js, line 110
            if (result.toUpperCase().indexOf(defaultOp) === 0) {
                result = result.substr(defaultOp.length);
            }
        } else {
            result = FilterTree.Leaf.prototype.getState.call(this, options);
        }

        return result;
    }
});

FilterTree.prototype.addEditor('Columns');

// Add some node templates by updating shared instance of FilterNode's templates. (OK to mutate shared instance; filter-tree not being used for anything else here. Alternatively, we could have instantiated a new Templates object for our DefaultFilter prototype, although this would only affect tree nodes, not leaf nodes, but that would be ok in this case since the additions below are tree node templates.)
_(FilterTree.Node.prototype.templates).extendOwn({
    columnFilter: [
        '<span class="filter-tree">',
        '   <strong><span>{2} </span></strong><br>',
        '   Match',
        '   <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-or">any</label>',
        '   <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-and">all</label>',
        '   <label><input type="radio" class="filter-tree-op-choice" name="treeOp{1}" value="op-nor">none</label>',
        '   of the following:',
        '   <select>',
        '       <option value="">New expression&hellip;</option>',
        '   </select>',
        '   <ol></ol>',
        '</span>'
    ]
        .join('\n'),

    columnFilters: [
        '<span class="filter-tree filter-tree-type-column-filters">',
        '   Match <strong>all</strong> of the following column filter subexpressions:',
        '   <ol></ol>',
        '</span>'
    ]
        .join('\n')
});

/** @constructor
 *
 * @desc This extension of FilterTree forces a specific tree structure.
 * See {@link makeNewRoot} for a description.
 *
 * See also {@tutorial filter-api}.
 *
 * @param {FilterTreeOptionsObject} options - You should provide a column schema. The easiest approach is to provide a schema for the entire filter tree through `options.schema`.
 *
 * Although not recommended, the column schema can also be embedded in the state object, either at the root, `options.state.schema`, or for any descendant node. For example, a separate schema could be provided for each expression or subexpression that need to render column list drop-downs.
 *
 * NOTE: If `options.state` is undefined, it is defined in `preInitialize()` as a new empty state scaffold (see {@link makeNewRoot}) with the two trunks to hold a table filter and column filters. Expressions and subexpressions can be added to this empty scaffold either programmatically or through the Query Builder UI.
 */

var DefaultFilter = FilterTree.extend('DefaultFilter', {
    preInitialize: function(options) {
        options = options || {};

        // Set up the default "Hyperfilter" profile (see function comments)
        var state = options.state = options.state || this.makeNewRoot();

        // Upon creation of a 'columnFilter' node, force the schema to the one column
        if ((options.type || state && state.type) === 'columnFilter') {
            this.schema = [
                options.parent.root.schema.lookup(state.children[0].column)
            ];
        }

        return [options];
    },

    initialize: function(options) {
        this.cache = {};

        if (!this.parent) {
            this.extractSubtrees();
        }
    },

    postInitialize: function(options) {
        if (this === this.root && !this.parserCQL) {
            this.parserCQL = new ParserCQL(this.conditionals.ops, {
                schema: this.schema,
                defaultOp: options.defaultColumnFilterOperator
            });
        }

        if (this.type === 'columnFilter') {
            this.dontPersist.schema = true;
        }
    },

    /**
     * Create convenience vars to reference the 2 root "Hyperfilter" nodes
     * @memberOf DefaultFilter.prototype
     */
    extractSubtrees: function() {
        var rootNodes = this.root.children;
        this.tableFilter = rootNodes[0];
        this.columnFilters = rootNodes[1];
    },

    /**
     * @summary Make a new empty Hypergrid filter tree state object.
     * @desc This function makes a new default state object as used by Hypergrid, a root with exactly two "trunks."
     *
     * > **Definition:** A *trunk* is defined as a child node with a truthy `keep` property, making this node immune to the usual pruning that would occur when it has no child nodes of its own. To be a true trunk, all ancestor nodes to be trunks as well. Note that the root is a natural trunk; it does not require a `keep` property.
     *
     * The two trunks of the Hypergrid filter are:
     * * The **Table Filter** (left trunk, or `children[0]`), a hierarchy of filter expressions and subexpressions.
     * * The **Column Filters** (right trunk, or `children[1]`), a series of subexpressions, one per active column filter. Each subexpression contains any number of expressions bound to that column but no further subexpressions.
     *
     * The `operator` properties for all subexpressions default to `'op-and'`, which means:
     * * All table filter expressions and subexpressions are AND'd together. (This is just the default and may be changed from the UI.)
     * * All expressions within a column filter subexpression are AND'd together. (This is just the default and may be changed from the UI.)
     * * All column Filters subexpressions are AND'd together. (This may not be changed from UI.)
     * * Finally, the table filter and column filters are AND'd together. (This may not be changed from UI.)
     *
     * @returns {object} A plain object to serve as a filter-tree state object representing a new Hypergrid filter.
     *
     * @memberOf DefaultFilter.prototype
     */
    makeNewRoot: function() {

        this.tableFilter = {
            keep: true,
            children: [
                // table filter expressions and subexpressions go here
            ]
        };

        this.columnFilters = {
            keep: true,
            type: 'columnFilters',
            children: [
                // subexpressions with type 'columnFilter' go here, one for each active column filter
            ]
        };

        var filter = {
            children: [
                this.tableFilter,
                this.columnFilters
            ]
        };

        return filter;
    },

    /**
     * @summary Get the column filter subexpression node.
     * @desc Each column filter subexpression node is a child node of the `columnFilters` trunk of the Hypergrid filter tree.
     * Each such node contains all the column filter expressions for the named column. It will never be empty; if there is no column filter for the named column, it won't exist in `columnFilters`.
     *
     * CAUTION: This is the actual node object. Do not confuse it with the column filter _state_ object (for which see the {@link DefaultFilter#getColumnFilterState|getColumnFilterState()} method).
     * @param {string} columnName
     * @returns {undefined|DefaultFilter} Returns `undefined` if the column filter does not exist.
     */
    getColumnFilter: function(columnName) {
        return this.columnFilters.children.find(function(columnFilter) {
            return columnFilter.children.length && columnFilter.children[0].column === columnName;
        });
    },

    /** @typedef {object} FilterTreeGetStateOptionsObject
     * See the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeGetStateOptionsObject|type definition} in the filter-tree documentation.
     */

    /** @typedef {object} FilterTreeSetStateOptionsObject
     * See the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeSetStateOptionsObject|type definition} in the filter-tree documentation.
     */

    /**
     * @summary Get a particular column filter's state.
     * @param {string} rawColumnName - Column name for case and alias lookup.
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @param {boolean} [options.syntax='CQL'] - The syntax to use to describe the filter state. Note that `getFilter`'s default syntax, `'CQL'`, differs from the other get state methods.
     * @returns {FilterTreeStateObject}
     * @memberOf DefaultFilter.prototype
     */
    getColumnFilterState: function(rawColumnName, options) {
        var result = '',
            columnSchema = this.schema.lookup(rawColumnName);

        if (columnSchema) {
            var subexpression = this.getColumnFilter(columnSchema.name);

            if (subexpression) {
                if (!(options && options.syntax)) {
                    options = options || {};
                    options.syntax = 'CQL';
                }
                result = subexpression.getState(options);
            }
        }

        return result;
    },

    /**
     * @summary Set a particular column filter's state.
     * @desc Adds CQL support to this.getState(). This function throws parser errors.
     *
     * @param {string} columnName
     *
     * @param {string|object} [state] - A filter tree object or a JSON, SQL, or CQL subexpression string that describes the a new state for the named column filter. The existing column filter subexpression is replaced with a new node based on this state. If it does not exist, the new subexpression is added to the column filters subtree (`this.root.columnFilters`).
     *
     * If undefined, removes the entire column filter subexpression from the column filters subtree.
     *
     * @param {string} rawColumnName - Column name for case and alias lookup.
     *
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     *
     * @param {boolean} [options.syntax='CQL'] - The syntax to use to describe the filter state. Note that `setColumnFilterState`'s default syntax, `'CQL'`, differs from the other get state methods.
     *
     * @memberOf DefaultFilter.prototype
     */
    setColumnFilterState: function(rawColumnName, state, options) {
        var error,
            subexpression;

        var columnName = this.schema.lookup(rawColumnName).name;

        if (!columnName) {
            throw 'Unknown column name "' + rawColumnName + '"';
        }

        subexpression = this.getColumnFilter(columnName);

        if (state) {
            options = _({}).extend(options); // clone it because we may mutate it below
            options.syntax = options.syntax || 'CQL';

            if (options.syntax === 'CQL') {
                // Convert some CQL state syntax into a filter tree state object.
                // There must be at least one complete expression or `state` will become undefined.
                try {
                    state = this.root.parserCQL.parse(state, columnName);
                    if (state) {
                        options.syntax = 'object';
                    } else {
                        error = new Error('DefaultFilter: No complete expression.');
                    }
                } catch (e) {
                    error = e;
                }
            }

            if (!error) { // parse successful
                if (subexpression) { // subexpression already exists
                    // replace subexpression representing this column
                    subexpression.setState(state, options);
                } else {
                    // add a new subexpression representing this column
                    state = this.parseStateString(state, options); // because .add() only takes object syntax
                    subexpression = this.columnFilters.add(state);
                }
                options.throw = true;
                error = subexpression.invalid(options);
            }
        }

        if (subexpression && (!state || error)) {
            // remove subexpression representing this column
            subexpression.remove();
        }

        if (error) {
            throw error;
        }
    },

    /**
     * @summary Get state of all column filters.
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @returns {FilterTreeStateObject}
     * @memberOf DefaultFilter.prototype
     */
    getColumnFiltersState: function(options) {
        if (options && options.syntax === 'CQL') {
            throw 'The CQL syntax is intended for use on a single column filter only. It does not support multiple columns or subexpressions.';
        }
        return this.root.columnFilters.getState(options);
    },

    /**
     * @summary Set state of all column filters.
     * @desc Note that the column filters implementation depends on the nodes having certain meta-data; you should not be calling this without these meta-data being in place. Specifically `type = 'columnFilters'` and  `keep = true` for the column filters subtree and`type = 'columnFilter'` for each individual column filter subexpression. In addition the subtree operators should always be `'op-and'`.
     * @param {string} state
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     *
     * @returns {undefined|Error|string} `undefined` indicates success.
     *
     * @memberOf DefaultFilter.prototype
     */
    setColumnFiltersState: function(state, options) {
        var error;

        if (state) {
            this.root.columnFilters.setState(state, options);
            error = this.root.columnFilters.invalid(options);
        }

        return error;
    },

    /**
     * @param {FilterTreeGetStateOptionsObject} [options] - Passed to the filter's {@link DefaultFilter#getState|getState} method.
     * @returns {FilterTreeStateObject}
     * @memberOf DefaultFilter.prototype
     */
    getTableFilterState: function(options) {
        if (options && options.syntax === 'CQL') {
            throw 'The CQL syntax is intended for use on a single column filter only. It does not support multiple columns or subexpressions.';
        }
        return this.root.tableFilter.getState(options);
    },

    /**
     * @param {string} state
     * @param {FilterTreeSetStateOptionsObject} [options] - Passed to the filter's [setState]{@link http://joneit.github.io/filter-tree/FilterTree.html#setState} method. You may mix in members of the {@link http://joneit.github.io/filter-tree/global.html#FilterTreeValidationOptionsObject|FilterTreeValidationOptionsObject}
     * @returns {undefined|Error|string} `undefined` indicates success.
     * @memberOf DefaultFilter.prototype
     */
    setTableFilterState: function(state, options) {
        var error;

        if (state) {
            this.root.tableFilter.setState(state, options);
            error = this.root.tableFilter.invalid(options);
        } else {
            this.root.tableFilter.children.length = 0;
        }

        return error;
    },

    /**
     * @desc The CQL syntax should only be requested for a subtree containing homogeneous column names and no subexpressions.
     *
     * @param {string} [options.syntax='object'] - If `'CQL'`, walks the tree, returning a string suitable for a Hypergrid filter cell. All other values are forwarded to the prototype's `getState` method for further interpretation.
     *
     * NOTE: CQL is not intended to be used outside the context of a `columnFilters` subexpression.
     *
     * @returns {FilterTreeStateObject}
     *
     * @memberOf DefaultFilter.prototype
     */
    getState: function getState(options) {
        var result,
            syntax = options && options.syntax;

        if (syntax === 'CQL') {
            var operator = this.operator.substr(3); // remove the 'op-' prefix
            result = '';
            this.children.forEach(function(child, idx) {
                if (child) {
                    if (child instanceof CustomFilterLeaf) {
                        if (idx) {
                            result += ' ' + operator + ' ';
                        }
                        result += child.getState(options);
                    } else if (child.children.length) {
                        throw new Error('DefaultFilter: Expected a conditional but found a subexpression. Subexpressions are not supported in CQL (Column Query Language, the filter cell syntax).');
                    }
                }
            });
        } else {
            result = FilterTree.prototype.getState.call(this, options);
        }

        return result;
    },

    loadColumnPropertiesFromSchema: function(columns) {
        this.root.schema.walk(function(columnSchema) {
            var column = columns.find(function(thisColumn) {
                return thisColumn.name === columnSchema.name || columnSchema;
            });
            if (column) {
                column.type = columnSchema.type || column.type;
                column.header = columnSchema.alias || column.header;
            }
        });
    }
});


module.exports = DefaultFilter;

},{"../Shared":60,"./parser-CQL":117,"object-iterators":51}],117:[function(require,module,exports){
'use strict';

var _ = require('object-iterators');

var REGEXP_BOOLS = /\b(AND|OR|NOR)\b/gi,
    EXP = '(.*?)', BR = '\\b',
    PREFIX = '^' + EXP + BR,
    INFIX = BR + EXP + BR,
    POSTFIX = BR + EXP + '$';

function ParserCqlError(message) {
    this.message = message;
}
ParserCqlError.prototype = Object.create(Error.prototype);
ParserCqlError.prototype.name = 'ParserCqlError';

/**
 * @constructor
 *
 * @summary Column Query Language (CQL) parser
 *
 * @author Jonathan Eiten jonathan@openfin.com
 *
 * @desc See {@tutorial CQL} for the grammar.
 *
 * @param {object} operatorsHash - Hash of valid operators.
 * @param {object} [options]
 * @param {menuItem[]} [options.schema] - Column schema for column name/alias validation. Throws an error if name fails validation (but see `resolveAliases`). Omit to skip column name validation.
 * @param {boolean} [options.defaultOp='='] - Default operator for column when not defined in column schema.
 */
function ParserCQL(operatorsHash, options) {
    var operators = [];

    this.schema = options && options.schema;
    this.defaultOp = (options && options.defaultOp || '=').toUpperCase();

    _(operatorsHash).each(function(props, op) {
        if (op !== 'undefined') {
            operators.push(op);
        }
    });

    // Put larger ones first so that in case a smaller one is a substring of a larger one (such as '<' is to '<='), larger one will be matched first.
    operators = operators.sort(descendingByLength);

    // Escape all symbolic (non alpha) operators.
    operators = operators.map(function(op) { return /[^\w]/.test(op) ? '\\' + op.split('').join('\\') : op; });

    var symbolicOperators = operators.filter(function(op) { return op[0] === '\\'; }),
        alphaOperators = operators.filter(function(op) { return op[0] !== '\\'; }).join('|');

    if (alphaOperators) {
        alphaOperators = '\\b(' + alphaOperators + ')\\b';
    }
    /** @summary Regex to match any operator.
     * @desc Matches symbolic operators (made up of non-alpha characters) or identifier operators (word-boundary-isolated runs of alphanumeric characters).
     * @type {RegExp}
     */
    this.REGEX_OPERATOR = new RegExp(symbolicOperators.concat(alphaOperators).join('|'), 'ig');

    operators = operators.join('|') // pipe them
        .replace(/\s+/g, '\\s+'); // arbitrary string of whitespace chars -> whitespace regex matcher

    /** @summary Regex to match an operator + optional operator
     * @desc THe operator is optional. The operand may (or may not) be enclosed in parentheses.
     * @desc Match list:
     * 0. _input string_
     * 1. operator
     * 2. outer operand (may include parentheses)
     * 3. inner operand without parentheses (when an operand was given with parentheses)
     * 4. inner operand (when an operand was given without parentheses)
     * @type {RegExp}
     * @private
     * @memberOf ParserCQL.prototype
     */
    this.REGEX_EXPRESSION = new RegExp('^\\s*(' + operators + ')?\\s*(\\(\\s*(.+?)\\s*\\)|(.+?))\\s*$', 'i');

    this.REGEX_LITERAL_TOKENS = new RegExp('\\' + ParserCQL.qt + '(\\d+)' + '\\' + ParserCQL.qt, 'g');

}

/** @summary Operand quotation mark character.
 * @desc Should be a single character (length === 1).
 * @default '"'
 * @type {string}
 */
ParserCQL.qt = '"';

ParserCQL.prototype = {

    constructor: ParserCQL.prototype.constructor,

    /**
     * @summary Extract the boolean operators from an expression chain.
     * @desc Returns list of homogeneous operators transformed to lower case.
     *
     * Throws an error if all the boolean operators in the chain are not identical.
     * @param {string} cql
     * @returns {string[]}
     */
    captureBooleans: function(cql) {
        var booleans = cql.match(REGEXP_BOOLS);
        return booleans && booleans.map(function(bool) {
            return bool.toLowerCase();
        });
    },

    validateBooleans: function(booleans) {
        if (booleans) {
            var heterogeneousOperator = booleans.find(function(op, i) {
                return booleans[i] !== booleans[0];
            });

            if (heterogeneousOperator) {
                throw new ParserCqlError('Expected homogeneous boolean operators. You cannot mix AND, OR, and NOR operators here because the order of operations is ambiguous.\nTip: In Manage Filters, you can group operations with subexpressions in the Query Builder tab or by using parentheses in the SQL tab.');
            }
        }
        return booleans;
    },

    /**
     * @summary Break an expression chain into a list of expressions.
     * @param {string} cql
     * @param {string[]} booleans
     * @returns {string[]}
     */
    captureExpressions: function(cql, booleans) {
        var expressions, re;

        if (booleans) {
            re = new RegExp(PREFIX + booleans.join(INFIX) + POSTFIX, 'i');
            expressions = cql.match(re);
            expressions.shift(); // discard [0] (input)
        } else {
            expressions = [cql];
        }

        return expressions;
    },

    /**
     * @summary Make a list of children out of a list of expressions.
     * @desc Uses only _complete_ expressions (a value OR an operator + a value).
     *
     * Ignores _incomplete_ expressions (empty string OR an operator - a value).
     *
     * @param {string} columnName
     * @param {string[]} expressions
     * @param {string[]} literals - list of literals indexed by token
     *
     * @returns {expressionState[]} where `expressionState` is one of:
     * * `{column: string, operator: string, operand: string}`
     * * `{column: string, operator: string, operand: string, editor: 'Columns'}`
     */
    makeChildren: function(columnName, expressions, literals) {
        var self = this;
        return expressions.reduce(function(children, exp) {
            if (exp) {
                var parts = exp.match(self.REGEX_EXPRESSION);
                if (parts) {
                    var op = parts[1],
                        outerLiteral = parts[2],
                        innerLiteral = parts.slice(3).find(function(part) {
                            return part !== undefined;
                        });

                    op = (op || '').replace(/\s+/g, ' ').trim().toUpperCase();

                    var parenthesized = /^\(.*\)$/.test(outerLiteral),
                        innerOperators = innerLiteral.match(self.REGEX_OPERATOR);

                    if (!parenthesized && innerOperators) {
                        if (op === '' && outerLiteral === innerOperators[0]) {
                            throw new ParserCqlError('Expected an operand.');
                        }

                        throw new ParserCqlError(
                            'Expected operand but found additional operator(s): ' +
                            innerOperators
                                .toString() // convert to comma-separated list
                                .toUpperCase()
                                .replace(/,/g, ', ') // add spaces after the commas
                                .replace(/^([^,]+), ([^,]+)$/, '$1 and $2') // replace only comma with "and"
                                .replace(/(.+,.+), ([^,]+)$/, '$1, and $2') // add "and" after last of several commas
                        );
                    }

                    op = op ||
                        self.schema && self.schema.lookup(columnName).defaultOp || // column's default operator from schema
                        self.defaultOp; // grid's default operator

                    var child = {
                        column: columnName,
                        operator: op
                    };

                    var fieldName = self.schema && self.schema.lookup(innerLiteral);
                    if (fieldName) {
                        child.operand = fieldName.name || fieldName;
                        child.editor = 'Columns';
                    } else {
                        // Find and expand all collapsed literals.
                        child.operand = innerLiteral.replace(self.REGEX_LITERAL_TOKENS, function(match, index) {
                            return literals[index];
                        });
                    }

                    children.push(child);
                }

                return children;
            }
        }, []);
    },

    /**
     * @summary The position of the operator of the expression under the cursor.
     * @param {string} cql - CQL expression under construction.
     * @param {number} cursor - Current cursor's starting position (`input.startSelection`)
     * @returns {{start: number, end: number}}
     */
    getOperatorPosition: function(cql, cursor) {
        // first tokenize literals in case they contain booleans...
        var literals = [];
        cql = tokenizeLiterals(cql, ParserCQL.qt, literals);

        // ...then expand tokens but with x's just for length
        cql = cql.replace(this.REGEX_LITERAL_TOKENS, function(match, index) {
            var length = 1 + literals[index].length + 1; // add quote chars
            return Array(length + 1).join('x');
        });

        var booleans, expressions, position, tabs, end, tab, expression, oldOperator, oldOperatorOffset;

        if ((booleans = this.captureBooleans(cql))) {
            // boolean(s) found so concatenated expressions
            expressions = this.captureExpressions(cql, booleans);
            position = 0;
            tabs = expressions.map(function(expr, idx) { // get starting position of each expression
                var bool = booleans[idx - 1] || '';
                position += expr.length + bool.length;
                return position;
            });

            // find beginning of expression under cursor position
            tabs.find(function(tick, idx) {
                tab = idx;
                return cursor <= tick;
            });

            cursor = tabs[tab - 1] || 0;
            end = cursor += (booleans[tab - 1] || '').length;

            expression = expressions[tab];
        } else {
            // booleans not found so single expression
            cursor = 0;
            end = cql.length;
            expression = cql;
        }

        oldOperatorOffset = expression.search(this.REGEX_OPERATOR);
        if (oldOperatorOffset >= 0) {
            oldOperator = expression.match(this.REGEX_OPERATOR)[0];
            cursor += oldOperatorOffset;
            end = cursor + oldOperator.length;
        }

        return {
            start: cursor,
            end: end
        };
    },

    /**
     * @summary Make a "locked" subexpression definition object from an expression chain.
     * @desc _Locked_ means it is locked to a single field.
     *
     * When there is only a single expression in the chain, the `operator` is omitted (defaults to `'op-and'`).
     *
     * @param {string} cql - A compound CQL expression, consisting of one or more simple expressions all separated by the same logical operator).
     *
     * @param {string} columnName

     * @returns {undefined|{operator: string, children: string[], schema: string[]}}
     * `undefined` when there are no complete expressions
     *
     * @memberOf module:CQL
     */
    parse: function(cql, columnName) {
        // reduce all runs of white space to a single space; then trim
        cql = cql.replace(/\s\s+/g, ' ').trim();

        var literals = [];
        cql = tokenizeLiterals(cql, ParserCQL.qt, literals);

        var booleans = this.validateBooleans(this.captureBooleans(cql)),
            expressions = this.captureExpressions(cql, booleans),
            children = this.makeChildren(columnName, expressions, literals),
            operator = booleans && booleans[0],
            state;

        if (children.length) {
            state = {
                type: 'columnFilter',
                children: children
            };

            if (operator) {
                state.operator = 'op-' + operator;
            }
        }

        return state;
    }
};

function descendingByLength(a, b) {
    return b.length - a.length;
}

/**
 * @summary Collapse literals.
 * @desc Allows reserved words to exist inside a quoted string.
 * Literals are collapsed to a quoted numerical index into the `literals` array.
 * @param {string} text
 * @param {string} qt
 * @param {string[]} literals - Empty array in which to return extracted literals.
 * @returns {string}
 */
function tokenizeLiterals(text, qt, literals) {
    literals.length = 0;

    for (
        var i = 0, j = 0, k, innerLiteral;
        (j = text.indexOf(qt, j)) >= 0;
        j = j + 1 + (i + '').length + 1, i++
    ) {
        k = j;
        do {
            k = text.indexOf(qt, k + 1);
            if (k < 0) {
                throw new ParserCqlError('Quotation marks must be paired; nested quotation marks must be doubled.');
            }
        } while (text[++k] === qt);

        innerLiteral = text
            .slice(++j, --k) // extract
            .replace(new RegExp(qt + qt, 'g'), qt); // unescape escaped quotation marks

        literals.push(innerLiteral);

        text = text.substr(0, j) + i + text.substr(k); // collapse
    }

    return text;
}

module.exports = ParserCQL;

},{"object-iterators":51}],118:[function(require,module,exports){
'use strict';

var deprecated = require('./deprecated');
var Base = require('extend-me').Base;

Base.prototype.deprecated = deprecated;
Base.prototype.HypergridError = HypergridError;


function HypergridError(message) {
    this.message = message;
}
HypergridError.prototype = Object.create(Error.prototype);
HypergridError.prototype.name = 'HypergridError';


module.exports = Base;

},{"./deprecated":123,"extend-me":7}],119:[function(require,module,exports){
/* eslint-env browser */

/**
 * @module localization
 */

'use strict';

var Base = require('./Base');
var deprecated = require('./deprecated');


/**
 * @param {string} defaultLocale
 * @param {string} [locale=defaultlocale]
 * @param {object} [options]
 * @constructor
 */
var Formatter = Base.extend({
    initialize: function(defaultLocale, locale, options) {
        if (typeof locale === 'object') {
            options = locale;
            locale = defaultLocale;
        }

        this.locale = locale;

        if (options) {
            if (typeof options.invalid === 'function') {
                this.invalid = options.invalid;
            }

            if (options.expectation) {
                this.expectation = options.expectation;
            }
        }
    }
});

/**
 * @summary Create a number localizer.
 * @implements localizerInterface
 * @desc Create an object conforming to {@link localizerInterface} for numbers, using {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat|Intl.NumberFormat}.
 * @param {string} defaultLocale
 * @param {string} [locale=defaultLocale] - Passed to the {@link Intl.NumberFormat|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat} constructor.
 * @param {object} [options] - Passed to the `Intl.NumberFormat` constructor.
 * @param {boolean} [options.acceptStandardDigits=false] - Accept standard digits and decimal point interchangeably with localized digits and decimal point. (This option is interpreted here; it is not used by `Intl.NumberFormat`.)
 * @constructor
 * @extends Formatter
 * @tutorial localization
 */
var NumberFormatter = Formatter.extend('NumberFormatter', {
    initialize: function(defaultLocale, locale, options) {
        if (typeof locale === 'object') {
            options = locale;
        }

        options = options || {};

        this.format = new Intl.NumberFormat(this.locale, options).format;

        var mapperOptions = { useGrouping: false },
            mapper = new Intl.NumberFormat(this.locale, mapperOptions).format;

        this.demapper = demap.bind(this);

        /**
         * @summary A string containing the valid characters.
         * @desc Contains all localized digits + localized decimal point.
         * If we're accepting standard digits, will also contain all the standard digits + standard decimal point (if different than localized versions).
         * @type {string}
         * @private
         * @desc Localized digits and decimal point. Will also include standardized digits and decimal point if `options.acceptStandardDigits` is truthy.
         *
         * For internal use by the {@link NumberFormatter#standardize|standardize} method.
         * @memberOf NumberFormatter.prototype
         */
        this.map = mapper(10123456789.5).substr(1, 11); // localized '0123456789.'

        if (options.acceptStandardDigits && this.map !== '0123456789.') {
            this.map += '0123456789.';  // standard '0123456789.'
        }

        /** @summary A regex that tests `true` on first invalid character.
         * @type {RegExp}
         * @private
         * @desc Valid characters include:
         *
         * * Localized digits
         * * Localized decimal point
         * * Standard digits (when `options.acceptStandardDigits` is truthy)
         * * Standard decimal point (when `options.acceptStandardDigits` is truthy)
         * * Cosmetic characters added by formatter as per `options` (for human-friendly readability).
         *
         * Any characters outside this set are considered invalid.
         *
         * Set by the constructor; consumed by the {@link module:localization~NumberFormatter#invalid|invalid} method.
         *
         * Testing a string against this pattern yields `true` if at least one invalid character or `false` if all characters are valid.
         * @memberOf NumberFormatter.prototype
         */
        this.invalids = new RegExp(
            '[^' +
            this.format(11111).replace(this.map[1], '') + // thousands separator if in use
            this.map + // digits + decimal point
            ']'
        );
    },

    /** @summary Tests for invalid characters.
     * @desc Tests a localized string representation of a number that it contains any invalid characters.
     *
     * The number may be unformatted or it may be formatted with any of the permitted formatting characters, as implied by the constructor's `options` (passed to `Intl.NumberFormat`). Any other characters are considered invalid.
     *
     * However, standard digits and the standard decimal point are considered valid if the value of `options.acceptStandardDigits` as provided to the constructor was truthy. (Of course, these are always valid for locales that use them.)
     *
     * Use this method to:
     * 1. Filter out invalid characters on a `onkeydown` event; or
     * 2. Test an edited string prior to calling the {@link module:localization~NumberFormatter#standardize|standardize}.
     *
     * NOTE: This method does not check grammatical syntax; it only checks for invalid characters.
     *
     * @param number
     * @returns {boolean|string} Falsy means valid which in this case means contains only valid characters.
     * @memberOf NumberFormatter.prototype
     */
    invalid: function(number) {
        return this.invalids.test(number);
    },

    expectation:
        'Expected a number with optional commas (thousands grouping separator), optional decimal point, and an optional fractional part.\n' +
        'Comma separators are part of the format and will always be displayed for values >= 1000.\n' +
        'Edited values are always saved in their entirety even though the formatted value is rounded to the specified number of decimal places.',

    /**
     * This method will:
     * * Convert localized digits and decimal point characters to standard digits and decimal point characters.
     * * "Clean" the string by ignoring all other characters.
     * * Coerce the string to a number primitive.
     * @param {string} formattedLocalizedNumber - May or may not be formatted.
     * @returns {number} Number primitive.
     * @throws {string} Invalid number.
     * @memberOf NumberFormatter.prototype
     */
    parse: function(formattedLocalizedNumber) {
        var number = Number(
            formattedLocalizedNumber.split('').map(this.demapper).join('')
        );

        if (isNaN(number)) {
            throw 'Invalid Number';
        }

        return number;
    }
});

function demap(c) {
    var d = this.map.indexOf(c) % 11;
    return d < 0 ? '' : d < 10 ? d : '.';
}

/**
 * @implements localizerInterface
 * @param {string} defaultLocale
 * @param {string} [locale=defaultlocale] - Passed to the {@link Intl.DateFormat|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateFormat} constructor.
 * @param {object} [options] - Passed to the `Intl.DateFormat` constructor.
 * @constructor
 * @extends Formatter
 */
var DateFormatter = Formatter.extend('DateFormatter', {
    initialize: function(defaultLocale, locale, options) {
        if (typeof locale === 'object') {
            options = locale;
        }

        options = options || {};

        /** @summary Transform a date object into human-friendly string representation.
         * @method
         */
        this.format = new Intl.DateTimeFormat(this.locale, options).format;

        // Get digits because may be chinese or "real Arabic" numerals.
        var testOptions = { useGrouping: false, style: 'decimal' },
            localizeNumber = new Intl.NumberFormat(this.locale, testOptions).format,
            localizedDigits = this.localizedDigits = localizeNumber(10123456789).substr(1, 10); // all localized digits in numerical order

        this.digitFormatter = formatDigit.bind(this);
        this.digitParser = parseDigit.bind(this);

        // Localize a test date with the default numeric parts to find out the resulting order of these parts.
        var yy = 1987,
            mm = 12,
            dd = 30,
            YY = this.transformNumber(this.digitFormatter, yy),
            MM = this.transformNumber(this.digitFormatter, mm),
            DD = this.transformNumber(this.digitFormatter, dd),
            testDate = new Date(yy, mm - 1, dd),
            localizeDate = new Intl.DateTimeFormat(this.locale).format,
            localizedDate = localizeDate(testDate), // all localized digits + localized punctuation
            missingDigits = new Intl.NumberFormat(this.locale).format(456),
            localizedNumberPattern = this.localizedNumberPattern = new RegExp('[' + localizedDigits + ']+', 'g'),
            parts = localizedDate.match(localizedNumberPattern);

        this.partsMap = {
            yy: parts.indexOf(YY),
            mm: parts.indexOf(MM),
            dd: parts.indexOf(DD)
        };

        if (options.acceptStandardDigits) {
            missingDigits += '1234567890';
        }

        /** @summary A regex that tests `true` on first invalid character.
         * @type {RegExp}
         * @private
         * @desc Valid characters include:
         *
         * * Localized digits
         * * Standard digits (when `options.acceptStandardDigits` is truthy)
         * * Localized punctuation to delimit date parts
         *
         * Any characters outside this set are considered invalid. Note that this only currently implemented when all three date parts are numeric
         *
         * Set by the constructor; consumed by the {@link NumberFormatter#valid|valid} method.
         *
         * Testing a string against this pattern yields `true` if at least one invalid character or `false` if all characters are valid.
         * @memberOf DateFormatter.prototype
         */
        this.invalids = new RegExp(
            '[^' +
            localizedDate +
            missingDigits +
            ']'
        );
    },

    /** @summary Tests for invalid characters.
     * @desc Tests a localized string representation of a number that it contains any invalid characters.
     *
     * The date is assumed to contain localized digits and punctuation as would be returned by `Intl.DateFormat` with the given `locale` and `options`. Any other characters are considered invalid.
     *
     * However, standard digits and the standard decimal point are also considered valid if the value of `options.acceptStandardDigits` as provided to the constructor was truthy. (Of course, these are always valid for locales that use them.)
     *
     * Use this method to:
     * 1. Filter out invalid characters on a `onkeydown` event; or
     * 2. Test an edited string prior to calling the {@link module:localization~DateFormatter#standardize|standardize}.
     *
     * NOTE: The current implementation only supports date formats using all numerics (which is the default for `Intl.DateFormat`).
     *
     * NOTE: This method does not check grammatical syntax; it only checks for invalid characters.
     *
     * @param number
     * @returns {boolean} Contains only valid characters.
     * @memberOf DateFormatter.prototype
     */
    invalid: function(number) {
        return this.invalids.test(number);
    },

    /**
     * This method will:
     * * Convert localized date to Date object.
     * * "Clean" the string by ignoring all other characters.
     * * Coerce the string to a number primitive.
     * @param {string} localizedDate
     * @returns {Date}
     * @throws {string} Invalid date.
     * @memberOf DateFormatter.prototype
     */
    parse: function(localizedDate) {
        var date,
            parts = localizedDate.match(this.localizedNumberPattern);

        if (parts && parts.length === 3) {
            var y = this.transformNumber(this.digitParser, parts[this.partsMap.yy]),
                m = this.transformNumber(this.digitParser, parts[this.partsMap.mm]) - 1,
                d = this.transformNumber(this.digitParser, parts[this.partsMap.dd]);

            date = new Date(y, m, d);
        } else {
            throw 'Invalid Date';
        }

        return date;
    },

    /**
     * Transform a number to or from a string representation with localized digits.
     * @param {function} digitTransformer - A function bound to `this`.
     * @param {number} number
     * @returns {string}
     * @private
     * @memberOf DateFormatter.prototype
     */
    transformNumber: function(digitTransformer, number) {
        return number.toString().split('').map(digitTransformer).join('');
    }
});

function formatDigit(d) {
    return this.localizedDigits[d];
}

function parseDigit(c) {
    var d = this.localizedDigits.indexOf(c);
    if (d < 0) { d = ''; }
    return d;
}

/**
 * All members are localizers (conform to {@link localizerInterface}) with exception of `get`, `set`, and localizer constructors which are named (by convention) ending in "Formmatter".
 *
 * The application developer is free to add localizers and localizer factory methods. See the {@link Localization#construct|construct} convenience method which may be helpful in this regard.
 * @param locale
 * @param {object} [numberOptions]
 * @param {object} [dateOptions]
 * @constructor
 */
function Localization(locale, numberOptions, dateOptions) {
    this.locale = locale;

    /**
     * @name number
     * @see The {@link NumberFormatter|NumberFormatter} class
     * @memberOf Localization.prototype
     */
    this.int = this.float = this.construct('number', NumberFormatter, numberOptions);

    /**
     * @see The {@link DateFormatter|DateFormatter} class
     * @memberOf Localization.prototype
     */
    this.construct('date', DateFormatter, dateOptions);
}

Localization.prototype = {
    constructor: Localization.prototype.constructor,

    /** @summary Creates a localizer from a localizer factory object using the default locale.
     * @desc Performs the following actions:
     * 1. Binds `Constructor` to `locale`.
     * 2. Adds the newly bound constructor to this object (for future reference) with the key "NameFormatter" (where "Name" is the localizer name, all lower case but with an initial capital).
     * 3. Uses the newly bound constructor to create a new localized localizer with the provided options.
     * 4. Adds new localizer to this object via {@link Localization#add|add}.
     *
     * @param {string} localizerName
     * @param {Constructor
     * @param {object} {factoryOptions}
     * @returns {localizeInerface} The new localizer.
     */
    construct: function(localizerName, Constructor, factoryOptions) {
        var constructorName = localizerName[0].toUpperCase() + localizerName.substr(1).toLowerCase() + 'Formatter',
            BoundConstructor = Constructor.bind(null, this.locale),
            localizer = new BoundConstructor(factoryOptions);

        this[constructorName] = BoundConstructor;

        return this.add(localizerName, localizer);
    },

    /** @summary Register a localizer.
     * @desc Checks the provided localizer that it conforms to {@link localizerInterface}
     * and adds it to the object using localizerName all lower case as the key.
     * @param {string} name
     * @param {localizerInterface} localizer
     * @memberOf Localization.prototype
     * @returns {localizeInerface} The provided localizer.
     */
    add: function(name, localizer) {
        if (typeof name === 'object') {
            localizer = name;
            name = undefined;
        }

        if (
            typeof localizer !== 'object' ||
            typeof localizer.format !== 'function' ||
            typeof localizer.parse !== 'function' ||
            localizer.invalid && typeof localizer.invalid !== 'function' ||
            localizer.expectation && typeof localizer.expectation !== 'string'
        ) {
            throw 'Expected localizer object to conform to interface.';
        }

        name = name || localizer.name;
        name = name && name.toLowerCase();
        this[name] = localizer;

        return localizer;
    },
    deprecated: deprecated,
    set: function(name) {
        return this.deprecated('set(name, localizer)', 'add(name, localizer)', '1.0.6', arguments);
    },

    /**
     *
     * @param localizerName
     * @returns {localizerInterface}
     * @memberOf Localization.prototype
     */
    get: function(name) {
        return this[name && name.toLowerCase()] || this.string;
    },

    ///  ///  ///  ///  ///    LOCALIZERS    ///  ///  ///  ///  ///

    // Special localizer for use by Chrome's date input control.
    chromeDate: {
        format: function(date) {
            if (date != null) {
                if (typeof date !== 'object') {
                    date = new Date(date);
                }

                var yy = date.getFullYear(),
                    m = date.getMonth() + 1, mm = m < 10 ? '0' + m : m,
                    d = date.getDate(), dd = d < 10 ? '0' + d : d;

                date = yy + '-' + mm + '-' + dd;
            } else {
                date = null;
            }
            return date;
        },
        parse: function(str) {
            var date,
                parts = str.split('-');
            if (parts && parts.length === 3) {
                date = new Date(parts[0], parts[1] - 1, parts[2]);
            } else {
                date = null;
            }
            return date;
        }
    },

    null: {
        format: function(value) {
            return value;
        },
        parse: function(str) {
            return str;
        }
    },

    string: {
        format: function(value) {
            return value + '';
        },
        parse: function(str) {
            return str + '';
        }
    }
};

module.exports = Localization;

},{"./Base":118,"./deprecated":123}],120:[function(require,module,exports){
/* eslint-env browser */
/* global requestAnimationFrame */

'use strict';

var _ = require('object-iterators');

var Base = require('./Base');
var images = require('../../images');

/** @typedef {object} CanvasRenderingContext2D
 * @see [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
 */

/**
 * @constructor
 * @desc fin-hypergrid-renderer is the canvas enabled top level sub component that handles the renderering of the Grid.
 *
 * It relies on two other external subprojects
 *
 * 1. fin-canvas: a wrapper to provide a simpler interface to the HTML5 canvas component
 * 2. rectangular: a small npm module providing Point and Rectangle objects
 *
 * The fin-hypergrid-renderer is in a unique position to provide critical functionality to the fin-hypergrid in a hightly performant manner.
 * Because it MUST iterate over all the visible cells it can store various bits of information that can be encapsulated as a service for consumption by the fin-hypergrid component.
 *
 * Instances of this object have basically four main functions.
 *
 * 1. render fixed row headers
 * 2. render fixed col headers
 * 3. render main data cells
 * 4. render grid lines
 *
 * Same parameters as {@link Renderer#initialize|initialize}, which is called by this constructor.
 *
 */
var Renderer = Base.extend('Renderer', {

    //the shared single item "pooled" cell object for drawing each cell
    cell: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },

    scrollHeight: 0,

    viewHeight: 0,

    reset: function() {
        this.bounds = {
            width: 0,
            height: 0
        };
        this.columnEdges = [];
        this.columnEdgesIndexMap = [];
        this.renderedColumnMinWidths = [];
        this.rowEdges = [];
        this.rowEdgesIndexMap = [];
        this.visibleColumns = [];
        this.visibleRows = [];
        this.insertionBounds = [];
    },

    /**
     * @summary Constructor logic
     * @desc This method will be called upon instantiation of this class or of any class that extends from this class.
     * > All `initialize()` methods in the inheritance chain are called, in turn, each with the same parameters that were passed to the constructor, beginning with that of the most "senior" class through that of the class of the new instance.
     * @memberOf Renderer.prototype
     */
    initialize: function(grid) {
        this.grid = grid;
        this.reset();
    },

    //this function computes the grid coordinates used for extremely fast iteration over
    //painting the grid cells. this function is very fast, for thousand rows X 100 columns
    //on a modest machine taking usually 0ms and no more that 3 ms.
    computeCellsBounds: function() {

        //var startTime = Date.now();

        var scrollTop = this.getScrollTop(),
            scrollLeft = this.getScrollLeft(),

            numColumns = this.getColumnCount(),
            numFixedColumns = this.getFixedColumnCount(),

            numRows = this.getRowCount(),
            numFixedRows = this.getFixedRowCount(),

            bounds = this.getBounds(),
            grid = this.grid,
            numberOfBottomTotalsRows = grid.behavior.dataModel.getBottomTotals().length,
            viewWidth = bounds.width || grid.canvas.width, // if 0, we must be in bootstrap
            viewHeight = bounds.height - numberOfBottomTotalsRows * grid.behavior.getDefaultRowHeight(),

            insertionBoundsCursor = 0,
            previousInsertionBoundsCursorValue = 0,

            start = 0,
            x = 0, y = 0,
            c, r,
            vx, vy,
            width, height,
            firstVX, lastVX,
            firstVY, lastVY;

        this.getColumnEdges().length = 0;
        this.rowEdges.length = 0;

        this.columnEdges[0] = 0;
        this.rowEdges[0] = 0;
        this.scrollHeight = 0;

        this.visibleColumns.length = 0;
        this.visibleRows.length = 0;
        this.columnEdgesIndexMap = [];
        this.rowEdgesIndexMap = [];

        this.insertionBounds = [];

        if (this.grid.isShowRowNumbers()) {
            start--;
            this.columnEdges[-1] = -1;
        }

        for (c = start; c < numColumns; c++) {
            vx = c;
            if (c >= numFixedColumns) {
                vx = vx + scrollLeft;
                if (firstVX === undefined) {
                    firstVX = vx;
                }
                lastVX = vx;
            }
            if (x > viewWidth || numColumns <= vx) {
                break;
            }
            width = grid.getColumnWidth(vx);
            x = x + width;
            this.columnEdges[c + 1] = Math.round(x);
            this.visibleColumns[c] = vx;
            this.columnEdgesIndexMap[vx] = c;

            insertionBoundsCursor = insertionBoundsCursor + Math.round(width / 2) + previousInsertionBoundsCursorValue;
            this.insertionBounds.push(insertionBoundsCursor);
            previousInsertionBoundsCursorValue = Math.round(width / 2);
        }

        for (r = 0; r < numRows; r++) {
            vy = r;
            if (r >= numFixedRows) {
                vy = vy + scrollTop;
                if (firstVY === undefined) {
                    firstVY = vy;
                }
                lastVY = vy;
            }
            if (y > viewHeight || numRows <= vy) {
                break;
            }
            height = grid.getRowHeight(vy);
            y = y + height;
            this.rowEdges[r + 1] = Math.round(y);
            this.visibleRows[r] = vy;
            this.rowEdgesIndexMap[vy] = r;
        }
        this.viewHeight = viewHeight;
        this.dataWindow = this.grid.newRectangle(firstVX, firstVY, lastVX - firstVX, lastVY - firstVY);
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {Object} a property value at a key, delegates to the grid
     */
    resolveProperty: function(key) {
        return this.grid.resolveProperty(key);
    },

    /**
     * @memberOf Renderer.prototype
     * @summary Notify the fin-hypergrid everytime we've repainted.
     * @desc This is the entry point from fin-canvas.
     * @param {CanvasRenderingContext2D} gc
     */
    paint: function(gc) {
        if (this.grid) {
            if (!this.hasData()) {
                var message = this.grid.resolveProperty('noDataMessage');
                gc.font = '20px Arial';
                gc.fillText(message, 20, 30);
            } else {
                this.renderGrid(gc);
                this.grid.gridRenderedNotification();
            }
        }
    },

    hasData: function() {
        var data = this.grid.behavior.getData();
        if (data) {
            return data.length > 0;
        }
        return false;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Answer how many rows we rendered
     */
    getVisibleRowsCount: function() {
        return this.visibleRows.length - 1;
    },

    getVisibleScrollHeight: function() {
        return this.viewHeight - this.grid.getFixedRowsHeight();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number[]} Rows we just rendered.
     */
    getVisibleRows: function() {
        return this.visibleRows;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Numer of columns we just rendered.
     */
    getVisibleColumnsCount: function() {
        return this.visibleColumns.length - 1;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Columns we just rendered.
     */
    getVisibleColumns: function() {
        return this.visibleColumns;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The column index whne the mouseEvent coordinates are over a column divider.
     */
    overColumnDivider: function(x) {
        x = Math.round(x);
        var edges = this.getColumnEdges();
        var whichCol = edges.indexOf(x - 1);
        if (whichCol < 0) {
            whichCol = edges.indexOf(x);
        }
        if (whichCol < 0) {
            whichCol = edges.indexOf(x - 2);
        }
        if (whichCol < 0) {
            whichCol = edges.indexOf(x + 1);
        }
        if (whichCol < 0) {
            whichCol = edges.indexOf(x - 3);
        }

        return whichCol;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The row index when the mouseEvent coordinates are over a row divider.
     */
    overRowDivider: function(y) {
        y = Math.round(y);
        var which = this.rowEdges.indexOf(y + 1);
        if (which < 0) {
            which = this.rowEdges.indexOf(y);
        }
        if (which < 0) {
            which = this.rowEdges.indexOf(y - 1);
        }
        return which;
    },

    /**
     * @memberOf Renderer.prototype
     * @param {Point} cell
     * @returns {Rectangle} Bounding rect of the given `cell`.
     */
    getBoundsOfCell: function(cell) {
        return this._getBoundsOfCell(cell.x, cell.y);
    },

    /**
     * @memberOf Renderer.prototype
     * @param {number} c - The horizontal coordinate.
     * @param {number} r - The vertical coordinate.
     * @returns {Rectangle} Bounding rect of cell with the given coordinates.
     */
    _getBoundsOfCell: function(c, r) {
        var xOutside = false,
            yOutside = false,
            cell = this.cell;

        var y, x = this.columnEdgesIndexMap[c];
        if (x === undefined) {
            x = this.columnEdgesIndexMap[c - 1];
            xOutside = true;
        }

        var oy, ox = this.columnEdges[x],
            cy, cx = this.columnEdges[x + 1],
            ey, ex = cx - ox;

        cell.x = xOutside ? cx : ox;
        cell.width = xOutside ? 0 : ex;

        if (r < 0) { // bottom totals rows
            var behavior = this.grid.behavior,
                bounds = this.getBounds();

            ey = behavior.getDefaultRowHeight();
            oy = bounds.height + r * ey;
            cy = oy + ey;
        } else {
            y = this.rowEdgesIndexMap[r];
            if (y === undefined) {
                y = this.rowEdgesIndexMap[r - 1];
                yOutside = true;
            }

            oy = this.rowEdges[y];
            cy = this.rowEdges[y + 1];
            ey = cy - oy;
        }

        cell.y = yOutside ? cy : oy;
        cell.height = yOutside ? 0 : ey;

        return cell;
    },

    /**
     * @memberOf Renderer.prototype
     * @desc answer the column index under the coordinate at pixelX
     * @param {number} pixelX - The horizontal coordinate.
     * @returns {number} The column index under the coordinate at pixelX.
     */
    getColumnFromPixelX: function(pixelX) {
        var width = 0,
            fixedColumnCount = this.getFixedColumnCount(),
            scrollLeft = this.grid.getHScrollValue(),
            edges = this.getColumnEdges();

        for (var c = 1; c < edges.length - 1; c++) {
            width = edges[c] - (edges[c] - edges[c - 1]) / 2;
            if (pixelX < width) {
                if (c > fixedColumnCount) {
                    c = c + scrollLeft;
                }
                return c - 1;
            }
        }
        if (c > fixedColumnCount) {
            c = c + scrollLeft;
        }
        return c - 1;
    },


    /**
     * @memberOf Renderer.prototype
     * @desc Answer specific data cell coordinates given mouse coordinates in pixels.
     * @param {Point} point
     * @returns {Point} Cell coordinates
     */
    getGridCellFromMousePoint: function(point) {

        var behavior = this.grid.behavior;
        var width = 0;
        var height = 0;
        var x, y, c, r;
        var previous = 0;
        var columnEdges = this.getColumnEdges();
        var fixedColumnCount = this.getFixedColumnCount(); // + gridSize;
        var fixedRowCount = this.getFixedRowCount();

        // var fixedColumnCount = this.getFixedColumnCount();
        // var fixedRowCount = this.getFixedRowCount();
        var scrollX = this.getScrollLeft();
        var scrollY = this.getScrollTop();

        for (c = 0; c < columnEdges.length; c++) {
            width = columnEdges[c];
            if (point.x < width) {
                x = Math.max(0, point.x - previous - 2);
                break;
            }
            previous = width;
        }
        c--;
        previous = 0;
        for (r = 0; r < this.rowEdges.length; r++) {
            height = this.rowEdges[r];
            if (point.y < height) {
                y = Math.max(0, point.y - previous - 2);
                break;
            }
            previous = height;
        }
        r--;
        if (point.x < 0) {
            c = -1;
        }
        if (point.y < 0) {
            r = -1;
        }

        var viewPoint = this.grid.newPoint(c, r);

        //compensate if we are scrolled
        if (c >= fixedColumnCount) {
            c = c + scrollX;
        }
        if (r >= fixedRowCount) {
            r = r + scrollY;
        }

        var translatedIndex = -1;

        var column = behavior.getActiveColumn(c);
        if (column) {
            translatedIndex = column.index;
        }

        return {
            gridCell: this.grid.newPoint(c, r),
            mousePoint: this.grid.newPoint(x, y),
            viewPoint: viewPoint,
            dataCell: this.grid.newPoint(translatedIndex, r),
        };
    },

    /**
     * @memberOf Renderer.prototype
     * @summary Determines if a column is visible.
     * @param {number} colIndex - the column index*
     * @returns {boolean} The given column is fully visible.
     */
    isColumnVisible: function(colIndex) {
        var isVisible = this.visibleColumns.indexOf(colIndex) !== -1;
        return isVisible;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The width x coordinate of the last rendered column
     */
    getFinalVisableColumnBoundary: function() {
        var isMaxX = this.isLastColumnVisible();
        var chop = isMaxX ? 2 : 1;
        var colWall = this.getColumnEdges()[this.getColumnEdges().length - chop];
        var result = Math.min(colWall, this.getBounds().width - 200);
        return result;
    },

    /**
     * @memberOf Renderer.prototype
     * @summary Determines visibility of a row.
     * @param {number} rowIndex - the row index
     * @returns {boolean} The given row is fully visible.
     */
    isRowVisible: function(rowIndex) {
        var isVisible = this.visibleRows.indexOf(rowIndex) !== -1;
        return isVisible;
    },

    /**
     * @memberOf Renderer.prototype
     * @summary Determines if a cell is selected.
     * @param {number} x - the x cell coordinate
     * @param {number} y - the y cell coordinate*
     * @returns {boolean} The given cell is fully visible.
     */
    isSelected: function(x, y) {
        return this.grid.isSelected(x, y);
    },

    /**
     * @memberOf Renderer.prototype
     * @desc This is the main forking of the renderering task.
     * @param {CanvasRenderingContext2D} gc
     */
    renderGrid: function(gc) {
        gc.beginPath();

        this.paintCells(gc);
        this.paintGridlines(gc);
        this.renderOverrides(gc);
        this.renderLastSelection(gc);
        gc.closePath();
    },

    renderLastSelection: function(gc) {
        gc.beginPath();
        this._renderLastSelection(gc);
        gc.closePath();
    },

    _renderLastSelection: function(gc) {

        /*

            Compute the Bounds of the Last Selection that is visible

         */

        var selections = this.grid.selectionModel.getSelections();
        if (!selections || selections.length === 0) {
            return;
        }
        var selection = this.grid.selectionModel.getLastSelection();
        var mouseDown = selection.origin;
        if (mouseDown.x === -1) {
            //no selected area, lets exit
            return;
        }

        var visibleColumns = this.getVisibleColumns();
        var visibleRows = this.getVisibleRows();
        var lastVisibleColumn = visibleColumns[visibleColumns.length - 1];
        var lastVisibleRow = visibleRows[visibleRows.length - 1];

        var extent = selection.extent;

        var dpOX = Math.min(mouseDown.x, mouseDown.x + extent.x);
        var dpOY = Math.min(mouseDown.y, mouseDown.y + extent.y);

        //lets check if our selection rectangle is scrolled outside of the visible area
        if (dpOX > lastVisibleColumn) {
            return; //the top of our rectangle is below visible
        }
        if (dpOY > lastVisibleRow) {
            return; //the left of our rectangle is to the right of being visible
        }

        var dpEX = Math.max(mouseDown.x, mouseDown.x + extent.x) + 1;
        dpEX = Math.min(dpEX, 1 + lastVisibleColumn);

        var dpEY = Math.max(mouseDown.y, mouseDown.y + extent.y) + 1;
        dpEY = Math.min(dpEY, 1 + lastVisibleRow);

        var o = this._getBoundsOfCell(dpOX, dpOY);
        var ox = Math.round((o.x === undefined) ? this.grid.getFixedColumnsWidth() : o.x);
        var oy = Math.round((o.y === undefined) ? this.grid.getFixedRowsHeight() : o.y);
        // var ow = o.width;
        // var oh = o.height;
        var e = this._getBoundsOfCell(dpEX, dpEY);
        var ex = Math.round((e.x === undefined) ? this.grid.getFixedColumnsWidth() : e.x);
        var ey = Math.round((e.y === undefined) ? this.grid.getFixedRowsHeight() : e.y);
        // var ew = e.width;
        // var eh = e.height;
        var x = Math.min(ox, ex);
        var y = Math.min(oy, ey);
        var width = 1 + ex - ox;
        var height = 1 + ey - oy;
        if (x === ex) {
            width = ox - ex;
        }
        if (y === ey) {
            height = oy - ey;
        }
        if (width * height < 1) {
            //if we are only a skinny line, don't render anything
            return;
        }

        /*

          Render the selection model around the bounds

         */

        var config = {
            bounds: {
                x: x,
                y: y,
                width: width,
                height: height
            },
            selectionRegionOverlayColor: this.grid.resolveProperty('selectionRegionOverlayColor'),
            selectionRegionOutlineColor: this.grid.resolveProperty('selectionRegionOutlineColor')
        };
        this.grid.cellRenderers.get('lastselection').paint(gc, config);
    },

    /**
     * @memberOf Renderer.prototype
     * @desc iterate the renderering overrides and manifest each
     * @param {CanvasRenderingContext2D} gc
     */
    renderOverrides: function(gc) {
        var cache = this.grid.renderOverridesCache;
        for (var key in cache) {
            if (cache.hasOwnProperty(key)) {
                var override = cache[key];
                if (override) {
                    this.renderOverride(gc, override);
                }
            }
        }
    },

    /**
     * @memberOf Renderer.prototype
     * @desc copy each overrides specified area to it's target and blank out the source area
     * @param {CanvasRenderingContext2D} gc
     * @param {OverrideObject} override - an object with details contain an area and a target context
     */
    renderOverride: function(gc, override) {
        //lets blank out the drag row
        var hdpiRatio = override.hdpiratio;
        //var edges = this.getColumnEdges();
        var startX = override.startX; //hdpiRatio * edges[override.columnIndex];
        var width = override.width + 1;
        var height = override.height;
        var targetCTX = override.ctx;
        var imgData = gc.getImageData(startX, 0, Math.round(width * hdpiRatio), Math.round(height * hdpiRatio));
        targetCTX.putImageData(imgData, 0, 0);
        gc.fillStyle = this.resolveProperty('backgroundColor2');
        gc.fillRect(Math.round(startX / hdpiRatio), 0, width, height);
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Current vertical scroll value.
     */
    getScrollTop: function() {
        return this.grid.getVScrollValue();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Current horizontal scroll value.
     */
    getScrollLeft: function() {
        return this.grid.getHScrollValue();
    },

    getColumnEdges: function() {
        return this.columnEdges;
    },

    getRowEdges: function() {
        return this.rowEdges;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {boolean} The last col was rendered (is visible)
     */
    isLastColumnVisible: function() {
        var lastColumnIndex = this.getColumnCount() - 1;
        return this.visibleColumns.indexOf(lastColumnIndex) !== -1;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The rendered column width at index
     */
    getRenderedWidth: function(index) {
        return this.getColumnEdges()[index];
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The rendered row height at index
     */
    getRenderedHeight: function(index) {
        return this.rowEdges[index];
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {fin-canvas} my [fin-canvas](https://github.com/stevewirts/fin-canvas)
     */
    getCanvas: function() {
        return this.grid.getCanvas();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {boolean} User is currently dragging a column for reordering.
     */
    isDraggingColumn: function() {
        return this.grid.isDraggingColumn();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The row to goto for a page up.
     */
    getPageUpRow: function() {
        var grid = this.grid,
            scrollHeight = this.getVisibleScrollHeight(),
            headerRows = this.grid.getFixedRowCount(),
            top = this.dataWindow.origin.y - headerRows,
            scanHeight = 0;
        while (scanHeight < scrollHeight && top > -1) {
            scanHeight = scanHeight + grid.getRowHeight(top);
            top--;
        }
        return top + 1;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The row to goto for a page down.
     */
    getPageDownRow: function() {
        var headerRows = this.grid.getFixedRowCount();
        var rowNum = this.dataWindow.corner.y - headerRows - 1;
        return rowNum;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of columns.
     */
    getColumnCount: function() {
        return this.grid.getColumnCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of rows.
     */
    getRowCount: function() {
        return this.grid.getRowCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of fixed columns.
     */
    getFixedColumnCount: function() {
        return this.grid.getFixedColumnCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of fixed rows.
     */
    getFixedRowCount: function() {
        return this.grid.getFixedRowCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of header rows.
     */
    getHeaderRowCount: function() {
        return this.grid.getHeaderRowCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of header columns.
     */
    getHeaderColumnCount: function() {
        return this.grid.getHeaderColumnCount();
    },

    /** @summary Smart render the grid.
     * @desc Paint all the cells of a grid, including all "fixed" columns and rows.
     * We snapshot the context to insure against its pollution.
     * `try...catch` surrounds each cell paint in case a cell editor throws an error.
     * The error message is error-logged to console AND displayed in cell.
     * @memberOf Renderer.prototype
     * @param {CanvasRenderingContext2D} gc
     */
    paintCells: function(gc) {
        var message,
            config = {},
            x, y,
            c, r,

            columnEdges = this.getColumnEdges(),
            rowEdges = this.rowEdges,

            visibleCols = this.getVisibleColumns(),
            visibleRows = this.getVisibleRows(),

            behavior = this.grid.behavior,

            clipX = 0,
            clipY = 0,
            clipWidth,
            clipHeight = this.getBounds().height,

            loopStart = this.grid.isShowRowNumbers() ? -1 : 0,
            loopLength = visibleCols.length; // regardless of loopStart, due to definition of .length

        this.buttonCells = {};

        if (loopLength) { // this if prevents painting just the fixed columns when there are no visible columns

            // For each column...
            for (x = loopStart; x < loopLength; x++) {

                c = visibleCols[x];
                this.renderedColumnMinWidths[c] = 0;

                gc.save();

                // Clip to visible portion of column to prevent overflow to right. Previously we clipped to entire visible grid and dealt with overflow by overpainting with next column. However, this strategy fails when transparent background (no background color).
                // TODO: if extra clip() calls per column affect performance (not the clipping itself which was happening anyway, but the clip calls which set up the clipping), use previous strategy when there is a background color
                clipWidth = columnEdges[x + 1];
                gc.beginPath();
                gc.rect(clipX, clipY, clipWidth, clipHeight);
                gc.clip();

                // For each row (of each column)...
                for (y = 0; y < visibleRows.length; y++) {

                    r = visibleRows[y];

                    try {

                        this._paintCell(gc, c, r);

                        //if (r === 9 && c === 2) { throw Error('She sells sea shells by the sea shore.'); }

                    } catch (e) {

                        message = e && (e.message || e) || 'Unknown error.';

                        console.error(message);

                        var rawGc = gc.gc || gc, // Don't log these canvas calls
                            errY = rowEdges[y],
                            errHeight = rowEdges[y + 1] - errY;

                        rawGc.save(); // define clipping region
                        rawGc.beginPath();
                        rawGc.rect(clipX, errY, clipWidth, errHeight);
                        rawGc.clip();
                        config = {
                            bounds: {
                                y: errY,
                                x: clipX,
                                height: errHeight,
                                width: clipWidth
                            }
                        };

                        this.grid.cellRenderers.get('errorcell').paint(rawGc, config, message);

                        rawGc.restore(); // discard clipping region

                    }
                }

                // Bottom totals rows...
                for (y = -behavior.dataModel.getBottomTotals().length; y; y++) {
                    this._paintCell(gc, c, y);
                }

                gc.restore(); // Remove column's clip region (and anything else renderCellError() might have set)
            }
        }

        setNumberColumnWidth(gc, behavior, this.grid.getRowCount());
    },

    /**
     * @memberOf Renderer.prototype
     * @desc We opted to not paint borders for each cell as that was extremely expensive. Instead we draw gridlines here. Also we record the widths and heights for later.
     * @param {CanvasRenderingContext2D} gc
     */
    paintGridlines: function(gc) {
        var x, y, c, r = 0;

        var colWidths = this.getColumnEdges();
        var rowHeights = this.rowEdges;
        var viewHeight;
        var viewWidth = colWidths[colWidths.length - 1];
        var drawThemH = this.resolveProperty('gridLinesH');
        var drawThemVOverflow = this.resolveProperty('gridLinesVOverflow');
        var drawThemV = this.resolveProperty('gridLinesV');
        var lineColor = this.resolveProperty('lineColor');
        if (drawThemVOverflow){
            viewHeight = this.getBounds().height;
        } else {
            viewHeight = rowHeights[rowHeights.length - 1];
        }

        gc.beginPath();

        if (drawThemV) {
            for (c = 0; c < colWidths.length + 1; c++) {
                x = colWidths[c] + 0.5;
                gc.moveTo(x, 0);
                gc.lineTo(x, viewHeight);
            }
        }

        if (drawThemH) {
            for (r = 0; r < rowHeights.length - 1; r++) {
                y = rowHeights[r] + 0.5;
                gc.moveTo(0, y);
                gc.lineTo(viewWidth, y);
            }

            // Bottom totals rows...
            var behavior = this.grid.behavior,
                rowHeight = behavior.getDefaultRowHeight();
            for (r = -behavior.dataModel.getBottomTotals().length, y = this.getBounds().height; r; r++) {
                y -= rowHeight;
                gc.moveTo(0, y);
                gc.lineTo(viewWidth, y);
            }
        }

        gc.closePath();

        gc.strokeStyle = lineColor;
        gc.lineWidth = this.resolveProperty('lineWidth');
        gc.stroke();
    },

    /**
     * @memberOf Renderer.prototype
     * @param {CanvasRenderingContext2D} gc
     * @param x
     * @param y
     */
    paintCell: function(gc, x, y) {
        gc.moveTo(0, 0);

        var c = this.getVisibleColumns()[x],
            r = this.getVisibleRows()[y];

        if (c) { //something is being viewed at at the moment (otherwise returns undefined)
            this._paintCell(gc, c, r);
        }
    },

    _paintCell: function(gc, c, r) {

        var grid = this.grid,
            behavior = grid.behavior,
            baseProperties = behavior.getColumnProperties(c);

        if (baseProperties.isNull) {
            return;
        }

        var columnProperties = baseProperties,

            headerRowCount = behavior.getHeaderRowCount(),
            isGridRow = r >= headerRowCount,
            isFooterRow = r < 0,
            isHeaderRow = !isGridRow && !isFooterRow,
            isFilterRow = grid.isFilterRow(r),

            headerColumnCount = behavior.getHeaderColumnCount(),
            isGridColumn = c >= headerColumnCount,
            isShowRowNumbers = grid.isShowRowNumbers(),
            isHierarchyColumn = grid.isHierarchyColumn(c),

            isRowSelected = grid.isRowSelected(r),
            isColumnSelected = grid.isColumnSelected(c),
            isCellSelected = grid.isCellSelected(c, r),
            isCellSelectedInColumn = grid.isCellSelectedInColumn(c),
            isCellSelectedInRow = grid.isCellSelectedInRow(r),
            areAllRowsSelected = grid.areAllRowsSelected(),
            cellProperties;

        if ((isShowRowNumbers && c === -1) || isHierarchyColumn) {
            if (isRowSelected) {
                cellProperties = Object.create(baseProperties.rowHeaderRowSelection);
                cellProperties.isSelected = true;
            } else {
                cellProperties = Object.create(baseProperties.rowHeader);
                cellProperties.isSelected = isCellSelectedInRow;
            }
            cellProperties.isUserDataArea = false;
        } else if (isHeaderRow || isFooterRow) {
            if (isFilterRow) {
                cellProperties = Object.create(baseProperties.filterProperties);
                cellProperties.isSelected = false;
            } else if (isColumnSelected) {
                cellProperties = Object.create(baseProperties.columnHeaderColumnSelection);
                cellProperties.isSelected = true;
            } else {
                cellProperties = Object.create(baseProperties.columnHeader);
                cellProperties.isSelected = isCellSelectedInColumn;
            }
            cellProperties.isUserDataArea = false;
        } else if (isHierarchyColumn) {
            cellProperties = Object.create(baseProperties.rowHeader);
            cellProperties.isSelected = isCellSelectedInRow;
        } else {
            cellProperties = Object.create(baseProperties);
            cellProperties.isSelected = isCellSelected || isRowSelected || isColumnSelected;
            cellProperties.isUserDataArea = true;
        }

        var rowNum = r - headerRowCount + 1;

        if (c === -1) {
            if (r === 0) { // header row gets "master" checkbox
                cellProperties.value = [images.checkbox(areAllRowsSelected), '', null];
            } else if (isFilterRow) { // no checkbox but show filter icon
                cellProperties.value = [images.filter(false), '', null];
            } else if (isHeaderRow || isFooterRow) { // no checkbox on "totals" rows
                cellProperties.value = '';
            } else {
                cellProperties.value = [images.checkbox(isRowSelected), rowNum, null];
            }
            cellProperties.halign = 'right';
        } else {
            // set dataRow and columnName used by valOrFunc (needed when func)
            var column = behavior.getActiveColumn(c);
            cellProperties.dataRow = grid.getRow(r);
            cellProperties.columnName = column.name;
            cellProperties.calculator = column.calculator;

            cellProperties.value = grid.getValue(c, r);
            cellProperties.halign = grid.getColumnAlignment(c);
        }

        cellProperties.isGridColumn = isGridColumn;
        cellProperties.isGridRow = isGridRow;
        cellProperties.isColumnHovered = grid.isColumnHovered(c) && isGridColumn;
        cellProperties.isRowHovered = grid.isRowHovered(r) && isGridRow;
        cellProperties.isCellHovered = grid.isHovered(c, r) && isGridColumn && isGridRow;
        cellProperties.bounds = this._getBoundsOfCell(c, r);
        cellProperties.isCellSelected = isCellSelected;
        cellProperties.isRowSelected = isRowSelected;
        cellProperties.isColumnSelected = isColumnSelected;
        cellProperties.isInCurrentSelectionRectangle = grid.isInCurrentSelectionRectangle(c, r);

        if (grid.mouseDownState) {
            var point = grid.mouseDownState.gridCell;
            cellProperties.mouseDown = point.x === c && point.y === r;
        }

        var cell = behavior.getCellRenderer(cellProperties, c, r);

        behavior.cellPropertiesPrePaintNotification(cellProperties);

        //declarative cell properties
        if (isGridRow && isGridColumn) {
            var overrides = behavior.getCellProperties(column.index, r);
            _(cellProperties).extendOwn(overrides);
        }

        //allow the renderer to identify itself if it's a button
        cellProperties.buttonCells = this.buttonCells;

        cellProperties.formatValue = grid.getFormatter(cellProperties.isUserDataArea && cellProperties.format);
        cell.paint(gc, cellProperties);

        this.renderedColumnMinWidths[c] = Math.max(cellProperties.minWidth || 0, this.renderedColumnMinWidths[c]);
        columnProperties.preferredWidth = this.renderedColumnMinWidths[c];
    },

    isViewableButton: function(c, r) {
        var key = c + ',' + r;
        return this.buttonCells[key] === true;
    },

    getRowNumbersWidth: function() {
        var colEdges = this.getColumnEdges();
        if (colEdges.length === 0) {
            return 0;
        }
        return colEdges[0];
    },

    startAnimator: function() {
        var self = this;
        requestAnimationFrame(function animate() {
            self.animate();
            requestAnimationFrame(animate);
        });
    },

    animate: function() {
        var ctx = this.getCanvas().canvasCTX;
        ctx.beginPath();
        ctx.save();
        this.renderLastSelection(ctx);
        ctx.restore();
        ctx.closePath();
    },

    getBounds: function() {
        return this.bounds;
    },

    setBounds: function(bounds) {
        return (this.bounds = bounds);
    }

});

function setNumberColumnWidth(gc, behavior, maxRow) {
    var columnProperties = behavior.getColumnProperties(-1),
        cellProperties = columnProperties.rowHeader,
        icon = images.checked;

    gc.font = cellProperties.font;

    columnProperties.preferredWidth = icon.width + 7 + cellProperties.getTextWidth(gc, maxRow + 1);
}

module.exports = Renderer;

},{"../../images":4,"./Base":118,"object-iterators":51}],121:[function(require,module,exports){
'use strict';

var RangeSelectionModel = require('sparse-boolean-array');

/**
 *
 * @constructor
 * @desc We represent selections as a list of rectangles because large areas can be represented and tested against quickly with a minimal amount of memory usage. Also we need to maintain the selection rectangles flattened counter parts so we can test for single dimension contains. This is how we know to highlight the fixed regions on the edges of the grid.
 */

function SelectionModel(grid) {

    this.grid = grid;

    /**
     * @name selections
     * @type {Rectangle[]}
     * @summary The selection rectangles.
     * @desc Created as an empty array upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.selections = [];

    /**
     * @name flattenedX
     * @type {Rectangle[]}
     * @summary The selection rectangles flattened in the horizontal direction (no width).
     * @desc Created as an empty array upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.flattenedX = [];

    /**
     * @name flattenedY
     * @type {Rectangle[]}
     * @summary The selection rectangles flattened in the vertical direction (no height).
     * @desc Created as an empty array upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.flattenedY = [];

    /**
     * @name rowSelectionModel
     * @type {RangeSelectionModel}
     * @summary The selection rectangles.
     * @desc Created as a new RangeSelectionModel upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.rowSelectionModel = new RangeSelectionModel();

    /**
     * @name columnSelectionModel
     * @type {RangeSelectionModel}
     * @summary The selection rectangles.
     * @desc Created as a new RangeSelectionModel upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.columnSelectionModel = new RangeSelectionModel();

    this.setLastSelectionType('');
}

SelectionModel.prototype = {

    constructor: SelectionModel.prototype.constructor,

    /**
     * @type {boolean}
     * @memberOf SelectionModel.prototype
     */
    allRowsSelected: false,

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*}
     */
    getLastSelection: function() {
        var sels = this.selections;
        var sel = sels[sels.length - 1];
        return sel;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*}
     */
    getLastSelectionType: function() {
        return this.lastSelectionType;
    },

    /**
     * @param type
     * @memberOf SelectionModel.prototype
     */
    setLastSelectionType: function(type) {
        this.lastSelectionType = type;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @description Select the region described by the given coordinates.
     *
     * @param {number} ox - origin x coordinate
     * @param {number} oy - origin y coordinate
     * @param {number} ex - extent x coordinate
     * @param {number} ey - extent y coordinate
     * @param {boolean} silent - whether to fire selection changed event
     */
    select: function(ox, oy, ex, ey, silent) {
        var newSelection = this.grid.newRectangle(ox, oy, ex, ey);
        newSelection.firstSelectedCell = this.grid.newPoint(ox, oy); //Cache the first selected cell before it gets normalized to top-left origin
        newSelection.lastSelectedCell = (
            (newSelection.firstSelectedCell.x === newSelection.origin.x && newSelection.firstSelectedCell.y === newSelection.origin.y)
            ?
                newSelection.corner
                :
                newSelection.origin
        );
        this.selections.push(newSelection);
        this.flattenedX.push(newSelection.flattenXAt(0));
        this.flattenedY.push(newSelection.flattenYAt(0));
        this.setLastSelectionType('cell');
        if (!silent) {this.grid.selectionChanged();}
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param {number} ox - origin x coordinate
     * @param {number} oy - origin y coordinate
     * @param {number} ex - extent x coordinate
     * @param {number} ey - extent y coordinate
     */
    toggleSelect: function(ox, oy, ex, ey) {

        var selected, index;

        selected = this.selections.find(function(selection, idx) {
            index = idx;
            return (
                selection.origin.x === ox && selection.origin.y === oy &&
                selection.extent.x === ex && selection.extent.y === ey
            );
        });

        if (selected) {
            this.selections.splice(index, 1);
            this.flattenedX.splice(index, 1);
            this.flattenedY.splice(index, 1);
            this.grid.selectionChanged();
        } else {
            this.select(ox, oy, ex, ey);
        }
    },

    /**
     * @memberOf SelectionModel.prototype
     * @desc Remove the last selection that was created.
     */
    clearMostRecentSelection: function(dontClearRowSelections) {
        dontClearRowSelections = dontClearRowSelections === true;
        if (!dontClearRowSelections) {
            this.setAllRowsSelected(false);
        }
        if (this.selections.length) { --this.selections.length; }
        if (this.flattenedX.length) { --this.flattenedX.length; }
        if (this.flattenedY.length) { --this.flattenedY.length; }
        //this.getGrid().selectionChanged();
    },

    /**
     * @memberOf SelectionModel.prototype
     */
    clearMostRecentColumnSelection: function() {
        this.columnSelectionModel.clearMostRecentSelection();
        this.setLastSelectionType('column');
    },

    /**
     * @memberOf SelectionModel.prototype
     */
    clearMostRecentRowSelection: function() {
        this.rowSelectionModel.clearMostRecentSelection();
        this.setLastSelectionType('row');
    },

    /**
     * @memberOf SelectionModel.prototype
     */
    clearRowSelection: function() {
        this.rowSelectionModel.clear();
        this.setLastSelectionType('row');
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*}
     */
    getSelections: function() {
        return this.selections;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean} There are active selection(s).
     */
    hasSelections: function() {
        return this.selections.length !== 0;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean}
     */
    hasRowSelections: function() {
        return !this.rowSelectionModel.isEmpty();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean}
     */
    hasColumnSelections: function() {
        return !this.columnSelectionModel.isEmpty();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @return {boolean} Selection covers a specific column.
     * @param {number} y
     */
    isCellSelectedInRow: function(y) {
        return this._isCellSelected(this.flattenedX, 0, y);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns Selection covers a specific row.
     * @param {number} x
     */
    isCellSelectedInColumn: function(x) {
        return this._isCellSelected(this.flattenedY, x, 0);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @summary Selection query function.
     * @returns {boolean} The given cell is selected (part of an active selection).
     * @param {Rectangle[]} selections - Selection rectangles to search through.
     * @param {number} x
     * @param {number} y
     */
    isSelected: function(x, y) {
        return (
            this.isColumnSelected(x) ||
            this.isRowSelected(y) ||
            this._isCellSelected(this.selections, x, y)
        );
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x
     * @param y
     * @returns {*}
     */
    isCellSelected: function(x, y) {
        return this._isCellSelected(this.selections, x, y);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param selections
     * @param x
     * @param y
     * @returns {boolean}
     * @private
     */
    _isCellSelected: function(selections, x, y) {
        var self = this;
        return !!selections.find(function(selection) {
            return self.rectangleContains(selection, x, y);
        });
    },

    /**
     * @memberOf SelectionModel.prototype
     * @desc empty out all our state
     *
     */
    clear: function(dontClearRowSelections) {
        dontClearRowSelections = dontClearRowSelections === true;
        this.selections.length = 0;
        this.flattenedX.length = 0;
        this.flattenedY.length = 0;
        this.columnSelectionModel.clear();
        if (!dontClearRowSelections) {
            this.setAllRowsSelected(false);
            this.rowSelectionModel.clear();
        }
        //this.getGrid().selectionChanged();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param {number} ox - origin x coordinate
     * @param {number} oy - origin y coordinate
     * @param {number} ex - extent x coordinate
     * @param {number} ey - extent y coordinate
     * @returns {boolean}
     */
    isRectangleSelected: function(ox, oy, ex, ey) {
        return !!this.selections.find(function(selection) {
            return (
                selection.origin.x === ox && selection.origin.y === oy &&
                selection.extent.x === ex && selection.extent.y === ey
            );
        });
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x
     * @returns {*}
     */
    isColumnSelected: function(x) {
        return this.columnSelectionModel.isSelected(x);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param y
     * @returns {boolean|*}
     */
    isRowSelected: function(y) {
        return this.allRowsSelected || this.rowSelectionModel.isSelected(y);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x1
     * @param x2
     */
    selectColumn: function(x1, x2) {
        this.columnSelectionModel.select(x1, x2);
        this.setLastSelectionType('column');
    },

    /**
     * @memberOf SelectionModel.prototype
     */
    selectAllRows: function() {
        this.clear();
        this.setAllRowsSelected(true);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean}
     */

    setAllRowsSelected: function(isIt) {
        this.allRowsSelected = isIt;
    },

    areAllRowsSelected: function() {
        return this.allRowsSelected;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param y1
     * @param y2
     */
    selectRow: function(y1, y2) {
        this.rowSelectionModel.select(y1, y2);
        this.setLastSelectionType('row');
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x1
     * @param x2
     */
    deselectColumn: function(x1, x2) {
        this.columnSelectionModel.deselect(x1, x2);
        this.setLastSelectionType('column');
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param y1
     * @param y2
     */
    deselectRow: function(y1, y2) {
        this.rowSelectionModel.deselect(y1, y2);
        this.setLastSelectionType('row');
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*}
     */
    getSelectedRows: function() {
        if (this.areAllRowsSelected()) {
            var headerRows = this.grid.getHeaderRowCount();
            var rowCount = this.grid.getRowCount() - headerRows;
            var result = new Array(rowCount);
            for (var i = 0; i < rowCount; i++) {
                result[i] = i + headerRows;
            }
            return result;
        }
        return this.rowSelectionModel.getSelections();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*|Array.Array.number}
     */
    getSelectedColumns: function() {
        return this.columnSelectionModel.getSelections();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean}
     */
     isColumnOrRowSelected: function() {
        return !this.columnSelectionModel.isEmpty() || !this.rowSelectionModel.isEmpty();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {Array}
     */
    getFlattenedYs: function() {
        var result = [];
        var set = {};
        this.selections.forEach(function(selection) {
            var top = selection.origin.y;
            var size = selection.extent.y + 1;
            for (var r = 0; r < size; r++) {
                var ti = r + top;
                if (!set[ti]) {
                    result.push(ti);
                    set[ti] = true;
                }
            }
        });
        result.sort(function(x, y) {
            return x - y;
        });
        return result;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param offset
     */
    selectRowsFromCells: function(offset, dontClearRowSelections) {
        offset = offset || 0;
        dontClearRowSelections = dontClearRowSelections === true;

        var sm = this.rowSelectionModel;

        if (!dontClearRowSelections) {
            this.setAllRowsSelected(false);
            sm.clear();
        }

        this.selections.forEach(function(selection) {
            var top = selection.origin.y,
                extent = selection.extent.y;
            top += offset;
            sm.select(top, top + extent);
        });
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param offset
     */
    selectColumnsFromCells: function(offset) {
        offset = offset || 0;

        var sm = this.columnSelectionModel;
        sm.clear();

        this.selections.forEach(function(selection) {
            var left = selection.origin.x,
                extent = selection.extent.x;
            left += offset;
            sm.select(left, left + extent);
        });
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x
     * @param y
     * @returns {*}
     */
    isInCurrentSelectionRectangle: function(x, y) {
        var last = this.selections[this.selections.length - 1];
        return last && this.rectangleContains(last, x, y);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param rect
     * @param x
     * @param y
     * @returns {boolean}
     */
    rectangleContains: function(rect, x, y) { //TODO: explore why this works and contains on rectanglular does not
        var minX = rect.origin.x;
        var minY = rect.origin.y;
        var maxX = minX + rect.extent.x;
        var maxY = minY + rect.extent.y;

        if (rect.extent.x < 0) {
            minX = maxX;
            maxX = rect.origin.x;
        }

        if (rect.extent.y < 0) {
            minY = maxY;
            maxY = rect.origin.y;
        }

        var result =
            x >= minX &&
            y >= minY &&
            x <= maxX &&
            y <= maxY;

        return result;
    }
};

module.exports = SelectionModel;

},{"sparse-boolean-array":55}],122:[function(require,module,exports){
/* eslint-env browser */

'use strict';

/**
 *
 * @param {HTMLElement} [containingEl=document]
 * @param {string} [prefix='']
 * @param {string} [separator='']
 * @param {string} [suffix='']
 * @param {function} [transformer=multiLineTrim] - Function to transform each input control's text value.
 */
function copyAll(containingEl, prefix, separator, suffix, transformer) {
    var texts = [], lastTextEl, text;

    Array.prototype.forEach.call((containingEl || document).querySelectorAll(copyAll.selector), function(textEl) {
        text = (transformer || multiLineTrim)(textEl.value);
        if (text) { texts.push(text); }
        lastTextEl = textEl;
    });

    if (lastTextEl) {
        copy(lastTextEl, (prefix || '') + texts.join(separator || '') + (suffix || ''));
    }
}

/**
 * 1. Trim the text in the given input element
 * 2. select it
 * 3. copy it to the clipboard
 * 4. deselect it
 * 5. return it
 * @param {HTMLElement|HTMLTextAreaElement} el
 * @param {string} [text=el.value] - Text to copy.
 * @returns {undefined|string} Trimmed text in element or undefined if unable to copy.
 */
function copy(el, text) {
    var result, textWas;

    if (text) {
        textWas = el.value;
        el.value = text;
    } else {
        text = el.value;
    }

    el.value = multiLineTrim(text);

    try {
        el.select();
        result = document.execCommand('copy');
    } catch (err) {
        result = false;
    } finally {
        if (textWas !== undefined) {
            el.value = textWas;
        }
        el.blur();
    }
    return result;
}

function multiLineTrim(s) {
    return s.replace(/^\s*(.*?)\s*$/, '$1');
}

copy.all = copyAll;
copy.multiLineTrim = multiLineTrim;
copy.selectorTextControls = 'input:not([type]), input[type=text], textarea';

module.exports = copy;

},{}],123:[function(require,module,exports){
'use strict';

// console.warn polyfill as needed
// used for deprecation warnings
if (!console.warn) {
    console.warn = function() {
        console.log.apply(console, ['WARNING:'].concat(Array.prototype.slice.call(arguments)));
    };
}

var warned = {};

var regexIsMethod = /\)$/;

/**
 * User is warned and new property is returned or new method is called and the result is returned.
 * @param {string} methodName - Deprecated method name with parentheses (required) containing argument list (optional).
 * @param {string} dotProps - Dot-separated new property name to invoke or method name to call. Method names are indicated by including parentheses with optional argument list. The arguments in each list are drawn from the arguments presented in the `methodName` parameter.
 * @param {string} since - Version in which the name was deprecated.
 * @param {Arguments|Array} [args] - Actual arguments. Only needed when arguments are listed in `methodName`. The order of the arguments must match.
 * @param {string} [notes] - Notes to add to message.
 * @returns {*} Return value of new property or method call.
 */
var deprecated = function(methodName, dotProps, since, args, notes) {
    if (!regexIsMethod.test(methodName)) {
        throw 'Expected method name to have parentheses.';
    }

    if (typeof args === 'string') {
        // `args` omitted
        notes = args;
        args = undefined;
    }

    var chain = dotProps.split('.'),
        formalArgList = argList(methodName),
        result = this;

    if (!(methodName in warned)) {
        warned[methodName] = deprecated.warnings;
    }
    if (warned[methodName]) {
        var memberType = regexIsMethod.test(dotProps) ? 'method' : 'property';
        var warning = 'The .' + methodName + ' method is deprecated as of v' + since +
            ' in favor of the .' + chain.join('.') + ' ' + memberType + '.' +
            ' (Will be removed in a future release.)';

        if (notes) {
            warning += ' ' + notes;
        }

        console.warn(warning);

        --warned[methodName];
    }

    function mapToFormalArg(argName) {
        var index = formalArgList.indexOf(argName);
        if (index === -1) {
            throw 'Actual arg "' + argName + '" not found in formal arg list ' + formalArgList;
        }
        return args[index];
    }

    for (var i = 0, last = chain.length - 1; i <= last; ++i) {
        var link = chain[i],
            name = link.match(/\w+/)[0],
            actualArgList = regexIsMethod.test(link) ? argList(link) : undefined,
            actualArgs = [];

        if (actualArgList) {
            actualArgs = actualArgList.map(mapToFormalArg);
            link = link.match(/(\w+)/)[1];
            result = result[name].apply(result, actualArgs);
        } else {
            result = result[name]();
        }
    }

    return result;
};

deprecated.warnings = 5; // just enough to be annoying

function argList(s) {
    return s.match(/^\w+\((.*)\)$/)[1].match(/(\w+)/g);
}

module.exports = deprecated;

},{}],124:[function(require,module,exports){
/* eslint-env browser */

/** @module effects */

/** @typedef {function} effectFunction
 * @desc Element to perform transitions upon is `options.el` if defined or `this.el`.
 * @param {object} [options]
 * @param {HTMLElement} [options.el=this.el]
 * @param {function} [options.callback] Function to call at conclusion of transitions.
 * @param {string} [options.duration='0.065s'] - Duration of each transition.
 * @param {object} [options.styles=defaultGlowerStyles] - Hash of CSS styles and values to transition. (For {@link effects~glower|glower} only.
 */

'use strict';

/**
 * Shake element back and fourth a few times as if to say, "Nope!"
 * @type {effectFunction}
 * @memberOf module:effects
 */
exports.shaker = function(options) {
    options = options || {};
    var context = this,
        el = options.el || context.el,
        duration = options.duration || '0.065s',
        computedStyle = window.getComputedStyle(el),
        transitions = computedStyle.transition.split(','),
        position = computedStyle.position,
        x = parseInt(computedStyle.left),
        dx = -3,
        shakes = 6;

    transitions.push('left ' + duration);
    el.style.transition = transitions.join(',');
    el.addEventListener('transitionend', shaker);
    shaker();
    function shaker(event) {
        if (!event || event.propertyName === 'left') {
            el.style.left = x + dx + 'px';
            if (!shakes--) {
                el.removeEventListener('transitionend', shaker);
                transitions.pop();
                el.style.transition = transitions.join(',');
                el.style.position = position;
                if (options.callback) {
                    options.callback.call(context, options);
                }
            }
            dx = shakes ? -dx : 0;
        }
    }
};

var defaultGlowerStyles = {
    'background-color': 'yellow',
    'box-shadow': '0 0 10px red'
};

/**
 * Transition styles on element for a moment and revert as if to say, "Whoa!."
 * @type {effectFunction}
 * @memberOf module:effects
 */
exports.glower = function(options) {
    options = options || {};
    var context = this,
        el = options.el || context.el,
        duration = options.duration || '0.25s',
        styles = options.styles || defaultGlowerStyles,
        values = styles.length,
        computedStyle = window.getComputedStyle(el),
        styleWas = {},
        transition = computedStyle.transition,
        transitions = transition.split(',');

    Object.keys(styles).forEach(function(style) {
        styleWas[style] = {
            style: computedStyle[style],
            undo: true
        };
        transitions.push(style + ' ' + duration);
    });

    el.style.transition = transitions.join(',');
    el.addEventListener('transitionend', glower);
    Object.keys(styles).forEach(function(style) {
        el.style[style] = styles[style];
    });

    function glower(event) {
        var was = styleWas[event.propertyName];
        if (was.undo) {
            el.style[event.propertyName] = was.style;
            was.undo = false;
        } else if (!--values) {
            el.removeEventListener('transitionend', glower);
            el.style.transition = transition;
            if (options.callback) {
                options.callback.call(context, options);
            }
        }
    }
};

},{}],125:[function(require,module,exports){
/* eslint-env browser */

'use strict';

module.exports.each = function(selector, iteratee, context) {
    return Array.prototype.forEach.call((context || document).querySelectorAll(selector), iteratee);
};

module.exports.find = function(selector, iteratee, context) {
    return Array.prototype.find.call((context || document).querySelectorAll(selector), iteratee);
};

},{}],126:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var HTTP_STATE_DONE = 4,
    HTTP_STATUS_OK = 200;

module.exports.get = function(url, callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', url, true);

    httpRequest.onreadystatechange = function() {
        if (
            httpRequest.readyState === HTTP_STATE_DONE &&
            httpRequest.status === HTTP_STATUS_OK
        ) {
            callback(JSON.parse(httpRequest.responseText));
        }
    };

    httpRequest.send(null);
};

},{}],127:[function(require,module,exports){
'use strict';

Math.sign = Math.sign || function(x) {
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
        return x;
    }
    return x > 0 ? 1 : -1;
};

},{}],128:[function(require,module,exports){
'use strict';

function Queueless(element, context) {
    this.element = element;
    this.context = context;
    this.transitioning = false;
}

Queueless.prototype.begin = function(callback) {
    var self = this;

    this.transitioning = true;

    this.element.addEventListener('transitionend', function end(transEvent) {
        self.element.removeEventListener('transitionend', end);

        if (callback) {
            callback.call(this, transEvent, self);
        }

        self.transitioning = false;
    });
};

module.exports = Queueless;

},{}],129:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var automat = require('automat');

var css = require('../../css');

// note the position of the  first "natural" stylesheet. We will insert our stylesheets before this node.
var head = document.querySelector('head');
var refNode = Array.prototype.slice.call(head.children).find(function(child) {
    return child.tagName === 'STYLE' ||
        child.tagName === 'LINK' &&
        child.getAttribute('rel') === 'stylesheet' &&
        child.getAttribute('type') === 'text/css';
});

exports.prefix = 'injected-stylesheet-';

exports.inject = function(id, replacements) {
    var stylesheet = document.querySelector('#' + this.prefix + id);

    if (!stylesheet) {
        stylesheet = css[id];
        stylesheet = '<style>\n' + stylesheet + '\n</style>\n';
        var args = [stylesheet, head, refNode].concat(Array.prototype.slice.call(arguments, 1));
        stylesheet = automat.append.apply(null, args)[0];
        stylesheet.id = this.prefix + id;
    }

    return stylesheet;
};

},{"../../css":1,"automat":5}]},{},[97])
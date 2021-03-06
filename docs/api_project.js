define({
  "name": "IOU_LEDGER",
  "version": "0.4.0",
  "description": "Housemates money managers",
  "title": "Housemates money ledger docs",
  "url": "http://localhost:3000",
  "sampleUrl": "http://localhost:3000",
  "header": {
    "title": "Getting Started",
    "content": "<h1>IOU_HOUSEMATE_TRACKER</h1>\n<p><strong>Local setup</strong></p>\n<ol>\n<li>Create a postgres database <code>housemate_dev</code></li>\n</ol>\n<pre class=\"prettyprint lang-json\">    host: 'localhost',\n    database: 'housemate_dev',\n    user: 'postgres',\n    password: 'password',\n    port: '5432'\n</pre>\n<ol start=\"2\">\n<li>Clone repo, and run <code>yarn</code> to install dependencies</li>\n<li>Run migrations using <code>yarn db:init</code> and seeds db <code>yarn db:seed</code></li>\n<li>Run local server <code>yarn start</code></li>\n<li>Below are the api endpoints</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th style=\"text-align:left\">HTTP Method</th>\n<th style=\"text-align:left\">Resource</th>\n<th style=\"text-align:left\">Payload Format</th>\n<th style=\"text-align:left\">Response w/o Payload</th>\n<th style=\"text-align:left\">Response w/ Payload</th>\n<th style=\"text-align:left\">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:left\">GET</td>\n<td style=\"text-align:left\"><code>/users</code></td>\n<td style=\"text-align:left\"><code>{&quot;users&quot;:[&quot;Adam&quot;,&quot;Bob&quot;]}</code></td>\n<td style=\"text-align:left\"><code>{&quot;users&quot;:}</code></td>\n<td style=\"text-align:left\"><code>{&quot;users&quot;: (sorted by name)}</code></td>\n<td style=\"text-align:left\">List of User Information</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">POST</td>\n<td style=\"text-align:left\"><code>/add</code></td>\n<td style=\"text-align:left\"><code>{&quot;user&quot;:}</code></td>\n<td style=\"text-align:left\">N/A</td>\n<td style=\"text-align:left\"><code>&lt;User object for rew users)</code></td>\n<td style=\"text-align:left\">Create User</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">POST</td>\n<td style=\"text-align:left\"><code>/iou</code></td>\n<td style=\"text-align:left\"><code>{&quot;lender&quot;:,&quot;borrower&quot;:,&quot;amount&quot;:5.25}</code></td>\n<td style=\"text-align:left\">N/A</td>\n<td style=\"text-align:left\"><code>{&quot;users&quot;: and (sorted by name)&gt;}</code></td>\n<td style=\"text-align:left\">Create IOU</td>\n</tr>\n</tbody>\n</table>\n<p>TODO:</p>\n<ul>\n<li>[ ] Implement cascade deletion of iou's</li>\n<li>[x] Use a join table for cleaner queries</li>\n</ul>\n"
  },
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-02-08T09:52:07.839Z",
    "url": "https://apidocjs.com",
    "version": "0.26.0"
  }
});

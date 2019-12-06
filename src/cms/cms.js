import CMS from 'netlify-cms'
import 'netlify-cms/dist/cms.css'

// Handles emotion styles and link tags added with Helmet
import { withGlobalPreview } from './GlobalPreview'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('about', withGlobalPreview(AboutPagePreview))
CMS.registerPreviewTemplate('posts', withGlobalPreview(BlogPostPreview))

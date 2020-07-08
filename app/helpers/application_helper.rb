module ApplicationHelper
  def default_meta_tags
  {
    site: 'illustrator-kelly',
    title: 'kelly',
    reverse: true,
    separator: '|',
    description: 'イラストレーター「ケリー（kelly）」のイラストサイト、仕事の依頼はこちらまで！',
    keywords: 'kelly',
    canonical: request.original_url,
    noindex: ! Rails.env.production?,
    # 後でちゃんとやること！！いいな？
    # icon: [
      # { href: image_url('favicon.ico') },
      # { href: image_url('icon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
    # ],
    og: {
      site_name: 'kelly',
      title: 'hello illust',
      description: 'イラストレーター「ケリー（kelly）」のイラストサイト、仕事の依頼はこちらまで！',
      type: 'website',
      url: request.original_url,
      image: image_url('/assets/backgroundimage.jpg'),
      locale: 'ja_JP',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@kelly_dog_cat',
    }
  }
  end
end

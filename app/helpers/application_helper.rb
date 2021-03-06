module ApplicationHelper
  def default_meta_tags
  {
    site: 'illustrator-kelly',
    title: 'kelly',
    reverse: true,
    separator: '|',
    description: 'ケリーのポートフォリオサイトです。ご依頼はコンタクトフォームへ',
    keywords: 'イラスト,イラスト素材,Kelly',
    canonical: request.original_url,
    noindex: ! Rails.env.production?,
    icon: [
      { href: image_url('favicon.jpg') },
      { href: image_url('appleIcon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
    ],
    og: {
      site_name: 'illustrator-kelly',
      title: 'kelly',
      description: 'ケリーのポートフォリオサイトです。ご依頼はコンタクトフォームへ',
      type: 'website',
      url: request.original_url,
      image: image_url('/assets/backgroundimage.jpg'),
      locale: 'ja_JP',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@kelly_dog_cat',
    },
    fb: {
      app_id: '2667908266871495'
    }
  }
  end
end

class PageSettings

  class << self
    def run
      add_home_settings!
      add_about_settings!
      add_contact_settings!
    end

    def add_home_settings!

      page_id = 1
      title = "Мой кабинет"
      subtitle = "любимые страницы"
      banner = File.open("#{Rails.root}/app/assets/images/clean_blog/home-bg.jpg")

      existing_page_settings = SettingsPage.find_by(page_id: page_id)

      if existing_page_settings.blank?
        SettingsPage.create!(
          page_id:  page_id,
          title:    title,
          subtitle: subtitle,
          banner:   banner
        )
      end
    end

    def add_about_settings!

      page_id = 2
      title = "Немного обо мне"
      subtitle = "молодость, юность, отрочество"
      banner = File.open("#{Rails.root}/app/assets/images/clean_blog/about-bg.jpg")

      existing_page_settings = SettingsPage.find_by(page_id: page_id)

      if existing_page_settings.blank?
        SettingsPage.create!(
          page_id:  page_id,
          title:    title,
          subtitle: subtitle,
          banner:   banner
        )
      end
    end

    def add_contact_settings!

      page_id = 3
      title = "Контакты"
      subtitle = "что, где, когда"
      banner = File.open("#{Rails.root}/app/assets/images/clean_blog/contact-bg.jpg")

      existing_page_settings = SettingsPage.find_by(page_id: page_id)

      if existing_page_settings.blank?
        SettingsPage.create!(
          page_id:  page_id,
          title:    title,
          subtitle: subtitle,
          banner:   banner
        )
      end
    end
  end
end

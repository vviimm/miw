class PageSettings

  class << self
    def run
      add_home_settings!
      add_about_settings!
      add_contact_settings!
    end

    def add_home_settings!

      name = "home"
      title = "Мой кабинет"
      subtitle = "любимые страницы"
      banner = File.open("#{Rails.root}/db/images/home.jpg")

      existing_page_settings = SettingsPage.find_by(name: name)

      if existing_page_settings.blank?
        SettingsPage.create!(
          name:     name,
          title:    title,
          subtitle: subtitle,
          banner:   banner
        )
      end
    end

    def add_about_settings!

      name = "about"
      title = "Немного обо мне"
      subtitle = "молодость, юность, отрочество"
      banner = File.open("#{Rails.root}/db/images/about.jpg")

      existing_page_settings = SettingsPage.find_by(name: name)

      if existing_page_settings.blank?
        SettingsPage.create!(
          name:     name,
          title:    title,
          subtitle: subtitle,
          banner:   banner
        )
      end
    end

    def add_contact_settings!

      name = "contact"
      title = "Контакты"
      subtitle = "что, где, когда"
      banner = File.open("#{Rails.root}/db/images/contact.jpg")

      existing_page_settings = SettingsPage.find_by(name: name)

      if existing_page_settings.blank?
        SettingsPage.create!(
          name:     name,
          title:    title,
          subtitle: subtitle,
          banner:   banner
        )
      end
    end
  end
end

module CleanBlogsHelper

  def full_title(page_title = '')

    if cezar_signed_in?
      base_title = "MIW_control"
    else
      base_title = "MIW"
    end

    if page_title.empty?
      base_title
    else
      "#{base_title} - #{page_title}"
    end
  end
end

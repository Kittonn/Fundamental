#include <SFML\Graphics.hpp>

int main()
{
    sf::RenderWindow window(sf::VideoMode(512, 512), "TUT");

    // =========== Shape ===========
    sf::RectangleShape player(sf::Vector2f(96.0f, 128.0f));
    // player.setFillColor(sf::Color::Blue);
    player.setPosition(100.0f, 100.0f);
    // player.setOrigin(50.0f, 50.0f);

    // =========== Texture ===========
    sf::Texture playerTexture;
    playerTexture.loadFromFile("./assets/character_maleAdventurer_sheet.png");
    player.setTexture(&playerTexture);

    // =========== Texture Coordinates ==========
    sf::Vector2u textureSize = playerTexture.getSize();
    textureSize.x /= 9;
    textureSize.y /= 5;

    player.setTextureRect(sf::IntRect(textureSize.x * 0, textureSize.y * 0, textureSize.x, textureSize.y));

    while (window.isOpen())
    {

        sf::Event event;
        while (window.pollEvent(event))
        {
            switch (event.type)
            {
            // =========== Close Screen ===========
            case event.Closed:
                window.close();
                break;
            // =========== Keycap Enter ===========
            case event.TextEntered:
                if (event.text.unicode < 128)
                {
                    printf("%c\n", event.text.unicode);
                }
                break;
            // =========== Size Screen ===========
            case event.Resized:
                printf("%d %d\n", event.size.width, event.size.height);
                break;
            default:
                break;
            }
        }

        // ============ Mouse ============
        // if (sf::Mouse::isButtonPressed(sf::Mouse::Left))
        // {
        //     sf::Vector2i mousePos = sf::Mouse::getPosition(window);
        //     player.setPosition((float)mousePos.x, static_cast<float>(mousePos.y));
        // }

        // ============ Keyboard ============
        // if (sf::Keyboard::isKeyPressed(sf::Keyboard::A))
        // {
        //     player.move(-1.0f, 0.0f);
        // }
        // if (sf::Keyboard::isKeyPressed(sf::Keyboard::W))
        // {
        //     player.move(0.0f, -1.0f);
        // }
        // if (sf::Keyboard::isKeyPressed(sf::Keyboard::D))
        // {
        //     player.move(1.0f, 0.0f);
        // }
        // if (sf::Keyboard::isKeyPressed(sf::Keyboard::S))
        // {
        //     player.move(0.0f, 1.0f);
        // }

        window.clear();
        window.draw(player);
        window.display();
    }

    return 0;
}
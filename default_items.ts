import Shared, { ItemAbilityData } from "@/misc/shared";
import { LANG } from "../lang";

const _getLocaleItemDescription = (itemId: number): { name: { [key in string]: string }, desc?: { [key in string]: string } } => {
    switch (itemId) {
        case Shared.ItemList.Wooden_Sword:
            return {
                name: {
                    en: "Wooden Sword",
                    ru: "Деревянный меч",
                    cz: "Dřevěný Meč",
                    fr: "Épée en bois",
                },
            }
        case Shared.ItemList.Wooden_Bow:
            return {
                name: {
                    en: "Wooden Bow",
                    ru: "Деревянный лук",
                    cz: "Dřevěný Luk",
                    fr: "Arc en bois",
                },
            }
        case Shared.ItemList.Novice_Staff:
            return {
                name: {
                    en: "Novice Staff",
                    ru: "Посох новичка",
                    cz: "Učňova Hůl",
                    fr: "Bâton de novice",
                },
            }
        case Shared.ItemList.Iron_Ring:
            return {
                name: {
                    en: "Iron Ring",
                    ru: "Железное кольцо",
                    cz: "Železný Prsten",
                    fr: "Anneau de fer",
                },
            }
        case Shared.ItemList.Buckler:
            return {
                name: {
                    en: "Buckler",
                    ru: "Баклер",
                    cz: "Pukléř",
                    fr: "Bouclier",
                },
            }
        case Shared.ItemList.Shirt:
            return {
                name: {
                    en: "Shirt",
                    ru: "Рубаха",
                    cz: "Svetr",
                    fr: "Chemise",
                },
            }
        case Shared.ItemList.Light_Slayer:
            return {
                name: {
                    en: "Light Slayer",
                    ru: "Губитель света",
                    cz: "Kosič Světla",
                    fr: "Tueur de Lumière",
                },
            }
        case Shared.ItemList.Katana:
            return {
                name: {
                    en: "Katana",
                    ru: "Катана",
                    cz: "Katana",
                    fr: "Katana",
                },
            }
        case Shared.ItemList.Corrupted_Katana:
            return {
                name: {
                    en: "Corrupted Katana",
                    ru: "Искажённая катана",
                    cz: "Zvrácená Katana",
                    fr: "Katana corrompu",
                },
            }
        case Shared.ItemList.Iron_Sword:
            return {
                name: {
                    en: "Iron Sword",
                    ru: "Железный меч",
                    cz: "Ocelový Meč",
                    fr: "Épée de fer",
                },
            }
        case Shared.ItemList.Reckless_Longbow:
            return {
                name: {
                    en: "Reckless Longbow",
                    ru: "Безрассудный длинный лук",
                    cz: "Hazardní Dlouhý Luk",
                    fr: "Arc long téméraire",
                },
            }
        case Shared.ItemList.Rapids_Longbow:
            return {
                name: {
                    en: "Rapid Longbow",
                    ru: "Быстрый длинный лук",
                    cz: "Radpidní Dlouhý Luk",
                    fr: "Arc long rapide",
                },
            }
        case Shared.ItemList.Enduring_Shield:
            return {
                name: {
                    en: "Enduring Shield",
                    ru: "Стойкий щит",
                    cz: "Odolný Štít",
                    fr: "Bouclier endurant",
                },
            }
        case Shared.ItemList.Iron_Buckler:
            return {
                name: {
                    en: "Iron Buckler",
                    ru: "Железный баклер",
                    cz: "Železný Pukléř",
                    fr: "Bouclier de fer",
                },
            }
        case Shared.ItemList.Magical_Shield:
            return {
                name: {
                    en: "Magical Shield",
                    ru: "Магический щит",
                    cz: "Magický Štít",
                    fr: "Bouclier magique",
                },
            }
        case Shared.ItemList.Rod_Of_Nature:
            return {
                name: {
                    en: "Rod of Nature",
                    ru: "Жезл природы",
                    cz: "Prut Přírody",
                    fr: "Baguette naturelle",
                },
            }
        case Shared.ItemList.Wizard_Staff:
            return {
                name: {
                    en: "Wizard Staff",
                    ru: "Посох волшебника",
                    cz: "Hůl Kouzelníka",
                    fr: "Bâton du magicien",
                },
            }
        case Shared.ItemList.Ring_Of_Regeneration:
            return {
                name: {
                    en: "Ring of Regeneration",
                    ru: "Кольцо регенерации",
                    cz: "Prsten Regenerace",
                    fr: "Anneau de régénération",
                },
            }
        case Shared.ItemList.Ring_Of_Time:
            return {
                name: {
                    en: "Ring of Time",
                    ru: "Кольцо времени",
                    cz: "Prsten Času",
                    fr: "Anneau du Temps",
                },
            }
        case Shared.ItemList.Leather_Armor:
            return {
                name: {
                    en: "Leather Armor",
                    ru: "Кожанная броня",
                    cz: "Kožená Zbroj",
                    fr: "Armure de cuir",
                },
            }
        case Shared.ItemList.Iron_Armor:
            return {
                name: {
                    en: "Iron Armor",
                    ru: "Железная броня",
                    cz: "Železná Zbroj",
                    fr: "Armure de fer",
                },
            }
        case Shared.ItemList.Plate_Armor:
            return {
                name: {
                    en: "Plate Armor",
                    ru: "Латная броня",
                    cz: "Plátová Zbroj",
                    fr: "Armure à plaques",
                },
            }
        case Shared.ItemList.Wizard_Shoes:
            return {
                name: {
                    en: "Wizard Shoes",
                    ru: "Башмаки волшебника",
                    cz: "Boty Kouzelníka",
                    fr: "Chaussures du magicien",
                },
            }
        case Shared.ItemList.Agility_Boots:
            return {
                name: {
                    en: "Agility Boots",
                    ru: "Ботинки ловкости",
                    cz: "Boty Obratnosti",
                    fr: "Bottes d'agilité",
                },
            }
        case Shared.ItemList.Boots:
            return {
                name: {
                    en: "Boots",
                    ru: "Ботинки",
                    cz: "Boty",
                    fr: "Bottes",
                },
            }
        case Shared.ItemList.Divine_Boots:
            return {
                name: {
                    en: "Divine Boots",
                    ru: "Божественные ботинки",
                    cz: "Svaté Sandále",
                    fr: "Bottes divines",
                },
            }
        case Shared.ItemList.Traveling_Boots:
            return {
                name: {
                    en: "Swift Boots",
                    ru: "Ботинки стремительности",
                    cz: "Cestovní Obuv",
                    fr: "Bottes de vitesse",
                },
            }
        case Shared.ItemList.Shadow_Slayer:
            return {
                name: {
                    en: "Shadow Slayer",
                    ru: "Губитель теней",
                    fr: "Tueur d'Ombre",
                },
                desc: {
                    en: `UNIQUE: Your autoattack deals additional magic damage ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% of enemy max health`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки наносят дополнительный магический урон по героям, который равен ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% от макс. здоровья цели`,
                    br: `[Único]: Seus ataques causam dano mágico adicional ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% de vida máxima do inimigo.`,
                    fr: `[UNIQUE]: Ton attaque J fait des dommages magiques additionnels de ${(ItemAbilityData.SHADOW_SLAYER_PERC_DMG * 100).toFixed(1)}% des points de vie de l'enemie`,
                }
            }

        case Shared.ItemList.Divine_Sword:
            return {
                name: {
                    en: "Divine Sword",
                    ru: "Божественный меч",
                    fr: "Épée divine",
                },
                desc: {
                    en: `On Equip: Provide unobstructed vision! Provide additional ${ItemAbilityData.DIVINE_SWORD_BONUS_VISION}px vision!`,
                    ru: `УНИКАЛЬНО(Пассивно): Даёт беспрепятственный обзор! Также добавляет ${ItemAbilityData.DIVINE_SWORD_BONUS_VISION} пикселей к обзору!`,
                    br: `[Equipado]: Fornece visão desobstruída, ganha ${ItemAbilityData.DIVINE_SWORD_BONUS_VISION}px de visão a mais.`,
                    fr: `[À L'ACHAT]: Fourni une vision traversante ! Fourni ${ItemAbilityData.DIVINE_SWORD_BONUS_VISION}px de vision supplémentaire !`,
                }
            }
        case Shared.ItemList.Divine_Katana:
            return {
                name: {
                    en: "Divine Katana",
                    ru: "Божественная катана",
                    fr: "Katana divin",
                },
                desc: {
                    en: "Drops on death! (Cant be sold!)",
                    ru: `Выпадает при смерти! (Нельзя продать!)`,
                    br: "Dropa seu item quando você morre, o inimigo pode pegar essa espada.\n (Não pode ser vendido!)",
                    fr: `Le Katana divin tombe au sol en cas de mort. Tout héros avec une case d'inventaire vide peut le ramasser. (Ne peut pas être vendu)`,
                }
            }
        case Shared.ItemList.Iron_Basher:
            return {
                name: {
                    en: "Iron Basher",
                    ru: "Железный крушитель",
                    fr: `Destructeur métallique`,
                },
                desc: {
                    en: "UNIQUE: Your attacks have 20% chance to stun enemy for 0.8 sec and deals additional 60 damage",
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки имеют 20% шанс оглушить вражеского героя на 0.8 сек. и нанести дополнительно 60 урона`,
                    br: "[Único]: Seus ataques têm 20% de chance de atordoar o inimigo por 0,8 s e causa 60 de dano adicional.",
                    fr: `[UNIQUE]: Tes attaques J ont 20% de chance d'assommer l'ennemie pour 0,8 sec et font 60 points de dégâts supplémentaires`,
                }
            }

        case Shared.ItemList.Cold_Sword:
            return {
                name: {
                    en: "Cold Sword",
                    ru: "Меч холода",
                    fr: `Épée gelée`,
                },
                desc: {
                    en: `UNIQUE: Attacks lower enemy movement by ${ItemAbilityData.COLD_SWORD_SLOW} for 1 seconds`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают скорость передвижения цели на ${ItemAbilityData.COLD_SWORD_SLOW} на 1 сек.`,
                    br: `[Único]: Seus ataques reduzem o movimento do inimigo em ${ItemAbilityData.COLD_SWORD_SLOW} por 1 segundo.`,
                    fr: `[UNIQUE]: Tes attaques J réduisent la vitesse de déplacement de ton ennemie de ${ItemAbilityData.COLD_SWORD_SLOW} points de vitesse pendant 1 seconde`,
                }
            }

        case Shared.ItemList.Demon_Sabre:
            return {
                name: {
                    en: "Demon Sabre",
                    ru: "Сабля демона",
                    fr: `Sabre du démon`,
                },
                desc: {
                    en: `UNIQUE: Your attacks lower enemy armor by ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} for 4 seconds`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают вражескую броню на ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} на 4 сек.`,
                    br: `[Único]: Seus ataques reduzem ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} da armadura inimiga por 4 segundos.`,
                    fr: `[UNIQUE]: Tes attaques J diminuent l'armure de l'ennemie de ${ItemAbilityData.DEMON_SABRE_ARMOR_REDUCTION} pour 4 secondes`,
                }
            }
        case Shared.ItemList.Corrupted_Light_Slayer:
            return {
                name: {
                    en: "Corrupted Light Slayer",
                    ru: "Искажённый губитель света",
                    fr: `Tueur de Lumière Corrompu`,
                },
                desc: {
                    en: `Active: Increases your lifesteal by ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% for ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Увеличивает ваш вампиризм на ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% на ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Aumenta sua regeneração de vida em ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% por ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Augmente ton vol de vie de ${Math.round(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_LIFESTEAL * 100)}% pour ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération : ${(ItemAbilityData.CORRUPTED_LIGHT_SLAYER_COOLOWN / 1000).toFixed(1)} sec]`,
                }
            }
        /** Wooden Bow */
        case Shared.ItemList.Berserker_Bow:
            return {
                name: {
                    en: "Berserker Bow",
                    ru: "Лук берсерка",
                    fr: `Arc du Berserker`,
                },
                desc: {
                    en: `UNIQUE: Every time you hit enemy hero, increases your attack speed by ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% for ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} sec. At 5th stack it heals you for 15% of max health and reset stacks`,
                    ru: `УНИКАЛЬНО(Пассивно): Попадая атаками по врагу, вы увеличиваете свою скорость атаки на ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% на ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} сек. Складывается до 5 раз. На 5 зарядах вы исцеляетесь на 15% от макс. здоровья и обнуляете количество зарядов`,
                    br: `[Único]: Cada vez que você atinge o personagem inimigo, aumenta sua velocidade de ataque em ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% por ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} seg.\n Na 5ª stack ele cura você em 15% de vida máxima e reseta os stacks.`,
                    fr: `[UNIQUE]: Chaque attaque J réussie augmente ta vitesse d'attaque de ${ItemAbilityData.BERSERKER_BOW_BONUS_ATTACK_SPEED * 100}% pour ${(ItemAbilityData.BERSERKER_BOW_DURATION / 1000).toFixed(1)} sec. \n Lorsque tu atteins la 5e charge, tu es soigné pour 15% du maximum de tes points de vie et les charges sont remises à zéro.`,
                }
            }
        case Shared.ItemList.Magical_Bow:
            return {
                name: {
                    en: "Magical Bow",
                    ru: "Волшебный лук",
                    fr: "Arc magique",
                },
                desc: {
                    en: "UNIQUE: Successful hit with your abilites increases your movement speed by 10 for 1.5 sec <br /> <br />" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                    ru: "УНИКАЛЬНО(Пассивно): Успешное попадание способностями увеличивает вашу скорость передвижения на 10 на 1.5 сек. <br /> <br />" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                    br: "[Único]: Um golpe bem-sucedido com suas habilidades aumenta sua velocidade de movimento em 10 por 1.5 seg. <br /> <br />" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                    fr: `[UNIQUE]: Chaque compétence K ou L réussie augmente ta vitesse de déplacement de 10 points de déplacement pour 1.5 sec. <br /> <br />` + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                }
            }
        case Shared.ItemList.Poison_Bow:
            return {
                name: {
                    en: "Poison Bow",
                    ru: "Ядовитый лук",
                    fr: "Arc empoisonné",
                },
                desc: {
                    en: `UNIQUE: Your attacks apply deadly poison on enemy hero slows target for ${ItemAbilityData.POISON_BOW_SLOW} and deals ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} damage per sec for ${(ItemAbilityData.POISON_BOW_DURATION / 1000).toFixed(1)} sec. (This effect can stack up 5 times, every attack refresh duration)`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки накладывают смертельный яд на вражеских героев, замедляя их на ${ItemAbilityData.POISON_BOW_SLOW} и нанося ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} урона в секунду в течение ${(ItemAbilityData.POISON_BOW_DURATION / 1000).toFixed(1)} сек. (Этот эффект может складываться до 5 раз. Каждая последующая атака обновляет длительность зарядов)`,
                    br: `[Único]: Seus ataques aplicam veneno no personagem inimigo e retarda o alvo por ${ItemAbilityData.POISON_BOW_SLOW} e adiciona ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} de dano por seg, por ${(ItemAbilityData.POISON_BOW_DURATION / 1000).toFixed(1)} seg.\n (Este efeito pode acumular 5 vezes, cada duração de atualização de ataque.)`,
                    fr: `[UNIQUE]: Tes attaques J empoisonne ton ennemie pour ${(ItemAbilityData.POISON_BOW_DURATION / 1000).toFixed(1)} sec. Pendant cette période, il est ralenti de ${ItemAbilityData.POISON_BOW_SLOW} et reçoit ${ItemAbilityData.POISON_BOW_DAMAGE_OVER_TIME} dégâts supplémentaires. \n (Cet effet peut se cumuler jusqu'à 5 fois, le délai d'empoisennement est remis à zéro à chaque attaque)`,
                }
            }

        case Shared.ItemList.Corrupted_Longbow:
            return {
                name: {
                    en: "Corrupted Longbow",
                    ru: "Искажённый длинный лук",
                    fr: "Arc long de corruption",
                },
                desc: {
                    en: `Active: Empowers you and increases your attack speed by ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% and movement speed by ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} for ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} sec.<br />` +
                        `Side effect of empower is lowered armor for ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} and ${(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR * 100).toFixed(1)}% magic resistance - ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} cooldown`
                        + "<br /> <br /><b class='ability-d'>" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                    ru: `УНИКАЛЬНО(Активно): Увеличивает вашу скорость атаки на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% и скорость передвижения на ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} на ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} сек.<br />` +
                        `Во время этого эффекта ваша броня уменьшена на ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} и сопротивление магии на ${(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR * 100).toFixed(1)}%. (Перезарядка: ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} сек.)`
                        + "<br /> <br /><b class='ability-d'>" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                    br: `[Ativo]: Faz com que você aumente sua velocidade de ataque em ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% e velocidade de movimento por ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} por ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} seg.<br />` +
                        `[Maldição]: O efeito colateral de usar esse item é reduzir sua armadura em ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} e ${(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR * 100).toFixed(1)}% da sua resistência mágica.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} seg.]`
                        + "<br /> <br /><b class='ability-d'>" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                    fr: `[ACTIVATION]: Gain de puissance. Ta vitesse d'attaque est augmentée de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_ATTACK_SPEED * 100}% et ta vitesse de déplacement est améliorée de ${ItemAbilityData.CORRUPTED_LONGBOW_BONUS_MOVESPEED} pour ${(ItemAbilityData.CORRUPTED_LONGBOW_DURATION / 1000).toFixed(1)} sec.<br />` +  
                        `[MALÉDICTION]: Diminution de ton armure de ${ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_ARMOR} et de ta résistance magique de ${(ItemAbilityData.CORRUPTED_LONGBOW_REDUCE_MR * 100).toFixed(1)}%. \n [Délai de récupération : ${(ItemAbilityData.CORRUPTED_LONGBOW_COOLDOWN / 1000).toFixed(1)} sec.]`
                        + "<br /> <br /><b class='ability-d'>" + getLocaleItemDescription(Shared.ItemList.Poison_Bow),
                }
            }
        case Shared.ItemList.Rapids_Longbow_T2:
            return {
                name: {
                    en: "Rapid Longbow",
                    ru: "Быстрый длинный лук",
                    fr: "Arc long rapide",
                },
                desc: {
                    en: `UNIQUE - Active: Consume the item and gains permanent ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% attack speed bonus!`,
                    ru: `УНИКАЛЬНО(Активно): Вы поглощаете этот предмет, получая ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% скорости атаки навсегда!`,
                    br: `[Único]: Quando ativado, Consumirá o item ganhando permanente ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% de bônus de velocidade de ataque!`,
                    fr: `[ACTIVATION]: Consume l'objet en libérant un espace d'inventaire et en gagnant de façon permanente ${(ItemAbilityData.RAPIDS_LONGBOW_ATTACKSPEED_BUFF * 100).toFixed()}% de vitesse d'attaque !`,
                }
            }
        /** Nowice staff */
        case Shared.ItemList.Burning_Rod:
            return {
                name: {
                    en: "Burning Rod",
                    ru: "Пылающий жезл",
                    fr: `Baguette brûlante`,
                },
                desc: {
                    en: `UNIQUE: Your abilites ignites the enemy and deals additional damage of ${(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100).toFixed()}% max health per sec for ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши способности поджигают врага и он получает дополнительный урон в размере ${(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100).toFixed()}% от своего макс. здоровья в сек. в течение ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} сек.`,
                    br: `[Único]: Suas habilidades incineram os inimigo causando dano adicional de ${(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100).toFixed()}% vida máxima por seg, por ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} seg.`,
                    fr: `[UNIQUE]: Tes compétences K et L brûlent tes ennemies et font des dégâts additionnels pour ${(ItemAbilityData.BURNING_ROD_DAMAGE_OVER_TIME_PERC * 100).toFixed()}% de leurs points de vie maximum pour ${(ItemAbilityData.BURNING_ROD_DURATION / 1000).toFixed(1)} sec.`,
                }
            }
        case Shared.ItemList.Vampiric_Rod:
            return {
                name: {
                    en: "Vampiric Rod",
                    ru: "Вампирический жезл",
                    fr: `Baguette vampirique`,
                },
                desc: {
                    en: `UNIQUE: When your ability hits the enemy hero, it will steals his ${ItemAbilityData.VAMPIRIC_ROD_HP_STEAL} health - ${(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Пассивно): Попадая по врагу, ваши способности похищают у цели ${ItemAbilityData.VAMPIRIC_ROD_HP_STEAL} здоровья. (Перезарядка: ${(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Único]: Quando sua habilidade atinge o personagem inimigo, ela rouba ${ItemAbilityData.VAMPIRIC_ROD_HP_STEAL} de vida.\n [Tempo de recarga: ${(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[UNIQUE]: Quand tes compétences K et L touchent l'ennemie, cela vole ${ItemAbilityData.VAMPIRIC_ROD_HP_STEAL} points de vie. \n [Délai de récupération: ${(ItemAbilityData.VAMPIRIC_ROD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.Kirin_Staff:
            return {
                name: {
                    en: "Kirin Staff",
                    ru: "Посох Кирина",
                    fr: `Bâton de Kirin`,
                },
                desc: {
                    en: "UNIQUE: Your abilites penetrate target's magic resistance by 25% for 4 sec, this effect does not stack with other sources",
                    ru: "УНИКАЛЬНО(Пассивно): Ваши способности уменьшают сопротивление магии цели на 25% на 4 сек. Этот эффект не складывается с другими источниками",
                    br: "[Único]: Suas habilidades penetram a resistência mágica do alvo em 25% por 4 seg, este efeito não se acumula com outras fontes.",
                    fr: `[UNIQUE]: Tes compétences K et L pénétrent les résistances magiques de ta cible pour 25% pour 4 sec. Cet effet ne se cumule pas avec d'autres sources.`,
                }
            }
        case Shared.ItemList.Frozen_Staff:
            return {
                name: {
                    en: "Frozen Staff",
                    ru: "Замёрзший посох",
                    fr: `Baguette gelée`,
                },
                desc: {
                    en: `UNIQUE: Your abilites lowers enemy movement speed by ${ItemAbilityData.FROZEN_STAFF_SLOW} movespeed for ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши способности уменьшают скорость передвижения цели на ${ItemAbilityData.FROZEN_STAFF_SLOW} на ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Único]: Suas habilidades reduzem ${ItemAbilityData.FROZEN_STAFF_SLOW} de velocidade de movimento por ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[UNIQUE]: Tes compétences K et L diminuent la vitesse de déplacement de ton ennemie de ${ItemAbilityData.FROZEN_STAFF_SLOW} points de vitesse pour ${(ItemAbilityData.FROZEN_STAFF_DURATION / 1000).toFixed(1)} sec.\n [Délai de récupération: ${(ItemAbilityData.FROZEN_STAFF_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.Iron_Rod:
            return {
                name: {
                    en: "Iron Rod",
                    ru: "Железный жезл",
                    fr: `Baguette de fer`,
                },
                desc: {
                    en: `UNIQUE: When your abilites hits enemy hero, your next normal attack deals bonus ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} damage`,
                    ru: `УНИКАЛЬНО(Пассивно): Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} урона`,
                    br: `[Único]: Quando suas habilidades atingem um personagem inimigo, seu próximo ataque normal ganha um bônus de ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} de dano.`,
                    fr: `[UNIQUE]: Quand tes compétences K et L touchent un héros ennemi, ta prochaine attaque J fait ${ItemAbilityData.IRON_ROD_BONUS_DAMAGE} dégâts supplémentaires.`,
                }
            }
        case Shared.ItemList.Magic_Harpoon:
            return {
                name: {
                    en: "Magic Harpoon",
                    ru: "Волшебный гарпун",
                    fr: `Harpon magique`,
                },
                desc: {
                    en: `UNIQUE: When your abilites hits enemy hero, your next normal attack deals bonus ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} damage`,
                    ru: `УНИКАЛЬНО(Пассивно): Когда ваши способности попадают по вражескому герою, ваша следующая атака нанесёт дополнительно ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} урона`,
                    br: `[Único]: Quando suas habilidades atingem um personagem inimigo, seu próximo ataque normal ganha um bônus de ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} de dano.`,
                    fr: `[UNIQUE]: Quand tes compétences K et L touchent un héros ennemi, ta prochaine attaque J fait ${ItemAbilityData.MAGIC_HARPOON_BONUS_DAMAGE} dégâts supplémentaires.`,
                }
            }
        case Shared.ItemList.Orchid_of_Malevolence:
            return {
                name: {
                    en: "Orchid of Malevolence",
                    ru: "Орхидея злобы",
                    fr: `Orchidée de Malveillance`,
                },
                desc: {
                    en: `Active: Releases dark arrow in your direction that pierce throu enemies, silences them for ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec and at the end of silence, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% of the damage received while silenced is inflicted as bonus magical damage. - ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Выпускает тёмную стрелу в вашем направлении, которая пронзает несколько целей, накладывая на них немоту на ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} сек. По окончании эффекта цели получают ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% от полученного урона за время действия немоты в виде магического урона. (Перезарядка: ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Acumula maldade lançando na direção que seu personagem está olhando, perfurando os inimigos e os silenciando por ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} seg, e no final do silênciar, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% do dano recebido enquanto silenciado é infligido como dano mágico adicional.\n [Tempo de recarga: ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Envoie une sombre flèche dans ta direction, qui traverse tes ennemies et les réduits au silence pour ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec. À la fin de ce délai, ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_DAMAGE_PERC * 100).toFixed(1)}% des dégâts reçus par l'ennemi sont infligés sous forme de dégâts magiques supplémentaires. \n [Délai de récupération : ${(ItemAbilityData.ORCHID_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.Divine_Staff_T2:
            return {
                name: {
                    en: "Divine Staff",
                    ru: "Божественный посох",
                    fr: `Baguette divine`,
                },
                desc: {
                    en: `Active: Heals all nearby units in ${ItemAbilityData.DIVINE_STAFF_RADIUS}px radius for ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}, apply ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} bonus speed and remove all negative effects for ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} sec cd 
                        <br /> This effect has inner cooldown of 12 sec (Can not be reduced by cooldown reduction), during this time, this effect is fully ignored`,
                    ru: `УНИКАЛЬНО(Активно): Исцеляет ближайшим союзным целям в радиусе ${ItemAbilityData.DIVINE_STAFF_RADIUS} пикселей ${ItemAbilityData.DIVINE_STAFF_HEAL_T2} здоровья, снимая все негативные эффекты, а также накладывая ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} бонусной скорости передвижения на ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} сек.) 
                        <br /> Этот эффект имеет внутреннюю перезарядку длительностью 12 сек. (Не может быть уменьшено сокращением перезарядки). В течение этого времени активный эффект этого предмета не работает на ранее задетых целях`,
                    br: `[Ativo]: Cura todas as unidades próximas de ${ItemAbilityData.DIVINE_STAFF_RADIUS}px raio por ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}, aplica ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} velocidade de bônus e remova todos os efeitos negativos por ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} seg.]
                        <br /> Este efeito tem o tempo de recarga de 12 segundos.(não pode ser reduzido pela redução de tempo de recarga), durante este tempo, este efeito é totalmente ignorado`,
                    fr: `[ACTIVATION]: Soigne toutes les unités dans un rayon de ${ItemAbilityData.DIVINE_STAFF_RADIUS}px pour ${ItemAbilityData.DIVINE_STAFF_HEAL_T2}. Fournit ${ItemAbilityData.DIVINE_STAFF_BONUS_SPEED} points de vitesse de déplacement et supprime tous les effets négatifs pour ${(ItemAbilityData.DIVINE_STAFF_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération : ${(ItemAbilityData.DIVINE_STAFF_COOLDOWN / 1000).toFixed(1)} sec.]
                        <br /> Cet effet a un délai de réduction interne de 12 sec qui ne peut pas être réduit. Pendant ce délai, l'effet est complétement ignoré.`,
                }
            }

        case Shared.ItemList.Vampiric_Shield:
            return {
                name: {
                    en: "Vampiric Shield",
                    ru: "Вампирический щит",
                    fr: `Bouclier vampirique`,
                },
                desc: {
                    en: `UNIQUE: Whenever you take a damage, you will be he healead for ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL}`,
                    ru: `УНИКАЛЬНО(Пассивно): При получении урона вы исцеляете себе ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL} здоровья`,
                    br: `[Único]: Sempre que você sofrer dano, você será curado em ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL} de vida.`,
                    fr: `[UNIQUE]: Pour chaque dégât reçu, tu es soigné de ${ItemAbilityData.VAMPIRIC_SHIELD_HEAL} points de vie.`,
                }
            }

        case Shared.ItemList.Divine_Shield:
            return {
                name: {
                    en: "Divine Shield",
                    ru: "Божественный щит",
                    fr: `Bouclier divin`,
                },
                desc: {
                    en: `Active: Gives additional ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} armor and ${(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF * 100).toFixed()}% magic defense to all friendly units in close proximity ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Даёт дополнительные ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} брони и ${(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF * 100).toFixed()}% сопротивления магии всем ближайшим союзным целям на ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Dá mais ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} de armadura e ${(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF * 100).toFixed()}% defesa mágica para todas as unidades aliadas nas proximidades por ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Donne un supplément de ${ItemAbilityData.DIVINE_SHIELD_BONUS_ARMOR} points d'armure et ${(ItemAbilityData.DIVINE_SHIELD_BONUS_MAGIC_DEF * 100).toFixed()}% de défense magique à toutes les unités alliées à proximité pour ${(ItemAbilityData.DIVINE_SHIELD_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.DIVINE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }

        case Shared.ItemList.Spike_Shield:
            return {
                name: {
                    en: "Spike Shield",
                    ru: "Шипастый щит",
                    fr: `Bouclier piquant`,
                },
                desc: {
                    en: `Active: When active, returns back 100% of received damage back to attacker (after reduction) for ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): После активации возвращает 100% полученного урона (с учётом брони) обратно противнику на протяжении ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Quando ativado, retorna 100% do dano recebido de volta ao atacante (após a redução) por ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Retourne 100% des dégâts reçus à l'attaquant (après réduction) pour ${(ItemAbilityData.SPIKE_SHIELD_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.SPIKE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }

        case Shared.ItemList.GarunsDefender:
            return {
                name: {
                    en: "Garun's Defender",
                    ru: "Защитник Гаруна",
                    fr: `Bouclier de Garun`,
                },
                desc: {
                    en: `Active: Smashes all enemies around the hero in small radius, deals ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} damage and stuns all enemies for ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Наносит ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} урона всем врагам вокруг, дополнительно оглушая цели на ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Destrói todos os inimigos ao redor do personagem em um pequeno raio, ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} de dano e atordoando todos os inimigos por ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Frappe tous les ennemis autour de ton héros à proximité étroite. Fait ${ItemAbilityData.GARUNS_DEFENDER_DAMAGE} dégâts et assome tous les ennemis pour ${(ItemAbilityData.GARUNS_DEFENDER_STUN_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.GARUNS_DEFENDER_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.Plate_Shield:
            return {
                name: {
                    en: "Plate Shield",
                    ru: "Латный щит",
                    fr: `Bouclier à plaque`,
                },
                desc: {
                    en: `Active: Shockwaves travel through the air dealing ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} damage and reduce enemy's movement speed by ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} and makes all affected units visible for ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Создаёт ударную волну, которая наносит ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} урона и уменьшает скорость передвижения на ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} у всех врагов на своём пути, также делая их видимыми на ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Ondas de choque viajam pelo ar causando ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} de dano e reduzindo a velocidade de movimento do inimigo em ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} , torna todas as unidades afetadas visíveis por ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Envoi une onde de choc qui se propage en faisant ${ItemAbilityData.PLATE_SHIELD_DAMAGE_AOE} dégâts and en réduisant la vitesse de déplacement des ennemis de ${ItemAbilityData.PLATE_SHIELD_SLOW_AOE} points de vitesse. Toutes les unités affectés sont visible pour ${(ItemAbilityData.PLATE_SHIELD_SLOW_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.PLATE_SHIELD_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.Kirins_Defender:
            return {
                name: {
                    en: "Kirin's Defender",
                    ru: "Защитник Кирина",
                    fr: `Bouclier de Kirin`,
                },
                desc: {
                    en: `UNIQUE: When you receive magical damage, Kirin's Defender creates barrier around you reduce all negative effects duration by 50% and decrease additional ${(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE * 100).toFixed()}% magic damage for ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} sec. ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} cooldown`,
                    ru: `УНИКАЛЬНО(Пассивно): Когда вы получаете магический урон, вокруг вас появляется барьер, снижающий длительность всех негативных эффектов на 50% и получаемый магический урон на ${(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE * 100).toFixed()}% на ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} сек. (Перезарядка: ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} сек.)`,
                    br: `[Único]: Quando você recebe dano mágico, o Kirin cria uma barreira ao seu redor, reduzindo a duração de todos os efeitos negativos em 50% e diminuindo ainda mais ${(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE * 100).toFixed()}% do dano mágico por ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} seg.\n [Tempo de recarga: ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} seg.]`,
                    fr: `[UNIQUE]: Lorsque tu reçois des dégâts magiques, le Bouclier de Kirin créer une barrière autour de toi qui réduit la durée de tous les effets négatifs de 50% et diminue les dégâts magiques de ${(ItemAbilityData.KIRINS_DEFENDER_BONUS_MAGIC_RESISTANCE * 100).toFixed()}% pour ${(ItemAbilityData.KIRINS_DEFENDER_DURATION / 1000).toFixed()} sec. \n [Délai de récupération: ${(ItemAbilityData.KIRINS_DEFENDER_COOLDOWN / 1000).toFixed()} sec.]`,
                }
            }
        /** Rings */
        case Shared.ItemList.Demonic_Ring:
            return {
                name: {
                    en: "Demonic Ring",
                    ru: "Демоническое кольцо",
                    fr: `Anneau démonique`
                },
                desc: {
                    en: `UNIQUE: Your attacks lower enemy armor by ${ItemAbilityData.DEMON_RING_ARMOR_REDUCTION} for 4 seconds`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки уменьшают вражескую броню на ${ItemAbilityData.DEMON_RING_ARMOR_REDUCTION} на 4 сек.`,
                    br: `[Único]: Seus ataques reduzem a armadura inimiga por ${ItemAbilityData.DEMON_RING_ARMOR_REDUCTION} por 4 segundos.`,
                    fr: `[UNIQUE]: Tes attaques J diminuent l'armure de ton ennemi de ${ItemAbilityData.DEMON_RING_ARMOR_REDUCTION} points d'armure pour 4 sec.`,
                }
            }
        case Shared.ItemList.Gold_Ring:
            return {
                name: {
                    en: "Gold Ring",
                    ru: "Золотое кольцо",
                    fr: "Anneau d'or",
                },
                desc: {
                    en: "UNIQUE: Killing an enemy unit or assisting for hero kill gives additional 25 golds",
                    ru: "УНИКАЛЬНО(Пассивно): Убивая вражеских миньонов или получая содействия в убийстве вражеских героев, вы получаете дополнительно 25 золота",
                    br: "[Único]: Matar uma unidade inimiga ou personagem, faz com que você ganhe 25 ouros adicionais.",
                    fr: "[UNIQUE]: Tuer n'importe quelle unité ennemie ou aider à tuer un héros ennemi donne 25 pièces d'or supplémentaires",
                }
            }

        case Shared.ItemList.Frost_Ring:
            return {
                name: {
                    en: "Frost Ring",
                    ru: "Морозное кольцо",
                    fr: `Anneau de gel`,
                },
                desc: {
                    en: `Active: Create an frozen bolt that freeze target on impact for ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} sec and deals ${ItemAbilityData.FROST_RING_DAMAGE} damage - ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Создаёт ледяной снаряд, который замораживает цель при попадании на ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} сек. и наносит ей ${ItemAbilityData.FROST_RING_DAMAGE} магического урона. (Перезарядка: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: O anel cria um estilhaço de gelo que congela o alvo no impacto por ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} seg e dá ${ItemAbilityData.FROST_RING_DAMAGE} de dano.\n [Tempo de recarga: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Créer un éclair gelé qui glace la cible à l'impact pour ${(ItemAbilityData.FROST_RING_ROOT_DURATION / 1000).toFixed(1)} sec et fait ${ItemAbilityData.FROST_RING_DAMAGE} points de dégâts. \n [Délai de récupération: ${(ItemAbilityData.FROST_RING_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }

        case Shared.ItemList.Chronos_Ring:
            return {
                name: {
                    en: "Chronos Ring",
                    ru: "Кольцо Хроноса",
                    fr: `Anneau du Temps`,
                },
                desc: {
                    en: `Active: Refresh all abilites and items cooldown - ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Активно): Сбрасывает перезарядку всех способностей и имеющихся предметов. (Перезарядка: ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Reseta o tempo de recarga de todas as habilidades e itens.\n [Tempo de recarga: ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Remets à zéro les délais de récupération de toutes les compétences et objets. \n [Délai de récupération : ${(ItemAbilityData.CHRONOS_RING_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.Corrupted_Ring:
            return {
                name: {
                    en: "Corrupted Ring",
                    ru: "Искажённое кольцо",
                    fr: "Anneau de Corruption",
                },
                desc: {
                    en: `Active: Dash you in your direction - ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} sec cooldown`,
                    ru: `УНИКАЛЬНО(Активно): Вы совершаете рывок в направлении своего движения. (Перезарядка: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Lança seu personagem para frente na direção que ele está olhando.\n [Tempo de recarga: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[ACTIVATION]: Déplacement ultra rapide dans la direction à laquelle tu fais face.\n [Délai de récupération: ${(ItemAbilityData.CORRUPTED_RING_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }

        case Shared.ItemList.Berserker_Ring:
            return {
                name: {
                    en: "Berserker Ring",
                    ru: "Кольцо берсерка",
                    fr: "Anneau du Berserker",
                },
                desc: {
                    en: `UNIQUE: Your attacks deal ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} more damage for each 10% HP you are missing.`,
                    ru: `УНИКАЛЬНО(Пассивно): Ваши атаки наносят на ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} ед. больше физического урона за каждые недостающие 10% вашего здоровья`,
                    br: `[Único]: Seus ataques dão ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG} mais dano para cada 10% de vida que você tenha perdido.`,
                    fr: `[UNIQUE]: Tes attaques J font ${ItemAbilityData.BERSERKER_RING_DAMAGE_PER_FRAG}  de dégâts supplémentaires pour chaque 10% de tes points de vie manquants.`,
                }
            }

        /** Armors */
        case Shared.ItemList.Frost_Armor:
            return {
                name: {
                    en: "Frost Armor",
                    ru: "Морозная броня",
                    fr: "Armure de gel",
                },
                desc: {
                    en: `UNIQUE: When you take damage, attacker will be cursed and his movement speed slows down by ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION} and attack speed by ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
                    ru: `УНИКАЛЬНО(Пассивно): При получении урона, скрость передвижения нападающего будет снижкна на ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION}, а скорость атаки - на ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%`,
                    br: `[Único]: Quando você recebe dano, o inimigo que está te atacando será amaldiçoado e sua velocidade de movimento diminuirá em ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION} e velocidade de ataque por ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%.`,
                    fr: `[UNIQUE]: Quand tu reçois des dégâts, l'attaquant est maudit. Sa vitesse de déplacement est diminuée de ${ItemAbilityData.FROST_ARMOR_MOVESPEED_REDUCTION} points de vitesse et sa vitesse d'attaque est diminuée de ${(ItemAbilityData.FROST_ARMOR_ATTACK_SPEED_REDUCTION * 100).toFixed()}%.`,
                }
            }

        case Shared.ItemList.Void_Armor:
            return {
                name: {
                    en: "Void Armor",
                    ru: "Броня пустоты",
                    fr: "Armure du Vide",
                },
                desc: {
                    en: `Active: Makes you invisible for ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} sec in addition increase your movement speed by ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} and damage by ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} - ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} sec cd\n (removes on attack or spell cast)`,
                    ru: `УНИКАЛЬНО(Активно): Вы получаете невидимость на ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} сек., а также дополнительно получаете ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} скорости передвижения и ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE} атаки. (Перезарядка: ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} сек.)\n (эффект пропадает при атаке или использовании способностей)`,
                    br: `[Ativo]: Torna você invisível por ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} seg além disso, aumente sua velocidade de movimento em ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} e dano por ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE}.\n [Tempo de recarga: ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} seg.]\n (Acaba quando você usa algum ataque)`,
                    fr: `[ACTIVATION]: Tu deviens invisible pour ${(ItemAbilityData.VOID_ARMOR_DURATION / 1000).toFixed(1)} sec, ta vitesse de déplacement est augmentée de ${ItemAbilityData.VOID_ARMOR_MOVESPEED_BONUS} points de vitesse et tes dégâts sont augmentés de ${ItemAbilityData.VOID_ARMOR_BONUS_DAMAGE}. \n [Délai de récupération : ${(ItemAbilityData.VOID_ARMOR_COOLDOWN / 1000).toFixed(1)} sec. \n (Effet interrompu si tu attaques ou utilises une compétence)]`,
                }
            }

        case Shared.ItemList.Titans_Armor:
            return {
                name: {
                    en: "Titan's Armor",
                    ru: "Броня титана",
                    fr: "Armure du Titan",
                },
                desc: {
                    en: `Active: Increase your health regen by ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, remove all negative effects and makes you immune to all incoming damage for ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} sec. You can't do any action during this effect!! - ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Активно): Вы становитесь неуязвимы, избавляетесь от негативных эффектов, а также получаете прибавку к регенерации здоровья в размере ${ItemAbilityData.TITAN_ARMOR_REGENERATION} на ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} сек. Вы не можете выполнять никакие действия, пока активен данный эффект! (Перезарядка: ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Ativo]: Aumente sua regeneração de vida em ${ItemAbilityData.TITAN_ARMOR_REGENERATION}, remove todos os efeitos negativos e o torna imune a todos os danos recebidos por ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} seg.]\n (Você não pode fazer nenhuma ação durante este efeito.)`,
                    fr: `[ACTIVATION]: Pour ${(ItemAbilityData.TITAN_ARMOR_DURATION / 1000).toFixed(1)} sec, tu es pétrifié et immunisé contre tous les effets négatifs et dégâts. Ta régénération de points de vie est augmentée de ${ItemAbilityData.TITAN_ARMOR_REGENERATION}. \n [Délai de récupération : ${(ItemAbilityData.TITAN_ARMOR_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }
        case Shared.ItemList.ChestOfMalevolence:
            return {
                name: {
                    en: "Chest of Malevolence",
                    ru: "Нагрудник злобы",
                    fr: "Plastron de Malveillance",
                },
                desc: {
                    en: `UNIQUE: When you take magical damage, attacker will be silenced for ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec - ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec cd`,
                    ru: `УНИКАЛЬНО(Пассивно): При получении магического урона, нападавший получит немоту на ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} сек. (Перезарядка: ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} сек.)`,
                    br: `[Único]: Quando você recebe dano mágico, quem te atacou será silenciado por ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} seg.\n [Tempo de recarga: ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} seg.]`,
                    fr: `[UNIQUE]: Après avoir subi des dégâts magiques, l'attaquant est réduit au silence pour ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_DURATION / 1000).toFixed(1)} sec. \n [Délai de récupération: ${(ItemAbilityData.CHEST_OF_MALEVOLENCE_COOLDOWN / 1000).toFixed(1)} sec.]`,
                }
            }

        /** Consumables */
        case Shared.ItemList.Healing_Potion:
            return {
                name: {
                    en: "Healing Potion",
                    ru: "Исцеляющее зелье",
                    fr: "Potion de soin",
                },
                desc: {
                    en: `Active: Grants ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} health regeneration for ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} sec <br /> If you are attacked, the effect is lost!`,
                    ru: `Активно: Даёт ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} регенерации здоровья на ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} сек. <br /> Эффект пропадает преждевременно, если вы были атакованы во время его действия!`,
                    br: `[Ativo]: Beba a poção das fadas para receber regeneração de ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} de vida por ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} seg.\n (Se você for atacado, o efeito será perdido!)`,
                    fr: `[ACTIVATION]: Régènère ${ItemAbilityData.HEALING_POTION_HEAL_PER_SEC} points de vie pour ${(ItemAbilityData.HEALING_POTION_DURATION / 1000).toFixed(1)} sec. \n Attention ! L'effet est interrompu si tu reçois des dégâts !`,
                }
            }

        case Shared.ItemList.Scroll_Of_Detection:
            return {
                name: {
                    en: "Scroll of Detection",
                    ru: "Свиток обнаружения",
                    fr: "Rouleau de détection",
                },
                desc: {
                    en: `Active: Reveals all enemy invisible units in area! Revealed enemies are slowed by ${ItemAbilityData.SCROLL_OF_DETECTION_SLOW} ms for ${(ItemAbilityData.SCROLL_OF_DETECTION_SLOW_DURATION / 1000).toFixed(1)} sec`,
                    ru: `Активно: Раскрывает всех невидимых вражеских героев вокруг вас. Раскрытые враги замедляются на ${ItemAbilityData.SCROLL_OF_DETECTION_SLOW} на ${(ItemAbilityData.SCROLL_OF_DETECTION_SLOW_DURATION / 1000).toFixed(1)} сек.`,
                    br: `[Ativo]: Revela todas as unidades invisíveis inimigas na área! Inimigos revelados tem sua velocidade de movimento diminuída por ${ItemAbilityData.SCROLL_OF_DETECTION_SLOW} ms por ${(ItemAbilityData.SCROLL_OF_DETECTION_SLOW_DURATION / 1000).toFixed(1)} seg.`,
                    fr: `[ACTIVATION]: Révèle tous les ennemis invisibles à proximité ! Les ennemis révélés sont ralentis de ${ItemAbilityData.SCROLL_OF_DETECTION_SLOW} points de vitesse pour ${ItemAbilityData.SCROLL_OF_DETECTION_SLOW} sec.`,
                }
            }
        default: return {
            name: { en: "" },
            desc: { en: "" }
        }
    }
}

export const getLocaleItemDescription = (itemId: number): string => {
    const result = _getLocaleItemDescription(itemId);
    if (!result.desc)
        return "";

    return result.desc[LANG] ? result.desc[LANG] : result.desc['en'];
}

export const getLocaleItemName = (itemId: number): string => {
    const result = _getLocaleItemDescription(itemId);
    return result.name[LANG] ? result.name[LANG] : result.name['en'];
}
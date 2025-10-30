# 📊 UTM Parameters - G&L Manutenções

## O Que São UTMs?

UTM parameters são tags adicionadas ao final das URLs para rastrear a origem do tráfego no Google Analytics. Elas ajudam a entender quais campanhas, anúncios e canais geram mais conversões.

**Estrutura básica:**
```
https://glmanutencoes.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=instalacao&utm_content=hero_cta
```

---

## 🏷️ Padrões UTM por Canal

### 1. Google Ads (Campanhas Pagas)

#### Campanha de Instalação
```
utm_source=google
utm_medium=cpc
utm_campaign=instalacao_residencial
utm_content=texto_ad_1
utm_term={keyword}
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=instalacao_residencial&utm_content=texto_ad_1&utm_term=instalacao+ar+condicionado+londrina
```

**Use para:**
- Anúncios de busca focados em instalação
- Keywords: "instalação ar condicionado londrina", "instalar AC cambé", etc.

---

#### Campanha de Higienização
```
utm_source=google
utm_medium=cpc
utm_campaign=higienizacao_ar
utm_content=texto_ad_2
utm_term={keyword}
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=higienizacao_ar&utm_content=texto_ad_2&utm_term=higienizacao+ar+condicionado
```

**Use para:**
- Anúncios focados em limpeza/manutenção
- Keywords: "higienização ar condicionado", "limpeza AC londrina", etc.

---

#### Campanha de Remarketing (Display)
```
utm_source=google
utm_medium=display
utm_campaign=remarketing
utm_content=banner_1
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=google&utm_medium=display&utm_campaign=remarketing&utm_content=banner_1
```

**Use para:**
- Banner ads para visitantes que não converteram
- Mensagem: "90 dias de garantia"

---

### 2. Facebook/Instagram Ads

#### Campanha de Awareness (Reconhecimento)
```
utm_source=facebook
utm_medium=social
utm_campaign=awareness_instalacao
utm_content=video_ad_1
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=facebook&utm_medium=social&utm_campaign=awareness_instalacao&utm_content=video_ad_1
```

**Use para:**
- Anúncios de vídeo mostrando instalação
- Público: Interesse em ar-condicionado, proprietários, Londrina

---

#### Campanha de Conversão (WhatsApp)
```
utm_source=instagram
utm_medium=social
utm_campaign=leads_whatsapp
utm_content=stories_ad_1
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=leads_whatsapp&utm_content=stories_ad_1
```

**Use para:**
- Stories com CTA direto para WhatsApp
- Objetivo: Gerar leads rápidos

---

#### Campanha de Antes/Depois
```
utm_source=facebook
utm_medium=social
utm_campaign=higienizacao_proof
utm_content=carousel_antes_depois
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=facebook&utm_medium=social&utm_campaign=higienizacao_proof&utm_content=carousel_antes_depois
```

**Use para:**
- Carrossel com fotos de antes/depois
- Prova social visual

---

### 3. Email Marketing

#### Newsletter Mensal
```
utm_source=newsletter
utm_medium=email
utm_campaign=manutencao_marco_2025
utm_content=cta_principal
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=newsletter&utm_medium=email&utm_campaign=manutencao_marco_2025&utm_content=cta_principal
```

**Use para:**
- Email marketing para base de clientes
- Lembrete de manutenção semestral

---

### 4. WhatsApp Business

#### Status/Stories
```
utm_source=whatsapp
utm_medium=status
utm_campaign=promocao_verao
utm_content=link_status
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=whatsapp&utm_medium=status&utm_campaign=promocao_verao&utm_content=link_status
```

**Use para:**
- Link em status do WhatsApp Business
- Promoções sazonais

---

### 5. Google Meu Negócio (GMB)

#### Link do Perfil
```
utm_source=google_my_business
utm_medium=organic
utm_campaign=gmb_profile
utm_content=site_button
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=google_my_business&utm_medium=organic&utm_campaign=gmb_profile&utm_content=site_button
```

**Use para:**
- Botão "Website" no perfil do Google
- Link em postagens do GMB

---

### 6. Parcerias e Indicações

#### Parceria com Imobiliária
```
utm_source=parceria_imobiliaria_x
utm_medium=referral
utm_campaign=indicacao_2025
utm_content=email_parceiro
```

**URL exemplo:**
```
https://glmanutencoes.com.br/?utm_source=parceria_imobiliaria_x&utm_medium=referral&utm_campaign=indicacao_2025&utm_content=email_parceiro
```

**Use para:**
- Links compartilhados por parceiros
- Programa de indicação

---

## 🛠️ Como Usar na Prática

### No Google Ads
1. Abrir a campanha
2. Ir em "Configurações da campanha"
3. Expandir "Opções de URL da campanha"
4. Colar o padrão UTM no campo "Modelo de acompanhamento"

**Modelo para Google Ads:**
```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}
```

---

### No Facebook/Instagram Ads
1. Criar o anúncio normalmente
2. Na seção "Site", adicionar a URL com UTMs já configuradas
3. Exemplo: Cole a URL completa com todos os parâmetros

---

### No WhatsApp Status
1. Encurtar a URL usando bit.ly ou outro encurtador
2. Exemplo: `bit.ly/gl-verao` → redireciona para URL com UTMs
3. Facilita visualização e tracking

---

## 📈 Analisando no Google Analytics

### Onde Ver os Dados

**Google Analytics 4 (GA4):**
1. Ir em "Aquisição" → "Aquisição de tráfego"
2. Filtrar por dimensões:
   - Origem da sessão (`utm_source`)
   - Mídia da sessão (`utm_medium`)
   - Campanha da sessão (`utm_campaign`)

**Relatórios Úteis:**
- **Conversões por campanha:** Qual campanha gera mais cliques no WhatsApp?
- **ROI por canal:** Quanto gastei no Google Ads vs. quanto gerei de receita?
- **Conteúdo mais eficaz:** Qual criativo/ad gera mais engajamento?

---

## ✅ Checklist de Implementação

### Antes de Lançar Campanhas

- [ ] Google Analytics instalado e funcionando
- [ ] Eventos de conversão configurados (`click_whatsapp_hero`, etc.)
- [ ] UTMs definidas para cada canal
- [ ] URLs testadas (colar no navegador e verificar se rastreia no GA)
- [ ] Encurtadores configurados (se usar WhatsApp/redes sociais)

### Durante a Campanha

- [ ] Monitorar tráfego diário no GA
- [ ] Verificar taxa de conversão por canal
- [ ] Ajustar budget baseado em performance

### Após 2 Semanas

- [ ] Comparar custo por lead entre canais
- [ ] Identificar melhor performador (Google? Facebook? Email?)
- [ ] Pausar/otimizar campanhas com baixo ROI

---

## 🚨 Erros Comuns a Evitar

**❌ NÃO usar espaços:**
```
utm_campaign=instalacao residencial  // ERRADO
utm_campaign=instalacao_residencial  // CORRETO
```

**❌ NÃO usar caracteres especiais:**
```
utm_content=anúncio#1  // ERRADO
utm_content=anuncio_1  // CORRETO
```

**❌ NÃO misturar maiúsculas/minúsculas sem padrão:**
```
utm_source=Google  // Vai aparecer separado de
utm_source=google  // ... este no relatório
```

**✅ Use sempre minúsculas e underscores (_)**

---

## 📝 Template Rápido

**Para criar novas URLs rapidamente:**

```
https://glmanutencoes.com.br/?utm_source=[CANAL]&utm_medium=[TIPO]&utm_campaign=[CAMPANHA]&utm_content=[CRIATIVO]
```

**Substitua:**
- `[CANAL]` → google, facebook, instagram, email, whatsapp
- `[TIPO]` → cpc, social, email, display, organic
- `[CAMPANHA]` → instalacao, higienizacao, promocao_verao
- `[CRIATIVO]` → video_1, banner_2, texto_ad_1

---

## 🎯 Exemplo Completo de Campanha

### Cenário: Campanha de Verão 2025 (Multi-canal)

**Google Ads (Busca):**
```
utm_source=google&utm_medium=cpc&utm_campaign=verao_2025&utm_content=anuncio_busca&utm_term=instalacao+ar+londrina
```

**Instagram Stories:**
```
utm_source=instagram&utm_medium=social&utm_campaign=verao_2025&utm_content=stories_video
```

**Email p/ Base:**
```
utm_source=newsletter&utm_medium=email&utm_campaign=verao_2025&utm_content=cta_principal
```

**WhatsApp Status:**
```
utm_source=whatsapp&utm_medium=status&utm_campaign=verao_2025&utm_content=link_status
```

**GMB Post:**
```
utm_source=google_my_business&utm_medium=organic&utm_campaign=verao_2025&utm_content=post_gmb
```

**Resultado esperado no GA:**
Você verá todas essas fontes agrupadas em `utm_campaign=verao_2025` e poderá comparar qual canal trouxe mais conversões para essa campanha específica.

---

**Documento criado em:** 2025-01-XX  
**Última atualização:** 2025-01-XX  
**Responsável:** Equipe G&L Manutenções

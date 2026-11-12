
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize AOS Scroll Animations
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 700,
          once: true,
          offset: 60
        });
      }

      /* ----------------------------------------------------------------------
         1. SAMPLE DATA (6 Destinations, 10 Hotels, 3 Offers, 6 Testimonials)
         ---------------------------------------------------------------------- */
      const DESTINATIONS = [
        {
          id: 'bali',
          name: 'Bali',
          country: 'Indonesia',
          category: 'Beach',
          startingPrice: 185,
          properties: 142,
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'swiss-alps',
          name: 'Swiss Alps',
          country: 'Switzerland',
          category: 'Mountain',
          startingPrice: 340,
          properties: 86,
          image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'kyoto',
          name: 'Kyoto',
          country: 'Japan',
          category: 'Heritage',
          startingPrice: 260,
          properties: 118,
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'santorini',
          name: 'Santorini',
          country: 'Greece',
          category: 'Beach',
          startingPrice: 310,
          properties: 94,
          image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'paris',
          name: 'Paris',
          country: 'France',
          category: 'City',
          startingPrice: 295,
          properties: 215,
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80'
        },
        {
          id: 'udaipur',
          name: 'Udaipur',
          country: 'India',
          category: 'Heritage',
          startingPrice: 210,
          properties: 73,
          image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80'
        }
      ];

      const HOTELS = [
        {
          id: 'h1',
          name: 'Uluwatu Cliffside Infinity Resort',
          destination: 'Bali',
          location: 'Uluwatu, Bali',
          price: 245,
          rating: 4.9,
          amenities: ['Private Pool', 'Ocean View', 'Spa & Yoga', 'Breakfast Included'],
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h2',
          name: 'Matterhorn Grand Alpine Chalet',
          destination: 'Swiss Alps',
          location: 'Zermatt, Swiss Alps',
          price: 490,
          rating: 4.8,
          amenities: ['Ski-in/Ski-out', 'Heated Thermal Pool', 'Fireplace', 'Gourmet Dining'],
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h3',
          name: 'Arashiyama Bamboo Sanctuary Ryokan',
          destination: 'Kyoto',
          location: 'Arashiyama, Kyoto',
          price: 360,
          rating: 4.9,
          amenities: ['Private Onsen', 'Kaiseki Dinner', 'Zen Garden', 'Tea Ceremony'],
          image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h4',
          name: 'Oia Caldera Sunset Suites',
          destination: 'Santorini',
          location: 'Oia, Santorini',
          price: 420,
          rating: 4.8,
          amenities: ['Caldera Plunge Pool', 'Sunset Terrace', 'Airport Transfer', 'Free Wi-Fi'],
          image: 'https://images.unsplash.com/photo-1570213489059-0aac6626cade?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h5',
          name: 'Le Marais Boutique Hôtel & Spa',
          destination: 'Paris',
          location: '4th Arr., Paris',
          price: 380,
          rating: 4.7,
          amenities: ['Eiffel Views', 'Cocktail Lounge', 'Concierge', 'Pet Friendly'],
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h6',
          name: 'Lake Pichola Royal Heritage Palace',
          destination: 'Udaipur',
          location: 'Lake Pichola, Udaipur',
          price: 295,
          rating: 4.9,
          amenities: ['Lakefront Boat Pier', 'Royal Courtyard', 'Ayurvedic Spa', 'Rooftop Dining'],
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h7',
          name: 'Ubud Emerald Canopy Villas',
          destination: 'Bali',
          location: 'Ubud, Bali',
          price: 195,
          rating: 4.6,
          amenities: ['Jungle View', 'Floating Breakfast', 'Infinity Pool', 'Free Shuttle'],
          image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h8',
          name: 'St. Moritz Glacier View Lodge',
          destination: 'Swiss Alps',
          location: 'St. Moritz, Swiss Alps',
          price: 560,
          rating: 4.9,
          amenities: ['Panoramic Sauna', 'Heli-Ski Access', 'Wine Cellar', 'Butler Service'],
          image: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h9',
          name: 'Saint-Germain Velvet Residence',
          destination: 'Paris',
          location: 'Saint-Germain, Paris',
          price: 315,
          rating: 4.4,
          amenities: ['Balcony Suites', 'Artisan Bakery', 'Metro Nearby', '24/7 Gym'],
          image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 'h10',
          name: 'Aravalli Hills Heritage Haveli',
          destination: 'Udaipur',
          location: 'Fateh Sagar, Udaipur',
          price: 215,
          rating: 4.5,
          amenities: ['Poolside Cabanas', 'Cultural Folk Nights', 'Heritage Architecture', 'Free Wi-Fi'],
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
        }
      ];

      const OFFERS = [
        {
          code: 'WANDER20',
          discountPct: 20,
          title: '20% Off First Luxury Escape',
          desc: 'Enjoy 20% instant savings on any 3+ night stay across Bali, Kyoto, or Udaipur.',
          validity: 'Valid through Dec 31, 2026'
        },
        {
          code: 'SUMMER15',
          discountPct: 15,
          title: '15% Off Mediterranean & Island Villas',
          desc: 'Book sunlit cliffside suites in Santorini and coastal retreats with complimentary breakfast.',
          validity: 'Valid on all weekend & weekday stays'
        },
        {
          code: 'LUXE25',
          discountPct: 25,
          title: '25% Suite Upgrade & Alpine Privilege',
          desc: 'Save 25% on stays over $400/night in the Swiss Alps and Paris flagship properties.',
          validity: 'Limited member allocation'
        }
      ];

      const TESTIMONIALS = [
        {
          name: 'Elena Rostova',
          trip: 'Stayed at Oia Caldera Sunset Suites, Santorini',
          rating: 5,
          quote: 'The dynamic price estimator matched our final bill down to the cent, and the sunset plunge pool in Oia exceeded every expectation.',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Marcus Vance',
          trip: 'Stayed at Matterhorn Grand Alpine Chalet, Swiss Alps',
          rating: 5,
          quote: 'WanderLuxe made planning our family ski trip effortless. Having instant room and guest calculations saved us hours of comparison.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Priya Nair',
          trip: 'Stayed at Lake Pichola Royal Heritage Palace, Udaipur',
          rating: 5,
          quote: 'Arriving by private boat across Lake Pichola felt like stepping into royalty. Using the WANDER20 promo code gave us remarkable value.',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Kenji Takahashi',
          trip: 'Stayed at Uluwatu Cliffside Infinity Resort, Bali',
          rating: 5,
          quote: 'I saved five hotels to my wishlist while comparing dates, and booked Uluwatu in two clicks. The cliffside yoga pavilion is unforgettable.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Sophie Laurent',
          trip: 'Stayed at Arashiyama Bamboo Sanctuary Ryokan, Kyoto',
          rating: 5,
          quote: 'Authentic kaiseki dining and private cedar onsen baths—every property on WanderLuxe genuinely feels hand-vetted.',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Daniel & Claire Brooks',
          trip: 'Stayed at Le Marais Boutique Hôtel & Spa, Paris',
          rating: 5,
          quote: 'From real-time date validation to zero hidden fees at checkout, this is how modern luxury travel booking should always work.',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
        }
      ];

      /* ----------------------------------------------------------------------
         2. APPLICATION STATE & LOCALSTORAGE HELPERS
         ---------------------------------------------------------------------- */
      const STORAGE_KEYS = {
        WISHLIST: 'wanderluxe_wishlist_v1',
        NEWSLETTER: 'wanderluxe_newsletter_v1'
      };

      const state = {
        search: {
          destination: '',
          checkin: '',
          checkout: '',
          nights: 3,
          adults: 2,
          children: 0,
          rooms: 1
        },
        filters: {
          destCategory: 'All',
          hotelDest: 'All',
          maxPrice: 800,
          minRating: 0,
          sortBy: 'recommended'
        },
        wishlist: JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST) || '[]'),
        activeBookingHotel: null,
        appliedDiscountPct: 0,
        testimonialIndex: 0
      };

      function showToast(message) {
        const toast = document.getElementById('toastNotification');
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      }

      /* ----------------------------------------------------------------------
         3. DATE INITIALIZATION & VALIDATION LOGIC
         ---------------------------------------------------------------------- */
      const checkinInput = document.getElementById('checkinInput');
      const checkoutInput = document.getElementById('checkoutInput');
      const dateErrorMsg = document.getElementById('dateErrorMsg');
      const nightsSummaryBadge = document.getElementById('nightsSummaryBadge');

      function formatDateISO(dateObj) {
        return dateObj.toISOString().split('T')[0];
      }

      function initDefaultDates() {
        const today = new Date();
        const defaultIn = new Date(today);
        defaultIn.setDate(today.getDate() + 7);
        const defaultOut = new Date(defaultIn);
        defaultOut.setDate(defaultIn.getDate() + 3);

        const todayStr = formatDateISO(today);
        checkinInput.min = todayStr;
        checkinInput.value = formatDateISO(defaultIn);
        checkoutInput.min = formatDateISO(defaultIn);
        checkoutInput.value = formatDateISO(defaultOut);

        state.search.checkin = checkinInput.value;
        state.search.checkout = checkoutInput.value;
        validateDates(checkinInput.value, checkoutInput.value, dateErrorMsg, nightsSummaryBadge);
      }

      function validateDates(inStr, outStr, errorEl, badgeEl) {
        const todayStr = formatDateISO(new Date());
        if (!inStr || !outStr) {
          if (errorEl) errorEl.textContent = 'Please select both check-in and check-out dates.';
          return null;
        }
        if (inStr < todayStr) {
          if (errorEl) errorEl.textContent = 'Check-in date cannot be in the past.';
          return null;
        }
        if (outStr <= inStr) {
          if (errorEl) errorEl.textContent = 'Check-out date must be at least 1 night after check-in.';
          return null;
        }

        const diffMs = new Date(outStr) - new Date(inStr);
        const nights = Math.round(diffMs / (1000 * 60 * 60 * 24));
        if (errorEl) errorEl.textContent = '';
        if (badgeEl) badgeEl.textContent = `${nights} Night${nights > 1 ? 's' : ''} Selected`;
        return nights;
      }

      checkinInput.addEventListener('change', () => {
        checkoutInput.min = checkinInput.value;
        const nights = validateDates(checkinInput.value, checkoutInput.value, dateErrorMsg, nightsSummaryBadge);
        if (nights) {
          state.search.checkin = checkinInput.value;
          state.search.checkout = checkoutInput.value;
          state.search.nights = nights;
        }
      });

      checkoutInput.addEventListener('change', () => {
        const nights = validateDates(checkinInput.value, checkoutInput.value, dateErrorMsg, nightsSummaryBadge);
        if (nights) {
          state.search.checkin = checkinInput.value;
          state.search.checkout = checkoutInput.value;
          state.search.nights = nights;
        }
      });

      /* ----------------------------------------------------------------------
         4. DESTINATION AUTOCOMPLETE & GUEST/ROOM POPOVER
         ---------------------------------------------------------------------- */
      const destinationInput = document.getElementById('destinationInput');
      const autocompleteList = document.getElementById('autocompleteList');

      function renderAutocomplete(query = '') {
        const q = query.trim().toLowerCase();
        const matches = DESTINATIONS.filter(d =>
          d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q)
        );

        if (matches.length === 0) {
          autocompleteList.innerHTML = `<div class="autocomplete-item" style="color: var(--text-muted);">No matching destinations</div>`;
        } else {
          autocompleteList.innerHTML = matches.map(d => `
            <div class="autocomplete-item" data-dest="${d.name}">
              <div>
                <strong>${d.name}</strong>
                <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 6px;">${d.country}</span>
              </div>
              <span style="font-size: 0.78rem; color: var(--primary); font-weight: 600;">From $${d.startingPrice}</span>
            </div>
          `).join('');
        }
        autocompleteList.classList.add('active');
      }

      destinationInput.addEventListener('focus', () => renderAutocomplete(destinationInput.value));
      destinationInput.addEventListener('input', () => renderAutocomplete(destinationInput.value));

      autocompleteList.addEventListener('click', (e) => {
        const item = e.target.closest('.autocomplete-item');
        if (item && item.dataset.dest) {
          destinationInput.value = item.dataset.dest;
          state.search.destination = item.dataset.dest;
          autocompleteList.classList.remove('active');
        }
      });

      // Guest & Room Popover Controls
      const guestTriggerBtn = document.getElementById('guestTriggerBtn');
      const guestPopover = document.getElementById('guestPopover');
      const guestSummaryText = document.getElementById('guestSummaryText');

      function updateGuestUI() {
        document.getElementById('adultsCount').textContent = state.search.adults;
        document.getElementById('childrenCount').textContent = state.search.children;
        document.getElementById('roomsCount').textContent = state.search.rooms;
        guestSummaryText.textContent = `${state.search.adults} Adult${state.search.adults > 1 ? 's' : ''}, ${state.search.children} Child${state.search.children !== 1 ? 'ren' : ''} · ${state.search.rooms} Room${state.search.rooms > 1 ? 's' : ''}`;
      }

      guestTriggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        guestPopover.classList.toggle('active');
      });

      document.getElementById('closeGuestPopoverBtn').addEventListener('click', () => {
        guestPopover.classList.remove('active');
      });

      guestPopover.addEventListener('click', (e) => {
        e.stopPropagation();
        const btn = e.target.closest('.counter-btn');
        if (!btn) return;
        const { type, action } = btn.dataset;
        const limits = {
          adults: { min: 1, max: 16 },
          children: { min: 0, max: 10 },
          rooms: { min: 1, max: 8 }
        };
        if (action === 'inc' && state.search[type] < limits[type].max) {
          state.search[type]++;
        } else if (action === 'dec' && state.search[type] > limits[type].min) {
          state.search[type]--;
        }
        updateGuestUI();
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-input-wrap')) {
          autocompleteList.classList.remove('active');
        }
        if (!e.target.closest('#guestPopover') && !e.target.closest('#guestTriggerBtn')) {
          guestPopover.classList.remove('active');
        }
      });

      // Hero Search Submit Handler
      document.getElementById('heroSearchForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const nights = validateDates(checkinInput.value, checkoutInput.value, dateErrorMsg, nightsSummaryBadge);
        if (!nights) {
          showToast('Please fix the check-in / check-out dates.');
          return;
        }
        state.search.checkin = checkinInput.value;
        state.search.checkout = checkoutInput.value;
        state.search.nights = nights;

        const typedDest = destinationInput.value.trim();
        const matchedDest = DESTINATIONS.find(d => d.name.toLowerCase() === typedDest.toLowerCase());

        if (matchedDest) {
          state.filters.hotelDest = matchedDest.name;
          document.getElementById('filterDestination').value = matchedDest.name;
        } else if (typedDest === '') {
          state.filters.hotelDest = 'All';
          document.getElementById('filterDestination').value = 'All';
        } else {
          const partial = DESTINATIONS.find(d => d.name.toLowerCase().includes(typedDest.toLowerCase()));
          state.filters.hotelDest = partial ? partial.name : 'All';
          document.getElementById('filterDestination').value = state.filters.hotelDest;
        }

        renderHotels();
        document.getElementById('hotels').scrollIntoView({ behavior: 'smooth' });
        showToast(`Showing stays for ${state.search.nights} nights (${state.search.adults + state.search.children} guests)`);
      });

      /* ----------------------------------------------------------------------
         5. RENDER POPULAR DESTINATIONS & CATEGORY FILTERING
         ---------------------------------------------------------------------- */
      const destinationsGrid = document.getElementById('destinationsGrid');

      function renderDestinations() {
        const filtered = state.filters.destCategory === 'All'
          ? DESTINATIONS
          : DESTINATIONS.filter(d => d.category === state.filters.destCategory);

        destinationsGrid.innerHTML = filtered.map((dest, idx) => `
          <article class="dest-card" data-dest-name="${dest.name}" data-aos="fade-up" data-aos-delay="${idx * 60}">
            <img src="${dest.image}" alt="${dest.name}, ${dest.country}" loading="lazy" />
            <div class="dest-overlay">
              <div class="dest-top-tags">
                <span class="dest-category-tag">${dest.category}</span>
                <span class="dest-price-tag">From $${dest.startingPrice}/night</span>
              </div>
              <div class="dest-info">
                <h3>${dest.name}, ${dest.country}</h3>
                <div class="dest-meta">
                  <span>${dest.properties} curated properties</span>
                  <span class="dest-explore-link">Explore Hotels →</span>
                </div>
              </div>
            </div>
          </article>
        `).join('');
      }

      document.getElementById('destFilterPills').addEventListener('click', (e) => {
        const btn = e.target.closest('.pill-btn');
        if (!btn) return;
        document.querySelectorAll('#destFilterPills .pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filters.destCategory = btn.dataset.category;
        renderDestinations();
      });

      destinationsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.dest-card');
        if (!card) return;
        const destName = card.dataset.destName;
        state.filters.hotelDest = destName;
        document.getElementById('filterDestination').value = destName;
        renderHotels();
        document.getElementById('hotels').scrollIntoView({ behavior: 'smooth' });
        showToast(`Filtered hotels in ${destName}`);
      });

      /* ----------------------------------------------------------------------
         6. FEATURED HOTELS: FILTERING, SORTING, WISHLIST & BOOKING MODAL
         ---------------------------------------------------------------------- */
      const hotelsGrid = document.getElementById('hotelsGrid');
      const filterDestinationSelect = document.getElementById('filterDestination');
      const filterMaxPriceInput = document.getElementById('filterMaxPrice');
      const maxPriceLabel = document.getElementById('maxPriceLabel');
      const filterRatingSelect = document.getElementById('filterRating');
      const sortHotelsSelect = document.getElementById('sortHotels');

      // Populate destination dropdown
      DESTINATIONS.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.name;
        opt.textContent = `${d.name}, ${d.country}`;
        filterDestinationSelect.appendChild(opt);
      });

      function renderHotels() {
        let results = HOTELS.filter(h => {
          const matchDest = state.filters.hotelDest === 'All' || h.destination === state.filters.hotelDest;
          const matchPrice = h.price <= state.filters.maxPrice;
          const matchRating = h.rating >= state.filters.minRating;
          return matchDest && matchPrice && matchRating;
        });

        switch (state.filters.sortBy) {
          case 'price-asc':
            results.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            results.sort((a, b) => b.price - a.price);
            break;
          case 'rating-desc':
            results.sort((a, b) => b.rating - a.rating);
            break;
          default:
            break;
        }

        if (results.length === 0) {
          hotelsGrid.innerHTML = `
            <div class="empty-state">
              <h3 style="margin-bottom: 0.5rem;">No Hotels Match Your Current Filters</h3>
              <p style="color: var(--text-secondary); margin-bottom: 1rem;">Try increasing your max nightly budget or resetting the destination filter.</p>
              <button type="button" class="btn btn-primary" id="resetHotelFiltersBtn">Reset All Filters</button>
            </div>
          `;
          return;
        }

        hotelsGrid.innerHTML = results.map(hotel => {
          const isSaved = state.wishlist.includes(hotel.id);
          return `
            <article class="hotel-card">
              <div class="hotel-img-wrap">
                <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" />
                <button type="button" class="wishlist-heart-btn ${isSaved ? 'saved' : ''}" data-wishlist-id="${hotel.id}" aria-label="Save ${hotel.name} to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
                <span class="hotel-rating-badge">★ ${hotel.rating.toFixed(1)}</span>
              </div>
              <div class="hotel-body">
                <span class="hotel-location">${hotel.location}</span>
                <h3 class="hotel-title">${hotel.name}</h3>
                <div class="hotel-amenities">
                  ${hotel.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}
                </div>
                <div class="hotel-footer">
                  <div class="hotel-price">
                    <strong>$${hotel.price}</strong>
                    <span>/ night</span>
                  </div>
                  <button type="button" class="btn btn-primary" data-book-id="${hotel.id}">Estimate &amp; Book</button>
                </div>
              </div>
            </article>
          `;
        }).join('');
      }

      filterDestinationSelect.addEventListener('change', (e) => {
        state.filters.hotelDest = e.target.value;
        renderHotels();
      });

      filterMaxPriceInput.addEventListener('input', (e) => {
        state.filters.maxPrice = Number(e.target.value);
        maxPriceLabel.textContent = `$${state.filters.maxPrice}`;
        renderHotels();
      });

      filterRatingSelect.addEventListener('change', (e) => {
        state.filters.minRating = Number(e.target.value);
        renderHotels();
      });

      sortHotelsSelect.addEventListener('change', (e) => {
        state.filters.sortBy = e.target.value;
        renderHotels();
      });

      hotelsGrid.addEventListener('click', (e) => {
        const resetBtn = e.target.closest('#resetHotelFiltersBtn');
        if (resetBtn) {
          state.filters.hotelDest = 'All';
          state.filters.maxPrice = 800;
          state.filters.minRating = 0;
          state.filters.sortBy = 'recommended';
          filterDestinationSelect.value = 'All';
          filterMaxPriceInput.value = 800;
          maxPriceLabel.textContent = '$800';
          filterRatingSelect.value = '0';
          sortHotelsSelect.value = 'recommended';
          renderHotels();
          return;
        }

        const wishBtn = e.target.closest('[data-wishlist-id]');
        if (wishBtn) {
          toggleWishlist(wishBtn.dataset.wishlistId);
          return;
        }

        const bookBtn = e.target.closest('[data-book-id]');
        if (bookBtn) {
          openBookingModal(bookBtn.dataset.bookId);
        }
      });

      /* ----------------------------------------------------------------------
         7. WISHLIST LOCALSTORAGE PERSISTENCE & MODAL
         ---------------------------------------------------------------------- */
      const wishlistCountBadge = document.getElementById('wishlistCount');
      const wishlistModal = document.getElementById('wishlistModal');
      const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');

      function updateWishlistBadge() {
        wishlistCountBadge.textContent = state.wishlist.length;
      }

      function toggleWishlist(hotelId) {
        const idx = state.wishlist.indexOf(hotelId);
        const hotel = HOTELS.find(h => h.id === hotelId);
        if (idx === -1) {
          state.wishlist.push(hotelId);
          showToast(`Saved "${hotel.name}" to your Wishlist`);
        } else {
          state.wishlist.splice(idx, 1);
          showToast(`Removed "${hotel.name}" from Wishlist`);
        }
        localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist));
        updateWishlistBadge();
        renderHotels();
        renderWishlistModalItems();
      }

      function renderWishlistModalItems() {
        if (state.wishlist.length === 0) {
          wishlistItemsContainer.innerHTML = `<p style="text-align: center; padding: 2rem 0; color: var(--text-secondary);">Your wishlist is empty. Click the heart icon on any hotel to save it here.</p>`;
          return;
        }
        wishlistItemsContainer.innerHTML = state.wishlist.map(id => {
          const h = HOTELS.find(item => item.id === id);
          if (!h) return '';
          return `
            <div class="wishlist-item">
              <img src="${h.image}" alt="${h.name}" />
              <div style="flex: 1;">
                <strong style="display: block; font-size: 0.96rem;">${h.name}</strong>
                <span style="font-size: 0.82rem; color: var(--text-secondary);">${h.location} · $${h.price}/night</span>
              </div>
              <button type="button" class="btn btn-primary" style="padding: 0.4rem 0.75rem; font-size: 0.82rem;" data-wish-book="${h.id}">Book</button>
              <button type="button" class="close-modal-btn" style="font-size: 1.25rem;" data-wish-remove="${h.id}" aria-label="Remove">&times;</button>
            </div>
          `;
        }).join('');
      }

      document.getElementById('openWishlistBtn').addEventListener('click', () => {
        renderWishlistModalItems();
        wishlistModal.classList.add('open');
      });

      document.getElementById('closeWishlistModalBtn').addEventListener('click', () => {
        wishlistModal.classList.remove('open');
      });

      wishlistItemsContainer.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('[data-wish-remove]');
        if (removeBtn) {
          toggleWishlist(removeBtn.dataset.wishRemove);
          return;
        }
        const bookBtn = e.target.closest('[data-wish-book]');
        if (bookBtn) {
          wishlistModal.classList.remove('open');
          openBookingModal(bookBtn.dataset.wishBook);
        }
      });

      /* ----------------------------------------------------------------------
         8. DYNAMIC BOOKING PRICE ESTIMATOR MODAL
         ---------------------------------------------------------------------- */
      const bookingModal = document.getElementById('bookingModal');
      const modalCheckin = document.getElementById('modalCheckin');
      const modalCheckout = document.getElementById('modalCheckout');
      const modalRooms = document.getElementById('modalRooms');
      const modalGuests = document.getElementById('modalGuests');
      const modalPromoInput = document.getElementById('modalPromoInput');
      const modalPromoFeedback = document.getElementById('modalPromoFeedback');
      const modalDateError = document.getElementById('modalDateError');

      function openBookingModal(hotelId) {
        const hotel = HOTELS.find(h => h.id === hotelId);
        if (!hotel) return;
        state.activeBookingHotel = hotel;
        state.appliedDiscountPct = 0;

        document.getElementById('modalHotelLocation').textContent = hotel.location;
        document.getElementById('modalHotelName').textContent = `${hotel.name} ($${hotel.price}/night)`;

        modalCheckin.min = formatDateISO(new Date());
        modalCheckin.value = state.search.checkin;
        modalCheckout.min = state.search.checkin;
        modalCheckout.value = state.search.checkout;
        modalRooms.value = state.search.rooms;
        modalGuests.value = state.search.adults + state.search.children;
        modalPromoInput.value = '';
        modalPromoFeedback.textContent = '';
        modalDateError.textContent = '';

        recalculateBookingPrice();
        bookingModal.classList.add('open');
      }

      function recalculateBookingPrice() {
        if (!state.activeBookingHotel) return;
        const nights = validateDates(modalCheckin.value, modalCheckout.value, modalDateError, null);
        const validNights = nights || 1;
        const rooms = Math.max(1, Number(modalRooms.value) || 1);
        const rate = state.activeBookingHotel.price;

        const baseTotal = rate * validNights * rooms;
        const taxAmount = Math.round(baseTotal * 0.12);
        const discountAmount = Math.round((baseTotal + taxAmount) * (state.appliedDiscountPct / 100));
        const finalTotal = baseTotal + taxAmount - discountAmount;

        document.getElementById('calcBaseLabel').textContent = `$${rate} × ${validNights} night${validNights > 1 ? 's' : ''} × ${rooms} room${rooms > 1 ? 's' : ''}`;
        document.getElementById('calcBaseAmount').textContent = `$${baseTotal.toLocaleString()}`;
        document.getElementById('calcTaxAmount').textContent = `$${taxAmount.toLocaleString()}`;

        const discountRow = document.getElementById('calcDiscountRow');
        if (state.appliedDiscountPct > 0) {
          discountRow.style.display = 'flex';
          document.getElementById('calcDiscountLabel').textContent = `Promo Discount (${state.appliedDiscountPct}% Off)`;
          document.getElementById('calcDiscountAmount').textContent = `-$${discountAmount.toLocaleString()}`;
        } else {
          discountRow.style.display = 'none';
        }

        document.getElementById('calcTotalAmount').textContent = `$${finalTotal.toLocaleString()}`;
      }

      [modalCheckin, modalCheckout, modalRooms, modalGuests].forEach(el => {
        el.addEventListener('change', () => {
          if (el === modalCheckin) modalCheckout.min = modalCheckin.value;
          recalculateBookingPrice();
        });
        el.addEventListener('input', recalculateBookingPrice);
      });

      document.getElementById('applyPromoBtn').addEventListener('click', () => {
        const enteredCode = modalPromoInput.value.trim().toUpperCase();
        const foundOffer = OFFERS.find(o => o.code === enteredCode);
        if (foundOffer) {
          state.appliedDiscountPct = foundOffer.discountPct;
          modalPromoFeedback.style.color = 'var(--success)';
          modalPromoFeedback.textContent = `✓ Coupon "${foundOffer.code}" applied (${foundOffer.discountPct}% off)!`;
        } else {
          state.appliedDiscountPct = 0;
          modalPromoFeedback.style.color = 'var(--danger)';
          modalPromoFeedback.textContent = 'Invalid promo code. Try WANDER20, SUMMER15, or LUXE25.';
        }
        recalculateBookingPrice();
      });

      document.getElementById('modalBookingForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const validNights = validateDates(modalCheckin.value, modalCheckout.value, modalDateError, null);
        if (!validNights) return;

        const totalStr = document.getElementById('calcTotalAmount').textContent;
        bookingModal.classList.remove('open');
        showToast(`Reservation confirmed at ${state.activeBookingHotel.name} (${totalStr})!`);
      });

      document.getElementById('closeBookingModalBtn').addEventListener('click', () => {
        bookingModal.classList.remove('open');
      });

      [bookingModal, wishlistModal].forEach(overlay => {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) overlay.classList.remove('open');
        });
      });

      /* ----------------------------------------------------------------------
         9. SPECIAL OFFERS & COUPON CLIPBOARD COPYING
         ---------------------------------------------------------------------- */
      const offersGrid = document.getElementById('offersGrid');
      offersGrid.innerHTML = OFFERS.map((offer, idx) => `
        <article class="offer-card" data-aos="fade-up" data-aos-delay="${idx * 100}">
          <div>
            <span class="offer-badge">${offer.validity}</span>
            <h3>${offer.title}</h3>
            <p>${offer.desc}</p>
          </div>
          <div class="coupon-box">
            <span class="coupon-code">${offer.code}</span>
            <button type="button" class="copy-code-btn" data-copy-code="${offer.code}">Copy Code</button>
          </div>
        </article>
      `).join('');

      offersGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-copy-code]');
        if (!btn) return;
        const code = btn.dataset.copyCode;

        // Safe clipboard copy compatible with iframe sandboxes
        const tempInput = document.createElement('input');
        tempInput.value = code;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        showToast(`Promo code "${code}" copied to clipboard!`);
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2000);
      });

      /* ----------------------------------------------------------------------
         10. CUSTOMER TESTIMONIALS SLIDER
         ---------------------------------------------------------------------- */
      const testimonialTrack = document.getElementById('testimonialTrack');
      const testimonialDots = document.getElementById('testimonialDots');

      testimonialTrack.innerHTML = TESTIMONIALS.map(t => `
        <div class="testimonial-slide">
          <div class="testimonial-card">
            <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
            <p class="testimonial-quote">“${t.quote}”</p>
            <div class="testimonial-author">
              <img src="${t.avatar}" alt="${t.name}" loading="lazy" />
              <div>
                <strong style="display: block;">${t.name}</strong>
                <span style="font-size: 0.84rem; color: var(--text-secondary);">${t.trip}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');

      testimonialDots.innerHTML = TESTIMONIALS.map((_, idx) => `
        <button type="button" class="slider-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}" aria-label="Go to slide ${idx + 1}"></button>
      `).join('');

      function goToTestimonial(index) {
        const total = TESTIMONIALS.length;
        state.testimonialIndex = (index + total) % total;
        testimonialTrack.style.transform = `translateX(-${state.testimonialIndex * 100}%)`;
        document.querySelectorAll('.slider-dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === state.testimonialIndex);
        });
      }

      document.getElementById('prevTestimonialBtn').addEventListener('click', () => {
        goToTestimonial(state.testimonialIndex - 1);
      });

      document.getElementById('nextTestimonialBtn').addEventListener('click', () => {
        goToTestimonial(state.testimonialIndex + 1);
      });

      testimonialDots.addEventListener('click', (e) => {
        const dot = e.target.closest('[data-slide]');
        if (dot) goToTestimonial(Number(dot.dataset.slide));
      });

      let sliderAutoplay = setInterval(() => goToTestimonial(state.testimonialIndex + 1), 5000);
      const sliderWrapper = document.getElementById('testimonialSlider');
      sliderWrapper.addEventListener('mouseenter', () => clearInterval(sliderAutoplay));
      sliderWrapper.addEventListener('mouseleave', () => {
        sliderAutoplay = setInterval(() => goToTestimonial(state.testimonialIndex + 1), 5000);
      });

      /* ----------------------------------------------------------------------
         11. NEWSLETTER FORM VALIDATION & LOCALSTORAGE PERSISTENCE
         ---------------------------------------------------------------------- */
      const newsletterForm = document.getElementById('newsletterForm');
      const newsletterEmail = document.getElementById('newsletterEmail');
      const newsletterStatus = document.getElementById('newsletterStatus');

      const savedSubscriber = localStorage.getItem(STORAGE_KEYS.NEWSLETTER);
      if (savedSubscriber) {
        newsletterStatus.style.color = '#fde68a';
        newsletterStatus.textContent = `✓ You are subscribed as ${savedSubscriber}`;
      }

      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          newsletterStatus.style.color = '#fca5a5';
          newsletterStatus.textContent = 'Please enter a valid email address (e.g., name@domain.com).';
          return;
        }

        localStorage.setItem(STORAGE_KEYS.NEWSLETTER, email);
        newsletterStatus.style.color = '#a7f3d0';
        newsletterStatus.textContent = `✓ Welcome aboard! Exclusive deals sent to ${email}.`;
        newsletterEmail.value = '';
        showToast('Subscribed to WanderLuxe Insider Deals!');
      });

      /* ----------------------------------------------------------------------
         12. NAVBAR SCROLL SHADOW, MOBILE HAMBURGER DRAWER & FOOTER LINKS
         ---------------------------------------------------------------------- */
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      });

      // Mobile Hamburger Drawer with Body Scroll Lock
      const mobileDrawer = document.getElementById('mobileDrawer');
      const openMobileNavBtn = document.getElementById('openMobileNavBtn');

      function openMobileMenu() {
        mobileDrawer.classList.add('open');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        openMobileNavBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      }

      function closeMobileMenu() {
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        openMobileNavBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }

      openMobileNavBtn.addEventListener('click', openMobileMenu);
      document.getElementById('closeMobileNavBtn').addEventListener('click', closeMobileMenu);
      document.getElementById('closeMobileNavBackdrop').addEventListener('click', closeMobileMenu);
      document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
          closeMobileMenu();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 960 && mobileDrawer.classList.contains('open')) {
          closeMobileMenu();
        }
      });

      // Footer quick destination filter links
      document.querySelectorAll('.footer-dest-link').forEach(link => {
        link.addEventListener('click', () => {
          const dest = link.dataset.dest;
          state.filters.hotelDest = dest;
          filterDestinationSelect.value = dest;
          renderHotels();
        });
      });

      /* ----------------------------------------------------------------------
         INITIALIZE APPLICATION
         ---------------------------------------------------------------------- */
      initDefaultDates();
      updateGuestUI();
      updateWishlistBadge();
      renderDestinations();
      renderHotels();
    });
